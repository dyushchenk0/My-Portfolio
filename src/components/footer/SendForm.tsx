'use client'

import {useState} from "react";

export default function SendForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: ""
  });

  const validateEmail = (email: string) => {
    if (!email) return "Email is required"

    if (email.includes(" ")) return "Email cannot contain space"

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!emailRegex.test(email)) return "Please enter a valid email address"

    return "";
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const {name, value} = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (name === "email") {
      setErrors(prev => ({
        ...prev,
        email: ""
      }));
    }
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const emailError = validateEmail(formData.email);

    if (emailError) {
      setErrors(prev => ({...prev, email: emailError}));
      return;
    }

    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }
  };


  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const {name, value} = e.target

    if (name === "email") {
      const error = validateEmail(value)

      setErrors(prev => ({
        ...prev,
        email: error
      }))
    }
  }

  return (
    <form className="contact__form" onSubmit={handleSubmit}>
      <div className="contact__form-field">
        <input
          className="contact__form-input"
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div
        className="contact__form-field"
        onSubmit={handleSubmit}
      >
        <input
          value={formData.email}
          onChange={handleChange}
          className="contact__form-input"
          type="email"
          id="email"
          name="email"
          placeholder="Your Email"
          onBlur={handleBlur}
          required
        />
        {errors.email && (
          <span className="error-text">
    {errors.email}
  </span>
        )}
      </div>
      <div className="contact__form-field">
        <textarea
          className="contact__form-input"
          name="message"
          rows={5}
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      <button
        className="button button__contact"
        type="submit"
      >Send Message
      </button>
    </form>
  )
}