"use client";

import { useState } from "react";
import { dataPortfolio } from "@/data";
import Title from "./shared/title";
import Image from "next/image";

const tabs = [
  { key: "web", label: "Desarrollo Web" },
  { key: "automations", label: "Automatizaciones" },
  { key: "data_analyst", label: "Análisis de Datos" },
  { key: "data_science", label: "Ciencia de Datos" },
];

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("web");
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [openId, setOpenId] = useState<number | null>(null);          // ← nuevo

  const filtered = dataPortfolio.filter((p) => p.category === activeTab);

  const toggleMobile = (id: number) => {
    // sólo actúa en pantallas < md (ancho < 768)
    if (window.innerWidth < 768) {
      setOpenId(openId === id ? null : id);
    }
  };

  return (
    <section id="portfolio" className="p-6 md:px-60 md:py-12 w-11/12 mx-auto">
      <Title title="Portfolio" subtitle="Trabajos recientes 💼" />

      {/* ---------- TABS ---------- */}
      <div className="-mx-4 md:mx-0 mt-8 mb-8 overflow-x-auto md:overflow-visible">
        <div className="flex md:justify-center space-x-4 px-4 md:px-0">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => {
                setActiveTab(t.key);
                setOpenId(null);           // reset detalles al cambiar pestaña
              }}
              className={`flex-shrink-0 px-6 py-2 rounded-full whitespace-nowrap transition-colors
                ${
                  activeTab === t.key
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300 text-black"
                }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* ---------- GRID ---------- */}
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start">
        {filtered.slice(0, 6).map((card) => (
          <div
            key={card.id}
            onClick={() => toggleMobile(card.id)}                 // ← abre/cierra en mobile
            className="
              group relative w-full max-w-[400px] mx-auto
              bg-gray-800 p-2 rounded-lg shadow-lg border-2 border-transparent
              hover:border-blue-500 hover:shadow-[0_0_15px_rgba(0,123,255,0.7)]
              hover:bg-blue-700/30 transition cursor-pointer
            "
          >
            <Image
              src={card.image}
              alt={card.title}
              width={300}
              height={200}
              className="w-full h-auto rounded-md"
            />
            <h3 className="text-xl mt-2 mb-2 text-white text-center">
              {card.title}
            </h3>

            {/* ---- DETALLE ---- */}
            <div
              className={`
                text-white mt-2
                overflow-hidden transition-all duration-300
                ${
                  // mobile abre con click
                  openId === card.id ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                }
                /* desktop abre con hover */
                md:max-h-0 md:opacity-0
                md:group-hover:max-h-screen md:group-hover:opacity-100
              `}
            >
              {card.urlDemo && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();     // evita toggle adicional
                    setVideoUrl(card.urlDemo!);
                  }}
                  className="w-full flex justify-center items-center bg-[#3B82F6] text-white font-medium py-2 px-6 rounded-lg shadow-md mt-4"
                >
                  Demo
                  <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              )}

              {card.presentation && (
                <a
                  href={card.presentation}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="w-full flex justify-center items-center bg-[#10B981] text-white font-medium py-2 px-6 rounded-lg shadow-md mt-4"
                >
                  Presentación
                  <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </a>
              )}

              <p className="mt-2">{card.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ---------- MODAL VIDEO ---------- */}
      {videoUrl && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75">
          <div className="relative w-full max-w-6xl">
            <button
              onClick={() => setVideoUrl(null)}
              className="absolute top-4 right-4 z-50 bg-gray-700 text-white text-2xl rounded-full p-2 hover:bg-gray-600"
            >
              &times;
            </button>
            <video controls autoPlay className="w-full rounded-lg">
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
