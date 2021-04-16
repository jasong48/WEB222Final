function validate(event) {
  // TODO - write custom validation logic to validate the longitude and latitude
  // values. The latitude value must be a number between -90 and 90; the
  // longitude value must be a number between -180 and 180. If either/both are
  // invalid, show the appropriate error message in the form, and stop the
  // form from being submitted. If both values are valid, allow the form to be
  // submitted.
  var lng = document.getElementById("lng").value;
  var lat = document.getElementById("lat").value;

  var speciesGuess = document.getElementById("species-guess").value;

  var desc = document.getElementById("description").value;

  var date = document.getElementById("date").value;

  var latChecker = true;
  var lngChecker = true;
  var speciesChecker = true;
  var descChecker = true;
  var dateChecker = true;



 

  var latiSpan= document.querySelector("#lati > span");
  var longiSpan= document.querySelector("#longi > span");
  var guessSpan= document.querySelector("#guess > span");
  var descSpan= document.querySelector("#desc > span");
  var dateSpan= document.querySelector("#dateErr > span");


  if(date === "" || date === undefined || date < 0)
  {
    dateSpan.innerHTML = " a date must be selected";
    dateChecker = false;
  }
  else
  {
    dateSpan.innerHTML = "";
  }

  if (lat > 90 || lat < -90 || isNaN(lat) || lat == "") {
    latiSpan.innerHTML = " must be a valid Latitude(-90 to 90)";
    latChecker =  false;
  }
  else
  {
    latiSpan.innerHTML = "";
  }
  
  if (lng > 90 || lng < -90 || isNaN(lng) || lng == "") {
    longiSpan.innerHTML = " must be a valid Longitude  (-180 to 180)";
    lngChecker =  false;
  }
  else
  {
    longiSpan.innerHTML = "";
  }

  if(speciesGuess === "")
  {
    guessSpan.innerHTML = " This field is required!";
    speciesChecker =  false;
  } 
  else
  {
    guessSpan.innerHTML = "";
  }
  if(desc === "")
  {
    descSpan.innerHTML = " This field is required!";
    descChecker =  false;
  }
  else
  {
    descSpan.innerHTML = "";
  }
  if(latChecker === false || lngChecker === false || speciesChecker === false || descChecker === false || dateChecker === false)
  {
    return false;
  }
}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function () {
  const form = document.querySelector("form");
  form.onsubmit = validate;
};
