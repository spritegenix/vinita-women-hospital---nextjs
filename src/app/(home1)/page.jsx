import React from 'react';
import HeroSection from '../Components/HeroSection';
import Section from '../Components/Section';
import CtaSection from '../Components/CtaSection';
import About from '../Components/About';
import CounterSection from '../Components/FunSection/CounterSection';
import Service from '../Components/Service';
import TeamSection from '../Components/TeamSection';
import BrandsSlider from '../Components/BrandsSection';
import ChooseUs from '../Components/ChooseUs';
import ProjectSection from '../Components/ProjectSection';
import CtaSection1 from '../Components/CtaSection/CtaSection1';
import MedicalTabSection from '../Components/MedicalTabSection';
import ContactSection2 from '../Components/ContactSection/ContactSection2';
import BlogSection from '../Components/BlogsSection';
import TeamsSection1 from '../Components/TeamSection/TeamsSection1';
import IvfSection from '../Components/Service/IvfSection';
import FaqSection from '../Components/Common/Accordian';
import SwiperSlider1 from '../Components/Common/SwiperSlider';
// color codes
// #695a55
// #fbb096
// #f79998
// #f68e99
// #f97d82
const heroData = {
  primarySlider: [
    {
      bgImageUrl: '/assets/img/Vinita-Website-Backgroud-2.png',
      title: 'Welcome to Vinita Women’s <span>Hospital.</span>',
      contactSubtitle:
        'Located in Palanpur, Gujarat, Vinita Women’s Hospital is dedicated to providing the best gynecological and fertility care for women. With advanced laparoscopy facilities and the region’s first modular IVF lab, our expert doctors offer the highest standard of medical care for a range of women’s health concerns.',
      contactSubtitl1:
        'Our Mission is to ensure that every woman receives personalized care, cutting-edge treatments, and the support she needs at every stage of her journey to health and wellness.',
      contactTitle: 'Receive Medical Service.',
      contact: 'Call Us at: +91-9558908108 / 9116889079',
      btnText1: 'Book Your Appointment',
      link: '/appointments',
      btnText2: 'Contact Now',
      link2: '/contact',
      iconImgUrl: '/assets/img/icons/hero_icon.png',
    },
  ],
  secondarySlider: [
    '/assets/img/Vinita-Website-Backgroud-2.png',
    '/assets/img/Vinita-Website-Backgroud-2.png',
    '/assets/img/Vinita-Website-Backgroud-2.png',
  ],
};

const ctaData = {
  imageUrl: '/assets/img/home/cta_img_1.webp',
  title: 'Compassion. Innovation. Trust.',
  subtitle:
    'Our three pillars to provide best care to patients. Compassions brings the healing; innovation helps to achieve miracles and trust provides hope!',
  buttonUrl: '/contact',
  buttonText: 'Contact Now',
};

export const aboutData = {
  sectionSubtitle: 'ABOUT US',
  sectionTitle: 'Empowering Women’s Health and Wellness',
  aboutText:
    'At Vinita Women’s Hospital, Unlock your fertility Journey. Let us guide you the journey of starting or expanding your family. Get personalized guidance and support every step of the way!',
  service:
    'We offer a wide range of medical services tailored to meet your unique needs. Discover the difference our dedicated team can make in your journey to wellness.',
  experienceYears: '5 years+ ',
  experienceTitle: 'Experience',
  videoUrl: 'https://www.youtube.com/embed/rRid6GCJtgc',
  videoText: 'How We Work',
  iconboxes: [
    {
      imgUrl: '/assets/img/icons/about_icon_1.png',
      title: 'Client Support',
      subtitle: 'But must explain to you medical of and pain was.',
    },
    {
      imgUrl: '/assets/img/icons/about_icon_2.png',
      title: 'Doctor Support',
      subtitle: 'But must explain to you medical of and pain was.',
    },
  ],

  btnUrl: '/about',
  btnText: 'About Us',
  sectionImgUrl: '/assets/img/about_section_img_1.png',
  headImgUrl: '/assets/img/home/about_section_img_1.webp',
};

