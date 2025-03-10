import Section from '@/app/Components/Section';
import React from 'react';
import PageHeading from '@/app/Components/PageHeading';
import Image from 'next/image';
import { imageSwiperSection } from '@/app/(home1)/page';

const headingData = {
  title: 'Gallery',
};
export const metadata = {
  title: "Gallery - Vinita Women's Hospital | Our Facilities & Patient Care",
  description:
    "Browse our gallery to see the advanced facilities, maternity wards, and patient care services at Vinita Women's Hospital. Quality healthcare with modern technology.",
  keywords: [
    "Vinita Women's Hospital gallery",
    'Maternity ward images',
    'Hospital facilities',
    'Patient care photos',
    'IVF center tour',
    'Best hospital environment',
  ],
};

const Gallery = () => {
  return (
    <div>
      {/* <Section
        className={'cs_page_heading cs_bg_filed cs_center'}
        backgroundImage="/assets/img/page_heading_bg.jpg"
      >
        <PageHeading data={headingData} />
      </Section> */}

      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
      >
        <div className="gallery-container">
          {imageSwiperSection.map((imageSrc, index) => (
            <div className="gallery-item" key={index}>
              <Image
                src={imageSrc.image}
                width={400}
                height={600}
                alt={`Gallery Image ${imageSrc.id}`}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Gallery;
