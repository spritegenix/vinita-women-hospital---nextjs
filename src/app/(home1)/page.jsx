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
  experienceYears: '11 years+ ',
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
    number: '5000+',
    suffix: '+',
    title: 'Successful IVF Pregnancy',
    description:
      'Compassion drives us to help families grow. Over 500 families have trusted us on their fertility journey.',
  },
  {
    iconUrl: '/assets/img/icons/counter_icon_2.png',
    number: '22',
    suffix: '+',
    title: 'Years of Combined Expertise',
    description:
      'Innovation meets experience. Our team brings over 50 years of combined expertise in fertility and gynecology.',
  },
  {
    iconUrl: '/assets/img/icons/counter_icon_3.png',
    number: '8000+',
    suffix: '+',
    title: 'Laparoscopic Surgery',
    description:
      'Trust in results. Over 1,000 successful IVF and laparoscopic procedures performed with care.',
  },
  {
    iconUrl: '/assets/img/icons/counter_icon_4.png',
    number: '20+',
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
      link: '/service/laparoscopic-surgery',
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
      title: 'IUI (Intrauterine Insemination)',
      subtitle:
        'Intrauterine insemination (IUI) introduces the best-quality sperms into the uterus to help fertilize the egg and boost chances of conception.',
      link: '/service/iui-treatments',
    },
    {
      backgroundImage: '/assets/img/home/service_bg-infertility.webp',
      iconUrl: '/assets/img/home/icons/infertility.png',
      index: '02',
      title: 'IVF (In Vitro Fertilization)',
      subtitle:
        'In vitro fertilization (IVF) is a procedure where eggs are fertilized in a lab and then transferred to the uterus to aid conception successfully and effectively.',
      link: '/service/ivf-treatments',
    },

    {
      backgroundImage: '/assets/img/home/service_bg-infertility.webp',
      iconUrl: '/assets/img/home/icons/infertility.png',
      index: '03',
      title: 'ICSI (Intracytoplasmic Sperm Injection)',
      subtitle:
        'ICSI involves injecting a single sperm directly into the egg to enhance fertilization, especially for male factor infertility.',
      link: '/service/icsi-treatments',
    },
    {
      backgroundImage: '/assets/img/home/service_bg-infertility.webp',
      iconUrl: '/assets/img/home/icons/infertility.png',
      index: '04',
      title: 'Pre-Implantation Genetic Screening',
      subtitle:
        'Preimplantation genetic testing (PGT) checks embryos for abnormal chromosomes in a lab using IVF before transfer.',
      link: '/service/preimplantation-genetic-screening',
    },
    {
      backgroundImage: '/assets/img/home/service_bg-infertility.webp',
      iconUrl: '/assets/img/home/icons/infertility.png',
      index: '05',
      title: 'Laparoscopy',
      subtitle:
        'Laparoscopy is a surgical procedure to diagnose and treat reproductive conditions like blocked tubes, cysts, fibroids, and other related abnormalities.',
      link: '/service/laparoscopy',
    },
    {
      backgroundImage: '/assets/img/home/service_bg-infertility.webp',
      iconUrl: '/assets/img/home/icons/infertility.png',
      index: '06',
      title: 'Egg / Semen Freezing / Cryopreservation',
      subtitle:
        'Egg or semen freezing preserves reproductive cells for future use, enabling planning for pregnancy at a later time.',
      link: '/service/egg-freezing',
    },
    {
      backgroundImage: '/assets/img/home/service_bg-infertility.webp',
      iconUrl: '/assets/img/home/icons/infertility.png',
      index: '07',
      title: 'Laser Assisted Hatching (LAH)',
      subtitle:
        'Laser-assisted hatching creates a small crack in the embryo’s shell to help with implantation and boost pregnancy success.',
      link: '/service/laser-assisted-hatching',
    },
    {
      backgroundImage: '/assets/img/home/service_bg-infertility.webp',
      iconUrl: '/assets/img/home/icons/infertility.png',
      index: '08',
      title: 'Embryo Biopsy',
      subtitle:
        'Embryo biopsy removes cells from an embryo to assess its health and genetics before implantation during IVF.',
      link: '/service/ovulation-induction',
    },
    {
      backgroundImage: '/assets/img/home/service_bg-infertility.webp',
      iconUrl: '/assets/img/home/icons/infertility.png',
      index: '09',
      title: 'Donor Treatments',
      subtitle:
        'The donor program offers options like egg, sperm, or embryo donation to help couples overcome infertility challenges.',
      link: '/service/donor-treatments',
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
  videoLink: 'https://youtu.be/IpoeMo8-R3w?si=59hT_11cFhTaVMIe',
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
    question: 'Which is the Best IVF Center or Fertility Clinic in Palanpur?',
    answer:
      'Vinita Women’s Hospital in Palanpur is one of the best IVF centers. It has the region’s first modular IVF lab and advanced technology to help women with fertility problems. The hospital has a team of experienced doctors who provide high-quality care. If you are looking for IVF treatment, you can visit Vinita Women’s Hospital. For more information, call +91-9558908108 or +91-9116889079, or email vinitawomens.hospital@gmail.com.',
  },
  {
    id: '9312',
    question: 'What is the Average Cost of IVF Treatment in India?',
    answer:
      'In India, the cost of IVF treatment can be between ₹1,00,000 and ₹3,00,000. The price depends on factors like the clinic, the treatment plan, and the patient’s needs. IVF is an advanced treatment for couples who have trouble having a baby. To know more about the cost and get a customized treatment plan, you can contact Vinita Women’s Hospital by calling +91-9558908108 or +91-9116889079, or by emailing vinitawomens.hospital@gmail.com.',
  },
  {
    id: '9313',
    question: 'What Are the Early Signs of a Successful IVF Procedure?',
    answer:
      'After IVF, signs of success can include a missed period, light bleeding, or mild cramps. You may also feel tired or have breast tenderness. A blood test can confirm pregnancy. These signs show that the embryo may have implanted successfully in the womb. If you are going through IVF, it’s important to follow your doctor’s advice for the best results. For more guidance, contact Vinita Women’s Hospital at +91-9116889079.',
  },
  {
    id: '9314',
    question:
      'Are There Any Risks Involved in Having a Baby Through the IVF Process?',
    answer:
      'IVF is generally safe but can have some risks. These include multiple pregnancies (twins or more), ovarian hyperstimulation syndrome (OHSS), or the possibility of an ectopic pregnancy. However, many people go through IVF without problems. Your doctor will monitor you carefully to reduce these risks. To learn more about IVF and its risks, you can consult with the experts at Vinita Women’s Hospital in Palanpur.',
  },
  {
    id: '9315',
    question: 'When is IVF Treatment Recommended for Couples?',
    answer:
      'IVF is recommended for couples who are unable to get pregnant naturally. It is often used when the woman has blocked fallopian tubes, or the man has low sperm count. It may also be used for women with endometriosis or couples who have tried other treatments without success. If you think IVF could help you, schedule a consultation with Vinita Women’s Hospital. The doctors will guide you on the best treatment option.',
  },
  {
    id: '9316',
    question: 'How Long Should You Rest After a Laparoscopy Procedure?',
    answer:
      'After a laparoscopy, most people can start moving around after a day or two. But it is important to rest for about 1-2 weeks to fully recover. You can return to work or daily activities once your doctor gives you the okay. Laparoscopy is a small surgery, so recovery is usually faster compared to other surgeries. For detailed advice on how to rest and recover after laparoscopy, contact Vinita Women’s Hospital.',
  },
  {
    id: '9317',
    question:
      'Why is a Laparoscopic Hysterectomy Better Than an Open Hysterectomy?',
    answer:
      'Laparoscopic hysterectomy is a safer, quicker, and less painful option compared to an open hysterectomy. It involves smaller cuts, which reduces scarring. Recovery time is also shorter, allowing patients to return to normal activities faster. With laparoscopic surgery, the risk of infection is lower, and there’s less blood loss. If you need a hysterectomy, discuss with the experts at Vinita Women’s Hospital for the best treatment options.',
  },
  {
    id: '9318',
    question:
      'How Many Times is an Ultrasound Typically Performed During Pregnancy?',
    answer:
      'During a normal pregnancy, an ultrasound is done about 3-5 times. The first ultrasound is to check the baby’s heartbeat. Later ultrasounds help doctors track the baby’s growth, check for any problems, and ensure the baby’s health. Vinita Women’s Hospital uses advanced 3D/4D sonography to monitor pregnancy and detect any issues early. For more information, contact the hospital.',
  },
  {
    id: '9319',
    question: 'What is the Average Cost of Cesarean Delivery in Palanpur?',
    answer:
      'The cost of a cesarean delivery in Palanpur generally ranges from ₹30,000 to ₹80,000. The price can vary depending on the hospital and your medical needs. Cesarean delivery is sometimes needed when there are complications during pregnancy or labor. If you are planning for a cesarean delivery, consult with the doctors at Vinita Women’s Hospital to understand the cost and treatment options.',
  },
  {
    id: '9320',
    question: 'How Soon Should You Visit a Doctor After Confirming Pregnancy?',
    answer:
      'It’s best to see a doctor within the first 6-8 weeks of pregnancy. Early visits help doctors check the baby’s health, start necessary tests, and provide important guidance on nutrition and lifestyle. Regular visits ensure that you and your baby stay healthy throughout the pregnancy. To schedule an appointment, contact Vinita Women’s Hospital in Palanpur at +91-9558908108 or +91-9116889079.',
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
  {
    id: 10,
    image: '/assets/img/home/gallery/10.webp',
  },
  {
    id: 11,
    image: '/assets/img/home/gallery/11.webp',
  },
  {
    id: 12,
    image: '/assets/img/home/gallery/12.webp',
  },
  {
    id: 13,
    image: '/assets/img/home/gallery/13.webp',
  },
  {
    id: 14,
    image: '/assets/img/home/gallery/14.webp',
  },
  {
    id: 15,
    image: '/assets/img/home/gallery/15.jpg',
  },
  {
    id: 16,
    image: '/assets/img/home/gallery/16.webp',
  },
  {
    id: 17,
    image: '/assets/img/home/gallery/17.webp',
  },
  {
    id: 18,
    image: '/assets/img/home/gallery/18.webp',
  },
  {
    id: 19,
    image: '/assets/img/home/gallery/19.webp',
  },
  {
    id: 20,
    image: '/assets/img/home/gallery/20.webp',
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
        bottomSpaceLg="50"
        bottomSpaceMd="50"
        className={' cs_team_section position-relative'}
      >
        <IvfSection cardBg={'cs_gray_bg'} data={ivfData} />
      </Section>
      {/* End ivf Section */}

      {/* Start Team Section */}
      <Section
        topSpaceLg="10"
        topSpaceMd="50"
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
        topSpaceLg="0"
        topSpaceMd="50"
        bottomSpaceLg="50"
        bottomSpaceMd="50"
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
