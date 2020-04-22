/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {
 
  const createTweetElement = function(tweetObj) {
    const $tweet = $(` <article class="article-tweet">
            <header>
              <img src="${tweetObj.user.avatars}">
              <span class="header-tweet-name">${tweetObj.user.name}</span>
              <a href="#"> <p class="header-tweet-handle">${tweetObj.user.handle}</p> </a>
            </header>
            <span class="tweet-content">${tweetObj.content.text} </span>
            <span class="span-blackline"></span>
            <footer class="footer-tweets">  
              <span class="footer-tweet-date">${tweetObj.created_at}</span>
              <span class="footer-icons">⚑ ↱↲ ♥︎</span>
            </footer>
            </article>
          `);
    return $tweet;
  };

  const renderTweets = function(tweetsArray) {
    for (const tweetObj of tweetsArray) {
      let tweet = createTweetElement(tweetObj);
      $("#tweets-container").append(tweet);
    }
  };

  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ];

  renderTweets(data);
});

