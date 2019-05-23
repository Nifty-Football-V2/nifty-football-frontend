#!/usr/bin/env bash

npm run build;

echo "Deploying ***BETA*** Nifty Football"

firebase use futbol-cards;

firebase target:apply hosting beta-niftyfootball-cards beta-niftyfootball-cards;

firebase deploy --only hosting:beta-niftyfootball-cards;
