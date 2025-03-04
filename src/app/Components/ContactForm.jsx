'use client';
import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    phone: '',
    message: '',
  });
  const [responseMessage, setResponseMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setResponseMessage('');
    const formBody = new URLSearchParams(formData).toString();
    try {
      const response = await fetch('/mail.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody,
      });
      if (!response.ok) {
        throw new Error('Failed to send to mail.php');
      }

      const result = await response.text();
      setResponseMessage(result);
      setIsSuccess(true);
      setFormData({ name: '', email: '', subject: '', phone: '', message: '' });

      setTimeout(() => {
        setIsSuccess(false);
        setResponseMessage('');
      }, 2000);
    } catch (error) {
      setResponseMessage(
        'Oops! An error occurred and your message could not be sent.'
      );
    } finally {
      setIsLoading(false);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <form
      className="cs_contact_form row cs_gap_y_30 home_form_area"
      onSubmit={handleSubmit}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="col-md-6">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="cs_form_field"
          placeholder="Your name"
        />
      </div>
      <div className="col-md-6">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="cs_form_field"
          placeholder="Your email"
        />
      </div>
      <div className="col-md-6">
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="cs_form_field"
          placeholder="Your Subject"
        />
      </div>
      <div className="col-md-6">
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="cs_form_field"
          placeholder="Your phone"
        />
      </div>
      <div className="col-lg-12">
        <textarea
          rows="5"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="cs_form_field"
          placeholder="Your Message"
        ></textarea>
      </div>
      <div className="col-lg-12">
        <button
          type="submit"
          className="cs_btn cs_style_1 cs_color_1 z-1 position-relative"
          disabled={isLoading}
        >
          {isLoading ? 'Sending...' : isSuccess ? 'Sent' : 'Send Message'}
        </button>
        <div className={`ajax-response ${isSuccess ? 'success' : 'error'}`}>
          {responseMessage}
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
