import { Rubik, Poppins } from 'next/font/google';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './sass/style.scss';
import '../../global.css';
import { Metadata } from 'next';
const rubik = Rubik({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--body-font',
});
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--heading-font',
});

export const metadata = {
  title: {
    absolute: '',
    default: "Vinita Women's Hospital - Best Maternity & IVF Care",
  },
  description: `Vinita Women's Hospital is the leading maternity, gynecology, and IVF center. We provide expert pregnancy care, fertility treatments, and women's healthcare services.`,
  keywords: [
    "maternity hospital, IVF center, gynecology, pregnancy care, women's health, fertility treatment, best maternity hospital, Vinita hospital, best women's hospital",
  ],
  openGraph: {
    title: "Vinita Women's Hospital",
    description: `Vinita Women's Hospital is the leading maternity, gynecology, and IVF center. We provide expert pregnancy care, fertility treatments, and women's healthcare services.`,
    url: 'https://vinitawomenshospital.in/',
    siteName: "Vinita Women's Hospital",
    type: 'website',
    images: [
      {
        url: '/openGraphImage.jpg',
        width: 1200,
        height: 630,
        alt: "Vinita Women's Hospital - Expert Gynecology & Fertility Care",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Vinita Women's Hospital",
    description:
      'At Vinita Women’s Hospital, unlock your fertility journey. Let us guide you through the journey of starting or expanding your family with personalized care and expert support.',
    site: '@vinitahospital',
    creator: '@vinitahospital',
    images: ['/openGraphImage.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://vinitawomenshospital.in/',
  },
  other: {
    'application/ld+json': JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebSite',
          name: "Vinita Women's Hospital",
          url: 'https://vinitawomenshospital.in/',
          potentialAction: {
            '@type': 'SearchAction',
            target:
              'https://vinitawomenshospital.in/search?q={search_term_string}',
            'query-input': 'required name=search_term_string',
          },
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: "About Us | Vinita Women's Hospital | Trusted Maternity & IVF Care",
              item: 'https://vinitawomenshospital.in/about-us',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: "Services | Vinita Women's Hospital | Trusted Maternity & IVF Care",
              item: 'https://vinitawomenshospital.in/services',
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: "Contact | Vinita Women's Hospital | Trusted Maternity & IVF Care",
              item: 'https://vinitawomenshospital.in/contact',
            },
          ],
        },
        {
          '@type': 'Organization',
          name: "Vinita Women's Hospital",
          url: 'https://vinitawomenshospital.in/',
          logo: 'https://vinitawomenshospital.in/logo.png',
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+91 9116889079',
            contactType: 'customer service',
            areaServed: 'IN',
            availableLanguage: 'en',
          },
        },
        {
          '@type': 'Service',
          name: 'Infertility Treatments',
          provider: {
            '@type': 'Organization',
            name: "Vinita Women's Hospital",
          },
          url: 'https://vinitawomenshospital.in/services/infertility-treatments',
          description:
            'Expert fertility treatments and IVF solutions to help couples conceive.',
        },
        {
          '@type': 'Service',
          name: 'Laparoscopic Surgery',
          provider: {
            '@type': 'Organization',
            name: "Vinita Women's Hospital",
          },
          url: 'https://vinitawomenshospital.in/services/laparoscopic-surgery',
          description:
            'Minimally invasive laparoscopic procedures for women’s health.',
        },
        {
          '@type': 'Service',
          name: 'Gynecology',
          provider: {
            '@type': 'Organization',
            name: "Vinita Women's Hospital",
          },
          url: 'https://vinitawomenshospital.in/services/gynecology',
          description:
            'Comprehensive gynecological care for women of all ages.',
        },
        {
          '@type': 'Service',
          name: 'Maternity Care',
          provider: {
            '@type': 'Organization',
            name: "Vinita Women's Hospital",
          },
          url: 'https://vinitawomenshospital.in/services/maternity-care',
          description:
            'Personalized maternity care and expert support for pregnancy and childbirth.',
        },
      ],
    }),
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="author" content="Themeservices" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${rubik.variable} ${poppins.variable}`}>
        {children}
        <div id="portal"></div>
      </body>
    </html>
  );
}
