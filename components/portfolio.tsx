import { useState } from "react";
import { dataPortfolio } from "@/data";
import Title from "./shared/title";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

const Portfolio = () => {
    const [activeTab, setActiveTab] = useState("web");
    const [videoUrl, setVideoUrl] = useState<string | null>(null);

    // Filtrar proyectos según la pestaña activa
    const filteredProjects = dataPortfolio.filter(data => data.category === activeTab);

    // Función para abrir el modal con el video o presentación
    const openVideoModal = (url: string) => {
        setVideoUrl(url);
    };

    // Función para cerrar el modal
    const closeVideoModal = () => {
        setVideoUrl(null);
    };

    return (
        <div className="p-6 md:px-60 md:py-12 w-11/12 mx-auto" id="portfolio">
            <Title title="Portfolio" subtitle="Trabajos recientes 💼" />

            {/* Controles de Tabs */}
            <div className="flex justify-center mt-8 mb-8 space-x-4">
                <button
                    onClick={() => setActiveTab("web")}
                    className={`px-6 py-2 rounded-full transition-colors duration-200 ${activeTab === "web" ? "bg-blue-500 text-white" : "bg-gray-300 text-black"}`}
                >
                    Desarrollo Web
                </button>
                <button
                    onClick={() => setActiveTab("automations")}
                    className={`px-6 py-2 rounded-full transition-colors duration-200 ${activeTab === "automations" ? "bg-blue-500 text-white" : "bg-gray-300 text-black"}`}
                >
                    Automatizaciones
                </button>
                <button
                    onClick={() => setActiveTab("data_analyst")}
                    className={`px-6 py-2 rounded-full transition-colors duration-200 ${activeTab === "data_analyst" ? "bg-blue-500 text-white" : "bg-gray-300 text-black"}`}
                >
                    Análisis de Datos
                </button>
                <button
                    onClick={() => setActiveTab("data_science")}
                    className={`px-6 py-2 rounded-full transition-colors duration-200 ${activeTab === "data_science" ? "bg-blue-500 text-white" : "bg-gray-300 text-black"}`}
                >
                    Ciencia de Datos
                </button>
            </div>

            {/* Sección de Proyectos */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 auto-cols-fr gap-1 mt-2 auto-rows-min items-start">
                {filteredProjects.slice(0, 6).map((data) => (
                    <div
                        key={data.id}
                        className="group bg-gray-800 p-2 rounded-lg shadow-lg transform transition-all duration-300 relative w-full max-w-[400px] border-2 border-transparent hover:border-blue-500 hover:shadow-[0_0_15px_rgba(0,123,255,0.7)] hover:bg-blue-700 hover:bg-opacity-30"
                    >
                        <Image
                            src={data.image}
                            alt="Image"
                            width={300}
                            height={200}
                            className="rounded-md w-full h-auto transition-none"
                        />
                        <h3 className="text-xl mb-2 mt-2 text-white text-center">{data.title}</h3>
                        
                        {/* Descripción y botones de Demo y Presentación */}
                        <div className="overflow-hidden max-h-0 opacity-0 transition-all duration-300 group-hover:max-h-screen group-hover:opacity-100">
                            <p className="text-white mt-2">
                                {data.description}
                            </p>
                            {data.urlDemo && (
                                <button
                                    className="w-full text-center flex items-center justify-center bg-[#3B82F6] text-white font-medium py-2 px-6 rounded-lg shadow-md transition-all duration-300 mt-4"
                                    onClick={() => openVideoModal(data.urlDemo)}
                                >
                                    <span className="mr-2">Demo</span>
                                    <svg
                                        className="w-5 h-5"
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </button>
                            )}
                            {data.presentation && (
                                <a
                                    href={data.presentation} // Enlace de descarga
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full text-center flex items-center justify-center bg-[#10B981] text-white font-medium py-2 px-6 rounded-lg shadow-md transition-all duration-300 mt-4"
                                >
                                    <span className="mr-2">Presentación</span>
                                    <svg
                                        className="w-5 h-5"
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal de Video/Presentación */}
            {videoUrl && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
                    <div className="relative w-full max-w-6xl">
                        <button onClick={closeVideoModal} className="absolute top-4 right-4 text-white text-2xl font-bold z-50 bg-gray-700 rounded-full p-2 hover:bg-gray-600">
                            ✕
                        </button>
                        <video controls className="w-full h-auto rounded-lg" autoPlay>
                            <source src={videoUrl} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Portfolio;
