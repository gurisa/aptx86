var queryMovie = document.getElementById('movie-search');
var queryTrailer = document.getElementById('trailer-search');

var urlMovie = 'https://www.omdbapi.com/?apikey=ff1d8f00&s=';
var urlTrailer = 'https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=10&key=AIzaSyCjDBFGh_5nL3eKR3np69Q1mdDjGmIBrqE&q=';

function fetchMovie(urlMovie, method = 'get') {
  return fetch(urlMovie, {method: method}).then(function(data) {
    return data.json();
  }).then(function(data) {
    if (data && data.Response == "True") {
      let movie = data.Search;
      let html = '';
      movie.forEach(function(val) {
        html += '<div class="card">';
        html += '<div class="card-body">';
        html += '<div class="row">';      
        html += '<div class="col-lg-4 col-md-5 col-sm-6 col-xs-12">';
        html += '<a class="link" href="https://www.imdb.com/title/' + val.imdbID + '" target="_blank">';
        html += '<img src="' + val.Poster + '" style="width: 100%; min-width: 250px; min-height: 250px; max-width: 100%; max-height: 100%;" />';
        html += '</a>';
        html += '</div>';
        html += '<div class="col-lg-8 col-md-7 col-sm-6 col-xs-12">';
        html += '<a class="link" href="https://www.imdb.com/title/' + val.imdbID + '" target="_blank" style="color: black;" class="font-14 text-bold">' + val.Title + '</a>';
        html += '<p>' + val.Type + '<br/>';
        html += '' + val.Year + '</p>';
        html += '<div><button class="btn btn-default float-right" onclick="changeTrailer(\'' + val.Title + '\'); changeMenu(3);">Lihat Trailer</button></div>';
        html += '</div>';
        html += '</div>';
        html += '</div>';
        html += '</div>';
      });
      document.getElementById('movie-content').innerHTML = html;
    }
    else {
      document.getElementById('movie-content').innerHTML = data.Error;
    }
  }).catch(function(data) {
    document.getElementById('movie-content').innerHTML = 'Oops failed to fetch movie data';
  }); 
}

function fetchTrailer(urlTrailer, method = 'get') {
  return fetch(urlTrailer, {method: method}).then(function(data) {
    return data.json();
  }).then(function(data) {
    if (data && data.items && data.items.length > 0) {
      return data.items;
    }
    return [];
  }).then(function(data) {
    if (data.length > 0) {
      let html = '';
      data.forEach(function(val) {
        html += '<div class="card">';
        html += '<div class="card-body">';
        html += '<div class="row">';      
        html += '<div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">';
        html += '<a class="link" href="https://www.youtube.com/watch?v=' + val.id.videoId + '" target="_blank">';
        html += '<img src="' + val.snippet.thumbnails.medium.url + '" style="width: 100%; min-width: 250px; min-height: 250px; max-width: 100%; max-height: 100%;" />';
        html += '</a>';
        html += '</div>';
        html += '<div class="col-lg-8 col-md-6 col-sm-6 col-xs-12">';
        html += '<a class="link" href="https://www.youtube.com/watch?v=' + val.id.videoId + '" target="_blank" style="color: black;" class="font-14 text-bold">' + val.snippet.title + '</a>';
        html += '<p>' + val.snippet.channelTitle + '<br/>';
        html += '' + val.snippet.description + '</p>';
        html += '<div><button class="btn btn-default float-right" onclick="changeMenu(2);">Cari Bioskop</button></div>';
        html += '</div>';
        html += '</div>';
        html += '</div>';
        html += '</div>';
      });
      document.getElementById('trailer-content').innerHTML = html;
    }
    else {
      document.getElementById('trailer-content').innerHTML = 'Oops failed to fetch trailer data';
    }
  }).catch(function(data) {
    document.getElementById('trailer-content').innerHTML = 'Oops failed to fetch trailer data';
  }); 
}

function changeTrailer(query) {
  queryTrailer.value = query;
  fetchTrailer(urlTrailer + queryTrailer.value);
}

document.getElementById('movie-search').onchange = function() {
  queryTrailer.value = queryMovie.value;
  fetchMovie(urlMovie + queryMovie.value);
  fetchTrailer(urlTrailer + queryTrailer.value);
};

document.getElementById('trailer-search').onchange = function() {
  fetchMovie(urlMovie + queryMovie.value);
  fetchTrailer(urlTrailer + queryTrailer.value);
};

fetchMovie(urlMovie + 'Detective Conan');
fetchTrailer(urlTrailer + 'Detective Conan');

// async function asyncFetchMovie(url, method) {
//   try {
//     const response = await fetch(url, {method: method});
//     return await response.json();
//   }
//   catch (data) {
//     console.log('fetch failed', data);
//   }
// }

