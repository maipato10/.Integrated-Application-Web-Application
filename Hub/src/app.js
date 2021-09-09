(function () {
    const API_HOST = 'https://api.backendless.com';
    const APP_ID = 'D6F24EF3-973C-6767-FF0A-1A3AA25B9300';
    const API_KEY = '66456480-A606-E33D-FF39-2AE84754CA00';

    Backendless.serverURL = API_HOST;
    Backendless.initApp(APP_ID, API_KEY);

    const movieCardTemplate = movie => $(`
  <div class="col-md-4 col-sm-6 mb-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title text-truncate">${movie.title}</h5>
        <p class="card-text" style="height: 100px;overflow: hidden;"><small>${movie.description}</small></p>
        <div class="d-flex justify-content-between">
          <div>
            <span class="badge badge-primary">${movie.rating}</span>
            <span class="badge badge-secondary">${movie.release_year}</span>
          </div>
          <p class="card-text"><small class="text-muted">added ${new Date(movie.created).toDateString()}</small></p>
        </div>
      </div>
    </div>
  </div>
`);

    const errorTemplate = error => $(`
  <div class="alert alert-danger flex-fill" role="alert">
    <h4 class="alert-heading">${error.message}</h4>
    <hr>
      <pre>${error.stack}</pre>
  </div>
`);

    const $moviesList = $('#movies-list');
    const moviesStore = Backendless.Data.of('Movies');
    let moviesList;

    moviesStore.find(Backendless.DataQueryBuilder.create().setPageSize(100).setSortBy('created'))
        .then(result => {
            moviesList = result;

            renderList();

            enableRealTime();
        })
        .catch(renderError);

    function renderList() {
        $moviesList.html('');

        moviesList.forEach(movie => {
            $moviesList.append(movieCardTemplate(movie));
        });
    }

    function renderError(error) {
        $moviesList.html(errorTemplate(error));
    }

    function enableRealTime() {
        // we will add code for Real Time Database here
    }
})();
