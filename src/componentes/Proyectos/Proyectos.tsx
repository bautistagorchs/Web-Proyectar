import React from "react";
import s from "./proyectos.module.scss";
// import Image from "next/image";
import hero from "@/assets/hero_proyectos.jpg";
import HeaderSubPaginas from "@/commons/HeaderSubPaginas/HeaderSubPaginas";
const Proyectos = () => {
  return (
    <div className={s.outerContainer}>
      <div className={s.contentContainer}>
        <div className={s.content}>
          <HeaderSubPaginas title="Proyectos" img={hero} />
        </div>
      </div>
    </div>
  );
};

export default Proyectos;
