const form = document.querySelector("#contactForm");

form.addEventListener("submit", checkForm);

function checkForm(event) {
    event.preventDefault();
    let firstName = form.querySelector("#firstName").value.trim();
    if(firstName.length >= 2) {
        document.querySelector(".error").style.display = "none";
    }
    else {
        document.querySelector(".error").style.display = "block";
    }
}
