"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { serviceData } from "@/data";
import { useState } from "react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import Title from "./shared/title";

const Services = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const closeModal = () => setActiveIndex(null);

  return (
    <section
      id="services"
      className="p-6 md:px-40 md:py-24 w-11/12 mx-auto"
    >
      <Title
        title="Servicios"
        subtitle="Lo que puedo hacer por ti 💡"
      />
    <div className="mb-8 md:mb-12"></div>
      

      {/* GRID 1-col en móvil */}
      <div className="block md:hidden grid grid-cols-1 gap-6">
        {serviceData.map((item, i) => (
          <div
            key={i}
            className="
              flex flex-col items-center 
              px-6 py-8 
              bg-[rgba(65,47,123,0.15)] 
              rounded-lg gap-4
              shadow-sm
            "
          >
            <div className="text-5xl text-black dark:text-white mb-2">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold text-black dark:text-white text-center">
              {item.title}
            </h3>
            <p className="text-base text-gray-700 dark:text-gray-300 text-center">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {/* SWIPER en md+ */}
      <div className="hidden md:block">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 24 },
          }}
          className="w-full pb-12"
        >
          {serviceData.map((item, i) => (
            <SwiperSlide key={i}>
              <div
                className="
                  flex flex-col items-center justify-start 
                  px-8 py-10 
                  h-[380px] sm:h-[480px] md:h-[600px] 
                  bg-[rgba(65,47,123,0.15)] 
                  rounded-lg gap-6 shadow-sm
                  transition hover:bg-[rgba(89,65,169,0.15)]
                "
              >
                <div className="text-6xl text-black dark:text-white mb-2">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-black dark:text-white text-center">
                  {item.title}
                </h3>
                <p className="text-lg text-gray-700 dark:text-gray-300 text-center">
                  {item.description}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-pagination mt-4" />
      </div>

      {/* Modal */}
      {activeIndex !== null && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg max-w-lg w-full p-6 overflow-auto relative shadow-lg">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-2xl text-black dark:text-white"
            >
              &times;
            </button>
            <h2 className="text-2xl sm:text-4xl font-bold mb-4 text-black dark:text-white">
              {serviceData[activeIndex].title}
            </h2>
            <p className="text-base sm:text-xl text-gray-700 dark:text-gray-300">
              {serviceData[activeIndex].detalles}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
