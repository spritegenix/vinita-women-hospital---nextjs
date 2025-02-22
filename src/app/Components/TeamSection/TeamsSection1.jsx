'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SectionHeading from '../SectionHeading';
import Image from 'next/image';

function TeamSection1({ data }) {
  return (
    <div className="about-team">
      <div className="container">
        <SectionHeading
          SectionSubtitle={data.subtitle}
          SectionTitle={data.title}
          variant="text-center"
        />

        <div className="d-none d-md-flex justify-content-around pt-5 gap-2 text-center">
          {data?.sliderData.map((item, index) => (
            <div className="cs_slide" key={index}>
              <div className="cs_team_shape cs_blue_bg" />
              <div className="cs_team_thumbnail">
                <Image src={item.imageUrl} alt="img" width={325} height={429} />
              </div>
            </div>
          ))}
        </div>

        {/* Swiper for Mobile */}
        <div className="d-md-none pt-5">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            // navigation={{
            //   nextEl: '.swiper-button-next',
            //   prevEl: '.swiper-button-prev',
            // }}
            pagination={{ clickable: true }}
            // className="relative"
          >
            {data?.sliderData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="cs_slide text-center">
                  <div className="cs_team_shape cs_blue_bg" />
                  <div className="cs_team_thumbnail">
                    <Image
                      src={item.imageUrl}
                      alt="img"
                      width={325}
                      height={429}
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
            {/* <div className="swiper-button-next text-pink-500"></div>
            <div className="swiper-button-prev text-pink-500"></div> */}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default TeamSection1;
