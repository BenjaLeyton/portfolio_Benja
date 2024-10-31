"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { serviceData } from '@/data';
import { useState } from 'react';
import Title from "./shared/title";
import Link from "next/link";
import { buttonVariants } from "./ui/button"; // Importa buttonVariants

const Services = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const closeModal = () => setActiveIndex(null);

  return (
    <div className="p-6 md:px-40 md:py-24 w-full" id="services">
      <div className="grid items-center justify-items-center h-full gap-12 md:grid-cols-2">
        {/* Contenedor de Texto */}
        <div className="max-w-[650px] mx-auto text-center md:text-left">
          <h1 className="text-4xl leading-tight text-center md:text-left md:text-6xl md:mb-5 text-black dark:text-white">
            Mis <span className="font-bold text-blue-500 dark:text-white-300"> servicios.</span>
          </h1>
          <p className="mb-6 text-2xl text-gray-700 dark:text-gray-300">
            Como desarrollador full stack, analista de datos y científico de datos, ofrezco soluciones completas en la creación de plataformas web, automatización de procesos y análisis avanzado de datos. Me especializo en la creación de pipelines de datos eficientes, gestión de bases de datos, herramientas de análisis, y visualización de datos para generar insights que impulsen decisiones estratégicas. Además, he trabajado en la creación de modelos predictivos avanzados, ayudando a las empresas a optimizar su rendimiento y mejorar la toma de decisiones basadas en datos.
          </p>

          <Link
            href="#contact"
            className={`${buttonVariants({ variant: "default" })} text-lg px-6 py-3 bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-500 dark:hover:bg-blue-600 dark:text-white`}
          >
            Contacta conmigo
          </Link>
        </div>

        {/* Contenedor del Slider */}
        <div className="relative w-full flex justify-center">
          <Swiper
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
            }}
            freeMode={true}
            pagination={{
              clickable: true,
              el: '.swiper-pagination',
            }}
            modules={[Pagination]}
            className="h-[500px] md:h-[700px] w-full pb-16"
          >
            {serviceData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col px-8 py-10 h-auto min-h-[600px] w-full max-w-[450px] rounded-lg cursor-pointer bg-[rgba(65,47,123,0.15)] gap-6 group hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300 hover:border-secondary border-2 mx-auto">
                  <div className="mb-4 text-6xl text-secondary flex justify-center">
                    {item.icon}
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="mb-4 text-2xl font-bold">{item.title}</h3>
                    <p className="text-lg">{item.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="swiper-pagination"></div>
        </div>
      </div>

      {/* Modal para mostrar detalles */}
      {activeIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-300 dark:bg-gray-700 p-10 rounded-lg max-w-6xl w-[90%] h-[85vh] overflow-auto relative">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-3xl text-gray-600 dark:text-gray-200"
            >
              &times;
            </button>
            <h2 className="text-4xl font-bold mb-6">{serviceData[activeIndex].title}</h2>
            <p className="text-xl leading-relaxed">{serviceData[activeIndex].detalles}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Services;
