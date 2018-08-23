function emailValidation(email) {
    let isValid = /^[a-zA-Z0-9]+@[a-z]+\.[a-z]+$/.test(email);
    if (isValid) {
        console.log("Valid");
    } else {
        console.log("Invalid");
    }
}

emailValidation("valid@email.bg");
emailValidation("invalid@emai1.bg");
emailValidation("invalid@email.bg.dd");