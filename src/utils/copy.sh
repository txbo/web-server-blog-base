#!/bin/sh

cd /Users/tianxiaobo/code/github/web-server-base/src/logs

cp access.log $(date +%Y-%m-%d).access.log

echo "" > access.log