import Link from 'next/link';
import React from 'react';

const TermsAndConditions = () => {
  const containerStyle = {
    maxWidth: '800px',
    margin: 'auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.6',
  };

  const sectionTitleStyle = {
    fontSize: '22px',
    fontWeight: 'bold',
    marginTop: '20px',
  };

  const contactInfoStyle = {
    marginTop: '10px',
  };

  return (
    <div className="container">
      <div className="cs_height_50 cs_height_lg_50" />
      <div style={containerStyle}>
        <div className="cs_height_50 cs_height_lg_50" />
        <h1>Terms and Conditions</h1>
        <p>
          <strong>Effective Date:</strong> January 27, 2025
        </p>

        <h2 style={sectionTitleStyle}>1. Acceptance of Terms</h2>
        <p>
          By accessing our services, you acknowledge that you have read,
          understood, and agreed to be bound by these Terms and Conditions...
        </p>

        <h2 style={sectionTitleStyle}>2. Services Provided</h2>
        <p>
          Vinita Women’s Hospital offers medical consultations, diagnostic
          services, treatments, and other healthcare services...
        </p>

        <h2 style={sectionTitleStyle}>3. User Responsibilities</h2>
        <ul>
          <li>
            Provide accurate and up-to-date personal and medical information.
          </li>
          <li>Use our website and services for lawful purposes only.</li>
          <li>Refrain from engaging in disruptive activities.</li>
        </ul>

        <h2 style={sectionTitleStyle}>
          4. Appointment Scheduling and Cancellation
        </h2>
        <ul>
          <li>
            Appointments can be scheduled online, via phone, or in person.
          </li>
          <li>
            Notify us at least 24 hours in advance for cancellations or
            rescheduling.
          </li>
          <li>No-shows may result in applicable fees.</li>
        </ul>

        <h2 style={sectionTitleStyle}>5. Payments and Billing</h2>
        <ul>
          <li>Payments must be made per our pricing policies.</li>
          <li>
            Accepted payment methods: cash, card payments, and insurance claims.
          </li>
          <li>Late payments may result in penalties.</li>
        </ul>

        <h2 style={sectionTitleStyle}>6. Medical Disclaimer</h2>
        <p>
          The medical information provided is for general purposes and should
          not replace professional medical advice.
        </p>

        <h2 style={sectionTitleStyle}>7. Privacy</h2>
        <p>
          Refer to our Privacy Policy for details on data collection, use, and
          protection.
        </p>

        <h2 style={sectionTitleStyle}>8. Intellectual Property</h2>
        <p>
          All website content is the intellectual property of Vinita Women’s
          Hospital.
        </p>

        <h2 style={sectionTitleStyle}>9. Limitation of Liability</h2>
        <p>
          We are not liable for damages resulting from service use, inaccurate
          user information, or unforeseen medical outcomes.
        </p>

        <h2 style={sectionTitleStyle}>10. Termination of Services</h2>
        <p>
          We reserve the right to refuse services to those violating these Terms
          and Conditions.
        </p>

        <h2 style={sectionTitleStyle}>11. Changes to Terms</h2>
        <p>We may update these Terms and Conditions periodically.</p>

        <h2 style={sectionTitleStyle}>12. Governing Law</h2>
        <p>
          These Terms are governed by the laws of India, with jurisdiction in
          Gujarat.
        </p>

        <h2 style={sectionTitleStyle}>13. Contact Us</h2>
        <p style={contactInfoStyle}>
          <strong>Address:</strong> A-1, 4th Floor, Medipolis, Deesa Highway,
          Palanpur, Gujarat 385001
        </p>
        <p style={contactInfoStyle}>
          <strong>Phone:</strong>{' '}
          <Link href={'tel:+919558908108'}>+91-9558908108</Link> /{' '}
          <Link href={'tel:+919116889079'}>9116889079</Link>
        </p>
        <p style={contactInfoStyle}>
          <strong>Email:</strong>{' '}
          <Link href={'mailto:info@vinitawomenshospital.in'}>
            info@vinitawomenshospital.in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
