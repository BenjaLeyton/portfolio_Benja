"use client";

import { Phone } from "lucide-react";
import {dataSlider } from "@/data";
import Title from "./shared/title";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Button } from "./ui/button";
import Image from "next/image";

const AboutMe = () => {
  return (
    <section
      id="about-me"
      className="p-6 md:px-40 md:py-24 w-11/12 mx-auto"
    > 
      {/* Título reutilizable */}
      <Title title="Sobre mí" subtitle="Un Gusto :)" />
      <div className="mb-8 md:mb-12"></div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="flex items-center justify-center">
          {/* CAROUSEL */}
          <Carousel
            opts={{ align: "center" }}
            className="w-full max-w-2xl h-auto"
          >
            {/* En móvil auto, en md+ 500px */}
            <CarouselContent className="h-auto md:h-[500px]">
              {dataSlider.map((slide) => (
                <CarouselItem key={slide.id}>
                  <div className="flex items-center justify-center w-full h-full">
                    <Image
                      src={slide.url}
                      alt={`Slide ${slide.id}`}
                      width={800}
                      height={500}
                      className="w-full h-auto rounded-lg object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <div>
          <p className="my-8 text-base md:text-lg leading-relaxed">
            ¡Hola! Mi nombre es Benjamin, un entusiasta del
            deporte y la tecnología. Me especializo en desarrollar herramientas
            que faciliten el trabajo y la vida de mis compañeros, amigos y
            clientes.
            <br />
            <br />
            Siempre atento a oportunidades de crecimiento y aprendizaje, tanto a
            nivel personal como profesional, me dedico al desarrollo continuo
            con una actitud positiva hacia el futuro. Abierto a nuevos
            desafíos, considero que aprender de quienes me rodean es clave para
            seguir evolucionando, y estoy preparado para ser un aporte en
            cualquier equipo en el que participe.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
