#!/usr/bin/env node

var Feed = require('rss-to-json')

var uri = process.argv[2] || 'https://morioh.com/feed'

Feed.load(uri, function (err, rss) {
  console.log(JSON.stringify(rss, null, 3))
})
