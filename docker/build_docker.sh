#!/bin/bash

NAME=checkdesk-meme
IMAGE=dreg.meedan.net/checkdesk/meme
VERSION=local

dir=$(pwd)
cd $(dirname "${BASH_SOURCE[0]}")
cd ..

# Build
docker build -t ${IMAGE}:${VERSION} .

