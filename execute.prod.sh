#!/bin/bash

cp .env.example .env.development.local
cp .env.example .env.test.local
sudo docker-compose -f docker-compose.prod.yaml up -d --build
