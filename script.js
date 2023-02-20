function isValidPassword(password) {
    const regexPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
    return regexPattern.test(password);
}

let isLoggedIn = false;

if (window.localStorage.getItem("isLoggedIn") != null) {
    isLoggedIn = window.localStorage.getItem("isLoggedIn")
    console.log(isLoggedIn);
    if (isLoggedIn === "true"){
        console.log("asd")
        document.getElementById('userinput').style.display = "none";

        document.getElementById('passworddiv').style.display = "none";

        document.getElementById('login').style.display = "none";

        document.getElementById('logout').style.display = "flex";

        document.getElementById('success').style.display = "flex"

        document.getElementById('failure').style.display = "none"

    }

    else {
        document.getElementById('userinput').style.display = "block";
        document.getElementById('passworddiv').style.display = "block";
        document.getElementById('login').style.display = "flex";
        document.getElementById('logout').style.display = "none";
        document.getElementById('success').style.display = "none"
        document.getElementById('failure').style.display = "none"
    }
}

function check() {
    let password = document.getElementById('password').value;
    let username = document.getElementById('user').value
    // console.log(username)
    if (isValidPassword(password) == true && (username != "")) {
        document.getElementById('userinput').style.display = "none";
        document.getElementById('passworddiv').style.display = "none";
        document.getElementById('login').style.display = "none";
        document.getElementById('logout').style.display = "flex";
        document.getElementById('success').style.display = "flex"
        document.getElementById('failure').style.display = "none"
        isLoggedIn = true
        setstorage()
    }
    else {
        document.getElementById('failure').style.display = "flex"
        failure = "flex"
        isLoggedIn = false
        setstorage()
    }
}


function redirect() {
    document.getElementById('userinput').style.display = "block";
    document.getElementById('passworddiv').style.display = "block";
    document.getElementById('login').style.display = "flex";
    document.getElementById('logout').style.display = "none";
    document.getElementById('success').style.display = "none"
    document.getElementById('failure').style.display = "none"
    userinput = "block";
    passworddiv = "block";
    login = "flex"
    logout = "none"
    success = "none"
    failure = "none"
    isLoggedIn = false
    setstorage()
}




function setstorage() {
    window.localStorage.setItem("isLoggedIn", isLoggedIn);
setItem("failure", failure);

}





