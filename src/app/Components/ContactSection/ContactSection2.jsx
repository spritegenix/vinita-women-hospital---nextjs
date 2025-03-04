'use client';
import { useEffect } from 'react';
import loadBackgroudImages from '../Common/loadBackgroudImages';
import Image from 'next/image';
import ContactForm from '../ContactForm';

const ContactSection2 = () => {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <section className="cs_card cs_style_3 cs_gray_bg position-relative">
      <div className="cs_height_70 cs_height_lg_70"></div>
      <div className="container">
        <div className="row cs_gap_y_40">
          <div className="col-lg-6">
            <div className="cs_section_heading cs_style_1">
              <p className="cs_section_subtitle cs_accent_color">
                <span className="cs_shape_left"></span>CONTACT US
              </p>
              <h2 className="cs_section_title">Make An Appointment</h2>
            </div>
            <div className="cs_height_25 cs_height_lg_25"></div>
            <ContactForm />
          </div>
          <div className="col-lg-6 d-none d-lg-flex">
            <div
              className="cs_solution_thumbnail cs_bg_filed"
              data-background="/assets/img/home/medical_solution_1.webp"
            ></div>
          </div>
        </div>
      </div>
      <div className="cs_solution_shape position-absolute">
        <Image
          src="/assets/img/stethoscope.png"
          alt="img"
          width={304}
          height={399}
        />
      </div>
      <div className="cs_height_30 cs_height_lg_40"></div>
    </section>
  );
};

export default ContactSection2;