export const countersData = [
  {
    iconUrl: '/assets/img/icons/counter_icon_1.png',
    number: '500+',
    suffix: '+',
    title: 'Families Created',
    description:
      'Compassion drives us to help families grow. Over 500 families have trusted us on their fertility journey.',
  },
  {
    iconUrl: '/assets/img/icons/counter_icon_2.png',
    number: '50+',
    suffix: '+',
    title: 'Years of Combined Expertise',
    description:
      'Innovation meets experience. Our team brings over 50 years of combined expertise in fertility and gynecology.',
  },
  {
    iconUrl: '/assets/img/icons/counter_icon_3.png',
    number: '1000+',
    suffix: '+',
    title: 'Successful Procedures',
    description:
      'Trust in results. Over 1,000 successful IVF and laparoscopic procedures performed with care.',
  },
  {
    iconUrl: '/assets/img/icons/counter_icon_4.png',
    number: '10+',
    suffix: '+',
    title: 'Awards & Recognitions',
    description:
      'Excellence recognized. Our commitment to quality has earned us over 10 prestigious awards.',
  },
];

export const serviceData = {
  subtitle: 'OUR SERVICES',
  title: 'High-Quality Services Tailored to Women’s Health',
  description:
    'We provide best-in-class services for gynecology and fertility issues. Our state-of-the-art facility at Medipolis, Palanpur is equipped with the most advanced technologies & infrastructure.',
  services: [
    {
      backgroundImage: '/assets/img/home/service_bg-infertility.webp',
      iconUrl: '/assets/img/home/icons/infertility.png',
      index: '01',
      title: 'Infertility',
      subtitle:
        'Our advanced fertility services include the region’s first modular IVF lab, offering solutions like IVF, IUI, ICSI, and egg freezing. Our experts provide personalized care to help couples achieve successful conception and parenthood.',
      link: '/service/infertility-treatments',
    },

    {
      backgroundImage: '/assets/img/home/service_bg-laparoscopy.webp',
      iconUrl: '/assets/img/home/icons/medical.png',
      index: '02',
      title: 'Laparoscopy',
      subtitle:
        'We use cutting-edge 3D laparoscopy in our modular operation theater for minimally invasive surgeries. This method offers quicker recovery, reduced pain, and fewer complications for a variety of gynecological conditions and surgeries.',
      link: '/service/laparoscopy-surgery',
    },
    {
      backgroundImage: '/assets/img/home/service_bg-gynecology.webp',
      iconUrl: '/assets/img/home/icons/fallopian-tubes.png',
      index: '03',
      title: 'Gynecology',
      subtitle:
        'We offer specialized treatment for all gynecological issues, including menstrual irregularities, fibroids, endometriosis, and cancers. Our holistic, patient-focused approach ensures the best possible care for women’s health at every stage.',
      link: '/service/gynecology',
    },
    {
      backgroundImage: '/assets/img/home/service_bg-maternity.webp',
      iconUrl: '/assets/img/home/icons/mother.png',
      index: '04',
      title: 'Maternity',
      subtitle:
        'We provide full-spectrum maternity care, covering prenatal, delivery, and post-delivery support. Our expert team ensures a smooth, safe pregnancy and birth experience, focusing on the health and well-being of both mother and baby.',
      link: '/service/maternity-care',
    },
    // {
    //   backgroundImage: '/assets/img/service_bg.jpg',
    //   iconUrl: '/assets/img/icons/service_icon_5.png',
    //   index: '05',
    //   title: 'Neurology',
    //   subtitle: 'Medical competitor research startup to financial',
    //   link: '/service/service-details',
    // },
    // {
    //   backgroundImage: '/assets/img/service_bg.jpg',
    //   iconUrl: '/assets/img/icons/service_icon_6.png',
    //   index: '06',
    //   title: 'Ophthalmology',
    //   subtitle: 'Medical competitor research startup to financial',
    //   link: '/service/service-details',
    // },
    // {
    //   backgroundImage: '/assets/img/service_bg.jpg',
    //   iconUrl: '/assets/img/icons/service_icon_7.png',
    //   index: '07',
    //   title: 'Dental Care',
    //   subtitle: 'Medical competitor research startup to financial',
    //   link: '/service/service-details',
    // },
    // {
    //   backgroundImage: '/assets/img/service_bg.jpg',
    //   iconUrl: '/assets/img/icons/service_icon_8.png',
    //   index: '08',
    //   title: 'Cardiology',
    //   subtitle: 'Medical competitor research startup to financial',
    //   link: '/service/service-details',
    // },
  ],
  footerIcon: '/assets/img/icons/service_footer_icon_1.png',
  footerText:
    'Delivering tomorrow’s healthcare for your family. Learn more about our comprehensive services designed for women’s health.',
  footerLink: '/service',
  footerLinkText: 'SEE MORE',
};

