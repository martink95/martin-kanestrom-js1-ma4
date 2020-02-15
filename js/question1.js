const form = document.querySelector("#contactForm");

form.addEventListener("submit", checkForm);

var checkForm = (event) => {
    event.preventDefault();
    let firstName = form.querySelector("#firstName").value.trim();
    if(firstName.length >= 2) {
        alert(firstName);
    }
    else {
        document.querySelector(".error").style.display = "block";
        
        
    }
}
