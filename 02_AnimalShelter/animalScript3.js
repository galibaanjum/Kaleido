var APIKey ='CepK8KOXEOPzOWiBOvHIGBD9UdPew0KBwGOihBgqCJ5oQz3KuS';
var secret ='S8TkTkhGlKq8whicGYYsEb4uclbyK9RZSxGOil9O';
var token_obj = new Object();

$(document).ready(function(){
  getParams();
  var zip = getZip();
  

  getCoord(zip);

});


function getZip(){
  var url = document.location.search;
  let ind=url.length;
  let zipCode = url.substring(ind-5, ind);
  return zipCode;
}


function getParams(){
  var searchParamsArr = document.location.search.split('&');
  var animalId = searchParamsArr[0].split('=').pop();
   getInfoById(animalId);
}

function getInfoById(Id){
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
    return fetch(' https://api.petfinder.com/v2/animals/'+Id, {
        headers: {
            'Authorization': data.token_type + ' ' + data.access_token,
            'Content-Type': 'application/json'
        }
    }).then(function (resp) {

        // Return the API response as JSON
        return resp.json();
    
    }).then(function(data){
        
        if(!data){
            console.log('No results found!');
        }
        else{
            console.log(data);

            displayDetails(data)
        
        }
    }
);
});
  
}

function displayDetails(data){
$('#petName').text (data.animal.name);
$('#size').text(data.animal.size);
  
if(data.animal.description !== null)
{
var desc =escapeHtml(data.animal.description);
}
else{
  var desc = "No description found";
}
$('#description').text(desc);
if(data.animal.contact.address.address1 !== null){
$('#address').text(data.animal.contact.address.address1,
  data.animal.contact.address.city,data.animal.contact.address.state,
  data.animal.contact.address.country,data.animal.contact.address.postcode );
}
else{
  $('#address').text(data.animal.contact.address.city,data.animal.contact.address.state,
    data.animal.contact.address.country,data.animal.contact.address.postcode );
}
$("#breed").text(data.animal.breeds.primary);

$('#status').text(data.animal.status);
if(data.animal.photos.length !=0)
{
  $('#image').attr("src",data.animal.photos[0].medium);
}
else{
  if(data.animal.species =="Duck"){
$('#image').attr("src",'https://cdn.britannica.com/92/100692-050-5B69B59B/Mallard.jpg');
  }
  else if(data.animal.species == "Parrot"){
    $('#image').attr("src",'https://static01.nyt.com/images/2022/05/17/science/17tb-tribirds/17tb-tribirds-mediumSquareAt3X.jpg');
  }
  else if(data.animal.species == "chicken"){
    $('#image').attr("src",'https://cdn.britannica.com/18/137318-050-29F7072E/rooster-Rhode-Island-Red-roosters-chicken-domestication.jpg?w=400&h=300&c=crop');
  }
  else if (data.animal.species == "Dog"){
    $('#image').attr("src",'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg?crop=0.672xw:1.00xh;0.166xw,0&resize=640:*');
  }
  else if(data.animal.species == "Horse"){
    $('#image').attr("src",'https://helios-i.mashable.com/imagery/articles/05yyXcOIx3xpBDI7hpOZw90/hero-image.fill.size_1200x1200.v1611609633.jpg');
  }
  else if (data.animal.species == "Cat"){
    $('#image').attr("src",'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg');
  }
}
$('#image').css({'text-align' : 'center','width' : '500px' , 'height' : '500px'});
}

// function to replace htmlcode
function escapeHtml(unsafe) {
  
   return unsafe.replace(/&amp;#39;/gi, "'");
}