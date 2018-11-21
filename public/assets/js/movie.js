var query = document.getElementById('movie-search');
query = (query.value == '') ? 'batman' : query.value;

var url = 'https://www.omdbapi.com/?apikey=ff1d8f00&s=';

function fetchMovie(url, method = 'get') {
  return fetch(url, {method: method}).then(function(data) {
    return data.json();
  }).then(function(data) {
    if (data && data.Response == "True") {
      let movie = data.Search;
      let html = '';
      movie.forEach(function(val) {
        html += '<div class="card">';
        html += '<div class="card-body">';
        html += '<div class="row">';      
        html += '<div class="col-4">';
        html += '<a class="link" href="https://www.imdb.com/title/' + val.imdbID + '" target="_blank">';
        html += '<img src="' + val.Poster + '" style="width: 250px; height: 250px; max-width: 100%; max-height: 100%;" />';
        html += '</a>';
        html += '</div>';
        html += '<div class="col-8">';
        html += '<a class="link" href="https://www.imdb.com/title/' + val.imdbID + '" target="_blank" style="color: black;" class="font-14 text-bold">' + val.Title + '</a>';
        html += '<p>' + val.Type + '<br/>';
        html += '' + val.Year + '</p>';
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

fetchMovie(url + query);

document.getElementById('movie-search').onchange = function() {
  let query = document.getElementById('movie-search').value;
  fetchMovie(url + query);
};

// async function asyncFetchMovie(url, method) {
//   try {
//     const response = await fetch(url, {method: method});
//     return await response.json();
//   }
//   catch (data) {
//     console.log('fetch failed', data);
//   }
// }

