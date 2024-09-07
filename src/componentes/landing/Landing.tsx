"use client";

import React from "react";
import SectionProjects from "@/commons/SectionProjects/SectionProjects";
import SectionNews from "@/commons/SectionNews/SectionNews";
import SectionAcercaDe from "@/commons/SectionAcercaDe/SectionAcercaDe";
import SectionEmpresas from "@/commons/SectionEmpresas/SectionEmpresas";
import img from "@/assets/niño_parado_espaldas.jpg";
import Image from "next/image";
import s from "./landing.module.scss";
import SectionCounter from "@/commons/SectionCounter/SectionCounter";

export default function Landing() {
  return (
    <>
      <main className={s.main}>
        <Image src={img} alt="hsd" className={s.video} />
        {/* <video autoPlay muted loop playsInline className={s.video}>
          <source src="/videos/video.mp4" type="video/mp4" />
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
      <SectionAcercaDe />
      <SectionCounter />
      <SectionProjects />
      <SectionNews />
      <SectionEmpresas />
    </>
  );
}
