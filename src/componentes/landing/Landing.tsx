"use client";

import React from "react";
import SectionProjects from "@/commons/SectionProjects/SectionProjects";
import SectionNews from "@/commons/SectionNews/SectionNews";
import SectionAcercaDe from "@/commons/SectionAcercaDe/SectionAcercaDe";
import SectionEmpresas from "@/commons/SectionEmpresas/SectionEmpresas";
// import img from "@/assets/edu_con_ale_foto_frente_comedor_garrote.jpeg";
// import Image from "next/image";
import s from "./Landing.module.scss";
import SectionMap from "@/commons/SectionMap/SectionMap";
import SectionCounter from "@/commons/SectionCounter/SectionCounter";

export default function Landing() {
  return (
    <>
      <main className={s.main}>
        {/* <Image src={img} alt="hsd" className={s.video} /> */}
        <video autoPlay muted loop playsInline className={s.video}>
          <source src="/videos/video1.mp4" type="video/mp4" />
        </video>
        <div className={s.hero}>
          <div className={s.headers}>
            <h1>
              Dejar <span> mejores Hijos</span> <br /> a nuestro planeta
            </h1>
            <h1 className={s.segundo}>
              Dejar un <span>mejor Planeta</span> <br /> a nuestros hijos
            </h1>
          </div>
        </div>
      </main>
      <SectionAcercaDe />
      <SectionCounter />
      <SectionProjects />
      <SectionNews />
      <SectionEmpresas />
      <SectionMap />
    </>
  );
}
