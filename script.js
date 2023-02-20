function isValidPassword(password) {
    const regexPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
    return regexPattern.test(password);
}

let isLoggedIn = false;

if (window.localStorage.getItem("isLoggedIn") != null) {
    isLoggedIn = window.localStorage.getItem("isLoggedIn")
    console.log(isLoggedIn);
    if (isLoggedIn === "true") {
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

    // console.log(toString(document.getElementById('userinput').style.display))




    function setstorage() {
        window.localStorage.setItem("isLoggedIn", isLoggedIn);
        // window.localStorage.setItem("passworddiv", passworddiv);
        // window.localStorage.setItem("login", login);
        // window.localStorage.setItem("success", success);
        // window.localStorage.setItem("logout", logout);
        // window.localStorage.setItem("failure", failure);

    }




