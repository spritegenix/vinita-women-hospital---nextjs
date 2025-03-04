import About from '@/app/Components/About';
import CtaSection1 from '@/app/Components/CtaSection/CtaSection1';
import CounterSection2 from '@/app/Components/FunSection/CounterSection2';
import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import TeamSection from '@/app/Components/TeamSection';
import React from 'react';
import { aboutData } from '@/app/(home1)/page';
import { ctaData1 } from '@/app/(home1)/page';
import { teamData } from '@/app/(home1)/page';
import TeamSection1 from '@/app/Components/TeamSection/TeamsSection1';
import Head from 'next/head';

const headingData = {
  title: 'About Page',
};

const counterData = [
  {
    iconSrc: '/assets/img/icons/counter_icon_1.png',
    countTo: 500,
    suffix: '+',
    title: 'Families Created',
  },
  {
    iconSrc: '/assets/img/icons/counter_icon_2.png',
    countTo: 50,
    suffix: '+',
    title: 'Years of Combined Expertise',
  },
  {
    iconSrc: '/assets/img/icons/counter_icon_3.png',
    countTo: 1000,
    suffix: '+',
    title: 'Successful Procedures',
  },
  {
    iconSrc: '/assets/img/icons/counter_icon_4.png',
    countTo: 10,
    suffix: '+',
    title: 'Awards & Recognitions',
  },
];
export const metadata = {
  title: "About Us - Vinita Women's Hospital | Trusted Maternity & IVF Care",
  description:
    "Learn about Vinita Women's Hospital, a trusted name in maternity, gynecology, and IVF treatments. Our expert team provides comprehensive women's healthcare services.",
  keywords: [
    "About Vinita Women's Hospital",
    'Maternity hospital history',
    "Women's healthcare services",
    'IVF specialists',
    'Gynecology experts',
    'Best pregnancy care',
  ],
};
const page = () => {
  return (
    <>
      <div className="about-page-area">
        <Section
          className={'cs_page_heading cs_bg_filed cs_center'}
          backgroundImage="/assets/img/home/page_heading_bg.webp"
        >
          <PageHeading data={headingData} />
        </Section>
        {/* Start About Section */}

        {/* Start About Section */}
        <Section
          topSpaceLg="70"
          topSpaceMd="120"
          bottomSpaceLg="80"
          bottomSpaceMd="120"
          className={'cs_about cs_style_1 position-relative'}
        >
          <About data={aboutData} />
        </Section>
        {/* End About Section */}

        {/* Start Counter Section */}

        <Section
          bottomSpaceLg="80"
          bottomSpaceMd="120"
          className="cs_counter_area_2"
        >
          <CounterSection2 data={counterData} />
        </Section>
        {/* End Counter Section */}

        {/* Start CTA Section */}
        <Section
          topSpaceLg="70"
          topSpaceMd="110"
          bottomSpaceLg="80"
          bottomSpaceMd="120"
          className={'cs_cta cs_style_2 cs_blue_bg cs_bg_filed cs_center'}
          backgroundImage="/assets/img/cta_bg_1.jpeg"
        >
          <CtaSection1 data={ctaData1} />
        </Section>
        {/* End CTA Section */}

        {/* Start Team Section */}
        <Section
          topSpaceLg="70"
          topSpaceMd="110"
          bottomSpaceLg="80"
          bottomSpaceMd="70"
        >
          {/* <TeamSection
          hr={true}
          variant={'cs_pagination cs_style_2'}
          data={teamData}
        /> */}
          <TeamSection1 data={teamData} />
        </Section>
        {/* End Team Section */}
      </div>
    </>
  );
};

export default page;
