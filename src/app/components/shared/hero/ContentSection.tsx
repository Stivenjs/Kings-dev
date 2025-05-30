import React from "react";
import TechStack from "./TechStack";
import Image from "next/image";
import { FormModal } from "../../shared/form-modal";

const ContentSection = () => {
  return (
    <div className="relative w-full lg:w-1/2 h-screen bg-black flex flex-col justify-center px-8 lg:px-16">
      <div className="space-y-8">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <span className="inline-block w-8 h-[2px] bg-fuchsia-500" />
            <span className="text-fuchsia-500 font-medium tracking-wider">
              KINGS DEV
            </span>
            <Image src="/icono.ico" alt="Logo" width={50} height={50} />
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold text-white leading-none">
            Creamos el
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500">
              Futuro Digital
            </span>
          </h1>
        </div>
        <p className="text-lg text-gray-400 max-w-lg">
          Transformamos ideas en experiencias digitales excepcionales.
          Especialistas en desarrollo web, móvil e inteligencia artificial.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <FormModal
            buttonLabel="Inicia tu Proyecto"
            title="Inicia tu Proyecto"
          />
        </div>

        <TechStack />
      </div>
    </div>
  );
};

export default ContentSection;
