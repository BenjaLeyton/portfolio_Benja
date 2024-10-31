import { dataContact } from "@/data";
import Title from "./shared/title";
import Link from "next/link";
import ContactForm from "./contact-form";

const Contact = () => {
    return (
        <div className="p-8 md:px-16 md:py-60 max-w-7xl mx-auto" id="contact">
            {/* Contenedor del título y la mano con flex y mayor tamaño */}
            <div className="flex items-center justify-center">
                <Title 
                    title="Contacta conmigo" 
                    subtitle="Ponte en contacto conmigo" 
                /> 
                {/* Mano animada con mayor tamaño */}
                <span className="inline-block animate-wave text-5xl ml-3 mt-6">👋</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 md:gap-10 mt-10">
                <div>
                    {dataContact.map((data) => (
                        <div key={data.id}
                            className="flex flex-col items-center dark:bg-slate-800 rounded-lg mb-6 p-6"
                        >
                            <div className="text-3xl mb-2">
                                {data.icon}
                            </div>
                            <p className="text-xl font-semibold">{data.title}</p>
                            <p className="text-lg">{data.subtitle}</p>
                            {data.title === "Email" && (
                            <Link href={data.link} target="_blank" className="text-blue-500 mt-2 text-lg">
                                Enviar mensaje
                            </Link>
                            )}
                        </div>
                    ))}
                </div>
                <div className="col-span-2">
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}

export default Contact;
