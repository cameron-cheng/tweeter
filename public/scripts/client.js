/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
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
//Escape 
const escape = function (str) {
  let div = document.createElement('div');
  // < => &lt; > => &gt;
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

//Create the tweet body 
const createTweetElement = function(tweetObj) {
  const $tweet = $(` 
          <article class="article-tweet">
          <header>
            <img src="${escape(tweetObj.user.avatars)}">
            <span class="header-tweet-name">${escape(tweetObj.user.name)}</span>
            <a href="#"> <span class="header-tweet-handle">${escape(tweetObj.user.handle)}</span> </a>
          </header>
          <span class="tweet-content">${escape(tweetObj.content.text)} </span>
          <span class="span-blackline"></span>
          <footer class="footer-tweets">  
            <span class="footer-tweet-date">${escape(tweetObj.created_at)}</span>
            <span class="footer-icons">⚑ ↱↲ ♥︎</span>
          </footer>
          </article>
        `);

        // const $article = $<'article'>.addClass("article-tweet");
        // const $header = $('<header>');
        // const $img = $('<img>').attr('src', myUrlHere);
        // const $span = $('<span>').addClass('header-tweet-name').text(tweetObj.user.name);
        // $header.append($img).append($span);

  return $tweet;
};

//Render Tweet Data
const renderTweets = function(tweetsArray) {
  $("#tweets-container").empty();
  for (const tweetObj of tweetsArray) {
    let tweet = createTweetElement(tweetObj);
    $("#tweets-container").append(tweet);
  }
};

// renderTweets(data);

//Form Validation
 function checkTweet(tweet)
 {
   if(!tweet || tweet.length === 0) {
     alert("Create a Tweet!");
     return false;
   }
   if(tweet.length > 140) {
     alert("Tweet exceeds character count!");
     return false;
   }
   return true;
 }

//Load Tweets
function loadTweets() {
  $.getJSON('/tweets/')
  .then(tweets => {
    console.log('tweets :>> ', tweets);
    renderTweets(tweets)
  }
)}

const sendTweet = function(data){
  console.log('data :>> ', data);
  $.post('/tweets', data)
  .then(res =>
    {
     loadTweets()
    }
  );
}

$(document).ready(function() {
//Form Submission using Ajax
$('#post-tweet-form').on('submit', function(e) {
  e.preventDefault();
  const tweet =  $('#tweet-text').val();
  if (checkTweet(tweet)) {
    const data = $(this).serialize();
    sendTweet(data);
  }
  $("#tweet-text").focus()
    return false;
})
  loadTweets()
});  