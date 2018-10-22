var app = angular.module('app',[]);

app.service('contactAPI', [ '$http', function($http) {

	this.getContact = function getContact(contactId) {
	    return $http({
	        method : 'GET',
	        url : 'http:/localhost:8080/contacts/' + contactId
	    })
	} 

	this.addContact = function addContact(contact){
		return $http({
			url: 'http://localhost:8080/contacts',
	        method: "POST",
	        data: contact,
	        headers: {'Content-Type': 'application/json'}
		})
	}

	this.updateContact = function updateContact(id, contact){
		return $http({
			method: 'PATCH',
			url: id,
			data: contact
		})
	}
	this.deleteContact = function deleteContact(id){
		return $http({
			method: 'DELETE',
			url: id
		})
	}

	this.getAllContacts = function getAllContacts(){
	        return $http({
	          method: 'GET',
	          url: 'http://localhost:8080/contacts/'
	        })
	    }
	}]);
