
angular.module("rm").factory("charactersAPI",function($http){
    var _getCharacters =()=>{
        return $http.get($scope.url)
    }
    return {
        getCharacters: _getCharacters
    };
       
    
});