export const ivfData = {
  subtitle: 'Treatments',
  title: 'Infertility Treatments provided by Vinita Women’s Hospital',
  services: [
    {
      backgroundImage: '/assets/img/home/service_bg-infertility.webp',
      iconUrl: '/assets/img/home/icons/infertility.png',
      index: '01',
      title: 'Donor Treatments',
      subtitle:
        'The donor program may vary depending on the health problems of the infertile couple, from egg donation, and sperm donation to embryo donation.',
      link: '/service/donor-treatments',
    },
    {
      backgroundImage: '/assets/img/home/service_bg-infertility.webp',
      iconUrl: '/assets/img/home/icons/infertility.png',
      index: '02',
      title: 'Egg Freezing / Cryopreservation',
      subtitle:
        'Egg freezing, also known as mature oocyte cryopreservation, is the medical process of harvesting eggs from one’s ovaries and freezing them until the female is ready for pregnancy.',
      link: '/service/egg-freezing',
    },
    {
      backgroundImage: '/assets/img/home/service_bg-infertility.webp',
      iconUrl: '/assets/img/home/icons/infertility.png',
      index: '03',
      title: 'Laser Assisted Hatching (LAH)',
      subtitle:
        'The goal of LAH is to overcome all the odds that are preventing implantation or successful pregnancy. In laser-assisted hatching, a small crack is created before inserting the embryo in your uterus in the hope that this hatching helps in implantation of the embryo.',
      link: '/service/laser-assisted-hatching',
    },
    {
      backgroundImage: '/assets/img/home/service_bg-infertility.webp',
      iconUrl: '/assets/img/home/icons/infertility.png',
      index: '04',
      title: 'Ovulation Induction Timed Intercourse',
      subtitle:
        'A timed intercourse cycle is a strategic way of optimizing your fertile window by using medication and guidance from a medical team to stimulate egg production by the ovaries, induce ovulation, and improve chances for natural conception.',
      link: '/service/ovulation-induction',
    },
    {
      backgroundImage: '/assets/img/home/service_bg-infertility.webp',
      iconUrl: '/assets/img/home/icons/infertility.png',
      index: '05',
      title: 'IUI (Intrauterine Insemination)',
      subtitle:
        'Intrauterine insemination (IUI) is a procedure in Assisted Reproductive Technology (ART) wherein the best quality sperms are introduced into the uterus to fertilize the egg. The objective here is to bring the sperms as close to the egg as possible.',
      link: '/service/iui-treatments',
    },
    {
      backgroundImage: '/assets/img/home/service_bg-infertility.webp',
      iconUrl: '/assets/img/home/icons/infertility.png',
      index: '06',
      title: 'ICSI (Intracytoplasmic Sperm Injection)',
      subtitle:
        'Intracytoplasmic sperm injection (ICSI) is a specialized form of In Vitro Fertilization (IVF) in which a single sperm is injected directly into the egg for fertilization. ICSI is a safe and successful method for couples with male factor infertility, and can enhance the chances of fertilization for couples who had poor fertilization in a prior IVF round.',
      link: '/service/icsi-treatments',
    },
    {
      backgroundImage: '/assets/img/home/service_bg-infertility.webp',
      iconUrl: '/assets/img/home/icons/infertility.png',
      index: '07',
      title: 'Laparoscopy',
      subtitle:
        'Laparoscopy is a surgical and diagnostic procedure that enables the doctor to check a woman’s reproductive system. Laparoscopy can diagnose: Blocked fallopian tubes, Hydrosalpinx, Scar tissue build-up, Adhesions, Endometriosis, Fibroid, Ovarian cyst, Other anatomical abnormalities of the reproductive system.',
      link: '/service/laparoscopy',
    },
    {
      backgroundImage: '/assets/img/home/service_bg-infertility.webp',
      iconUrl: '/assets/img/home/icons/infertility.png',
      index: '08',
      title: 'Pre-Implantation Genetic Screening',
      subtitle:
        'Embryos can be tested for abnormal chromosomes before they are transferred to the uterus. This is called preimplantation genetic testing, or PGT. It is done in a lab, using in vitro fertilization (IVF).',
      link: '/service/preimplantation-genetic-screening',
    },
    {
      backgroundImage: '/assets/img/home/service_bg-infertility.webp',
      iconUrl: '/assets/img/home/icons/infertility.png',
      index: '09',
      title: 'IVF (In Vitro Fertilization)',
      subtitle:
        'In vitro fertilization (IVF) is a complex series of procedures used to help with fertility or prevent genetic problems and assist with the conception of a child. During IVF, mature eggs are collected (retrieved) from ovaries and fertilized by sperm in a lab. Then the fertilized egg (embryo) or eggs (embryos) are transferred to a uterus. One full cycle of IVF takes about three weeks.',
      link: '/service/ivf-treatments',
    },
  ],
  footerIcon: '/assets/img/icons/service_footer_icon_1.png',
  footerText:
    'Delivering tomorrow’s healthcare for your family. Learn more about our comprehensive services designed for women’s health.',
  footerLink: '/service',
  footerLinkText: 'SEE MORE',
};

