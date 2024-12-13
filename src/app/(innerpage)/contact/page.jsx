import ContactSection from '@/app/Components/ContactSection';
import LocationMap from '@/app/Components/LocationMap/Index';
import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import React from 'react';

const headingData = {
  backgroundImage: '/assets/img/page_heading_bg.jpg',
  title: 'Contact Us',
};

const contactData = {
  sectionSubtitle: 'CONTACT US',
  SectionTitle: 'Make An Appointment',
  teethShapeImg: '/assets/img/icons/hero_shape_3.png',
  contactImg: '/assets/img/home/medical_solution_1.webp',
  iconBox: {
    style: 'cs_style_4',
    icon: '/assets/img/icons/call_icon_1.png',
    title: 'Emergency Call',
    subtitle: '24/7 – Support and easy',
  },
};

const mapData = {
  mapSrc:
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14559.522579574745!2d72.4065251!3d24.1759183!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395ceb5682acbbcd:0x8b34c4288ee39ecd!2sVinita%20Women's%20Hospital%20-%20Best%20IVF%20Centre%20%7C%20Laparoscopic%20Gynecologist%20%7C%20Maternity%20and%20Sonography%20Centre%20in%20Palanpur!5e0!3m2!1sen!2sin!4v1733979593158!5m2!1sen!2sin",
};

const page = () => {
  return (
    <div>
      <Section
        className={'cs_page_heading cs_bg_filed cs_center'}
        backgroundImage="/assets/img/home/about-page_heading_bg.webp"
      >
        <PageHeading data={headingData} />
      </Section>

      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
      >
        <ContactSection reverseOrder={true} data={contactData} />
      </Section>

      <Section bottomSpaceLg="0" bottomSpaceMd="0">
        <LocationMap mapSrc={mapData.mapSrc} />
      </Section>
    </div>
  );
};

export default page;
