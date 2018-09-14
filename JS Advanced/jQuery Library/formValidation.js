function validate() {
    let username = $('#username');
    let email = $('#email');
    let password = $('#password');
    let confirmPassword = $('#confirm-password');
    let companyNumber = $('#companyNumber');
    let companyInfo = $('#companyInfo');
    let isCompany = $('#company');
    let isValid = true;

    isCompany.on('change', function () {
        if (isCompany.is(":checked")) {
            companyInfo.css('display', 'block');
        } else {
            companyInfo.css('display', 'none');
        }
    })

    $('#submit').on('click', function (ev) {
        let isValid = true;
        ev.preventDefault();

        check(username, /^[A-Za-z0-9]{3,20}$/);
        check(email, /^.*@.*\..*$/);
        if (password.val() === confirmPassword.val()) {
            check(password, /^\w{5,15}$/);
            check(confirmPassword, /^\w{5,15}$/);
        } else {
            password.css("border", "solid red");
            confirmPassword.css("border", "solid red");
            isValid = false;
        }
        if (isCompany.is(":checked")) {
            check(companyNumber, /^\d{4}$/);
        }


        function check(element, regEx) {
            if (regEx.test(element.val())) {
                element.css("border", "none");
            } else {
                element.css("border", "solid red");
                isValid = false;
            }
        }


        if (isValid === true) {
            $('#valid').css('display', 'block');
        } else {
            $('#valid').css('display', 'none');
        }
    })

}
