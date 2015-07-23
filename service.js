var app = angular.module('userProfiles');

app.service('mainService', function($http, $q) {

  this.getUsers = function() {
      var deffered = $q.defer();
    $http({
        method: 'GET',
        url: 'http://reqr.es/api/users?page=1'
    }).then(function(response) {
        var parseResponse = response.data.data
        for (var i = 0; i < parseResponse.length; i++) {
            parseResponse[i].first_name = 'Ralf'
        }
        deffered.resolve(parseResponse)
    })
    return deffered.promise;
  }

});
