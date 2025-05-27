// initialises EmailJS
(function() {emailjs.init("RCdu08nrSrMYyge1r"); // paste your User ID here
  })();


// Handle form submission
document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm("service_y2n7rtd", "template_maf7ppg", this)
    .then(() => {
      alert("Message sent!");
      this.reset();
    }, (error) => {
      console.error("FAILED...", error);
      alert("Failed to send message. Please try again.");
    });
});