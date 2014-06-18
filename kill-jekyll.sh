#! /bin/bash
kill -9 $(ps aux | grep jekyll | head -1 | tr -s ' ' | cut -d" " -f2)

