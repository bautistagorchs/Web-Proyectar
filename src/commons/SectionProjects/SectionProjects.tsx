import Image from "next/image";
import React from "react";
import pet from "@/assets/foto_pet_bruno.jpg";
import barrioLimpio from "@/assets/foto_casa_euge_pet.jpg";
import ccr from "@/assets/foto_ccr_blended_frente.jpg";
import s from "./SectionProjects.module.scss";

const SectionProjects = () => {
  const arrowDownSline = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-chevron-down"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
  return (
    <section className={s.proyectos} id="proyectos">
      <div>
        <div className={s.contenidoProyectos}>
          <div className={s.headerContainer}>
            <h1>Proyectos</h1>
            <h5>Nuestras ideas en accion</h5>
          </div>
          <div className={s.cardsContainer}>
            <div className={s.card} id="ccr">
              <div className={s.cardInner}>
                <div className={s.cardFront}>
                  <div className={s.contenedorImagen}>
                    <Image src={ccr} alt="ccr" />
                    <h3>Centro Comunitario Resiliente</h3>
                    {arrowDownSline}
                  </div>
                  <div className={s.infoContainer}>
                    <h3>Centro Comunitario Resiliente</h3>
                    <p>
                      Un <span> Centro Comunitario Resiliente</span>, dentro del
                      concepto socio-ecosistémico, es un espacio que fortalece
                      una comunidad para adaptarse y recuperarse de crisis
                      sociales, económicas y ambientales, promoviendo educación
                      y trabajo de manera sostenible y buscando equilibrio entre
                      el bienestar humano y el ecosistema.
                    </p>
                    <button>Ver ubicaciones</button>
                  </div>
                </div>
              </div>
            </div>
            <div className={s.card}>
              <div className={s.cardInner}>
                <div className={s.cardFront} id={s.segundo}>
                  <div className={s.contenedorImagen}>
                    <Image src={pet} alt="ccr" />
                    <h3>Reciclado PET</h3>
                    {arrowDownSline}
                  </div>
                  <div className={s.infoContainer}>
                    <h3>Campaña PET</h3>
                    <p id={s.mergenIzq}>
                      La <span>Campaña PET</span> se enfoca en la recolección de
                      botellas de plástico PET1 para su reciclaje. Involucra a
                      los barrios carenciados, empresas, instituciones
                      educativas y deportivas en la instalación de puntos de
                      acopio, promoviendo la conciencia ambiental y la reducción
                      de residuos plásticos. Total recuperado a la fecha +1000
                      toneladas
                    </p>
                    <button>Saber más</button>
                  </div>
                </div>
              </div>
            </div>
            <div className={s.card}>
              <div className={s.cardInner}>
                <div className={s.cardFront}>
                  <div className={s.contenedorImagen}>
                    <Image src={barrioLimpio} alt="ccr" />
                    <h3>Barrio Limpio</h3>
                    {arrowDownSline}
                  </div>
                  <div className={s.infoContainer}>
                    <h3>Barrio Limpio</h3>
                    <p>
                      El proyecto <span> Barrio Limpio</span> es una iniciativa
                      comunitaria que busca mejorar la limpieza y el cuidado de
                      barrios carenciados mediante la recolección de reciclaje y
                      concientización ambiental. Involucra a los vecinos,
                      instituciones locales y organizaciones para crear un
                      barrio más saludable y sostenible.
                    </p>
                    <button>Saber más</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={s.buttonContainer}>
            <button>Ver todos los proyectos</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionProjects;
