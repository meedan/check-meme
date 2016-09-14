# check-meme

FROM meedan/ruby
MAINTAINER sysops@meedan.com

#
# SYSTEM CONFIG
#
ENV DEPLOYUSER check
ENV DEPLOYDIR /var/www/check-meme
ENV RAILS_ENV production
ENV GITREPO https://github.com/meedan/check-meme

#
# APP CONFIG
#

# nginx for check-meme
COPY docker/nginx.conf /etc/nginx/sites-available/check-meme
RUN ln -s /etc/nginx/sites-available/check-meme /etc/nginx/sites-enabled/check-meme
RUN rm /etc/nginx/sites-enabled/default && rm /etc/nginx/conf.d/passenger.conf

#
# USER CONFIG
#

RUN useradd ${DEPLOYUSER} -s /bin/bash -m
RUN chown -R ${DEPLOYUSER}:${DEPLOYUSER} /home/${DEPLOYUSER}

#
# code deployment
#

RUN mkdir -p $DEPLOYDIR
RUN chown www-data:www-data /var/www
RUN chmod 775 /var/www
RUN chmod g+s /var/www

WORKDIR ${DEPLOYDIR}
COPY ./Gemfile ./latest/Gemfile
COPY ./Gemfile.lock ./latest/Gemfile.lock

RUN chown -R ${DEPLOYUSER}:www-data ${DEPLOYDIR}
USER ${DEPLOYUSER}

WORKDIR ${DEPLOYDIR}/latest
RUN echo "gem: --no-rdoc --no-ri" > ~/.gemrc && bundle install --deployment --without test development

# config
USER root
WORKDIR ${DEPLOYDIR}
COPY ./ ./latest
RUN chown -R ${DEPLOYUSER}:www-data ${DEPLOYDIR}
RUN mv ./latest ./check-meme-$(date -I) && ln -s ./check-meme-$(date -I) ./current

#
# RUNTIME ELEMENTS
# expose, cmd

USER root
WORKDIR ${DEPLOYDIR}/current
RUN bundle exec middleman build
CMD ["nginx"]