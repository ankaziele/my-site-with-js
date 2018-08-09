var myMessage = document.getElementById("message");

function showMessage(){

    myMessage.className = "show";
}

setTimeout(showMessage, 5000);


var myForm = document.forms.myForm;
var message1 = document.getElementById("message1");

myForm.onsubmit = function(){
if(myForm.name.value == ""){
    message1.innerHTML = "please enter a name";
    return false;
} else{
    message1.innerHTML ="";
    return true;
}


};