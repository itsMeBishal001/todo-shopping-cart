import React, { useState } from "react";
import "./Contact.css";

/**
 * Contact component for submitting a contact form.
 *
 * @returns {JSX.Element} The Contact component.
 */
function Contact() {
  // State to hold form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // State to manage form submission status
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  /**
   * Handles input changes and updates the form data state.
   *
   * @param {Object} e - The event object containing input data.
   */
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  /**
   * Validates form data before submission.
   *
   * @returns {string} - Error message if validation fails, otherwise an empty string.
   */
  const validateForm = () => {
    const { name, email, message } = formData;
    if (!name || !email || !message) {
      return "All fields are required";
    }
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
      return "Please enter a valid email address";
    }
    return "";
  };

  /**
   * Handles form submission, including validation and simulated submission.
   *
   * @param {Object} e - The event object containing form submission data.
   */
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents default form submission behavior

    // Validate the form data
    const errorMessage = validateForm();
    if (errorMessage) {
      setError(errorMessage);
      return;
    }

    setLoading(true); // Set loading state to true during submission
    setError(""); // Clear previous errors
    setSuccess(""); // Clear previous success messages

    // Simulate form submission with a delay
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSuccess("Your message has been sent successfully!");
      setFormData({ name: "", email: "", message: "" }); // Clear form data
    } catch (e) {
      setError("There was an error submitting your message. Please try again.");
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        {/* Form group for the name input */}
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        {/* Form group for the email input */}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        {/* Form group for the message textarea */}
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        {/* Display error messages */}
        {error && <p className="error">{error}</p>}
        {/* Display success messages */}
        {success && <p className="success">{success}</p>}
        {/* Submit button with conditional text based on loading state */}
        <button type="submit" className="submit-btn" disabled={loading}>
          {loading ? "Sending..." : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default Contact;
