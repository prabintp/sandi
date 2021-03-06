define(['angular'], function(angular) {
  'use strict';

  /**
   * @ngdoc service
   * @name protoApp.GoogleAPI
   * @description
   * # GoogleAPI
   * Service in the protoApp.https://picasaweb.google.com/data/feed/api/user/104603570075126715421/albumid/6160593634386762673?alt=json
   */
  angular.module('protoApp.services.GoogleAPI', [])
    .factory('GoogleAPI', function($http, $q) {
      var getData = function() {
        var deferred = $q.defer();
        // Simple GET request example :
        $http.get('https://picasaweb.google.com/data/feed/api/user/addictionalbums?&alt=json').success(function(data, status, headers, config) {
          console.log(data + 'success');
          deferred.resolve(data);
        //return data;
        // this callback will be called asynchronously
        // when the response is available
        }).error(function(data, status, headers, config) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          //return data+"error";
          deferred.reject(data);
        });
        return deferred.promise;

      };
      var getHomeSlider = function() {
        var deferred = $q.defer();
        // Simple GET request example :
        $http.get('https://picasaweb.google.com/data/feed/api/user/104603570075126715421/albumid/6160593634386762673?alt=json').success(function(data, status, headers, config) {
          console.log(data + 'success');
          deferred.resolve(data);
        //return data;
        // this callback will be called asynchronously
        // when the response is available
        }).error(function(data, status, headers, config) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          //return data+"error";
          deferred.reject(data);
        });
        return deferred.promise;

      };

      var getPicByAlbumID = function(albumid) {
        var deferred = $q.defer();
        // Simple GET request example :
        $http.get('https://picasaweb.google.com/data/feed/api/user/104603570075126715421/albumid/'+albumid+'?alt=json').success(function(data, status, headers, config) {
          console.log(data + 'success');
          deferred.resolve(data);
        //return data;
        // this callback will be called asynchronously
        // when the response is available
        }).error(function(data, status, headers, config) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          //return data+"error";
          deferred.reject(data);
        });
        return deferred.promise;

      };

      // AngularJS will instantiate a singleton by calling "new" on this function
      return {
        get: function() {
          return getData();
        },
        getHomeSlider: function() {
          return getHomeSlider();
        },
        getPicByAlbumID: function(albumid) {
          return getPicByAlbumID(albumid);
        }

      }

    });
});
