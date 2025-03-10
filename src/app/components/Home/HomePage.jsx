"use client"

import Image from "next/image";
import { botones } from "@/data/enlaces";

const HomePage = () => {
  return (
    <div className="container mx-auto p-4">
      <main className="xl:w-1/2 lg:w-[60%] md:w-[80%] smd:w-[80%] sm:w-[100%] mx-auto">
        <Image
          src="/imagen-perfil.jpg"
          alt="Mateo Lizcano Noriega"
          width={500}
          height={500}
          className="rounded-full xl:w-40 lg:w-40 md:w-24 smd:w-28 sm:w-24 lg:h-40 md:h-24 smd:h-28 sm:h-24 mx-auto mt-10"
        />
        <h2 className="xl:text-5xl lg:text-4xl md:text-3xl smd:text-3xl sm:text-3xl font-extrabold text-center xl:my-10 lg:my-10 md:my-5 smd:my-5 sm:my-5">
          Mateo Lizcano
        </h2>
        <div className="flex flex-row justify-center items-center xl:text-lg lg:text-base md:text-xs smd:text-xs sm:text-[10px]">
          <p>Desarrollador de software</p>
          <Image src="/logo-mateo.png" alt="Logo Mateo Lizcano" width={100} height={100} className="xl:mx-4 lg:mx-2 md:mx-2 smd:mx-2 sm:mx-2 w-8 " />
          <p>Analista de ciberseguridad</p>
        </div>

        <div className="my-5">
          <p className="italic text-center xl:text-xl lg:text-xl md:text-base smd:text-base sm:text-sm font-semibold">
            {`"Mi objetivo es ayudar a las personas a mejorar su vida a través de la tecnología."`}
          </p>
        </div>
        <div className="flex flex-col justify-start items-center">
          {botones.map((boton) => (
            <button key={boton.id} className={`font-bold py-2 px-4 rounded w-72 text-lg flex flex-row justify-center items-center shadow-sm shadow-black/50 my-2 ${boton.color}`}
              onClick={() => window.open(boton.url, "_blank")}
              >
                {boton.icono} {boton.nombre}
              </button>
          ))}
        </div>
      </main>
      <footer className="text-center mt-10">
        <p className="text-sm text-gray-500">{`© ${new Date().getFullYear()} Mateo Lizcano Noriega`}</p>
      </footer>
    </div>
  );
}

export default HomePage