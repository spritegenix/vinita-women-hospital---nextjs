import { Rubik, Poppins } from 'next/font/google';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './sass/style.scss';
import '../../global.css';
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
    default: "Vinita Women's Hospital | Dr. Chetan Gupta | Dr. Neha Raval",
    template: '',
  },
  description:
    'At Vinita Women’s Hospital, Unlock your fertility Journey. Let us guide you the journey of starting or expanding your family. Get personalized guidance and support every step of the way!',

  openGraph: {
    title: "Vinita Women's Hospital | Dr. Chetan Gupta | Dr. Neha Raval",
    description:
      'At Vinita Women’s Hospital, Unlock your fertility Journey. Let us guide you the journey of starting or expanding your family. Get personalized guidance and support every step of the way!',
    image: '/openGraphImage.jpg',
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
