"use client";

import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorder";
import { useTranslation } from "@/lib/i18n";
import { useLanguage } from "@/context/LanguageContext";

const Experience = () => {
  const { language } = useLanguage();
  const t = useTranslation(language);

  return (
    <div className="py-20 w-full" id="experience">
      <h1 className="heading">
        {t.experiences.prefix}
        <span className="text-purple"> {t.experiences.highlight}</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <Button
            // A Key reinicia o componente ao trocar o idioma (necessário para a borda)
            key={`${card.id}-${language}`}
            
            // Duração aleatória para efeito orgânico
            duration={Math.floor(Math.random() * 10000) + 10000}
            
            // Define o raio da borda
            borderRadius="1.75rem"
            
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            }}
            
            // Aplica o grid layout (col-span-2) no container
            containerClassName={card.className}
            
            // Estilos internos
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <img
                src={card.thumbnail}
                alt={card.thumbnail}
                className="lg:w-32 md:w-20 w-16"
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {t.experiences[`card${card.id}Title` as keyof typeof t.experiences]}
                </h1>
                
                {/* AQUI ESTÁ A CORREÇÃO VISUAL: line-clamp-2 */}
                <p className="text-start text-white-100 mt-3 font-semibold line-clamp-2">
                  {t.experiences[`card${card.id}Desc` as keyof typeof t.experiences]}
                </p>
                
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;