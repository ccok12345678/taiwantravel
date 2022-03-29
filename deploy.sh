#!/usr/bin/env sh

set -e

pnpm build

cd dist

git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:ccok12345678/taiwantravel.git master:gh-pages

cd -
