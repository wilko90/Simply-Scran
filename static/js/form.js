// Form used from code institute tutotials and edited
// Connected with https://www.emailjs.com/
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
                this.formSubmit.innerHTML = "Form Submitted";
                this.formSubmit.classList.remove("btn-primary");
                this.formSubmit.classList.add("btn-success");
                this.formSubmit.classList.add("disabled");
                this.formSubmit.type = "button";
            },
            function (error) {
                console.log("FAILED", error);
            }
        );
    return false;  // To block from loading a new page
}
// Close modal after submit successful 

$('#contactForm').submit(function (e) {
    e.preventDefault();
    
    $('#contactModal').modal('toggle'); 
    return false;
});

