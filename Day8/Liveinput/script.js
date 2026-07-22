function showGreeting(){

    let username = document.getElementById("name").value;

    if(username === ""){

        document.getElementById("greeting").textContent = "Hello!";

    }
    else{

        document.getElementById("greeting").textContent =
        "Hello, " + username + "!";

    }

}

function checkPassword(){

    let passwordField = document.getElementById("password");

    // Remove all spaces
    passwordField.value = passwordField.value.replace(/\s/g, "");

    let password = passwordField.value;

    let hasLength = password.length >= 6;

    let hasNumber = /\d/.test(password);

    let message = document.getElementById("message");

    if(hasLength && hasNumber){

        message.textContent = "Strong";
        message.style.color = "green";

    }
    else{

        message.textContent = "Weak";
        message.style.color = "red";

    }

}