export const teamData = {
  subtitle: 'OUR TEAM',
  title: "Meet Our Specialist's",
  sliderData: [
    {
      name: 'Dr. Chetanprakash R. Gupta',
      profession: 'IVF specialist',
      imageUrl: '/assets/img/home/Dr-Chetan-Gupta.webp',
      link: '/doctors/doctor-details',
      facebook: '/',
      pinterest: '/',
      twitter: '/',
      instagram: '/',
    },
    {
      name: 'Dr. Neha Raval',
      profession: 'Embryologist',
      imageUrl: '/assets/img/home/Dr-Neha-Raval.webp',
      link: '/doctors/doctor-details',
      facebook: '/',
      pinterest: '/',
      twitter: '/',
      instagram: '/',
    },
    // {
    //   name: 'Dr. Sophia Anderson',
    //   profession: 'Neurologist',
    //   imageUrl: '/assets/img/team_8.jpg',
    //   link: '/doctors/doctor-details',
    //   facebook: '/',
    //   pinterest: '/',
    //   twitter: '/',
    //   instagram: '/',
    // },
    // {
    //   name: 'Dr. Michael Thompson',
    //   profession: 'Neurologist',
    //   imageUrl: '/assets/img/team_5.jpg',
    //   link: '/doctors/doctor-details',
    //   facebook: '/',
    //   pinterest: '/',
    //   twitter: '/',
    //   instagram: '/',
    // },
    // {
    //   name: 'Dr. David Wilson',
    //   profession: 'Neurologist',
    //   imageUrl: '/assets/img/team_6.jpg',
    //   link: '/doctors/doctor-details',
    //   facebook: '/',
    //   pinterest: '/',
    //   twitter: '/',
    //   instagram: '/',
    // },
  ],
};

const brandData = [
  { image: '/assets/img/envato-logo.png', altText: 'Brand 1' },
  { image: '/assets/img/envato-logo.png', altText: 'Brand 2' },
  { image: '/assets/img/envato-logo.png', altText: 'Brand 3' },
  { image: '/assets/img/envato-logo.png', altText: 'Brand 4' },
  { image: '/assets/img/envato-logo.png', altText: 'Brand 5' },
  { image: '/assets/img/envato-logo.png', altText: 'Brand 6' },
];

export const sectionData = {
  subtitle: 'WHY CHOOSE US',
  title: 'Providing Compassionate Care with Expert Solutions.',
  services: [
    {
      iconUrl: '/assets/img/home/icons/microscope.png',
      title: 'Modular IVF Lab',
      subtitle:
        'Region’s first-ever modular IVF lab for advanced fertility treatments.',
    },
    {
      iconUrl: '/assets/img/home/icons/sonography.png',
      title: '3D/4D Sonography',
      subtitle:
        'High-precision anomaly scans and pregnancy monitoring with cutting-edge sonography.',
    },
    {
      iconUrl: '/assets/img/home/icons/dna-sample.png',
      title: 'Genetic Counselling',
      subtitle:
        'Pre-implantation genetic screening to minimize chromosomal abnormalities and ensure healthy pregnancies.',
    },
    {
      iconUrl: '/assets/img/home/icons/healthcare.png',
      title: 'Comprehensive Care',
      subtitle:
        'Providing complete gynecology and fertility solutions under one roof.',
    },
    // {
    //   iconUrl: '/assets/img/icons/service_icon_13.png',
    //   title: 'Medical Research',
    //   subtitle: 'Medical competitor research startup to financial',
    // },
    // {
    //   iconUrl: '/assets/img/icons/service_icon_14.png',
    //   title: 'Affordable Prices',
    //   subtitle: 'Medical competitor research startup to financial',
    // },
  ],
};

