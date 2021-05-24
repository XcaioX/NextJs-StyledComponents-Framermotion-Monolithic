#!/bin/bash

cp .env.example .env.development.local
cp .env.example .env.test.local
sudo docker-compose -f docker-compose.dev.yaml up -d --build
