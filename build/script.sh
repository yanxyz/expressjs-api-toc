#!/bin/sh

fetch() {
  ver=$1
  curl -o ${ver}.html http://expressjs.com/en/$ver/api.html
  mkdir -p ../docs/$ver
}

case "$1" in
  4x|3x)
    fetch $1
    ;;
  *)
    echo 'please specify a version: 4x or 3x'
    ;;
esac