const projectData = {
  title: 'All The Great Work That<br> Medical Service',
  subtitle: 'OUR PORTFOLIO',
  description:
    'We are privileged to work with hundreds of future-thinking medial, including many of the world’s top hardware, software, and brands, feel safe and comfortable in establishing.',
  tabs: [
    { id: 'dental', label: 'Dental' },
    { id: 'cardiology', label: 'Cardiology' },
    { id: 'neurology', label: 'Neurology' },
    { id: 'medical', label: 'Medical' },
  ],
  tabData: [
    {
      id: 'dental',
      items: [
        {
          imgUrl: '/assets/img/project_1.jpg',
          title: 'Medical Of Working',
          subtitle:
            'We businesss standard chunk of Ipsum used since is Agency &amp; Star tup.',
          index: 1,
        },
        {
          imgUrl: '/assets/img/project_2.jpg',
          title: 'Medical Of Dental',
          subtitle:
            'We businesss standard chunk of Ipsum used since is Agency &amp; Star tup.',
          index: 2,
        },
        {
          imgUrl: '/assets/img/project_3.jpg',
          title: 'Laboratory Technologist',
          subtitle:
            'We businesss standard chunk of Ipsum used since is Agency &amp; Star tup.',
          index: 3,
        },
      ],
    },
    {
      id: 'cardiology',
      items: [
        {
          imgUrl: '/assets/img/project_1.jpg',
          title: 'Medical Of Working',
          subtitle:
            'We businesss standard chunk of Ipsum used since is Agency &amp; Star tup.',
          index: 1,
        },
        {
          imgUrl: '/assets/img/project_3.jpg',
          title: 'Laboratory Technologist',
          subtitle:
            'We businesss standard chunk of Ipsum used since is Agency &amp; Star tup.',
          index: 3,
        },
        {
          imgUrl: '/assets/img/project_2.jpg',
          title: 'Medical Of Dental',
          subtitle:
            'We businesss standard chunk of Ipsum used since is Agency &amp; Star tup.',
          index: 2,
        },
      ],
    },
    {
      id: 'neurology',
      items: [
        {
          imgUrl: '/assets/img/project_1.jpg',
          title: 'Medical Of Working',
          subtitle:
            'We businesss standard chunk of Ipsum used since is Agency &amp; Star tup.',
          index: 1,
        },
        {
          imgUrl: '/assets/img/project_3.jpg',
          title: 'Medical Of Working',
          subtitle:
            'We businesss standard chunk of Ipsum used since is Agency &amp; Star tup.',
          index: 1,
        },
        {
          imgUrl: '/assets/img/project_2.jpg',
          title: 'Medical Of Working',
          subtitle:
            'We businesss standard chunk of Ipsum used since is Agency &amp; Star tup.',
          index: 1,
        },
      ],
    },
    {
      id: 'medical',
      items: [
        {
          imgUrl: '/assets/img/project_3.jpg',
          title: 'Medical Of Working',
          subtitle:
            'We businesss standard chunk of Ipsum used since is Agency &amp; Star tup.',
          index: 1,
        },
        {
          imgUrl: '/assets/img/project_2.jpg',
          title: 'Medical Of Working',
          subtitle:
            'We businesss standard chunk of Ipsum used since is Agency &amp; Star tup.',
          index: 1,
        },
        {
          imgUrl: '/assets/img/project_1.jpg',
          title: 'Medical Of Working',
          subtitle:
            'We businesss standard chunk of Ipsum used since is Agency &amp; Star tup.',
          index: 1,
        },
      ],
    },
  ],
};

export const ctaData1 = {
  videoLink: 'https://youtu.be/1-U0rPskHV8?si=g_zYuW6oEqkPY8vR',
  videoButtonText: 'WATCH VIDEO',
  subtitle: 'OUR WATCH VIDEO',
  title: 'Professional Medical Care, Your Health is Our Priority',
  description:
    'At Vinita Women’s Hospital, we are dedicated to providing exceptional medical care with a focus on comfort, safety, and trust. Our partnerships with leading medical technology providers ensure state-of-the-art healthcare for our patients. Watch the video to learn more about our commitment to your health.',
  buttonLink: '/contact',
  buttonText: 'Discover How We Care',
  brandImage: '/assets/img/medical_brand.png',
};

