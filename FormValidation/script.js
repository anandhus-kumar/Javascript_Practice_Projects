var nameError = document.getElementById("name-error");
var phoneError = document.getElementById("Number-error");
var emailError = document.getElementById("email-error");
var submitError = document.getElementById("submit-error");
var messageError = document.getElementById("message-error");

function validateName(){
  var name = document.getElementById("contact-name").value 
  if(name.length == 0){
    nameError.innerHTML = "Name is required";
    return false;
  }
if(!name.match(/^[A-Za-z]+(?: [A-Za-z]+)+$/)){
  nameError.innerHTML = "Write your full name";
  return false;
}

  nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function validatePhone(){
  var phone =  document.getElementById("contact-phone").value
  if(phone.length == 0){
    phoneError.innerHTML = "Phone No. is required"
    return false;
  }
  if(phone.length !== 10){
    phoneError.innerHTML = "Phone No is not valid"
    return false
  }
  if(!/^[0-9]{10}$/.test(phone)){
    phoneError.innerHTML = "Only digits allowed";
    return false;
  }


  phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}


function validateEmail(){
  var email =  document.getElementById("contact-email").value
  if(email.length == 0){
    emailError.innerHTML = "Email  is required"
    return false;
  }
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
  emailError.innerHTML = "Email is not valid";
  return false;
}
  

  emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function validateMessage(){
  var message =  document.getElementById("contact-message").value
  var required = 30;
  var left = required - message.length;


  if(left > 0){
    messageError.innerHTML = "More characters required"
    return false;
  }

  

  messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function validateForm(){
  if(!validateName() || !validateEmail() || !validateMessage() || !validatePhone()){
    submitError.innerHTML = "Please fix error";
    return false
  }
}