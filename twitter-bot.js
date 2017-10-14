const fs = require('fs');
const Twitter = require("twitter");

const config = require("./twitter-config.js");
var events = require('./data/events.json');

console.log("Twitter-bot is running");

var client = new Twitter(config);

function processTweet (error, tweet, response) {
  if (error) {
    throw error;
  }
  console.log(tweet);
  console.log(response);
}


var tweet = {
  status: "This is a test"
}

//client.post('statuses/update', tweet, processTweet);

console.log("Twitter-bot done");
console.log(events);
