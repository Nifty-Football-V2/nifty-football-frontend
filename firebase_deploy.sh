#!/usr/bin/env bash

npm run build;

echo "Deploying ***PROD*** Nifty Football"

firebase use futbol-cards;

firebase target:apply hosting futbol-cards futbol-cards;

firebase deploy --only hosting:futbol-cards;
