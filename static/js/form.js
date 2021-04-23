// Send form details to email account
function sendMail(submitForm) {
    emailjs.send("service_edctnvu", "template_8qrafai", {
        "from_name": submitForm.name.value,
        "from_subject": submitForm.subject.value,
        "from_phone": submitForm.phone.value,
        "from_email": submitForm.email.value,
        "from_message": submitForm.message.value,
    }).then(
        // Pop up response if successful, auto closes after 2000 miliseconds
        function (response) {
            Swal.fire({
                title: 'Thank you for contacting us',
                timer: 2000,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading()
                    timerInterval = setInterval(() => {
                        const content = Swal.getContent()
                        if (content) {
                            const b = content.querySelector('b')
                            if (b) {
                                b.textContent = Swal.getTimerLeft()
                            }
                        }
                    })
                },
                willClose: () => {
                    clearInterval(timerInterval)
                }
            }).then((result) => {
                if (result.dismiss === Swal.DismissReason.timer) {
                    console.log('I was closed by the timer');
                }
            });
        },
        // Pop up response when error
        function (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong, please try again!',
            });
        });
}

// Close modal after submit successful 
$('#contactForm').submit(function (e) {
    e.preventDefault();
    $('#contactModal').modal('toggle');
    return false;
});