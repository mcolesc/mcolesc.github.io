let email1 = document.getElementById("email");
let email2 = document.getElementById("con_email");
let hiddenP = document.getElementById('match');

email2.addEventListener('keyup', compare);

function compare() {
    if (email1.value != email2.value) {
        hiddenP.style.visibility = "visible";
    }
    else {
        hiddenP.style.visibility = "hidden";
    }
}