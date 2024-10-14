"use client";

import React, { useEffect, useRef } from "react";
import s from "./proyectos.module.scss";
import Image from "next/image";
import hero from "@/assets/foto_ccr_blended_frente.jpg";
import huerta from "@/assets/pexels-daniel-dan-47825192-7542915.jpg";
import huerta2 from "@/assets/pexels-riccardo-28794985.jpg";
import foto2 from "@/assets/3e30d04cd40882fa2251de813c73101a.jpg";
import Link from "next/link";
import basuraFlotando from "@/assets/cbddb91e34bdfa63acc5921dc4dcbd9e.jpg";
import img1 from "@/assets/3e30d04cd40882fa2251de813c73101a.jpg";
import img2 from "@/assets/cbddb91e34bdfa63acc5921dc4dcbd9e.jpg";
import img3 from "@/assets/coperativa.jpg";
import img4 from "@/assets/edu_con_ale_foto_frente_comedor_garrote.jpeg";
import img5 from "@/assets/foto_casa_euge_pet.jpg";
import img6 from "@/assets/foto_ccr_blended.png";
import img7 from "@/assets/foto_pet_bruno.jpg";
import img8 from "@/assets/jovenes_basura_rio.jpg";
import img9 from "@/assets/noticia_reconquista_plan_saneamiento.jpg";
import img10 from "@/assets/noticia_reconquista_vecinos_abrazo.jpg";
import img11 from "@/assets/rio-reconquista.jpg";
import img12 from "@/assets/imagen1.jpg";
import img13 from "@/assets/imagen2.jpg";
import img14 from "@/assets/imagen3.jpg";
import { ImageItem } from "@/types/types";

