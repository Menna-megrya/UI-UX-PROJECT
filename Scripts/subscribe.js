document.getElementById('subBtn').onclick=function(){
    validateEmail();
}
function validateEmail() {
    var emaill = document.getElementById("emailSign").value;
    if (emaill.length == 0) {
        alert('You should enter email');
    }
    else if (!emaill.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        alert('Please Enter right email');
    }
    else {
        alert(' [Your Subscribed Done]'+" We will Sent You Notifications ");
    }

}