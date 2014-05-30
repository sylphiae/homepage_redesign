#!/bin/bash

export PATH=$PATH:./node_modules/.bin:/usr/local/google_appengine
cd /teams
grunt build
dev_appserver.py --host 0.0.0.0 --port 8080 --admin_host 0.0.0.0 --admin_port 8000 --skip_sdk_update_check true build/ &
grunt watch &

cd /pledgeservice
grunt build
grunt preprocess:local
grunt file-creator:local
dev_appserver.py --host 0.0.0.0 --port 8081 --admin_host 0.0.0.0 --admin_port 8001 --skip_sdk_update_check true build/ &
grunt watch &

cd /authservice
dev_appserver.py --host 0.0.0.0 --port 8082 --admin_host 0.0.0.0 --admin_port 8002 --skip_sdk_update_check true . &

# --force_polling is necessary because without it --watch doesn't work over vagrant sync'd filesystems
# http://stackoverflow.com/questions/19822319/jekyll-regeneration-doesnt-work-inside-vagrant
cd /vagrant
jekyll serve --watch --force_polling
