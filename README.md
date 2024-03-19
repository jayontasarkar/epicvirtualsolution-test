# Epic Virtual Solution Technical Test

A simple shopping cart with product listing & deep nested dynamic navigation menu.

## Setup Before Running

First clone the repo from github or download from github & extract the zip file.

Follow the steps:

```
# For cloning repo from github
git clone

# Go to project folder root
cd epicvirtualsolution-test

# Install dependencies
npm install
```

Before running create a file .env in the root of the project. Copy all the environment variables from .env.example into .env and fill them up.
For Example:

```
# Project Name
REACT_APP_PROJECT_NAME="Epic Virtual Solution"

# Assuming this one as base endpoint, to access frontend api we'll use /frontend.php
# Maybe later we need some additional endpoints
REACT_APP_BASE_API_URL="https://epicvirtualsolution.com/linkskill/api"
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
