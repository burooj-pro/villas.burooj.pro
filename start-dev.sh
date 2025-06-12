#!/bin/bash

# Clear NODE_OPTIONS
unset NODE_OPTIONS
export NODE_OPTIONS=""

# Use Node.js 20.19.1
source ~/.nvm/nvm.sh
nvm use 20.19.1

# Start the development server on port 3001
npm run dev -- --port 3001 