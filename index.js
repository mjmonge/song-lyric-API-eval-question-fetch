'use strict';

function getLyrics(artist, title) {
  const baseURL = "https://api.lyrics.ovh/v1/";
  const url = baseURL + artist + "/" + title;
  const encodedURL = encodeURI(url);
  console.log(encodedURL);
  fetch(encodedURL).then(response => {
    if(response.ok) {
      console.log("got here");
      return response.json();
    } else {
      console.error(response.status);
    }
  }).then(responseJson => {
    displayResults(responseJson);
  })
}

function displayResults(responseJson) {
  console.log($("#results"));
  $('#results').html(responseJson.lyrics);
  $('#results').removeClass("hidden");
}

function watchForm() {
  $('.js-search-form').on('submit', function(e) {
    e.preventDefault();
    getLyrics($('.js-query-artist').val(), $('.js-query-title').val());
  })
}

$(watchForm);

