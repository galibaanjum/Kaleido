var APIKey ='CepK8KOXEOPzOWiBOvHIGBD9UdPew0KBwGOihBgqCJ5oQz3KuS';
var secret ='S8TkTkhGlKq8whicGYYsEb4uclbyK9RZSxGOil9O';
var token_obj = new Object();


$( document ).ready(function() {
// Call the API

// This is a POST request, because we need the API to generate a new token for us
fetch('https://api.petfinder.com/v2/oauth2/token', {
	method: 'POST',
	body: 'grant_type=client_credentials&client_id=' + APIKey + '&client_secret=' + secret,
	headers: {
		'Content-Type': 'application/x-www-form-urlencoded'
	}
}).then(function (resp) {

	// Return the response as JSON
	return resp.json();
   

}).then(function (data) {

	// Log the API data
	console.log('token', data);
     token_obj.access_token = data.token_type;
     token_obj.expires_in = data.expires_in;
     token_obj.token_type=data.token_type;
    return fetch(' https://api.petfinder.com/v2/types', {
		headers: {
			'Authorization': data.token_type + ' ' + data.access_token,
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	}).then(function (resp) {

        // Return the API response as JSON
        return resp.json();
    
    }).then(function (data) {
    
        // Log the pet data
        console.log('pets', data);
		let dropdown = $('#petSearch');
		dropdown.append('<option selected="true" disabled>Animal Type</option>');
dropdown.prop('selectedIndex', 0);
for(var i=0;i< data.types.length; i++){
	
console.log('pets:'+data.types[i].name);
	dropdown.append('<option value="' + data.types[i].name + '">' + data.types[i].name + '</option>');
}




    
    }).catch(function (err) {

	// Log any errors
	console.log('something went wrong', err);

});

});
});

//Triggers when search button is clicked
$('#btnSearch').click(function(){

	var animalType=$( "#petSearch option:selected" ).text();

	var location = $('#location').val();
	if(animalType == "Small & Furry"){
		animalType = "Small-Furry";
	
	}
	localStorage.setItem('PetType',animalType);
	localStorage.setItem('location',location);
	var queryString = '/02_AnimalShelter/animal2.html?q=' + animalType + '&location=' + location;

	document.location.assign(queryString);

})