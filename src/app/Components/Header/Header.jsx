'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
} from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import {
  FaAnglesRight,
  FaLocationDot,
  FaMap,
  FaSquareInstagram,
  FaYoutube,
} from 'react-icons/fa6';
import { HiMiniMagnifyingGlass } from 'react-icons/hi2';
import { BsInstagram } from 'react-icons/bs';

const Header = ({ isTopBar, variant }) => {
  const [isShowMobileMenu, setIsShowMobileMenu] = useState(false);
  const [openMobileSubmenuIndex, setOpenMobileSubmenuIndex] = useState([]);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isSticky, setIsSticky] = useState();
  const menu = {
    email: 'vinitawomens.hospital@gmail.com',
    location: 'A-1, 4th Floor, Medipolis, Deesa Highway, Gujarat',
    logoUrl: '/assets/img/logo.png',
    logoLink: '/',
    navItems: [
      {
        label: 'Home',
        href: '/',
        // subItems: [
        //   { label: 'Main Home', href: '/' },
        //   { label: 'Home V2', href: '/home-v2' },
        //   { label: 'Home V3', href: '/home-v3' },
        // ],
      },
      { label: 'About', href: '/about' },
      {
        label: 'Service',
        href: '/service',
        subItems: [
          {
            label: 'Infertility treatments',
            href: '/service/infertility-treatments',
          },
          {
            label: 'Laparoscopic Surgery',
            href: '/service/laparoscopic-surgery',
          },
          { label: 'Gynecology', href: '/service/gynecology' },
          { label: 'Maternity Care', href: '/service/maternity-care' },
        ],
      },
      // {
      //   label: 'Blog',
      //   href: '/blog',
      //   subItems: [
      //     { label: 'Blog List', href: '/blog' },
      //     { label: 'Blog Details', href: '/blog/blog-details' },
      //   ],
      // },
      // {
      //   label: 'Pages',
      //   href: '/',
      //   subItems: [
      //     { label: 'Appointments', href: '/appointments' },
      //     { label: 'Doctors', href: '/doctors' },
      //     { label: 'Doctor Details', href: '/doctors/doctor-details' },
      //     { label: 'Timetable', href: '/timetable' },
      //     { label: 'Portfolio', href: '/portfolio' },
      //     { label: 'Contact', href: '/contact' },
      //   ],
      // },
      { label: 'Gallery', href: '/gallery' },
      { label: 'Contact', href: '/contact' },
    ],
    btnUrl: '/appointments',
    btnText: 'Book an Appointment',
  };

  const handleOpenMobileSubmenu = (index) => {
    if (openMobileSubmenuIndex.includes(index)) {
      setOpenMobileSubmenuIndex((prev) => prev.filter((f) => f !== index));
    } else {
      setOpenMobileSubmenuIndex((prev) => [...prev, index]);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos > prevScrollPos) {
        setIsSticky('cs_gescout_sticky'); // Scrolling down
      } else if (currentScrollPos !== 0) {
        setIsSticky('cs_gescout_sticky cs_gescout_show'); // Scrolling up
      } else {
        setIsSticky();
      }
      setPrevScrollPos(currentScrollPos); // Update previous scroll position
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup the event listener
    };
  }, [prevScrollPos]);
  return (
    <>
      <header
        className={`cs_site_header cs_style_1 ${
          variant ? variant : ''
        } cs_primary_color cs_sticky_header ${isSticky ? isSticky : ''}`}
      >
        {isTopBar && (
          <div className="cs_top_header cs_blue_bg cs_white_color">
            <div className="container">
              <div className="cs_top_header_in">
                <div className="cs_top_header_left">
                  <ul className="cs_header_contact_list cs_mp_0">
                    <li>
                      <i>
                        <FaEnvelope />
                      </i>
                      <Link href={`mailto:${menu.email}`}>{menu.email}</Link>
                    </li>
                    <li>
                      <i>
                        <FaLocationDot />
                      </i>
                      {menu.location}
                    </li>
                  </ul>
                </div>
                <div className="cs_top_header_right">
                  <div className="cs_social_btns cs_style_1">
                    <Link
                      href="https://www.facebook.com/vinitawomenshospital/"
                      className="cs_center"
                    >
                      <i>
                        <FaFacebookF />
                      </i>
                    </Link>
                    <Link
                      href="https://www.youtube.com/@vinitawomenshospital"
                      className="cs_center"
                    >
                      <i>
                        <FaYoutube />
                      </i>
                    </Link>
                    <Link
                      href="https://www.instagram.com/vinitawomenshospital/"
                      className="cs_center"
                    >
                      <i>
                        <BsInstagram />
                      </i>
                    </Link>
                    <Link
                      href="https://www.google.com/maps/place/Vinita+Women's+Hospital+-+Best+IVF+Centre+%7C+Laparoscopic+Gynecologist+%7C+Maternity+and+Sonography+Centre+in+Palanpur/@24.1759183,72.4065251,15z/data=!4m6!3m5!1s0x395ceb5682acbbcd:0x8b34c4288ee39ecd!8m2!3d24.1759183!4d72.4065251!16s%2Fg%2F11tt6mfkz_?entry=ttu"
                      className="cs_center"
                    >
                      <i>
                        <FaMap />
                      </i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="cs_main_header">
          <div className="container">
            <div className="cs_main_header_in">
              <div className="cs_main_header_left">
                <Link className="cs_site_branding" href={menu.logoLink}>
                  <Image
                    src={menu.logoUrl}
                    alt="img"
                    width={205}
                    height={53}
                    quality={100}
                  />
                </Link>
              </div>
              <div className="cs_main_header_right ">
                <div className="cs_nav cs_primary_color ">
                  <ul
                    className={`cs_nav_list ${isShowMobileMenu && 'cs_active'}`}
                  >
                    {menu.navItems.map((item, index) => (
                      <li
                        className={
                          item.subItems ? 'menu-item-has-children' : ''
                        }
                        key={index}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setIsShowMobileMenu(!isShowMobileMenu)}
                        >
                          {item.label}
                        </Link>
                        {item.subItems && (
                          <ul
                            style={{
                              display: openMobileSubmenuIndex.includes(index)
                                ? 'block'
                                : 'none',
                            }}
                          >
                            {item.subItems.map((subItem, subIndex) => (
                              <li key={subIndex}>
                                <Link
                                  href={subItem.href}
                                  onClick={() =>
                                    setIsShowMobileMenu(!isShowMobileMenu)
                                  }
                                >
                                  {subItem.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                        {item.subItems?.length && (
                          <span
                            className={`cs_menu_dropdown_toggle ${
                              openMobileSubmenuIndex.includes(index)
                                ? 'active'
                                : ''
                            }`}
                            onClick={() => handleOpenMobileSubmenu(index)}
                          >
                            <span></span>
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                  <span
                    className={`cs_menu_toggle ${
                      isShowMobileMenu && 'cs_toggle_active'
                    }`}
                    onClick={() => setIsShowMobileMenu(!isShowMobileMenu)}
                  >
                    <span></span>
                  </span>
                </div>
                {/* <div className="cs_search_wrap">
                  <div
                    className="cs_search_toggle cs_center"
                    onClick={() => setIsSearchActive(!isSearchActive)}
                  >
                    <i>
                      <HiMiniMagnifyingGlass />
                    </i>
                  </div>
                  <form
                    action="#"
                    className={`cs_header_search_form ${
                      isSearchActive ? 'active' : ''
                    }`}
                  >
                    <div className="cs_header_search_form_in">
                      <input
                        type="text"
                        placeholder="Search"
                        className="cs_header_search_field"
                      />
                      <button className="cs_header_submit_btn">
                        <i>
                          <HiMiniMagnifyingGlass />
                        </i>
                      </button>
                    </div>
                  </form>
                </div> */}
                <Link
                  href={menu.btnUrl}
                  className="cs_btn cs_style_1 cs_color_1"
                >
                  <span>{menu.btnText}</span>
                  <i>
                    <FaAnglesRight />
                  </i>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {variant == 'cs_type_1' && (
          <div className="cs_main_header_shape">
            <svg
              width={1679}
              height={112}
              viewBox="0 0 1679 112"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 0L1679 0.014C1679 0.014 1639 23.128 1639 48.261V111.014H40V47.351C40 22.567 0 0 0 0Z"
                fill="#2EA6F7"
              />
              <path
                d="M10 0L1669 0.014C1669 0.014 1629 23.128 1629 48.261V111.014H50V47.351C50 22.567 10 0 10 0Z"
                fill="white"
              />
            </svg>
          </div>
        )}
      </header>
      {isTopBar && <div className="cs_site_header_spacing_150" />}
    </>
  );
};

export default Header;