const medicalTabsData = {
  subtitle: 'Service Offerings',
  title: 'Explore Our Service Offerings',
  tabsTitle: [
    {
      href: 'infertility',
      iconUrl: '/assets/img/home/icons/infertility_p.png',
      label: 'Infertility',
    },
    {
      href: 'laparoscopy',
      iconUrl: '/assets/img/home/icons/medical_p.png',
      label: 'Laparoscopy',
    },
    {
      href: 'gynecology',
      iconUrl: '/assets/img/home/icons/fallopian-tubes_p.png',
      label: 'Gynecology',
    },
    {
      href: 'maternity',
      iconUrl: '/assets/img/home/icons/mother_p.png',
      label: 'Maternity',
    },
  ],
  tabsData: [
    {
      id: 'infertility',
      imageSrc: '/assets/img/home/offerings04.webp',
      title: 'Specialized Infertility Treatments',
      subtitle:
        'Cutting-edge fertility solutions, including IVF, ICSI, egg freezing, and donor programs, to help couples realize their dream of parenthood.',
      points: [
        {
          icon: '/assets/img/icons/check_icon_1.png',
          text: 'Region’s first modular IVF lab for precise treatments.',
        },
        {
          icon: '/assets/img/icons/check_icon_1.png',
          text: 'Personalized counseling and support throughout the journey.',
        },
      ],
      linkHref: '/service/infertility-treatments',
      buttonText: 'Read More',
    },
    {
      id: 'laparoscopy',
      imageSrc: '/assets/img/home/offerings02.webp',
      title: 'Advanced Laparoscopic Procedures',
      subtitle:
        'Pioneering minimally invasive laparoscopic surgeries for gynecological and fertility-related issues, with high precision and faster recovery times.',
      points: [
        {
          icon: '/assets/img/icons/check_icon_1.png',
          text: 'World-class 3D laparoscopic operation theater.',
        },
        {
          icon: '/assets/img/icons/check_icon_1.png',
          text: 'Treatments for endometriosis, fibroids, and more.',
        },
      ],
      linkHref: '/service/laparoscopic-surgery',
      buttonText: 'Read More',
    },
    {
      id: 'gynecology',
      imageSrc: '/assets/img/home/offerings01.webp',
      title: 'Comprehensive Gynecology Services',
      subtitle:
        'Expert care for women’s reproductive health, offering diagnosis, treatments, and routine checkups for various gynecological conditions.',
      points: [
        {
          icon: '/assets/img/icons/check_icon_1.png',
          text: 'Personalized treatment plans for every patient.',
        },
        {
          icon: '/assets/img/icons/check_icon_1.png',
          text: 'Focus on preventive care and early diagnosis.',
        },
      ],
      linkHref: '/service/gynecology',
      buttonText: 'Read More',
    },
    {
      id: 'maternity',
      imageSrc: '/assets/img/home/offerings03.webp',
      title: 'Advanced Maternity Care',
      subtitle:
        'Comprehensive maternity services with a focus on mother and child health, ensuring a safe and comfortable delivery experience with expert support.',
      points: [
        {
          icon: '/assets/img/icons/check_icon_1.png',
          text: 'Experienced obstetricians available round-the-clock.',
        },
        {
          icon: '/assets/img/icons/check_icon_1.png',
          text: 'State-of-the-art facilities for prenatal and postnatal care.',
        },
      ],
      linkHref: '/service/maternity-care',
      buttonText: 'Read More',
    },
    // Add other tab data here
  ],
};

