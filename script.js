
// let x = localStorage.getItem("key");
// if (!x) {
//     document.body.innerHTML = x
// }






function isValidPassword(password) {
    const regexPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
    return regexPattern.test(password);
}

let userinput;
let passworddiv;
let login;
let logout;
let success;
let failure;




if (window.localStorage.getItem("userinput")) {
    document.getElementById('userinput').style.display = window.localStorage.getItem("userinput")
}
if (window.localStorage.getItem("passworddiv")) {
    document.getElementById('passworddiv').style.display = window.localStorage.getItem("passworddiv")
}
if (window.localStorage.getItem("login")) {
    document.getElementById('login').style.display = window.localStorage.getItem("login")
}
if (window.localStorage.getItem("logout")) {
    document.getElementById('logout').style.display = window.localStorage.getItem("logout")
}
if (window.localStorage.getItem("success")) {
    document.getElementById('success').style.display = window.localStorage.getItem("success")
}
if (window.localStorage.getItem("failure")) {
    document.getElementById('failure').style.display = window.localStorage.getItem("failure")
}

window.localStorage.setItem("passworddiv", document.getElementById('passworddiv').style.display);
window.localStorage.setItem("login", document.getElementById('login').style.display);
window.localStorage.setItem("success", document.getElementById('success').style.display);
window.localStorage.setItem("logout", document.getElementById('logout').style.display);
window.localStorage.setItem("failure", document.getElementById('failure').style.display);




function check() {
    let password = document.getElementById('password').value;
    let username = document.getElementById('user').value
    console.log(username)
    if (isValidPassword(password) == true && (username != "")) {
        document.getElementById('userinput').style.display = "none";
        userinput = "none";
        document.getElementById('passworddiv').style.display = "none";
        passworddiv = "none";
        document.getElementById('login').style.display = "none";
        login = "none"
        document.getElementById('logout').style.display = "flex";
        logout = "flex"
        document.getElementById('success').style.display = "flex"
        success = "flex"
        document.getElementById('failure').style.display = "none"
        failure = "none"
        setstorage()
    }
    else {
        document.getElementById('failure').style.display = "flex"
        failure = "flex"
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

    setstorage()




}

console.log(toString(document.getElementById('userinput').style.display))




function setstorage() {
    window.localStorage.setItem("userinput", userinput);
    window.localStorage.setItem("passworddiv", passworddiv);
    window.localStorage.setItem("login", login);
    window.localStorage.setItem("success", success);
    window.localStorage.setItem("logout", logout);
    window.localStorage.setItem("failure", failure);

}





