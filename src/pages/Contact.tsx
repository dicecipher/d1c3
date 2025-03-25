import "./styles/Contact.scss";
import { useState } from "react";
import { Snackbar, Alert } from "@mui/material";
import emailjs from "@emailjs/browser";

function Contact() { 
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.subject && formData.message) {
      emailjs.send(
        "your_service_id",  
        "your_template_id", 
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "your_public_key"  
      )
      .then(() => {
        setSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
      })
      .catch((error) => console.error("Email sending failed:", error));
    }
  };

  const handleCloseSnackbar = () => {
    setSubmitted(false);
  };

  return (
    <div className="get-in-touch-container">
      <div className="get-in-touch-text-container">
        <h2>Get in Touch</h2>
        <p>Have a question or want to work together? Fill out the form and I'll get back to you soon!</p>
      </div>

      <div className="contact-form-container">
        <Snackbar
          open={submitted}
          autoHideDuration={4000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        >
          <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: "100%" }}>
            Message Sent Successfully! ✅
          </Alert>
        </Snackbar>
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" required />

          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" required />

          <label>Subject:</label>
          <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Enter subject" required />

          <label>Message:</label>
          <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Enter your message" required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
