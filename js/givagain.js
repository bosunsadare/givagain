$(function () {

  function loginForm() {
    // Do something
  }

  function validateRegister () {
    // Do something
  }

  $( "[data-role='footer']" ).toolbar({ theme: "a" });

  var charities = new XMLHttpRequest();
  var url = "js/charities.json";

  charities.open("GET", url, true);
  charities.send();

  charities.onreadystatechange = function() {
    if (charities.readyState === 4 && charities.status === 200 ) {
      var charityLister = JSON.parse(charities.responseText);
      var charityList = charityLister['Charities'];
    }
    var i;
    var output = '<option value="" disabled selected>Select Charity</option>';
    for(i = 0; i < charityList.length; i++) {
      output += '<option value="' + charityList[i].name + '">' + charityList[i].description + '</option>';
    }
    $('#charities').html(output);
  }
});