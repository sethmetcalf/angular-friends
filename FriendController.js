app.controller('FriendController', function($scope, $http){
	$scope.test = 'Hey my angular is working';
    $http.get('https://s3.amazonaws.com/intuiplan_company_files/production/files/public/FriendData.json')
        .success(function(data) {
            $scope.friends = data.results;
            angular.forEach($scope.friends, function(friend) {
                if (friend.friend_count) {


                friend.friend_count = parseInt(friend.friend_count, 10);
            } else {
                friend.friend_count = 0;
            }
            })
    })

   $scope.sortField = 'name';
   $scope.orderField = 'false';
});