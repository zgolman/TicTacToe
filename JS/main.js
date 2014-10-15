var ticApp = angular.module('ticApp', []);

 ticApp.controller('TTTController',["$scope", function ($scope){


	$scope.board = [
				{status:"", pos: 0, played:"False"},
        {status:"", pos: 1, played:"False"},
        {status:"", pos: 2, played:"False"},
				{status:"", pos: 3, played:"False"},
        {status:"", pos: 4, played:"False"},
        {status:"", pos: 5, played:"False"},
				{status:"", pos: 6, played:"False"},
        {status:"", pos: 7, played:"False"},
        {status:"", pos: 8, played:"False"}];
  
  $scope.movecounter = 0 ;

	$scope.playerPicks = function(oneCellObject) {
    $scope.movecounter = $scope.movecounter + 1 ;
    console.log("Cell was: " + oneCellObject.status) ;
    if (($scope.movecounter % 2) == 1) {
      oneCellObject.status = "X" ;  
    } else {
      oneCellObject.status = "O" ;
    } 
    console.log("Cell is now: " + oneCellObject.status) ;

	

console.log(($scope.board[0].status == $scope.board[1].status) && ($scope.board[1].status == $scope.board[2].status));

if (($scope.board[0].status == $scope.board[1].status) && ($scope.board[1].status == $scope.board[2].status) ||
    ($scope.board[3].status == $scope.board[4].status) && ($scope.board[4].status == $scope.board[5].status) ||
    ($scope.board[6].status == $scope.board[7].status) && ($scope.board[7].status == $scope.board[8].status) ||
    ($scope.board[0].status == $scope.board[3].status) && ($scope.board[3].status == $scope.board[6].status) ||
    ($scope.board[1].status == $scope.board[4].status) && ($scope.board[4].status == $scope.board[7].status) ||
    ($scope.board[2].status == $scope.board[5].status) && ($scope.board[5].status == $scope.board[8].status) ||
    ($scope.board[0].status == $scope.board[4].status) && ($scope.board[4].status == $scope.board[8].status) ||
    ($scope.board[2].status == $scope.board[4].status) && ($scope.board[4].status == $scope.board[7].status)) 
{
  
}
    } ;

    // $scope.player1 = 'O'
    // $scope.player2 = 'O'
    // $scope.winner = null


    // function setCell(status, played) {
    //     $scope.board[status][played] = [X or Y] [True or False]
    // }


    //winning logic

    // for (var i = 0; i < 9; i++)
    //   if position = 0 && 1 && 2


}]);


    // var positionX = $scope.board.pos = "X";
    // $scope.combo1 = [pos: 0 && status: "X", 


 // $scope.makeMove = function(){
	// 			alert(this.$index);
	// 			alert(mySingleCell.status)
	// 			};

		// $scope.testJS = function() {
  //   console.log('Correctly accessing JS function.') ;
  //    } ;