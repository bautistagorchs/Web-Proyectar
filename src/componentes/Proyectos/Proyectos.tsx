import React from "react";
import s from "./proyectos.module.scss";
import Image from "next/image";
import hero from "@/assets/hero_proyectos.jpg";
import Link from "next/link";
const Proyectos = () => {
  return (
    <div className={s.outerContainer}>
      <div className={s.contentContainer}>
        <div className={s.content}>
          <div className={s.imageContainer}>
            <Image src={hero} alt="her" />
            <div className={s.headerOverlay}>
              <h1>Más árboles</h1>
              <h3>
                Al plantar sumamos beneficios ambientales, mientras se aprende y
                potencia el compromiso del equipo
              </h3>
            </div>
          </div>
          <section className={s.infoContainer}>
            <h5>Programas: Bosques Urbanos</h5>
            <h2>Una jornada de plantado con el equipo</h2>
            <p>
              Las plantaciones se realizan en reservas econologicas, parques,
              plazas, veredas y escuelas como tambien en empresas impulsando
              muchas veces proyectos de conservacion, agroecologia y
              urbanizaciones.
            </p>
            <p>
              Desde Plantarse coordinamos el proyecto y la actividad,
              acompañando a los Voluntarios en el proceso con capacitacion y los
              materiales necesarios
            </p>
          </section>
          <section className={s.pilares}>
            <h2>¿Cómo organizamos la jornada?</h2>
            <div>
              <div className={s.item}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="45"
                  height="45"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-building-2"
                >
                  <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
                  <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
                  <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
                  <path d="M10 6h4" />
                  <path d="M10 10h4" />
                  <path d="M10 14h4" />
                  <path d="M10 18h4" />
                </svg>
                <h6>Espacios</h6>
                <p>
                  Relevamiento social ambiental de espacios y gestion de
                  autorizaciones
                </p>
              </div>
              <div className={s.item}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="45"
                  height="45"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-clock-4"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <h6>La jornada</h6>
                <p>
                  Organizacion de la actividad y coordinacion el dia del
                  voluntariado
                </p>
              </div>
              <div className={s.item}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="45"
                  height="45"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-hourglass"
                >
                  <path d="M5 22h14" />
                  <path d="M5 2h14" />
                  <path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22" />
                  <path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2" />
                </svg>
                <h6>Explicacion</h6>
                <p>Presentacion de la actividad, breve explicaciones de la</p>
              </div>
              <div className={s.item}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="45"
                  height="45"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-target"
                >
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
                <h6>Materiales y herramientas</h6>
                <p>
                  arboles, compost, tutores, palas y todo lo necesario para la
                  actividad
                </p>
              </div>
            </div>
          </section>
          <section className={s.impacto}>
            <h5>Programas: Bosques Urbanos</h5>
            <h2>¿Por que es importante plantas arboles nativos?</h2>
            <p>
              Las plantaciones se realizan en reservas econologicas, parques,
              plazas, veredas y escuelas como tambien en empresas impulsando
              muchas veces proyectos de conservacion, agroecologia y
              urbanizaciones.
            </p>
            <div className={s.list}>
              <div className={s.title}>
                <h3>01.</h3>
                <span>
                  Mitigan el <br />
                  Cambio Climático
                </span>
              </div>
              <p>
                En sus etapa de crecimiento capturan y almacenan CO2 del aire.
              </p>
            </div>
            <div className={s.list}>
              <div className={s.title}>
                <h3>02.</h3>
                <span>
                  Refrescan <br />
                  las ciudades
                </span>
              </div>
              <p>
                Son el eje de la resiliencia de las ciudades frente a la crisis
              </p>
            </div>
            <div className={s.list}>
              <div className={s.title}>
                <h3>03.</h3>
                <span>
                  Albergan <br />
                  vida
                </span>
              </div>
              <p>
                Cada arbol alberga desde microorganismos hasta insectos y aves
              </p>
            </div>
            <div className={s.list}>
              <div className={s.title}>
                <h3>04.</h3>
                <span>
                  Mejoran <br />
                  la calidad de vida
                </span>
              </div>
              <p>Embellecen las ciudades, reducen los ruidos y capturan</p>
            </div>
            <Link href={""}>
              <button>CONSULTAR SOBRE ESTE VOLUNTARIADO </button>
            </Link>
          </section>
          <section className={s.photos}>
            <Image src={hero} alt="alt" />
            <Image src={hero} alt="alt" />
            <Image src={hero} alt="alt" />
            <Image src={hero} alt="alt" />
            <Image src={hero} alt="alt" />
            <Image src={hero} alt="alt" />
            <Image src={hero} alt="alt" />
            <Image src={hero} alt="alt" />
            <Image src={hero} alt="alt" />
          </section>
          <section className={s.others}>
            <h3>Otros proyectos</h3>
            <Link href={""}>Armado de huerta</Link>
            <Link href={""}>Limpieza de costas</Link>
            <Link href={""}>Espacios verdes</Link>
            <Link href={""}>In company</Link>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Proyectos;
