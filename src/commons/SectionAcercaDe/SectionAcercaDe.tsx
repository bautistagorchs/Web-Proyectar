import React from "react";
import s from "./SectionAcercaDe.module.scss";
import { RiArrowDownWideLine } from "react-icons/ri";
import Link from "next/link";

const SectionAcercaDe = () => {
  return (
    <section className={s.acercaDe}>
      <div>
        <div className={s.contenidoAcercaDe}>
          <h1>Nuestro Compromiso</h1>
          <p>
            Nuestro trabajo está dedicado a dejar un <span>mejor planeta</span>{" "}
            a nuestros hijos y mejores hijos a nuestro planeta.
          </p>
          <p>
            Por medio de la asociación buscamos trabajar en
            <span> proyectos innovadores </span>que reestablezcan el equilibrio
            de <span>ecosistemas amenazados </span> y comunidades vulnerables.
          </p>
          <button>Quiero saber más</button>
          <Link href={"#impactoEnNumeros"}>
            <RiArrowDownWideLine size={50} color="#000000da" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SectionAcercaDe;
