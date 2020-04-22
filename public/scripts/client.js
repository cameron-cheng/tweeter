/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {
  const createTweetElement = function(tweetObj) {
  const $tweet = $(`<article class="article-tweet">
            <header class="header-tweetbox">
              <img src="${tweetObj.user.avatars}">
              <span class="header-tweet-name">${tweetObj.user.name}</span>
              <a href="#"><p class="header-tweet-handle"${tweetObj.user.handle}c</p></a>
            </header>
              <span class="tweet-content">${tweetObj.content.text} </span>
              <span class="span-blackline"></span>
            <footer class="footer-tweets">  
              <span class="footer-tweet-date">${tweetObj.created_at}</span>
              <span class="footer-icons">⚑ ↱↲ ♥︎</span>
            </footer>
          </article>`)
        $(".article-tweet").append($tweet);
    //return $tweet
  }
  createTweetElement({
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
        "handle": "@SirIsaac"
      },
    "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
    "created_at": 1461116232227
  })
})  