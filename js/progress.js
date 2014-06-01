function addCommas(nStr) {
  nStr += '';
  x = nStr.split('.');
  x1 = x[0];
  x2 = x.length > 1 ? '.' + x[1] : '';
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, '$1' + ',' + '$2');
  }
  return x1 + x2;
}

function setText(el, val) {
  el = document.getElementById(el);
  if (el.textContent !== undefined)
    el.textContent = val;
  else
    el.innerText = val;
}

// javascript is so awesome. this is how you write June 1st. Cause June is the
// 5th month, indexed by zero. thanks javascript!
var date_its_over = Date.UTC(2014,06,05,10,00,00,00);
var days_left = Math.floor((date_its_over - Date.now())/(1000*24*60*60));
var days_left_message = ' ' + days_left + ' days left';

function totalRaisedCB(totalRaisedCents) {
  var totalRaised = (totalRaisedCents / 100) - 1000000;
  var complete_total = (totalRaisedCents / 100);
  var percent = Math.floor(totalRaised / 10000);
  setText("super-cool-progress-bar-percent", '' + percent + '% Funded');
  setText("super-cool-progress-bar-funded", '$' + addCommas(totalRaised));
  document.getElementById("super-cool-progress-bar-bar").style.width='' + Math.min(100, percent) + '%';
  var complete_total_message = 'Total Raised: $' + addCommas(complete_total);
  setText("super-cool-progress-bar-togo", days_left_message);
  setText("complete-total-raised", complete_total_message);
}

jQuery.getJSON('//pledge.mayone.us/r/total',
  function(data) {
    totalRaisedCB(data.totalCents);
  });

function ready(fn) {
  if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', fn);
  } else {
    document.attachEvent('onreadystatechange', function() {
      if (document.readyState === 'interactive')
        fn();
    });
  }
}

var twitter_link_url = (
  "https://twitter.com/intent/tweet?text=Only+" +
    days_left_message.replace(" ", "+") +
    "+to+support+MayOne.us%3A+Mayday+for+the+Republic+https%3A%2F%2Fmayone.us%2F");
var gplus_link_url = (
  "https://plus.google.com/share?url=https://mayone.us&content=Only+" +
    days_left_message.replace(" ", "+") +
    "+to+support+MayOne.us%3A+Mayday+for+the+Republic+https%3A%2F%2Fmayone.us%2F");

ready(function() {
  document.getElementById('twitter_link').href = twitter_link_url;
  document.getElementById('gplus_link').href = gplus_link_url;
});
