// === PHONE MENU FUNCTION === //
$(".sidenav").sidenav()
$(".modal").modal()

// === AUTHENTICATION === //
var loginPeeps = [
    {
        email: `blah@blah.com`,
        username: `marissa`,
        password: `mc1234`
    },
    {
        email: `yourmom@blah.com`,
        username: `rebecca`,
        password: `rh1234`
    },
    {
        email: `music@blah.com`,
        username: `connor`,
        password: `cb1234`
    }
]
function getInfo() {
    var email = document.getElementById("email").value
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value
    for (i = 0; i < loginPeeps.length; i++) {
        if (username == loginPeeps[i].username && password == loginPeeps[i].password) {
            console.log(username + " Thanks for logging in!")
            return
        }
        $("#usernameBox").html(username)
        $("#passwordBox").html(password)
    }
    console.log("sorry bro you not one of us!")
}