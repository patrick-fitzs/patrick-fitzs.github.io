// initialises EmailJS with code
(function() {
    emailjs.init("RCdu08nrSrMYyge1r");
  })();


// Handle form submission
document.getElementById("contact-form").addEventListener("submit", function(e) {
  //this prevents page reset when send button pressed
    e.preventDefault();

    // uses emailjs to send 'this' which refers to the form . codes are service id and temp id for emailJs
  emailjs.sendForm("service_y2n7rtd", "template_maf7ppg", this)
    .then(() => {
        // if message sent successfully
      alert("Message sent!");
      // after do this, reset forms
      this.reset();
    }, (error) => {
        // if error log it to console and alert that message to user
      console.error("FAILED...", error);
      alert("Failed to send message. Please try again.");
    });
});