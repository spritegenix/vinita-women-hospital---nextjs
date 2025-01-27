import CounterSection2 from '@/app/Components/FunSection/CounterSection2';
import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import ServiceSection4 from '@/app/Components/Service/ServiceSection4';
import React from 'react';

const headingData = {
  title: 'Our Service',
};

// const serviceData = {
//   serviceHeading: 'All Service:',
//   services: [
//     { title: 'Screening', url: '/' },
//     { title: 'Dental best service', url: '/' },
//     { title: 'Dedicate doctor best', url: '/' },
//     { title: 'Team can help achieve', url: '/' },
//     { title: 'Medical goals lab', url: '/' },
//   ],
//   mainImage: '/assets/img/home/service_bg-gynecology.webp',
//   serviceDetails: [
//     'It is a long established fact that a reader will be distracted restore inexpensive e-markets vis to is a long established fact that a reader will be distracted restore inexpensive e-markets vis to corporate intellectual capital. Holisticly reinvent compelling niche markets via scalable strategic. by the readable content of a page when looking. vis corporate intellectual capital. Holisticly reinvent compelling niche markets via scalabl etrategic.by the meadable content of a page when looking at its layout. The point to this singis that normal distribution of Medical',
//     'We is a long established fact that a reader will be distracted restore inexpensive e-markets vis tontellectual capital. Holisticly reinvent compelling niche markets via scalable strategic. by the readable content of a page when looking. vis corporate intellectual capital. vis corporate intellectual capitalh olisticly reinvent compelling niche markets via scalable strategic. by the readable content of a page when looking.',
//   ],
//   footerText:
//     'We is a long established fact that a reader will be distractedrestore inexpensive e-markets vis tontellectual capital. Holisticly reinvent compelling niche markets via scalable strategic. by the readable content of a page when looking. vis corporate intellectual capital. vis corporate intellectual capitalh olisticly reinvent compelling niche markets via scalable strategic. by the readable content of a page when looking.',
//   additionalImages: '/assets/img/service_details_2.jpg',
//   iconBoxes: [
//     {
//       index: '01',
//       title: 'Service & Check',
//       subtitle: 'Medical competitor research startup to financial',
//       icon: '/assets/img/icons/service_icon_1.png',
//       bgImage: '/assets/img/service_bg.jpg',
//       link: '/',
//     },
//     {
//       index: '02',
//       title: 'Medical Care',
//       subtitle: 'Medical competitor research startup to financial',
//       icon: '/assets/img/icons/service_icon_2.png',
//       bgImage: '/assets/img/service_bg.jpg',
//       link: '/',
//     },
//   ],

