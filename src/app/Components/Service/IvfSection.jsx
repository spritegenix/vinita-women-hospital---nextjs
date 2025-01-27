import { FaAngleDoubleRight } from 'react-icons/fa';
import SectionHeading from '../SectionHeading';
import Link from 'next/link';
import Image from 'next/image';

const IvfSection = ({ data, cardBg }) => {
  return (
    <>
      <div className="container ">
        <SectionHeading
          variant={'text-center'}
          SectionTitle={data.title}
          SectionSubtitle={data.subtitle}
        />
        <div className="cs_height_80 cs_height_lg_80" />
        <div className="row cs_row_gap_30 cs_gap_y_30">
          {data?.services.map((service, index) => (
            <div key={index} className="col-md-6 col-sm-12 col-xl-4 ">
              <div
                className={`cs_iconbox cs_style_2 cs_radius_15 cs_hover_layer_2 ivfboxes cs_gray_bg ${
                  cardBg ? '' : 'cs_gray_bg'
                }`}
              >
                <div
                  className="cs_iconbox_overlay cs_bg_filed"
                  // style={{
                  //   backgroundImage: `url(${service.backgroundImage})`,
                  //   backgroundSize: 'cover',
                  // }}
                />
                <div className="cs_iconbox_shape" />
                <div className="cs_iconbox_header d-flex align-items-center justify-content-between">
                  <div className="cs_iconbox_icon cs_center">
                    <Image
                      src={service.iconUrl}
                      alt="img"
                      width={26}
                      height={25}
                    />
                  </div>
                  <h3 className="iconbox_index">{service.index}</h3>
                </div>
                <h3 className="cs_iconbox_title">{service.title}</h3>
                <p className="cs_iconbox_subtitle">{service.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default IvfSection;
