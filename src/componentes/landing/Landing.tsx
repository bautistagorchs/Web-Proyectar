"use client";

import React from "react";
import s from "./landing.module.scss";
import Image from "next/image";
import img from "@/archivos/niño_parado_espaldas.jpg";

export default function Landing() {
  return (
    <>
      <main className={s.main}>
        <Image src={img} alt="hsd" className={s.video} />
        {/* <video autoPlay loop muted className={s.video}>
        <source
        src={
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
            <h1>¿Por que existimos?</h1>
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
          <div className={s.contenidoProyectos}></div>
        </div>
      </section>
    </>
  );
}
