function validateForm() {
  var name = document.getElementById("name").value();
  var message = document.getElementById("message").value();
  var email = document.getElementById("email").value();
  var phone = document.getElementById("phone").value();
  var subject = document.getElementById("subject").value();

  if (name.trim() == "" || name.trim() == null) {
    playSound(false);
    alert("Name must not be empty");
    return false;
  } else if (!validateEmail(email.trim())) {
    playSound(true);
    return false;
  } else if (email.trim() == "" || email.trim() == null) {
    playSound(false);
    return false;
  } else if (subject.trim() == "" || subject.trim() == null) {
    playSound(false);
    return false;
  } else if (phone.length > 10) {
    playSound(false);
    return false;
  } else if (isNaN(phone)) {
    /*
    Checks either the input phone number is in numeric format or not.
    If phone number isn't in numeric format it will pop up alert with specific sound
    */
    playSound(false);
    return false;
  } else if (message.trim() == "" || message.trim() == null) {
    playSound(false);
    alert("message must not be empty");
    return false;
  } else if (message.length > 100) {
    playSound(false);
    alert("Message can't exceed 100 characters.");
    return false;
  } else {
    playSound(true);
    alert(name + " , Your message is sent successfully.");
    true;
  }
}

//Code redudancy reduced by using function for similar function
function playSound(type) {
  if (type) {
    document.getElementById("success").play();
  } else {
    document.getElementById("alert").play();
  }
}

//added function to validate email
function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}
