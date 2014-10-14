var ticApp = angular.module('ticApp', []);

 ticApp.controller('TTTController',["$scope", function ($scope){


	$scope.board = [
				{status:"A", pos:0, played:"False"},{status:"A", pos: 1, played:"False"},{status:"A", pos: 2, played:"False"},
				{status:"A", pos:3, played:"False"},{status:"A", pos: 4, played:"False"},{status:"A", pos: 5, played:"False"},
				{status:"A", pos:6, played:"False"},{status:"A", pos: 7, played:"False"},{status:"A", pos: 8, played:"False"}];
    
    $scope.movecounter = 0 ;

	$scope.playerPicks = function(oneCellObject) {
    $scope.movecounter = $scope.movecounter + 1 ;
    console.log("Cell was: " + oneCellObject.Status) ;
    if (($scope.movecounter % 2) == 1) {
      oneCellObject.Status = "X" ;  
    } else {
      oneCellObject.Status = "O" ;
    } 
    console.log("Cell is now: " + oneCellObject.Status) ;
  	} ;
	
}]);





 // $scope.makeMove = function(){
	// 			alert(this.$index);
	// 			alert(mySingleCell.status)
	// 			};

		// $scope.testJS = function() {
  //   console.log('Correctly accessing JS function.') ;
  //    } ;