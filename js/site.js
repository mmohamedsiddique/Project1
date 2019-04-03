function validateForm() {
  var x = document.forms["fname"]["lname"].value;
  if (x == "i") {
    alert("Name must be filled out");
    return true;
  }
}