const Proyectos = () => {
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const divRefs = useRef<(HTMLElement | null)[]>([]);
  const pilares = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(s.visible);
          }
        });
      },
      { threshold: 0.3 } // cuanto mas grande mas tarda en aparecer la imagen
    );
    const observer2 = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(s.visible);
          }
        });
      },
      { threshold: 0.6 } // cuanto mas grande mas tarda en aparecer la imagen
    );

    divRefs.current.forEach((e) => {
      if (e) observer.observe(e);
    });

    imageRefs.current.forEach((image) => {
      if (image) observer.observe(image);
    });

    if (pilares.current) {
      observer2.observe(pilares.current);
    }

    return () => {
      imageRefs.current.forEach((image) => {
        if (image) observer.unobserve(image);
      });
      divRefs.current.forEach((e) => {
        if (e) observer.unobserve(e);
      });
      if (pilares.current) {
        observer.unobserve(pilares.current);
      }
    };
  }, []);

  const data: ImageItem[] = [
    {
      id: 1,
      imgSrc: img1,
    },
    {
      id: 2,
      imgSrc: img2,
    },
    {
      id: 3,
      imgSrc: img3,
    },
    {
      id: 4,
      imgSrc: img4,
    },
    {
      id: 5,
      imgSrc: img5,
    },
    {
      id: 6,
      imgSrc: img6,
    },
    {
      id: 7,
      imgSrc: img7,
    },
    {
      id: 8,
      imgSrc: img8,
    },
    {
      id: 9,
      imgSrc: img9,
    },
    {
      id: 10,
      imgSrc: img10,
    },
    {
      id: 11,
      imgSrc: img11,
    },
    {
      id: 12,
      imgSrc: img12,
    },
    {
      id: 13,
      imgSrc: img13,
    },
    {
      id: 14,
      imgSrc: img14,
    },
  ];
  return (
    <div className={s.outerContainer}>
      <div className={s.contentContainer}>
        <div className={s.content}>
          <div className={s.imageContainer}>
            <Image src={hero} alt="her" />
            <div className={s.headerOverlay}>
              <h1>Centro Comunitario Resiliente</h1>
              <h3>
                Hacia la autonomía Política, Alimentaria y Económica. Un nuevo
                modelo para el futuro de las comunidades
              </h3>
            </div>
          </div>
          <section className={s.infoContainer}>
            <h5>Enfoque Metodológico</h5>
            <h2>Sistema Socio-ecológico y Desarrollo Sostenible</h2>
            <p>
              El proyecto se basa en una metodología socioecosistémica,
              integrando las relaciones socio-ambientales complejas de manera
              holística para crear Centros Comunitarios Resilientes.
            </p>
            <p>
              Este enfoque busca lograr un equilibrio entre componentes
              sociales, ecológicos y económicos, garantizando un impacto
              positivo y sostenible en las comunidades y promoviendo su
              desarrollo integral.
            </p>
          </section>
          <section className={s.pilares}>
            <h2>Pilares del Proyecto</h2>
            <div ref={pilares} className={s.itemsContainer}>
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
                <h6>Infraestructura Sostenible</h6>
                <p>
                  Reacondicionamiento del centro para optimizar espacios y
                  cumplir con objetivos sociales y ambientales.
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
                  className="lucide lucide-book-open-text"
                >
                  <path d="M12 7v14" />
                  <path d="M16 12h2" />
                  <path d="M16 8h2" />
                  <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
                  <path d="M6 12h2" />
                  <path d="M6 8h2" />
                </svg>
                <h6>Educación y Capacitación</h6>
                <p>
                  Formación en herramientas tecnológicas, gestión administrativa
                  y sostenibilidad.
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
                  className="lucide lucide-soup"
                >
                  <path d="M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z" />
                  <path d="M7 21h10" />
                  <path d="M19.5 12 22 6" />
                  <path d="M16.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.73 1.62" />
                  <path d="M11.25 3c.27.1.8.53.74 1.36-.05.83-.93 1.2-.98 2.02-.06.78.33 1.24.72 1.62" />
                  <path d="M6.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.74 1.62" />
                </svg>

                <h6>Alimentación Saludable</h6>
                <p>
                  Implementación de huertas comunitarias y provisión de
                  alimentos para garantizar la nutrición.
                </p>
              </div>
              <div className={s.item}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="44"
                  height="44"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-recycle"
                >
                  <path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5" />
                  <path d="M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12" />
                  <path d="m14 16-3 3 3 3" />
                  <path d="M8.293 13.596 7.196 9.5 3.1 10.598" />
                  <path d="m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843" />
                  <path d="m13.378 9.633 4.096 1.098 1.097-4.096" />
                </svg>
                <h6>Reciclaje Productivo</h6>
                <p>
                  Desarrollo de un plan de reciclaje como fuente de ingresos y
                  cuidado ambiental.
                </p>
              </div>
            </div>
          </section>
          {/* <section
            className={s.impacto}
            ref={divRefs}
          >
            <h5>Metodología de Trabajo</h5>
            <h2>Pasos Clave del Programa</h2>
            <p>
              El proyecto se implementa en dos capas, abordando tanto la
              infraestructura interna como las necesidades externas de la
              comunidad, siguiendo estos pasos clave:
            </p>
            <div>
              <div className={s.list}>
                <div className={s.title}>
                  <h3>01.</h3>
                  <span>Diagnóstico Inicial</span>
                </div>
                <p>
                  Evaluación de las condiciones actuales del centro y la
                  comunidad.
                </p>
              </div>
              <div className={s.list}>
                <div className={s.title}>
                  <h3>02.</h3>
                  <span>Plan de Desarrollo</span>
                </div>
                <p>
                  Diseño de un plan social y ambiental para los próximos dos
                  años.
                </p>
              </div>
              <div className={s.list}>
                <div className={s.title}>
                  <h3>03.</h3>
                  <span>Ejecución del Proyecto</span>
                </div>
                <p>
                  mplementación de actividades de infraestructura, capacitación
                  y alimentación.
                </p>
              </div>
              <div className={s.list}>
                <div className={s.title}>
                  <h3>04.</h3>
                  <span>Monitoreo y Evaluación</span>
                </div>
                <p>
                  Supervisión continua del progreso y ajustes necesarios para
                  garantizar el éxito.
                </p>
              </div>
            </div>
            <Link href={""}>
              <button>CONSULTAR SOBRE ESTE VOLUNTARIADO </button>
            </Link>
          </section> */}
          <section className={s.impacto}>
            <h5>Metodología de Trabajo</h5>
            <h2>Pasos Clave del Programa</h2>
            <p>
              El proyecto se implementa en dos capas, abordando tanto la
              infraestructura interna como las necesidades externas de la
              comunidad, siguiendo estos pasos clave:
            </p>
            <div>
              {[
                "Diagnóstico Inicial",
                "Plan de Desarrollo",
                "Ejecución del Proyecto",
                "Monitoreo y Evaluación",
              ].map((title, index) => (
                <div
                  key={index}
                  className={s.list}
                  style={{ transitionDelay: `${index / 6}s` }}
                  ref={(el) => {
                    divRefs.current[index] = el;
                  }}
                >
                  <div className={s.title}>
                    <h3>0{index + 1}.</h3>
                    <span>{title}</span>
                  </div>
                  <p>
                    {index === 0 &&
                      "Evaluación de las condiciones actuales del centro y la comunidad."}
                    {index === 1 &&
                      "Diseño de un plan social y ambiental para los próximos dos años."}
                    {index === 2 &&
                      "Implementación de actividades de infraestructura, capacitación y alimentación."}
                    {index === 3 &&
                      "Supervisión continua del progreso y ajustes necesarios para garantizar el éxito."}
                  </p>
                </div>
              ))}
            </div>
            <Link href="">
              <button>CONSULTAR SOBRE ESTE VOLUNTARIADO</button>
            </Link>
          </section>
          <section className={s.gallery}>
            {data.map((item, index) => {
              return (
                <div
                  className={s.pics}
                  key={index}
                  ref={(el) => {
                    imageRefs.current[index] = el;
                  }}
                >
                  <Image src={item.imgSrc} alt={item.id + "picture"} />
                </div>
              );
            })}
          </section>
          <section className={s.others}>
            <h3>Otros proyectos</h3>
            <div>
              <div className={s.container}>
                <div>
                  <Image src={huerta} alt="her" />
                  <div className={s.infoOnHover}>
                    <p>
                      Este programa busca reunir tres caracteristicas cruciales
                      del cambio y prosperidad
                    </p>
                  </div>
                </div>
                <Link href={""}>Armado de huerta</Link>
              </div>
              <div className={s.container}>
                <div>
                  <Image src={basuraFlotando} alt="her" />
                  <div className={s.infoOnHover}>
                    <p>
                      Este programa busca reunir tres caracteristicas cruciales
                      del cambio y prosperidad
                    </p>
                  </div>
                </div>
                <Link href={""}>Limpieza de costas</Link>
              </div>
              <div className={s.container}>
                <div>
                  <Image src={foto2} alt="her" />
                  <div className={s.infoOnHover}>
                    <p>
                      Este programa busca reunir tres caracteristicas cruciales
                      del cambio y prosperidad
                    </p>
                  </div>
                </div>
                <Link href={""}>Espacios verdes</Link>
              </div>
              <div className={s.container}>
                <div>
                  <Image src={huerta2} alt="her" />
                  <div className={s.infoOnHover}>
                    <p>
                      Este programa busca reunir tres caracteristicas cruciales
                      del cambio y prosperidad
                    </p>
                  </div>
                </div>
                <Link href={""}>In company</Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Proyectos;
