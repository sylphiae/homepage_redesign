#!/bin/bash

sudo apt-get update
sudo apt-get install ruby1.9.3 build-essential unzip python-software-properties git -y
sudo add-apt-repository ppa:chris-lea/node.js -y
sudo apt-get update
sudo apt-get install nodejs -y
sudo gem install jekyll sass
sudo npm install -g grunt

# Install the Python GAE SDK
if [ ! -d /usr/local/google_appengine ]
then
  cd /usr/local/
  sudo wget http://googleappengine.googlecode.com/files/google_appengine_1.8.9.zip -nv
  sudo unzip -q google_appengine_1.8.9.zip
  sudo rm google_appengine_1.8.9.zip
  echo "PATH=\$PATH:./node_modules/.bin:/usr/local/google_appengine" >> ~/.bashrc
fi

if [ ! -f /teams/config_NOCOMMIT.py ]
then
  cd /teams
  cp config_NOCOMMIT_README config_NOCOMMIT.py
fi
cd /pledgeservice && npm install
if [ ! -f /authservice/config_NOCOMMIT.py ]
then
  cd /authservice
  cp config_NOCOMMIT_README config_NOCOMMIT.py
fi
