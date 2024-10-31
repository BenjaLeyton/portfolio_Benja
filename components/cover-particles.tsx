"use client";

import { useEffect, useState } from "react";
import { loadSlim } from "@tsparticles/slim";
import Particles, { initParticlesEngine } from "@tsparticles/react";

export const CoverParticles = () => {
    const [init, setInit] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const detectTheme = () => {
            // Detecta si el tema oscuro está activado basado en la clase del body
            const isDark = document.documentElement.classList.contains("dark");
            setIsDarkMode(isDark);
        };

        // Detecta el tema al cargar la página
        detectTheme();

        // Detecta el cambio de tema manualmente
        const observer = new MutationObserver(detectTheme);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["class"],
        });

        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        init &&
        <div className="particle-limited-area"> {/* Aplicar la clase limitada */}
            <Particles
                id="tsparticles"
                options={{
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: false,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 350, // Aumentamos la distancia de repulsión
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: isDarkMode ? "#ffffff" : "#000000",  // Blanco en modo oscuro, negro en modo claro
                        },
                        links: {
                            color: isDarkMode ? "#ffffff" : "#000000",  // Cambia también el color de los enlaces
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 1,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 1, max: 5 },
                        },
                    },
                    detectRetina: true,
                }}
            />
        </div>
    );    
};
