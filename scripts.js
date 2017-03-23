//This is an example of calling public API JSON data and simply displaying to console/writing to the body. Handy for future projects

//standard ajax call per the SODA documentation (https://dev.socrata.com/foundry/data.detroitmi.gov/i9ph-uyrp) utilizing *my* app token

$.ajax({
    url: "https://data.detroitmi.gov/resource/i9ph-uyrp.json",
    type: "GET",
    data: {
      "$limit" : 5000,
      "$$app_token" : "c9TllBUfGZDL2uOu9rgu1j0vw"
    }
}).done(function(data) {
  alert("Retrieved " + data.length + " records from the dataset!");
  console.log(data);
});



//work-around utilzing a .get method with no app_token
$(document).ready(function(){

document.write('<h3>Crime ID:</h3>');

$.get('https://data.detroitmi.gov/resource/i9ph-uyrp.json', function(working){
for (var i = 0; i < working.length; i++) {
  var crimeid = working[i].crimeid + '<br>';
  document.write(crimeid);
}

});
});
