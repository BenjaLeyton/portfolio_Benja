/* eslint-disable react/no-unescaped-entities */
"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Paperclip, Linkedin } from "lucide-react";
import Typewriter from 'typewriter-effect';
import { buttonVariants } from "./ui/button";
import Container from "./shared/container";
import { useTheme } from 'next-themes';

const Introduction = () => {
  const { theme } = useTheme();

  return (
    <Container>
      <div className="text-center scale-110" id="home">
        <h3 className="text-2xl" id="home">
          Hello <span className="inline-block animate-wave">👋</span> I'm
        </h3>
        <h1 className="text-5xl font-bold mb-4">
          <Typewriter
            onInit={(typewriter) => {
              typewriter// eslint-disable-next-line react/no-unescaped-entities
              .typeString('Benjamin Leyton 🧑🏽‍💻')
              
                .callFunction(() => {
                  typewriter.stop();
                })
                .start();
            }}
            options={{
              cursor: '|',
              delay: 100,
            }}
          />
        </h1>
        <div className="flex flex-col items-center">
          <h2 className="text-2xl text-gray-400">Ingeniero Civil Industrial TI</h2>
          <h2 className="text-2xl text-gray-400 flex justify-center">Pontificia Universidad Católica de Chile</h2>
        </div>

        <div className="flex justify-center mt-4 mb-6">
          <Link className={buttonVariants({ variant: 'white' })} href="#contact">
            <Mail className="mr-2" /> Envíame un mensaje!
          </Link>
        </div>

        <div className="flex flex-col md:flex-row gap-4 justify-center mt-4">
          <Link className={`${buttonVariants({ variant: 'secondary' })} linkedin-button`} href="https://www.linkedin.com/in/benjamin-leyton-aravena-b7a333222/" target="_blank">
            <Linkedin className="mr-2" /> LinkedIn
          </Link>

          <Link className={buttonVariants({ variant: 'secondary' })} href="/CV-Español.pdf" target="_blank">
            <Paperclip className="mr-2" /> Descargar CV
          </Link>
        </div>
      </div>
      <div className="mt-6">
        <Image
          src={theme === 'dark' ? '/degrade_benja.png' : '/benjaCHILL2.png'}
          alt="Profile pic"
          width={600}
          height={600}
        />
      </div>
    </Container>
  );
}

export default Introduction;
