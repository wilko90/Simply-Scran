function validation(){
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var errorMessage = document.getElementById("errorMessage");
    var text;

    errorMessage.style.padding = "10px";
    
    if(name.length <5){
        text = "Please Enter Correct Name";
        errorMessage.innerHTML = text;
        return false;
    }

    if(subject.length <10){
        text = "Please Enter Valid Subject";
        errorMessage.innerHTML = text;
        return false;
    }

    if(isNaN(phone) || phone.length != 11){
        text = "Please Enter Valid Phone Number";
        errorMessage.innerHTML = text;
        return false;
    }

     if(email.indexOf("@") == -1 || email.length < 6){
        text = "Please Enter Valid Email Address";
        errorMessage.innerHTML = text;
        return false;
    }

    if(message.length <= 15){
        text = "Please Enter More Characters";
        errorMessage.innerHTML = text;
        return false;
    }
    alert("Form Submitted")
    return true;
}