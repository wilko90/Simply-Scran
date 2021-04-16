
function sendMail(submitForm) {
    emailjs.send("service_edctnvu", "template_8qrafai", {
        "from_name": submitForm.name.value,
        "from_subject": submitForm.subject.value,
        "from_phone": submitForm.phone.value,
        "from_email": submitForm.email.value,
        "from_message": submitForm.message.value,
    })
        .then(
            function (response) {
                console.log("SUCCESS", response);
            },
            function (error) {
                console.log("FAILED", error);
            }
        );
    return false;  // To block from loading a new page
}

$('#contactForm').submit(function (e) {
    e.preventDefault();
    // Coding
    $('#contactModal').modal('toggle'); //or  $('#IDModal').modal('hide');
    return false;
});

