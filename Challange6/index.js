//const myBtn = document.getElementById("myBtn");

function validate(){
    var input = document.getElementById("email").value;

    var pattern = /^([a-zA-Z0-9\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/ ;
    
    if(pattern.test(input)){
        document.getElementById("lbltext").innerHTML='valid';
        document.getElementById("lbltext").style.visibility='visible';
        document.getElementById("lbltext").style.color='green';
        
    }else{
        document.getElementById("lbltext").innerHTML='invalid';
        document.getElementById("lbltext").style.visibility='visible';
        document.getElementById("lbltext").style.color='red';
    }
}
