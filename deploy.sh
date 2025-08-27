#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run docs:build

# navigate into the build output directory
cd ./docs/.vitepress/dist/

# init a new git repo in the dist folder
git init
git add -A
git commit -m 'deploy'

# push to the gh-pages branch
git push -f git@github.com:docsmd/docsmd.github.io.git master:gh-pages

cd -
