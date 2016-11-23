module.exports = function ( $scope, $http ) {
  $scope.data = [];

  $scope.title = null;

  $http.get('/api/movies/').then(response => {
    $scope.data.movies = response.data;
  });

  $scope.lookUp = function ( title ) {
    $scope.title = title;
  };

  $scope.titleFilter = function ( movie ) {
    const rege = new RegExp($scope.title, 'i');

    return $scope.title === null || movie.title.match( rege );
  };

  $scope.typeFilter = function ( movie ) {
    var type = null;

    if ( $scope.movie ) {
      type = $scope.movie.type;
    }

    const rege = new RegExp(type, 'i');

    return type === null || movie.type.match( rege );
  };
};