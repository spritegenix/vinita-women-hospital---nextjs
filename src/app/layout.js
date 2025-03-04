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
    // template: "%s | Vinita Women's Hospital - Best Maternity & IVF Care",
  },
  description: `Vinita Women's Hospital is the leading maternity, gynecology, and IVF center. We provide expert pregnancy care, fertility treatments, and women's healthcare services.`,

  keywords: [
    "maternity hospital, IVF center, gynecology, pregnancy care, women's health, fertility treatment, best maternity hospital, Vinita hospital, best women's hospital",
  ],

  openGraph: {
    title: "Vinita Women's Hospital ",
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
    site: '@vinitahospital', // Replace with actual Twitter handle if available
    creator: '@vinitahospital', // Replace with actual creator handle if applicable
    images: ['/openGraphImage.jpg'],
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: 'https://vinitawomenshospital.in/',
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