export const faqSection = [
  {
    id: '9311',
    question: 'Which is the best IVF center or fertility clinic in Palanpur?',
    answer:
      'At Vinita Women’s Hospital, we provide Palanpur’s best IF treatment facilities at the most affordable rate with advanced technologies. For more info, contact us.',
  },
  {
    id: '9312',
    question: 'What is the cost of IVF in India?',
    answer:
      'On average, each IVF cycle costs approximately 70,000 to 1,25,000 INR. The cost of IVF treatment also varies from hospital to hospital.',
  },
  {
    id: '9313',
    question: 'What are the signs of successful IVF?',
    answer:
      'Important signs of successful IVF cycle:\n• Bleeding or spotting. Light bleeding or spotting is often the first sign of pregnancy.\n• Cramping.\n• Sore breasts.\n• Tiredness or fatigue.\n• Nausea.\n• Bloating.\n• Changes in discharge.\n• Increased need to pee.',
  },
  {
    id: '9314',
    question: 'Are there any risks in having a baby through IVF process?',
    answer:
      'Research indicates that IVF-conceived children are on par with the general population in academic achievement as well as with regards to behavioral and psychological health.',
  },
  {
    id: '9315',
    question: 'When is IVF needed?',
    answer:
      'Because the IVF process bypasses the fallopian tubes (it was originally developed for women with blocked or missing fallopian tubes), it is the procedure of choice for those with fallopian...',
  },
  {
    id: '9316',
    question: 'Is IVF a painful procedure?',
    answer:
      'Patients may experience some mild discomfort as a result of the injections, but the procedures themselves (egg retrieval and embryo transfer) are done under anesthesia or sedation, so they are generally pain-free.',
  },
  {
    id: '9317',
    question: 'What is the success rate of IVF?',
    answer:
      'Success rates depend on various factors, including age, fertility issues, and clinic practices. Generally, the success rate for women under 35 is around 40-50% per cycle, and it declines with age.',
  },
  {
    id: '9318',
    question: 'Can IVF fail?',
    answer:
      'Yes, IVF can fail due to various reasons, such as poor embryo quality, implantation issues, or underlying health conditions. Consultation with a fertility specialist can provide insights into the reasons for failure and next steps.',
  },
  {
    id: '9319',
    question: 'How long does the IVF process take?',
    answer:
      'The IVF process typically takes about 4 to 6 weeks from the start of medication to embryo transfer, but the timeline may vary depending on individual circumstances.',
  },
  {
    id: '9320',
    question: 'What are the common side effects of IVF treatment?',
    answer:
      'Common side effects include:\n• Hormonal changes causing mood swings.\n• Bloating.\n• Mild cramping.\n• Breast tenderness.\n• Fatigue.\n• Rarely, ovarian hyperstimulation syndrome (OHSS).',
  },
];
export const imageSwiperSection = [
  {
    id: 1,
    image:
      '/assets/img/home/gallery/Vinita-Womens-Hospital-Consulting-Room.jpg',
  },
  {
    id: 2,
    image: '/assets/img/home/gallery/Vinita-Womens-Hospital-General-Ward.jpg',
  },
  {
    id: 3,
    image: '/assets/img/home/gallery/Vinita-Womens-Hospital-IVF-Lab.jpg',
  },
  {
    id: 4,
    image: '/assets/img/home/gallery/Vinita-Womens-Hospital-IVF-Microscope.jpg',
  },
  {
    id: 5,
    image: '/assets/img/home/gallery/Vinita-Womens-Hospital-Labour-Room.jpg',
  },
  {
    id: 6,
    image:
      '/assets/img/home/gallery/Vinita-Womens-Hospital-Operation-Theatre.jpg',
  },
  {
    id: 7,
    image: '/assets/img/home/gallery/Vinita-Womens-Hospital-Private-Room.jpg',
  },
  {
    id: 8,
    image: '/assets/img/home/gallery/Vinita-Womens-Hospital-Reception.jpg',
  },
  {
    id: 9,
    image: '/assets/img/home/gallery/Vinita-Womens-Hospital-Waiting-Room.jpg',
  },
];

const blogsData = {
  sectionTitle: 'OUR LARGEST BLOG',
  sectionSubtitle: 'Latest Posts &amp; Articles',
  postsData: [
    {
      title: 'Medical Of This Working Health Blog',
      subtitle:
        'Medical standard chunk ofI nibh velit auctor aliquet sollic tudin.',
      date: 'May 02',
      category: 'Medical',
      author: 'Admin',
      thumbnail: '/assets/img/post_1.jpeg',
      btnText: 'Read More',
      postLink: '/blog/blog-details',
      authorIcon: '/assets/img/icons/post_user_icon.png',
      commentIcon: '/assets/img/icons/post_comment_icon.png',
    },
    {
      title: 'There Is Only One Thing That Is Hospital.',
      subtitle:
        'Medical standard chunk ofI nibh velit auctor aliquet sollic tudin.',
      date: 'May 02',
      category: 'Medical',
      author: 'Admin',
      thumbnail: '/assets/img/post_2.jpeg',
      btnText: 'Read More',
      postLink: '/blog/blog-details',
      authorIcon: '/assets/img/icons/post_user_icon.png',
      commentIcon: '/assets/img/icons/post_comment_icon.png',
    },
    {
      title: 'This Working World and Infection Prevention.',
      subtitle:
        'Medical standard chunk ofI nibh velit auctor aliquet sollic tudin.',
      date: 'May 02',
      category: 'Medical',
      author: 'Admin',
      thumbnail: '/assets/img/post_3.jpeg',
      btnText: 'Read More',
      postLink: '/blog/blog-details',
      authorIcon: '/assets/img/icons/post_user_icon.png',
      commentIcon: '/assets/img/icons/post_comment_icon.png',
    },
    {
      title: 'Medical Of This Working Health Blog',
      subtitle:
        'Medical standard chunk ofI nibh velit auctor aliquet sollic tudin.',
      date: 'May 02',
      category: 'Medical',
      author: 'Admin',
      thumbnail: '/assets/img/post_1.jpeg',
      btnText: 'Read More',
      postLink: '/blog/blog-details',
      authorIcon: '/assets/img/icons/post_user_icon.png',
      commentIcon: '/assets/img/icons/post_comment_icon.png',
    },
  ],
};

