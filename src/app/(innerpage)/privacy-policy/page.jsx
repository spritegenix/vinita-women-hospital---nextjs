import SectionHeading from '@/app/Components/SectionHeading';
import Link from 'next/link';
import React from 'react';

const PrivacyPolicy = () => {
  const containerStyle = {
    maxWidth: '900px',
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
        <h1>Privacy Policy</h1>
        <p>
          <strong>Effective Date:</strong> January 27, 2025
        </p>

        <h2 style={sectionTitleStyle}>1. Introduction</h2>
        <p>
          Welcome to Vinita Women’s Hospital. We are committed to safeguarding
          your privacy and ensuring the protection of your personal
          information...
        </p>

        <h2 style={sectionTitleStyle}>2. Information We Collect</h2>
        <ul>
          <li>
            <strong>Personal Identification Information:</strong> Name, address,
            phone number, email, etc.
          </li>
          <li>
            <strong>Medical Information:</strong> Health history, treatment
            records, test results, etc.
          </li>
          <li>
            <strong>Payment Information:</strong> Billing details, insurance
            info, payment methods.
          </li>
          <li>
            <strong>Technical Data:</strong> IP address, browser type, access
            times, etc.
          </li>
        </ul>

        <h2 style={sectionTitleStyle}>3. How We Use Your Information</h2>
        <ul>
          <li>Provide medical services and treatment.</li>
          <li>Schedule and manage appointments.</li>
          <li>Process billing and insurance claims.</li>
          <li>Communicate with you regarding your care.</li>
          <li>Improve our services and website functionality.</li>
          <li>Comply with legal and regulatory requirements.</li>
        </ul>

        <h2 style={sectionTitleStyle}>4. Information Sharing and Disclosure</h2>
        <p>
          We may share your information with healthcare providers, insurance
          companies, third-party service providers, and legal authorities when
          required.
        </p>

        <h2 style={sectionTitleStyle}>5. Data Security</h2>
        <p>
          We implement appropriate technical and organizational measures to
          protect your personal information.
        </p>

        <h2 style={sectionTitleStyle}>6. Your Rights</h2>
        <ul>
          <li>Access and obtain a copy of your personal information.</li>
          <li>Request corrections to inaccurate or incomplete data.</li>
          <li>Withdraw consent where processing is based on consent.</li>
          <li>
            Lodge a complaint if you believe your rights have been violated.
          </li>
        </ul>

        <h2 style={sectionTitleStyle}>7. Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy periodically. Any changes will be
          posted on our website.
        </p>

        <h2 style={sectionTitleStyle}>8. Contact Us</h2>
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

export default PrivacyPolicy;
