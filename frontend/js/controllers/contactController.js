app.controller('contactController', ['$scope', '$http', 'contactAPI', 
	function($scope, $http, contactAPI){

		
$scope.submit = function(contact){
			$scope.Message = '';
			$scope.errorMessage = '';

			contactAPI.addContact(contact)
			.success(function () {
        		$scope.message = "User added!";
        		$scope.contacts.push(contact);
                delete $scope.contact;
            }).error(function (error) {
            	$scope.errorMessage = 'Error adding user!';
            	console.log(error);
                $scope.status = status;
            });
		};

	$scope.updateContact = function(contact){
		contactAPI.updateContact(contact._links.contact.href, contact)
		.then(function success(response){
			$scope.message = 'User data updated!';
			$scope.errorMessage = '';
		},
		function error(response){
			$scope.errorMessage = 'Error updating user!';
			$scope.message = '';
		});
	}


	$scope.remove = function(contact) {
		contactAPI.deleteContact(contact._links.contact.href)
		.success(function success(response){
			var index = $scope.contacts.indexOf(contact);
			$scope.contacts.splice(index, 1);
			$scope.message = 'User deleted!';
			$scope.contact = null;
			$scope.errorMessage = '';
		},
		function error(response){
			$scope.errorMessage = 'Error deleting user!';
			$scope.message = '';
		})
	}

	$scope.getAllContacts = function(){
		contactAPI.getAllContacts()
		.success(function success(response){
			$scope.contacts = response._embedded.contacts;
			$scope.message = '';
			$scope.errorMessage = '';
		},
		function error (response){
			$scope.message = '';
			$scope.errorMessage = 'Error getting contacts.';
	});
    }


    $scope.getAllContacts();
}]);