//   subtitle:
//     'There are many variations of pass available this medical service the team',
//   readMoreUrl: '/',
//   readMoreText: 'READ MORE +',
// };
// const serviceData = {
//   serviceHeading: 'Gynecology Services:',
//   services: [
//     { title: 'Routine Gynecological Exams' },
//     { title: 'Menstrual Disorders Treatment' },
//     { title: 'PCOS and Hormonal Imbalance Management' },
//     { title: 'Fibroid and Ovarian Cyst Care' },
//     { title: 'Gynecological Surgeries' },
//   ],
//   mainImage: '/assets/img/home/service_bg-gynecology.webp',
//   serviceDetails: [
//     'Our gynecology department offers expert care for conditions such as menstrual irregularities, PCOS, hormonal imbalances, and fibroids.',
//     'We also specialize in minimally invasive surgeries for gynecological issues, ensuring safe and effective outcomes.',
//   ],
//   footerText:
//     'Vinita Women’s Hospital is dedicated to providing personalized gynecological care with a focus on modern treatments and compassionate support. We understand the complexity of women’s health as Palanpur’s leading healthcare center dedicated to women. We treat women of all ages, addressing issues such as adolescence, pre-marital counseling, early pregnancy, sexual health, breast care, hysterectomy, urine incontinence, gynecologic cancers and other gynecologic concerns.',
//   additionalImages: '/assets/img/service_details_2.jpg',
//   iconBoxes: [
//     {
//       index: '01',
//       title: 'Menstrual Care',
//       subtitle: 'Expert solutions for all menstrual health concerns.',
//       icon: '/assets/img/icons/service_icon_1.png',
//       bgImage: '/assets/img/service_bg.jpg',
//       link: '/menstrual-care',
//     },
//     {
//       index: '02',
//       title: 'Advanced Surgeries',
//       subtitle: 'Safe and modern gynecological surgeries.',
//       icon: '/assets/img/icons/service_icon_2.png',
//       bgImage: '/assets/img/service_bg.jpg',
//       link: '/gynecological-surgeries',
//     },
//   ],
//   subtitle: 'Empowering women with comprehensive gynecological services.',
//   readMoreUrl: '/gynecology-details',
//   readMoreText: 'READ MORE +',
// };
const serviceData = [
  {
    name: 'Gynecology',
    serviceHeading: 'Gynecology Services:',
    services: [
      { title: 'Routine Gynecological Exams' },
      { title: 'Menstrual Disorders Treatment' },
      { title: 'PCOS and Hormonal Imbalance Management' },
      { title: 'Fibroid and Ovarian Cyst Care' },
      { title: 'Gynecological Surgeries' },
    ],
    mainImage: '/assets/img/home/service_bg-gynecology.webp',
    serviceDetails: [
      'We offer specialized treatment for all gynecological issues, including menstrual irregularities, fibroids, endometriosis, and cancers. Our holistic, patient-focused approach ensures the best possible care for women’s health at every stage.',
      'We also specialize in minimally invasive surgeries for gynecological issues, ensuring safe and effective outcomes.',
    ],
    footerText:
      'Vinita Women’s Hospital is dedicated to providing personalized gynecological care with a focus on modern treatments and compassionate support. We understand the complexity of women’s health as Palanpur’s leading healthcare center dedicated to women. We treat women of all ages, addressing issues such as adolescence, pre-marital counseling, early pregnancy, sexual health, breast care, hysterectomy, urine incontinence, gynecologic cancers and other gynecologic concerns.',
    additionalImages: '/assets/img/home/gynecology_service_details_1.webp',
    iconBoxes: [
      {
        index: '01',
        title: 'Menstrual Care',
        subtitle: 'Expert solutions for all menstrual health concerns.',
        icon: '/assets/img/home/icons/egg.png',
        bgImage: '',
        link: '/menstrual-care',
      },
      {
        index: '02',
        title: 'Advanced Surgeries',
        subtitle: 'Safe and modern gynecological surgeries.',
        icon: '/assets/img/home/icons/medical.png',
        bgImage: '',
        link: '/gynecological-surgeries',
      },
    ],
    subtitle: 'Empowering women with comprehensive gynecological services.',
    readMoreUrl: '/gynecology-details',
    readMoreText: 'READ MORE +',
  },
  {
    name: 'Maternity Care',
    serviceHeading: 'Maternity Care:',
    services: [
      { title: 'Preconception Counseling' },
      { title: 'High-Risk Pregnancy Care' },
      { title: 'Normal and Cesarean Deliveries' },
      { title: 'Postpartum Care' },
    ],
    mainImage: '/assets/img/home/service_bg-maternity.webp',
    serviceDetails: [
      'We provide full-spectrum maternity care, covering prenatal, delivery, and post-delivery support. Our expert team ensures a smooth, safe pregnancy and birth experience, focusing on the health and well-being of both mother and baby.',
      'We provide support for normal, high-risk pregnancies, and Cesarean deliveries, with state-of-the-art monitoring and compassionate care.',
    ],
    footerText:
      'We specialize in comprehensive maternity care, offering services to ensure a safe pregnancy and delivery.',
    additionalImages: '/assets/img/home/maternity_service_details_1.webp',
    iconBoxes: [
      {
        index: '01',
        title: 'Prenatal Care',
        subtitle: 'Comprehensive care throughout pregnancy.',
        icon: '/assets/img/home/icons/mother.png',
        bgImage: '',
        link: '/prenatal-care',
      },
      {
        index: '02',
        title: 'Labor & Delivery',
        subtitle: 'Safe and supportive environment for childbirth.',
        icon: '/assets/img/home/icons/medical.png',
        bgImage: '',
        link: '/labor-delivery',
      },
    ],
    subtitle:
      'Providing comprehensive care for a healthy pregnancy and delivery.',
    readMoreUrl: '/maternity-care-details',
    readMoreText: 'READ MORE +',
  },
  {
    name: 'Infertility Treatments',
    serviceHeading: 'Infertility Treatments:',
    services: [
      { title: 'In-Vitro Fertilization (IVF)' },
      { title: 'Intrauterine Insemination (IUI)' },
      { title: 'Egg / Semen Freezing / Cryopreservation' },
      { title: 'Genetic Counseling' },
    ],
    mainImage: '/assets/img/home/service_bg-infertility.webp',
    serviceDetails: [
      'Our advanced fertility services include the region’s first modular IVF lab, offering solutions like IVF, IUI, ICSI, and egg freezing. Our experts provide personalized care to help couples achieve successful conception and parenthood.',
      'Our fertility experts offer personalized care with the latest technologies and genetic counseling for optimal outcomes.',
    ],
    footerText:
      'With cutting-edge technology and compassionate care, we provide advanced infertility treatments to support your journey to parenthood.',
    additionalImages: '/assets/img/home/infertility_service_details_1.webp',
    iconBoxes: [
      {
        index: '01',
        title: 'IVF Services',
        subtitle: 'Expert IVF treatments with the highest success rates.',
        icon: '/assets/img/home/icons/infertility.png',
        bgImage: '',
        link: '/ivf-services',
      },
      {
        index: '02',
        title: 'Genetic Counseling',
        subtitle: 'Comprehensive support to understand genetic factors.',
        icon: '/assets/img/home/icons/dna.png',
        bgImage: '',
        link: '/genetic-counseling',
      },
    ],
    subtitle:
      'Helping couples with advanced infertility treatments to realize their dream of parenthood.',
    readMoreUrl: '/infertility-treatment-details',
    readMoreText: 'READ MORE +',
  },
  {
    name: 'Laparoscopic Surgery',
    serviceHeading: 'Laparoscopic Surgery:',
    services: [
      { title: 'Minimally Invasive Surgeries' },
      { title: 'Hysterectomy' },
      { title: 'Ovarian Cyst Removal' },
      { title: 'Endometriosis Treatment' },
    ],
    mainImage: '/assets/img/home/service_bg-laparoscopy.webp',
    serviceDetails: [
      'We use cutting-edge 3D laparoscopy in our modular operation theater for minimally invasive surgeries. This method offers quicker recovery, reduced pain, and fewer complications for a variety of gynecological conditions and surgeries.',
      'We specialize in minimally invasive procedures such as hysterectomy, ovarian cyst removal, and endometriosis treatment.',
    ],
    footerText:
      'With the latest laparoscopic technology, we offer safer surgeries with faster recovery times and minimal discomfort.',
    additionalImages: '/assets/img/home/laparoscopic_service_details_1.webp',
    iconBoxes: [
      {
        index: '01',
        title: 'Minimally Invasive Procedures',
        subtitle: 'Advanced laparoscopic surgeries with shorter recovery.',
        icon: '/assets/img/home/icons/medical.png',
        bgImage: '',
        link: '/minimally-invasive',
      },
      {
        index: '02',
        title: 'Surgical Expertise',
        subtitle:
          'Expert surgical team for gynecological health and wellness issues.',
        icon: '/assets/img/home/icons/operation-theatre.png',
        bgImage: '',
        link: '/gynecological-surgeries',
      },
    ],
    subtitle:
      'Offering minimally invasive surgeries for effective treatment and faster recovery.',
    readMoreUrl: '/laparoscopy-surgery',
    readMoreText: 'READ MORE +',
  },
];

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

const services = [
  { id: 'gynecology', name: 'Gynecology Services' },
  { id: 'maternity-care', name: 'Maternity Care' },
  { id: 'infertility-treatments', name: 'Infertility Treatments' },
  { id: 'laparoscopic-surgery', name: 'Laparoscopic Surgery' },
];

export async function generateStaticParams() {
  return services.map((service) => ({
    id: service.id, // Provide the possible `id` values
  }));
}

const page = () => {
  return (
    <div>
      <Section
        className={'cs_page_heading cs_bg_filed cs_center'}
        backgroundImage="/assets/img/home/service-page_heading_bg.webp"
      >
        <PageHeading data={headingData} />
      </Section>

      {/* Start Service Details Section */}
      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="70"
        bottomSpaceMd="120"
      >
        <ServiceSection4 data={serviceData} />
      </Section>
      {/* End Service Details Section */}

      {/* Start Counter Section */}
      {/* <Section bottomSpaceLg="70" bottomSpaceMd="120">
        <CounterSection2 data={counterData} />
      </Section> */}
      {/* End Counter Section */}
    </div>
  );
};

export default page;
