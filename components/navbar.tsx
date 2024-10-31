import { useState, useEffect } from 'react';
import { itemsNavbar } from "@/data";
import Link from "next/link";
import { ToggleTheme } from "./toggle-theme";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          setActiveSection(target.id);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.6,
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    itemsNavbar.forEach(item => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      itemsNavbar.forEach(item => {
        const element = document.getElementById(item.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  return (
    <nav className="fixed z-20 flex flex-col items-center w-full 
      mt-auto justify-center h-max bottom-20">
      <div className="flex items-center gap-4 justify-center 
        px-6 py-3 dark:bg-white/10 bg-slate-800/10 backdrop-blur-sm rounded-full">
        {itemsNavbar.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <Link key={item.id} href={`#${item.id}`}>
              <div
                className={`cursor-pointer px-4 py-3 rounded-full transition duration-150 group
                  ${isActive ? 'bg-blue-500 text-white ring-4 ring-blue-300' : 'hover:bg-gray-200 dark:hover:bg-gray-700'}`}
              >
                <div
                  className={`flex items-center justify-center transition-transform duration-150 
                    ${isActive ? 'scale-110' : 'group-hover:scale-110'} text-2xl`}
                >
                  {item.icon}
                </div>
              </div>
            </Link>
          );
        })}
        <ToggleTheme /> 
      </div>
    </nav>
  );
};

export default Navbar;
