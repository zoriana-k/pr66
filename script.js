function checkIt() {
    var email = document.forms.mailer.Email.value;
    var subject = document.forms.mailer.Subject.value;
    var message = document.forms.mailer.Message.value;

    if (email === "") {
        alert("Будь ласка, введіть адресу e-mail.");
        document.forms.mailer.Email.focus();
        return false;
    }

    if (subject === "") {
        alert("Будь ласка, введіть тему.");
        document.forms.mailer.Subject.focus();
        return false;
    }

    if (message === "") {
        alert("Будь ласка, напишіть повідомлення.");
        document.forms.mailer.Message.focus();
        return false;
    }

    return true; // Все заповнено правильно
}

function msg() {
    var subject = encodeURIComponent(document.mailer.Subject.value);
    var body = encodeURIComponent(document.mailer.Message.value);
    document.mailer.action = "mailto:astra1990@meta.ua?subject=" + subject + "&body=" + body;
}
