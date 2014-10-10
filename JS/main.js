var ticApp = angular.module('ticApp', []);

 ticApp.controller('TTTController',["$scope", function ($scope){
	$scope.board = [
				{status:"A", pos:0},{status:"A", pos: 1},{status:"A", pos: 2},
				{status:"A", pos:3},{status:"A", pos: 4},{status:"A", pos: 5},
				{status:"A", pos:6},{status:"A", pos: 7},{status:"A", pos: 8}];

				$scope.makeMove = function(){
					alert(this.$index);
					alert(mySingleCell.status)
				};
			}]);