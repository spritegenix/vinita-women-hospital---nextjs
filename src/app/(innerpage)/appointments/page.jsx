'use client';
import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import SectionHeading from '@/app/Components/SectionHeading';
import React, { useState } from 'react';

const Page = () => {
  const headingData = {
    title: 'Appointments',
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    services: '',
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
      const response = await fetch('/appointment.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody,
      });

      if (!response.ok) {
        throw new Error('Failed to send to appointment.php');
      }

      const result = await response.text();
      setResponseMessage(result);
      setIsSuccess(true);

      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        number: '',
        services: '',
        message: '',
      });

      // Hide success message after 2 seconds
      setTimeout(() => {
        setIsSuccess(false);
        setResponseMessage('');
      }, 2000);
    } catch (error) {
      setResponseMessage(
        'Oops! An error occurred and your message could not be sent.'
      );
      setIsSuccess(false);
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

  const data = {
    sectionSubtitle: 'MAKE APPOINTMENTS',
    sectionTitle: 'Booking Now Appointments',
    formFields: [
      { type: 'text', name: 'name', placeholder: 'Name' },
      { type: 'email', name: 'email', placeholder: 'Email' },
      { type: 'text', name: 'number', placeholder: 'Phone Number' },
    ],
    services: [
      { value: 'Infertility', label: 'Infertility' },
      { value: 'Laparoscopy', label: 'Laparoscopy' },
      { value: 'Gynecology', label: 'Gynecology' },
      { value: 'Maternity', label: 'Maternity' },
    ],
    appointmentDate: {
      type: 'text',
      name: 'message',
      placeholder: 'Message',
    },
    buttonText: 'Make an appointment',
  };

  return (
    <div>
      <Section
        className="cs_page_heading cs_bg_filed cs_center"
        backgroundImage="/assets/img/home/about-page_heading_bg.webp"
      >
        <PageHeading data={headingData} />
      </Section>

      {/* Start Appointment Section */}
      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className="cs_appointment"
      >
        <div className="container">
          <div className="cs_appointment_form_wrapper">
            <SectionHeading
              SectionSubtitle={data.sectionSubtitle}
              SectionTitle={data.sectionTitle}
              variant="text-center"
            />
            <div className="cs_height_40 cs_height_lg_35" />
            <form
              className="cs_appointment_form row cs_gap_y_30"
              onSubmit={handleSubmit}
            >
              {data.formFields.map((field, index) => (
                <div className="col-md-12" key={index}>
                  <input
                    type={field.type}
                    name={field.name}
                    className="cs_form_field"
                    placeholder={field.placeholder}
                    value={formData[field.name]}
                    onChange={handleChange}
                    required
                  />
                </div>
              ))}

              <div className="col-md-12">
                <select
                  name="services"
                  className="cs_form_field"
                  value={formData.services}
                  onChange={handleChange}
                  required
                >
                  <option value="">Choose Service</option>
                  {data.services.map((service, index) => (
                    <option value={service.value} key={index}>
                      {service.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-md-12">
                <textarea
                  rows={4}
                  name="message"
                  className="cs_form_field"
                  placeholder={data.appointmentDate.placeholder}
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-12">
                <button
                  type="submit"
                  className="cs_btn cs_style_1 cs_white_color"
                  disabled={isLoading} // Disable button while loading
                >
                  {isLoading
                    ? 'Sending...'
                    : isSuccess
                    ? 'Sent'
                    : 'Make an appointment'}
                </button>
                <div
                  className={`ajax-response ${isSuccess ? 'success' : 'error'}`}
                >
                  {responseMessage}
                </div>
              </div>
            </form>
          </div>
        </div>
      </Section>
      {/* End Appointment Section */}
    </div>
  );
};

export default Page;
