#!/bin/bash

NAME=checkdesk-meme
IMAGE=dreg.meedan.net/checkdesk/meme
VERSION=local

# Stop any running container
docker stop $NAME
docker rm $NAME

dir=$(pwd)
cd $(dirname "${BASH_SOURCE[0]}")

# Run
docker run -d -p 80:4567 --name ${NAME} ${IMAGE}:${VERSION}

echo '-----------------------------------------------------------'
echo "${IMAGE} is now running at http://$(hostname)/"
echo '-----------------------------------------------------------'

