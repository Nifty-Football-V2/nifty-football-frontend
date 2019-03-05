#!/usr/bin/env bash

npm run build;

echo "Deploying Nifty Football"
firebase use futbol-cards;
firebase deploy;
