"use client";

import AppData from "@data/app.json";

const ContactForm = () => {
  // Validation functions
  const validateEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const validatePhoneNumber = (phone) => {
    // Allow various phone number formats: +1234567890, 123-456-7890, (123) 456-7890, 1234567890
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phone === "" || phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ""));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    // Get form values
    const email = formData.get("user_email");
    const phoneNumber = formData.get("phoneNumber");

    // Clear previous error messages
    const errorElements = form.querySelectorAll(".error-message");
    errorElements.forEach((el) => el.remove());

    // Validate email
    if (!validateEmail(email)) {
      const emailInput = form.querySelector("#user_email");
      const errorDiv = document.createElement("div");
      errorDiv.className = "error-message";
      errorDiv.style.color = "red";
      errorDiv.style.fontSize = "12px";
      errorDiv.style.marginTop = "5px";
      errorDiv.textContent = "Please enter a valid email address";
      emailInput.parentNode.appendChild(errorDiv);
      return;
    }

    // Validate phone number if provided
    if (phoneNumber && !validatePhoneNumber(phoneNumber)) {
      const phoneInput = form.querySelector("#phoneNumber");
      const errorDiv = document.createElement("div");
      errorDiv.className = "error-message";
      errorDiv.style.color = "red";
      errorDiv.style.fontSize = "12px";
      errorDiv.style.marginTop = "5px";
      errorDiv.textContent = "Please enter a valid phone number";
      phoneInput.parentNode.appendChild(errorDiv);
      return;
    }

    const payload = {
      data: {
        name: formData.get("user_name"),
        email: formData.get("user_email"),
        phoneNumber: formData.get("phoneNumber"),
        content: formData.get("content"),
      },
    };

    const status = document.getElementById("contactFormStatus");

    try {
      const response = await fetch("/api/contact-us", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to send message");
      }

      console.log("SUCCESS!");
      status.innerHTML = "<h5>Thanks, your message is sent successfully.</h5>";
      status.style.display = "block";
      form.reset();
    } catch (error) {
      console.error("Submission error:", error);
      status.innerHTML = `<h5>Oops! ${error.message || "There was a problem submitting your form"}</h5>`;
      status.style.display = "block";
    }
  };

  return (
    <>
      {/* contact form */}
      <form onSubmit={handleSubmit} id="contactForm" className="mil-form">
        <div className="row">
          <div className="col-6 mil-mb30">
            <input
              type="text"
              placeholder="Name"
              name="user_name"
              id="user_name"
              className="mil-up"
              required="required"
            />
          </div>
          <div className="col-6 mil-mb30">
            <input
              type="email"
              id="user_email"
              className="mil-up"
              placeholder="Email"
              name="user_email"
              required="required"
            />
          </div>
          <div className="col-12 mil-mb30">
            <input
              type="tel"
              id="phoneNumber"
              className="mil-up"
              placeholder="Phone Number"
              name="phoneNumber"
            />
          </div>
          <div className="col-12">
            <textarea
              placeholder="Your message"
              name="content"
              id="content"
              className="mil-mb30 mil-up"
              required="required"
            />
            <div className="mil-up">
              <button className="mil-btn mil-c-gone" type="submit">
                Send Message
              </button>
            </div>

            <div
              className="form-status alert-success mil-p-30-0"
              id="contactFormStatus"
              style={{ display: "none" }}
            />
          </div>
        </div>
      </form>
      {/* contact form end */}
    </>
  );
};
export default ContactForm;
