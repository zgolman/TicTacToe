var ticApp = angular.module('ticApp', ["firebase"]);

 ticApp.controller('TTTController', function ($scope, $firebase) {

$scope.remoteGameContainer = 
  $firebase(new Firebase("https://tictacoface.firebaseIO.com/databaseGameContainer")) ;

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
    $scope.gameContainer.clickCounter ++ ;
    console.log("Cell was: " + oneCellObject.status) ;
    if (($scope.gameContainer.clickCounter % 2) == 0) {
      oneCellObject.status = "X" ;  
    } else {
      oneCellObject.status = "O" ;
    } 
    console.log("Cell is now: " + oneCellObject.status) ;

    
    

    //if I'm X, I can click when it is an odd number//
    //create a reset button (with potential animation)//
    //ensure CSS is proper when minimizing the screen//
    //link youtube video to winning//
    //create win counter//
    //create how many turns the user has left//
    //create chat between the 2 players//



if (($scope.gameContainer.boardArray[0].status == "X" && $scope.gameContainer.boardArray[0].status == $scope.gameContainer.boardArray[1].status) && ($scope.gameContainer.boardArray[1].status == $scope.gameContainer.boardArray[2].status) ||
    ($scope.gameContainer.boardArray[3].status == "X" && $scope.gameContainer.boardArray[3].status == $scope.gameContainer.boardArray[4].status) && ($scope.gameContainer.boardArray[4].status == $scope.gameContainer.boardArray[5].status) ||
    ($scope.gameContainer.boardArray[6].status == "X" && $scope.gameContainer.boardArray[6].status == $scope.gameContainer.boardArray[7].status) && ($scope.gameContainer.boardArray[7].status == $scope.gameContainer.boardArray[8].status) ||
    ($scope.gameContainer.boardArray[0].status == "X" && $scope.gameContainer.boardArray[0].status == $scope.gameContainer.boardArray[3].status) && ($scope.gameContainer.boardArray[3].status == $scope.gameContainer.boardArray[6].status) ||
    ($scope.gameContainer.boardArray[1].status == "X" && $scope.gameContainer.boardArray[1].status == $scope.gameContainer.boardArray[4].status) && ($scope.gameContainer.boardArray[4].status == $scope.gameContainer.boardArray[7].status) ||
    ($scope.gameContainer.boardArray[2].status == "X" && $scope.gameContainer.boardArray[2].status == $scope.gameContainer.boardArray[5].status) && ($scope.gameContainer.boardArray[5].status == $scope.gameContainer.boardArray[8].status) ||
    ($scope.gameContainer.boardArray[0].status == "X" && $scope.gameContainer.boardArray[0].status == $scope.gameContainer.boardArray[4].status) && ($scope.gameContainer.boardArray[4].status == $scope.gameContainer.boardArray[8].status) ||
    ($scope.gameContainer.boardArray[2].status == "X" && $scope.gameContainer.boardArray[2].status == $scope.gameContainer.boardArray[4].status) && ($scope.gameContainer.boardArray[4].status == $scope.gameContainer.boardArray[6].status))

{
    $scope.xWin = "X is the Winner";
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
    $scope.oWin = "O is the Winner";
 }   
 else if ($scope.movecounter == 9) {

    $scope.draw = "It's a draw";
}
 else {
    ""
 }
    } ;

// .directive('popup', function() {
//   var p = {
//       link : function(scope, iElement, iAttrs){
//            //code to wrap the div (iElement) with a abs pos div (parentDiv)
//           // code to add a mask layer div behind 
//           // if the parent is already there, then skip adding it again.
//          //use jquery ui to make it dragable etc.
//           scope.watch(showPopup, function(oWin, xWin){
//                if(oWin === true){
//                    $(parentDiv).show();
//                  } 
//               else{
//                  $(parentDiv).hide();
//                 }
//           });
//       }


//    }
//   return p;
// });
    



});


    // var positionX = $scope.board.pos = "X";
    // $scope.combo1 = [pos: 0 && status: "X", 


 // $scope.makeMove = function(){
    //          alert(this.$index);
    //          alert(mySingleCell.status)
    //          };

        // $scope.testJS = function() {
  //   console.log('Correctly accessing JS function.') ;

// $scope.player1 = 'O'
    // $scope.player2 = 'O'
    // $scope.winner = null


    // function setCell(status, played) {
    //     $scope.board[status][played] = [X or Y] [True or False]
    // }





