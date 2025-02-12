import Image from 'next/image';
import Link from 'next/link';
import { BsInstagram, BsTwitter } from 'react-icons/bs';
import { FaPhoneAlt } from 'react-icons/fa';
import {
  FaFacebookF,
  FaInstagram,
  FaLocationDot,
  FaMap,
  FaPinterestP,
  FaRegClock,
  FaSquareInstagram,
  FaYoutube,
} from 'react-icons/fa6';

const data = {
  backgroundImage: 'assets/img/footer_bg.jpg',
  logo: '/assets/img/footer_logo.svg',
  contact: [
    {
      icon: 'fa-regular fa-clock',
      text: 'Open Hours of Government: <br /> Mon - Fri: 8.00 am. - 6.00 pm.',
    },
    {
      icon: 'fa-solid fa-location-dot',
      text: '13/A, Miranda Halim City.',
    },
    {
      icon: 'fa-solid fa-phone',
      text: '099 695 695 35',
    },
  ],
  socialLinks: [
    {
      href: 'https://www.facebook.com/vinitawomenshospital/',
      icon: 'fa-brands fa-facebook-f',
    },
    {
      href: 'https://www.youtube.com/@vinitawomenshospital',
      icon: 'fa-brands fa-youtube',
    },
    {
      href: 'https://www.instagram.com/vinitawomenshospital/',
      icon: 'fa-brands fa-instagram',
    },
    {
      href: "https://www.google.com/maps/place/Vinita+Women's+Hospital+-+Best+IVF+Centre+%7C+Laparoscopic+Gynecologist+%7C+Maternity+and+Sonography+Centre+in+Palanpur/@24.1759183,72.4065251,15z/data=!4m6!3m5!1s0x395ceb5682acbbcd:0x8b34c4288ee39ecd!8m2!3d24.1759183!4d72.4065251!16s%2Fg%2F11tt6mfkz_?entry=ttu",
      icon: 'fa-brands fa-map',
    },
  ],
  widgets: [
    {
      title: 'Service',
      links: [
        { href: '#', text: 'Why choose us' },
        { href: '#', text: 'Our solutions' },
        { href: '#', text: 'Partners' },
        { href: '#', text: 'Core values' },
        { href: '#', text: 'Our projects' },
      ],
    },
    {
      title: 'Quick Link',
      links: [
        { href: '#', text: 'Residents' },
        { href: '#', text: 'Business' },
        { href: '#', text: 'Online Service' },
        { href: '#', text: 'Visiting' },
        { href: '#', text: 'Employment' },
      ],
    },
  ],
  recentPosts: [
    {
      href: '/blog/blog-details',
      image: 'assets/img/recent_post_1.png',
      date: '23 jun 2024',
      title: 'We round Solution york Blog',
    },
    {
      href: '/blog/blog-details',
      image: 'assets/img/recent_post_2.png',
      date: '20 jun 2024',
      title: 'The Medical Of This Working Health',
    },
  ],
  copyrightText: 'Copyright © 2024 Medilo, All Rights Reserved.',
  footerMenu: [
    { href: 'about.html', text: 'About Us' },
    { href: '#', text: 'Events' },
    { href: 'blog.html', text: 'News' },
    { href: 'service.html', text: 'Service' },
  ],
};