const page = () => {
  return (
    <div>
      {/* Start Hero Section */}
      <HeroSection data={heroData} />
      {/* End Hero Section */}

      {/* Start CTA Section */}
      <Section
        className={
          'cs_cta cs_style_1 cs_blue_bg position-relative overflow-hidden'
        }
      >
        <CtaSection data={ctaData} />
      </Section>

      {/* End CTA Section */}

      {/* Start About Section */}
      <Section
        topSpaceLg="80"
        topSpaceMd="120"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className="cs_about cs_style_1 position-relative"
      >
        <About data={aboutData} />
      </Section>
      {/* End About Section */}

      {/* Start Counter */}
      <Section className="cs_counter_area cs_gray_bg">
        <CounterSection data={countersData} />
      </Section>
      {/* End Counter */}

      {/* Start Service Section */}
      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className={'cs_gray_bg'}
      >
        <Service cardBg={'cs_gray_bg'} data={serviceData} />
      </Section>
      {/* End Service Section */}

      {/* Start ivf Section */}
      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className={' cs_team_section position-relative'}
      >
        <IvfSection cardBg={'cs_gray_bg'} data={ivfData} />
      </Section>
      {/* End ivf Section */}

      {/* Start Team Section */}
      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        className={'cs_team_section position-relative'}
      >
        <TeamsSection1 data={teamData} />
        {/* <TeamSection
          hr={true}
          variant={'cs_pagination cs_style_2'}
          data={teamData}
        /> */}
      </Section>
      {/* End Team Section */}

      {/* Start Brand Section */}
      {/* <Section topSpaceLg="70" topSpaceMd="90" className="cs_brands_section">
        <BrandsSlider data={brandData} />
      </Section> */}

      {/* End Brand Section */}

      {/* Start Why Choose Us Section */}
      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className="cs_gray_bg cs_bg_filed backgroundedited"
        backgroundImage="/assets/img/home/service_bg_2.webp"
      >
        <ChooseUs data={sectionData} />
      </Section>
      {/* End Why Choose Us Section */}

      {/* Start Projects Section */}
      {/* <Section topSpaceLg="70" topSpaceMd="110" className="cs_tabs">
        <ProjectSection data={projectData} />
      </Section> */}
      {/* End Projects Section */}

      {/* Start CTA Section */}
      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className="cs_cta cs_style_2 cs_blue_bg cs_bg_filed cs_center"
        backgroundImage="/assets/img/cta_bg_1.jpeg"
      >
        <CtaSection1 data={ctaData1} />
      </Section>
      {/* End CTA Section */}

      {/* Start Medical Tab Section */}
      <Section topSpaceLg="70" topSpaceMd="110">
        <MedicalTabSection data={medicalTabsData} />
      </Section>
      {/* End Medical Tab Section */}

      {/* Start FAQ Solution */}
      <Section
        className="position-relative"
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
      >
        <FaqSection data={faqSection} />
      </Section>

      {/* End FAQ Solution */}

      {/* Start FAQ Solution */}
      {/* <Section
        // topSpaceLg="70"
        // topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
      >
        <SwiperSlider1 data={imageSwiperSection} />
      </Section> */}

      {/* End FAQ Solution */}
      {/* Start Contact Solution */}
      <ContactSection2></ContactSection2>
      {/* End Contact Solution */}

      {/* Start Blog Section */}
      {/* <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
      >
        <BlogSection data={blogsData} />
      </Section> */}
      {/* End Blog Solution */}
    </div>
  );
};

export default page;
