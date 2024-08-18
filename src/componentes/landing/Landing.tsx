"use client";

import React from "react";
import s from "./landing.module.scss";
import Image from "next/image";
import img from "@/archivos/niño_parado_espaldas.jpg";
import ccr from "@/archivos/foto_ccr_majo_jovenes.jpg";
import bolson from "@/archivos/foto_bolson_pet.png";
import barrioLimpio from "@/archivos/foto_casa_euge_pet.jpg";
import reconquista from "@/archivos/noticia_reconquista_vecinos_abrazo.jpg";
import basura_rio from "@/archivos/jovenes_basura_rio.jpg";
import edu_mas_ale from "@/archivos/edu_con_ale_foto_frente_comedor_garrote.jpeg";

export default function Landing() {
  return (
    <>
      <main className={s.main}>
        <Image src={img} alt="hsd" className={s.video} />
        {/* <video autoPlay loop muted className={s.video}>
          <source
            src={
              // "https://drive.google.com/file/d/1Jt8v0wVatOpqU8THYRLBRBgOSpTc5pLR/view?usp=sharing"
              "https://videos.pexels.com/video-files/6753733/6753733-uhd_2560_1440_30fps.mp4"
              // "https://videos.pexels.com/video-files/2330708/2330708-uhd_2560_1440_24fps.mp4"
            }
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video> */}
        <div className={s.mainContent}>
          <div className={s.left}>
            <h1>¿Que planeta le dejamos a nuestros hijos?</h1>
            <h3>Desarrollo ambiental</h3>
          </div>
          <div className={s.right}>
            <h1>
              ¿Que hijos le dejamos a <br />
              nuestro planeta?
            </h1>
            <h3>Capital social</h3>
          </div>
        </div>
      </main>
      <section className={s.acercaDe}>
        <div>
          <div className={s.contenidoAcercaDe}>
            <h1>Nuestro Compromiso</h1>
            <p>
              Nuestro trabajo está dedicado a dejar un{" "}
              <span>mejor planeta</span> a nuestros hijos y mejores hijos a
              nuestro planeta.
            </p>
            <p>
              Por medio de la asociación buscamos trabajar en
              <span> proyectos innovadores </span>que reestablezcan el
              equilibrio de <span>ecosistemas amenazados </span> y comunidades
              vulnerables.
            </p>
            <button>Quiero saber más</button>
          </div>
        </div>
      </section>
      <section className={s.proyectos}>
        <div>
          <div className={s.contenidoProyectos}>
            <h1>Nuestro trabajo</h1>
            <div className={s.card}>
              <Image src={ccr} alt="ccr" />
              <h3>Centro Comunitario Resiliente</h3>
              <p>
                Este proyecto busca convertir Centros Comunitarios en
                resilientes, logrando un impacto social y ambiental positivo. Se
                enfocará en alcanzar autonomía política, alimentaria y económica
                mediante el reciclaje y la producción local.
              </p>
              <button>Ver ubicaciones</button>
            </div>
            <div className={s.card}>
              <Image src={bolson} alt="ccr" />
              <h3>Reciclado PET</h3>
              <p>
                Este proyecto busca convertir Centros Comunitarios en
                resilientes, logrando un impacto social y ambiental positivo.
              </p>
              <button>Saber más</button>
            </div>
            <div className={s.card}>
              <Image src={barrioLimpio} alt="ccr" />
              <h3>Barrio Limpio</h3>
              <p>
                Diseñar de manera participativa una metodología para recolectar,
                acopiar y clasificar la basura, realizando una prueba piloto en
                el Barrio Alte Brown, Tigre Sur que sirva como modelo para el
                diseño del Programa Barrio Limpio.
              </p>
              <button>Saber más</button>
            </div>
            <div className={s.card}>
              <Image src={barrioLimpio} alt="ccr" />
              <h3>Otro proyecto</h3>
              <p>Poner una cuarta card. No se de que puede ser pero agregar</p>
              <button>Saber más</button>
            </div>
          </div>
        </div>
      </section>
      <section className={s.noticias}>
        <div className={s.contenedorNoticias}>
          <div className={s.contenidoNoticias}>
            <h5>Actualizaciones sobre Proyectar</h5>
            <h1>Noticias</h1>
            <div className={s.card}>
              <div className={s.contenedorImg} id={s.norteOnline}>
                <Image src={edu_mas_ale} alt="Imagen notica proyectar rio" />
                <h3>Impulsando el triple impacto</h3>
              </div>
              <h6>por Norte Online - 30 enero 2023</h6>
              <p>
                La ONG que impulsa el triple impacto en los barrios más
                vulnerables
              </p>
              <button className={s.leerMas}>Leer más</button>
            </div>
            <div className={s.card}>
              <div className={s.contenedorImg}>
                <Image src={basura_rio} alt="Imagen notica proyectar rio" />
                <h3>Proyectar</h3>
              </div>
              <h6>por Perfil, Marie Claire - 05 octubre 2021</h6>
              <p>Una ONG que apuesta fuerte por la economía circular</p>
              <button className={s.leerMas}>Leer más</button>
            </div>
            <div className={s.card}>
              <div className={s.contenedorImg}>
                <Image src={reconquista} alt="Imagen notica reconquista" />
                <h3>Reconquista en alerta</h3>
              </div>
              <h6>por La Nacion - 28 Feb 2019</h6>
              <p>
                El ingenioso plan de vecinos para salvar al río y terminar con
                la basura
              </p>
              <button className={s.leerMas}>Leer más</button>
            </div>
            <button className={s.todasLasNovedades}>
              Ver todas las novedades
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
