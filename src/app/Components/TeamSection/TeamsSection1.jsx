import React from 'react';
import SectionHeading from '../SectionHeading';
import Link from 'next/link';
import Image from 'next/image';

function TeamSection1({ data }) {
  return (
    <div className="about-team">
      <div className="container">
        <SectionHeading
          SectionSubtitle={data.subtitle}
          SectionTitle={data.title}
          variant={'text-center'}
        />

        <div className="" />
        <div className="">
          <div className="">
            <div className="d-md-flex justify-content-around gap-5 text-center">
              {data?.sliderData.map((item, index) => (
                <div className="cs_slide" key={index}>
                  <div
                    className={` 
                    
                    `}
                  >
                    <div
                      className={`cs_team_shape cs_blue_bg
                      `}
                    />
                    <div className="cs_team_thumbnail">
                      <Image
                        src={item.imageUrl}
                        alt="img"
                        width={325}
                        height={429}
                      />
                    </div>
                    <div className="cs_team_bio text-center pt-3">
                      <h5 className="mb-0">
                        <div className="fw-1">{item.name}</div>
                      </h5>
                      <p className="cs_team_subtitle">{item.profession}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* {bgColor && (
      <div className="cs_team_bg_dark cs_blue_bg">
        <div className="cs_team_bg_white cs_white_bg" />
      </div>
    )} */}
    </div>
  );
}

export default TeamSection1;
