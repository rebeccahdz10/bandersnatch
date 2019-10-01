// === PHONE MENU FUNCTION === //
$(".sidenav").sidenav()
$(".modal").modal()

// === AUTHENTICATION === //
var loginPeeps = [
    {
        username: `marissa`,
        password: `mc1234`
    },
    {
        username: `rebecca`,
        password: `rh1234`
    },
    {
        username: `connor`,
        password: `cb1234`
    }
]
function getInfo() {
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value
    for (i = 0; i < loginPeeps.length; i++) {
        if (username == loginPeeps[i].username && password == loginPeeps[i].password) {
            console.log(username + " Thanks for logging in!")
            return
        }
    }
    console.log("sorry bro you not one of us!")
}