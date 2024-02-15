function chechInfoSub(){
    document.getElementById("button-container").style.margin ="30px";
    document.getElementById("invalid-email").style.display = "none";
    document.getElementById("invalid-password").style.display = "none";
    document.getElementById("invalid-match").style.display = "none";
    var email = document.getElementById("email").value;
    var pass1 = document.getElementById("pass1").value;
    var pass2 = document.getElementById("pass2").value;
    var bool = true;
    if(!(email.includes("@"))){
        document.getElementById("invalid-email").style.display ="block";
    }
    if(!(pass1.lenght>16)){
        document.getElementById("invalid-password").style.display ="block";
    }
    if(!(containsNumbers(pass1))){
        document.getElementById("invalid-password").style.display = "block";
        bool = false;
    }
    if(!(containsSpecialChars(pass1))){
        document.getElementById("invalid-password").style.display = "block";
        bool = false;
    }
    if(!(pass1==pass2)&&bool){
        document.getElementById("invalid-match").style.display = "block";
    }
    document.getElementById("info-message").style.display="none";
    document.getElementById("button-container").style.margin ="0px";
}

function containsNumbers(str) {
    return /[0-9]/.test(str);
}

function containsSpecialChars(str) {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return specialChars.test(str);
}
  