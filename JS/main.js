var ticApp = angular.module('ticApp', ["firebase"]);

 ticApp.controller('TTTController', function ($scope, $firebase) {

    

$scope.remoteGameContainer = 
  $firebase(new Firebase("https://tictacoface.firebaseIO.com/databaseGameContainer")) ;

   

    $scope.movecounter = 0 ;
    $scope.oWin = "";
    $scope.xWin = "";
    $scope.draw = "";

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
    clickCounter: $scope.movecounter,
    fboWin: $scope.oWin,
    fbxWin: $scope.xWin,
    fbdraw: $scope.draw
  } ;

  $scope.remoteGameContainer.$bind($scope, "gameContainer") ;

   $scope.$watch('gameContainer', function() {
    console.log('gameCountainer changed!') ;
  }) ;

    $scope.playerPicks = function(oneCellObject) {
    $scope.gameContainer.clickCounter ++ ;
    console.log("Cell was: " + oneCellObject.status) ;
    if (($scope.gameContainer.clickCounter % 2) == 0) {
      oneCellObject.status = "X" ;  
    } else {
      oneCellObject.status = "O" ;
    } 
    console.log("Cell is now: " + oneCellObject.status) ;


if (($scope.gameContainer.boardArray[0].status == "X" && $scope.gameContainer.boardArray[0].status == $scope.gameContainer.boardArray[1].status) && ($scope.gameContainer.boardArray[1].status == $scope.gameContainer.boardArray[2].status) ||
    ($scope.gameContainer.boardArray[3].status == "X" && $scope.gameContainer.boardArray[3].status == $scope.gameContainer.boardArray[4].status) && ($scope.gameContainer.boardArray[4].status == $scope.gameContainer.boardArray[5].status) ||
    ($scope.gameContainer.boardArray[6].status == "X" && $scope.gameContainer.boardArray[6].status == $scope.gameContainer.boardArray[7].status) && ($scope.gameContainer.boardArray[7].status == $scope.gameContainer.boardArray[8].status) ||
    ($scope.gameContainer.boardArray[0].status == "X" && $scope.gameContainer.boardArray[0].status == $scope.gameContainer.boardArray[3].status) && ($scope.gameContainer.boardArray[3].status == $scope.gameContainer.boardArray[6].status) ||
    ($scope.gameContainer.boardArray[1].status == "X" && $scope.gameContainer.boardArray[1].status == $scope.gameContainer.boardArray[4].status) && ($scope.gameContainer.boardArray[4].status == $scope.gameContainer.boardArray[7].status) ||
    ($scope.gameContainer.boardArray[2].status == "X" && $scope.gameContainer.boardArray[2].status == $scope.gameContainer.boardArray[5].status) && ($scope.gameContainer.boardArray[5].status == $scope.gameContainer.boardArray[8].status) ||
    ($scope.gameContainer.boardArray[0].status == "X" && $scope.gameContainer.boardArray[0].status == $scope.gameContainer.boardArray[4].status) && ($scope.gameContainer.boardArray[4].status == $scope.gameContainer.boardArray[8].status) ||
    ($scope.gameContainer.boardArray[2].status == "X" && $scope.gameContainer.boardArray[2].status == $scope.gameContainer.boardArray[4].status) && ($scope.gameContainer.boardArray[4].status == $scope.gameContainer.boardArray[6].status))

{  
    $scope.gameContainer.fbxWin = "X is the Winner";
    // $scope.xWin = "X is the Winner";
} 
else if (($scope.gameContainer.boardArray[0].status == "O" && $scope.gameContainer.boardArray[0].status == $scope.gameContainer.boardArray[1].status) && ($scope.gameContainer.boardArray[1].status == $scope.gameContainer.boardArray[2].status) ||
    ($scope.gameContainer.boardArray[3].status == "O" && $scope.gameContainer.boardArray[3].status == $scope.gameContainer.boardArray[4].status) && ($scope.gameContainer.boardArray[4].status == $scope.gameContainer.boardArray[5].status) ||
    ($scope.gameContainer.boardArray[6].status == "O" && $scope.gameContainer.boardArray[6].status == $scope.gameContainer.boardArray[7].status) && ($scope.gameContainer.boardArray[7].status == $scope.gameContainer.boardArray[8].status) ||
    ($scope.gameContainer.boardArray[0].status == "O" && $scope.gameContainer.boardArray[0].status == $scope.gameContainer.boardArray[3].status) && ($scope.gameContainer.boardArray[3].status == $scope.gameContainer.boardArray[6].status) ||
    ($scope.gameContainer.boardArray[1].status == "O" && $scope.gameContainer.boardArray[1].status == $scope.gameContainer.boardArray[4].status) && ($scope.gameContainer.boardArray[4].status == $scope.gameContainer.boardArray[7].status) ||
    ($scope.gameContainer.boardArray[2].status == "O" && $scope.gameContainer.boardArray[2].status == $scope.gameContainer.boardArray[5].status) && ($scope.gameContainer.boardArray[5].status == $scope.gameContainer.boardArray[8].status) ||
    ($scope.gameContainer.boardArray[0].status == "O" && $scope.gameContainer.boardArray[0].status == $scope.gameContainer.boardArray[4].status) && ($scope.gameContainer.boardArray[4].status == $scope.gameContainer.boardArray[8].status) ||
    ($scope.gameContainer.boardArray[2].status == "O" && $scope.gameContainer.boardArray[2].status == $scope.gameContainer.boardArray[4].status) && ($scope.gameContainer.boardArray[4].status == $scope.gameContainer.boardArray[6].status))
 {
    $scope.gameContainer.fboWin = "O is the Winner";
 }   
 else if ($scope.gameContainer.clickCounter == 9) {

    $scope.gameContainer.fbdraw = "It's a draw";
}
 else {
    ""
 }
    } ;

  

 $scope.resetForm = function ()
    {
      location.reload();
    };

       

});




