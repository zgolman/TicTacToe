var ticApp = angular.module('ticApp', ["firebase"]);

 ticApp.controller('TTTController', function ($scope, $firebase) {

$scope.remoteGameContainer = 
  $firebase(new Firebase("https://tictacoface.firebaseio.com/databaseGameContainer")) ;

    $scope.movecounter = 0 ;
    
    $scope.board = [
        {status:"", pos: 0},
        {status:"", pos: 1},
        {status:"", pos: 2},
        {status:"", pos: 3},
        {status:"", pos: 4},
        {status:"", pos: 5},
        {status:"", pos: 6},
        {status:"", pos: 7},
        {status:"", pos: 8}];
  
     $scope.gameContainer = {
    boardArray: $scope.board,
    clickCounter: $scope.movecounter
  } ;

  $scope.remoteGameContainer.$bind($scope, "gameContainer") ;

   $scope.$watch('gameContainer', function() {
    console.log('gameCountainer changed!') ;
  }) ;

    $scope.playerPicks = function(oneCellObject) {
    $scope.movecounter = $scope.movecounter + 1 ;
    console.log("Cell was: " + oneCellObject.status) ;
    if (($scope.movecounter % 2) == 1) {
      oneCellObject.status = "X" ;  
    } else {
      oneCellObject.status = "O" ;
    } 
    console.log("Cell is now: " + oneCellObject.status) ;

    //if I'm X, I can click when it is an odd number//
    //changing a cell does not affect move counter//
    //make sure the game ends after 9 moves//
    //create a reset button (with potential animation)//
    //ensure CSS is proper when minimizing the screen//
    //link youtube video to winning//
    //create win counter//
    //create how many turns the user has left//


if (($scope.board[0].status == "X" && $scope.board[0].status == $scope.board[1].status) && ($scope.board[1].status == $scope.board[2].status) ||
    ($scope.board[3].status == "X" && $scope.board[3].status == $scope.board[4].status) && ($scope.board[4].status == $scope.board[5].status) ||
    ($scope.board[6].status == "X" && $scope.board[6].status == $scope.board[7].status) && ($scope.board[7].status == $scope.board[8].status) ||
    ($scope.board[0].status == "X" && $scope.board[0].status == $scope.board[3].status) && ($scope.board[3].status == $scope.board[6].status) ||
    ($scope.board[1].status == "X" && $scope.board[1].status == $scope.board[4].status) && ($scope.board[4].status == $scope.board[7].status) ||
    ($scope.board[2].status == "X" && $scope.board[2].status == $scope.board[5].status) && ($scope.board[5].status == $scope.board[8].status) ||
    ($scope.board[0].status == "X" && $scope.board[0].status == $scope.board[4].status) && ($scope.board[4].status == $scope.board[8].status) ||
    ($scope.board[2].status == "X" && $scope.board[2].status == $scope.board[4].status) && ($scope.board[4].status == $scope.board[6].status))
{
    $scope.xWin = "X is the Winner";
} 
else if (($scope.board[0].status == "O" && $scope.board[0].status == $scope.board[1].status) && ($scope.board[1].status == $scope.board[2].status) ||
    ($scope.board[3].status == "O" && $scope.board[3].status == $scope.board[4].status) && ($scope.board[4].status == $scope.board[5].status) ||
    ($scope.board[6].status == "O" && $scope.board[6].status == $scope.board[7].status) && ($scope.board[7].status == $scope.board[8].status) ||
    ($scope.board[0].status == "O" && $scope.board[0].status == $scope.board[3].status) && ($scope.board[3].status == $scope.board[6].status) ||
    ($scope.board[1].status == "O" && $scope.board[1].status == $scope.board[4].status) && ($scope.board[4].status == $scope.board[7].status) ||
    ($scope.board[2].status == "O" && $scope.board[2].status == $scope.board[5].status) && ($scope.board[5].status == $scope.board[8].status) ||
    ($scope.board[0].status == "O" && $scope.board[0].status == $scope.board[4].status) && ($scope.board[4].status == $scope.board[8].status) ||
    ($scope.board[2].status == "O" && $scope.board[2].status == $scope.board[4].status) && ($scope.board[4].status == $scope.board[6].status))
 {
    $scope.oWin = "O is the Winner";
 }   
 else if ($scope.movecounter == 9) {

    $scope.draw = "It's a draw";
}
 else {
    ""
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


});


    // var positionX = $scope.board.pos = "X";
    // $scope.combo1 = [pos: 0 && status: "X", 


 // $scope.makeMove = function(){
    //          alert(this.$index);
    //          alert(mySingleCell.status)
    //          };

        // $scope.testJS = function() {
  //   console.log('Correctly accessing JS function.') ;
  //    } ;