const Footer = () => {
  const data = {
    backgroundImage: '/assets/img/footer_bg.jpg',
    logo: '/assets/img/footer_logo.png',
    contactText: '',
    contactText2:
      'A-1, 4th Floor, Medipolis, Deesa Highway, Palanpur, Gujarat 385001.',
    contactText3: '+91-9558908108 /',
    contactText4: '9116889079',
    facebookHref: 'https://www.facebook.com/vinitawomenshospital/',
    pinterestHref: 'https://www.youtube.com/@vinitawomenshospital',
    twitterHref: 'https://www.instagram.com/vinitawomenshospital/',
    instagramHref:
      "https://www.google.com/maps/place/Vinita+Women's+Hospital+-+Best+IVF+Centre+%7C+Laparoscopic+Gynecologist+%7C+Maternity+and+Sonography+Centre+in+Palanpur/@24.1759183,72.4065251,15z/data=!4m6!3m5!1s0x395ceb5682acbbcd:0x8b34c4288ee39ecd!8m2!3d24.1759183!4d72.4065251!16s%2Fg%2F11tt6mfkz_?entry=ttu",
    widgets: [
      {
        title: 'Service',
        links: [
          { href: '/service/infertility-treatments', text: 'Infertility' },
          { href: '/service/laparoscopic-surgery', text: 'Laparoscopy' },
          { href: '/service/gynecology', text: 'Gynecology' },
          { href: '/service/maternity-care', text: 'Maternity' },
        ],
      },
      {
        title: 'Quick Link',
        links: [
          { href: '/', text: 'Home' },
          { href: '/about', text: 'About Us' },
          { href: '/service', text: 'Our Services' },
          // { href: '/portfolio', text: 'Our Portfolio' },
          { href: '/contact', text: 'Contact' },
        ],
      },
    ],
    recentPosts: [
      {
        href: '/blog/blog-details',
        image: '/assets/img/recent_post_1.png',
        date: '23 jun 2024',
        title: 'We round Solution york Blog',
      },
      {
        href: '/blog/blog-details',
        image: '/assets/img/recent_post_2.png',
        date: '20 jun 2024',
        title: 'The Medical Of This Working Health',
      },
    ],
    copyrightText:
      "Copyright © 2024 Vinita Women's Hospital | Designed and Developed by <a href='https://postiview.com/' target='_blank'>PostiView</a>'",
    footerMenu: [
      { href: '/privacy-policy', text: 'Privacy Policy' },
      { href: '/terms&conditions', text: 'Terms & Conditions' },
    ],
  };

  return (
    <footer
      className="cs_footer cs_blue_bg cs_bg_filed cs_white_color"
      // style={{ backgroundImage: `url(${data.backgroundImage})` }}
    >
      <div className="container">
        <div className="cs_footer_row">
          <div className="cs_footer_col">
            <div className="cs_footer_highlight_col cs_accent_bg">
              <div className="cs_footer_logo logobgss d-flex align-items-center p-2">
                <Image src={data.logo} alt="img" width={205} height={53} />
              </div>
              <ul className="cs_footer_contact cs_mp_0">
                <li>
                  <i
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                    }}
                  ></i>
                  <span
                    dangerouslySetInnerHTML={{ __html: data.contactText }}
                  />
                </li>
                <li>
                  <i
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                    }}
                  >
                    <FaLocationDot />
                  </i>
                  <span
                    dangerouslySetInnerHTML={{ __html: data.contactText2 }}
                  />
                </li>
                <li>
                  <i
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                    }}
                  >
                    <FaPhoneAlt />
                  </i>
                  <a
                    href="tel:+919558908108"
                    dangerouslySetInnerHTML={{ __html: data.contactText3 }}
                  ></a>{' '}
                  <a
                    href="tel:+919116889079"
                    dangerouslySetInnerHTML={{ __html: data.contactText4 }}
                  ></a>
                </li>
              </ul>
              <div className="cs_social_btns cs_style_1">
                <Link href={data.facebookHref} className="cs_center">
                  <i>
                    <FaFacebookF color="#ffff" />
                  </i>
                </Link>
                <Link href={data.pinterestHref} className="cs_center">
                  <i>
                    <FaYoutube color="#ffff" />
                  </i>
                </Link>
                <Link href={data.twitterHref} className="cs_center">
                  <i>
                    <BsInstagram color="#ffff" />
                  </i>
                </Link>
                <Link href={data.instagramHref} className="cs_center">
                  <i>
                    <FaMap color="#ffff" />
                  </i>
                </Link>
              </div>
            </div>
          </div>

          {data.widgets.map((widget, index) => (
            <div className="cs_footer_col" key={index}>
              <div className="cs_footer_widget">
                <h2 className="cs_footer_widget_title">{widget.title}</h2>
                <ul className="cs_footer_widget_nav_list cs_mp_0">
                  {widget.links.map((link, index) => (
                    <li key={index}>
                      <Link href={link.href}>{link.text}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          {/* <div className="cs_footer_col">
            <div className="cs_footer_widget">
              <h2 className="cs_footer_widget_title">Recent Posts</h2>
              <ul className="cs_recent_post_list cs_mp_0">
                {data.recentPosts.map((post, index) => (
                  <li key={index}>
                    <div className="cs_recent_post">
                      <Link href={post.href} className="cs_recent_post_thumb">
                        <Image
                          src={post.image}
                          alt="img"
                          width={85}
                          height={85}
                        />
                      </Link>
                      <div className="cs_recent_post_right">
                        <p>{post.date}</p>
                        <h3 className="cs_recent_post_title">
                          <Link href={post.href}>{post.title}</Link>
                        </h3>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div> */}
        </div>
      </div>

      <div className="cs_footer_bottom blackfooter">
        <div className="container">
          <div className="cs_footer_bottom_in">
            <p className="cs_footer_copyright mb-0">
              Copyright © 2024 Vinita Women&apos;s Hospital | Designed and
              Developed by{' '}
              <a href="https://postiview.com/" target="_blank">
                PostiView
              </a>
            </p>
            <ul className="cs_footer_menu cs_mp_0">
              {data.footerMenu.map((item, index) => (
                <li key={index}>
                  <Link href={item.href}>{item.text}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
