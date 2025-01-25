'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaCheckCircle } from 'react-icons/fa';

const ServiceSection4 = ({ data }) => {
  const pathname = usePathname();
  const lastSegment = pathname.split('/').filter(Boolean).pop();
  const titles = lastSegment
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());
  const filteredData = data.filter((item) => item.name === titles);
  return (
    <>
      <div className="container">
        <div className="row cs_gap_y_40">
          <div className="col-xl-4 col-lg-5">
            <div className="cs_solution_content_wrapper cs_gray_bg cs_type_1">
              <h3 className="cs_service_heading">
                {filteredData[0].serviceHeading}
              </h3>
              <ul className="cs_solution_links cs_style_2 cs_mp0">
                {filteredData[0].services.map((service, index) => (
                  <li key={index} className="d-flex gap-2 align-items-center ">
                    <span className="cs_tab_link_icon_left cs_center">
                      <i>
                        <FaCheckCircle />
                      </i>
                    </span>
                    <span className="fw-bold ">{service.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-xl-8 col-lg-7">
            <div className="cs_service_details_thumbnail">
              <Image
                src={filteredData[0].mainImage}
                alt="img"
                width={856}
                height={448}
              />
            </div>
          </div>
        </div>
        <div className="cs_height_35 cs_height_lg_30" />
        <div className="cs_service_details">
          <h3 className="cs_service_heading">Service Details:</h3>
          {filteredData[0].serviceDetails.map((detail, index) => (
            <p key={index} className="cs_service_subtitle">
              {detail}
            </p>
          ))}
          <div className="cs_height_35 cs_height_lg_30" />
          <div className="row cs_gap_y_30">
            <div className="col-lg-6">
              <div className="cs_service_details_thumbnail">
                <Image
                  src={filteredData[0].additionalImages}
                  alt="img"
                  width={636}
                  height={327}
                  quality={100}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row cs_gap_y_30">
                {filteredData[0].iconBoxes.map((box, index) => (
                  <div key={index} className="col-xl-6 col-lg-12 col-md-6">
                    <div className="cs_iconbox cs_style_2 cs_radius_15 cs_gray_bg">
                      <div
                        className="cs_iconbox_overlay cs_bg_filed"
                        style={{ backgroundImage: `url(${box.bgImage})` }}
                      />
                      <div className="cs_iconbox_shape" />
                      <div className="cs_iconbox_header d-flex align-items-center justify-content-between">
                        <div className="cs_iconbox_icon cs_center">
                          <Image
                            src={box.icon}
                            alt="img"
                            width={26}
                            height={25}
                          />
                        </div>
                        <h3 className="iconbox_index">{box.index}</h3>
                      </div>
                      <h3 className="cs_iconbox_title">{box.title}</h3>
                      <p className="cs_iconbox_subtitle m-0">{box.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="cs_about_iconbox">
                <div className="cs_about_iconbox_icon cs_center">
                  <i>
                    <FaCheckCircle />
                  </i>
                </div>
                <p className="cs_about_iconbox_subtitle">
                  {filteredData[0].subtitle}{' '}
                  {/* <Link href={filteredData.readMoreUrl}>{filteredData.readMoreText}</Link> */}
                </p>
              </div>
            </div>
          </div>
          <div className="cs_height_45 cs_height_lg_30" />
          <p className="cs_service_subtitle mb-0">
            {filteredData[0].footerText}
          </p>
        </div>
      </div>
    </>
  );
};

export default ServiceSection4;
