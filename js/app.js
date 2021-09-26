const app = angular.module("rm",[]);

app.controller("rmCtrl",($scope, $http,charactersAPI)=>{
    $scope.logo = "./images/logo.png"
    $scope.portal = "./images/portal.png"
    $scope.url = 'https://rickandmortyapi.com/api/character'
    $scope.characters = null;
   $scope.getrm = () => {
      $scope.persons = null;
      $http.get($scope.url)    
      .then((response)=>{
          $scope.characters = response.data.results
          $scope.next = () => {
            $scope.url = response.data.info.next;
            $scope.getrm()
        }
        $scope.prev=()=>{
            $scope.url = response.data.info.prev;
            if(response.data.info.prev==null){
               return $scope.url='https://rickandmortyapi.com/api/character'
            }
            $scope.getrm()
        }
          console.log(response.data.results)
      })
   }
   $scope.value = "";
   $scope.persons = null;
   $scope.search = () => {
        $scope.characters = null;
        $http.get("https://rickandmortyapi.com/api/character/?name="+$scope.value)
        .then((response)=>{
            $scope.persons = response.data.results
            $scope.value = "";
            console.log($scope.persons)
        })
   }
   
})

