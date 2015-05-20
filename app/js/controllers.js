angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
   
   $scope.selection = {};

   $scope.scriptNames = [ "B000002","B000003","B000004","B000005","B000006","B000007","B000008"];

   $scope.analytes = [
	"Amplified Beads-HP_1-Adaptor Primier",
	"SA-FHP_A-Sequecing Primier",
	"SA-FHP_C-Sequecing Primier",
	"SA-FHP_G-Sequecing Primier",
	"SA-FHP_T-Sequecing Primier",
	"SA-HP_1-AdaptorPrimer",
	"SA-HP_1-Sequencing Primier"
   ];

   $scope.types = [
	"B2 only - Continous Flow",
	"B2 only - No Flow",
	"Bead_Detection",
	"Mock Sequencing",
	"Runoff_Detection",
	"STD-NoRunoff",
	"Template Sequencing Run"
   ];

   $scope.reagentPacks = [
	"Runoff-reagentPack",
	"STD-reagentPack"
   ];

})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
});
