#!/bin/bash

NAME=check-meme
IMAGE=dreg.meedan.net/check/meme
VERSION=local

dir=$(pwd)
cd $(dirname "${BASH_SOURCE[0]}")
cd ..

# Build
docker build -t ${IMAGE}:${VERSION} .

