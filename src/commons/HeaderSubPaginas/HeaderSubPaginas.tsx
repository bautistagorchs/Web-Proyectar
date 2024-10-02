import React from "react";
import s from "./HeaderSubPaginas.module.scss";
import Image from "next/image";
import { HeaderSubPaginasProps } from "@/types/types";

const HeaderSubPaginas: React.FC<HeaderSubPaginasProps> = ({ title, img }) => {
  return (
    <div className={s.hero}>
      <div className={s.imageContainer}>
        <Image src={img} alt="Hero proyectos" />
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default HeaderSubPaginas;
