import { Phone } from "lucide-react";
import { dataAboutMe, dataSlider } from "@/data";
import Title from "./shared/title";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Button } from "./ui/button";
import Image from "next/image";

const AboutMe = () => {
    return (
        <div className="p-6 md:px-40 md:py-24 w-full" id="about-me">
            <div className="text-4xl font-bold mb-4"> {/* Increased title font size */}
                <Title title="Sobre mi" subtitle="Un Gusto :)" />
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="flex items-center justify-center">
                    {/* CAROUSEL */}
                    <Carousel
                        opts={{
                            align: "center"
                        }}
                        className="w-full max-w-2xl h-auto"
                    >
                        <CarouselContent className="h-[500px]">
                            {dataSlider.map((data) => (
                                <CarouselItem key={data.id}>
                                    <div className="flex items-center justify-center">
                                        <Image
                                            src={data.url}
                                            alt="Image"
                                            width={800} height={500}
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
                    <p className="my-8 text-2xl leading-relaxed"> {/* Increased paragraph font size */}
                        ¡Hola! Mi nombre es Benjamin, tengo 25 años y soy un entusiasta del deporte y la tecnología. Me especializo en desarrollar herramientas que faciliten el trabajo y la vida de mis compañeros, amigos y clientes.

                        Siempre atento a oportunidades de crecimiento y aprendizaje, tanto a nivel personal como profesional, me dedico al desarrollo continuo con una actitud positiva hacia el futuro. Abierto a nuevos desafíos, considero que aprender de quienes me rodean es clave para seguir evolucionando, y estoy preparado para ser un aporte en cualquier equipo en el que participe.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
