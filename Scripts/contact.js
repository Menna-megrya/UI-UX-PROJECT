document.getElementById("contactBtn").onclick= sure;


function sure(){
    validateName();
    validateEmail();

    var isValid = (validateName() && validateEmail());
    if (isValid) {
       alert(" Thanks For Contact Us ");
    } else {
       alert('Not completed');
    }
}


function validateName() {
    var UserName = document.getElementById("nameInput").value;
    if (UserName.length == 0) {
        
        alert('please Enter name');
        return false;
    }
    else if (UserName.length < 2) {
        alert('Please Enter valid name');
        return false;
    }
    else {
        // alert("Welcome "+UserName);
        return true;
    }

}

function validateEmail(emaill) {
    var emaill = document.getElementById("emailInput").value;
    if (emaill.length == 0) {
       alert("Please Enter Your Email : ");
       return false;
    }
    else if (!emaill.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
       alert("Please Enter a valid email");
       return false;
    }
    else {
        
        // alert('Your Email Right ');
        return true;
    }

}
