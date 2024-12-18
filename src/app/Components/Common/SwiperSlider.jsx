'use client';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';

import MyVerticallyCenteredModal from '../Common/PopupModel';
// import { servicesListingAdBanners } from '@/data/global';
import { GrNext, GrPrevious } from 'react-icons/gr';
// import useIsMobile from '@/customHooks/useIsMobile';
const SwiperSlider1 = ({ data }) => {
  const [modalShow, setModalShow] = React.useState(false);
  const uniqueId = 'ServiceAdCardSlider123';
  const [selected, setSelected] = useState(null);
  const handleClick = (item) => {
    setModalShow(true);
    setSelected(item);
  };
  const swiperOptions = {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: { delay: 5000, disableOnInteraction: false },
    loop: true,
    navigation: {
      nextEl: `.${uniqueId}-next`,
      prevEl: `.${uniqueId}-prev`,
    },
    modules: [Autoplay, Navigation],
    breakpoints: {
      640: { slidesPerView: 1 },
      768: { slidesPerView: 1 },
      1024: { slidesPerView: 3 },
    },
  };

  return (
    <div className="container position-relative">
      <Swiper {...swiperOptions} className="">
        {data?.map((item) => (
          <SwiperSlide key={item.id}>
            <Button variant="" onClick={() => handleClick(item)}>
              <ServiceAdCard
                wideImage={item?.image}
                //   mobileImage={item?.mobileImage}
                href={item?.image}
              />
            </Button>

            <MyVerticallyCenteredModal
              item={selected}
              show={modalShow}
              onClose={() => setModalShow(false)}
            >
              {modalShow && (
                <Image
                  src={item?.image}
                  height={1200}
                  width={600}
                  alt={item?.id}
                />
              )}
            </MyVerticallyCenteredModal>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Add navigation buttons */}
      {true && (
        <div className={`${uniqueId}-next swiper-button-next `}>
          <GrNext />
        </div>
      )}
      {true && (
        <div className={`${uniqueId}-prev swiper-button-prev `}>
          <GrPrevious />
        </div>
      )}
    </div>
  );
};

function ServiceAdCard({ wideImage, mobileImage, href }) {
  //   const isMobile = useIsMobile();
  return (
    <Image
      src={wideImage}
      alt="service"
      width={400}
      height={300}
      className="mx-auto h-full w-full cursor-pointer object-cover rounded-4"
    />
    // <Link
    //   href={href}
    //   target="_blank"
    //   className="flex h-60 w-full cursor-pointer justify-center overflow-hidden rounded-xl"
    // >

    //   {/* {isMobile ? (
    //     <Image
    //       src={mobileImage}
    //       alt="service"
    //       width={764}
    //       height={144}
    //       className="mx-auto h-full w-full cursor-pointer object-cover"
    //     />
    //   ) : (
    //     <Image
    //       src={wideImage}
    //       alt="service"
    //       width={1800}
    //       height={144}
    //       className="mx-auto h-full w-max cursor-pointer object-cover"
    //     />
    //   )} */}
    // </Link>
  );
}

export default SwiperSlider1;
