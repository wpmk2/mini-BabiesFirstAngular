var app = angular.module('friendsList');

app.controller('mainCtrl', function($scope){
	$scope.friends = ["Gabe", "Luis", "Erik", "Eric", "Cassidy", "Christian", "Devin", "Hunter", "Phillip", "Squire"];
	$scope.addFriend = function(){
		$scope.friends.push($scope.friend);
	};
});



