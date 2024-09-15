import React from "react";
import s from "./SectionAcercaDe.module.scss";
import { RiArrowDownWideLine } from "react-icons/ri";
import Link from "next/link";

const SectionAcercaDe = () => {
  return (
    <section className={s.acercaDe}>
      <div className={s.contenedorContenido}>
        <div className={s.contenidoAcercaDe}>
          <div className={s.central}>
            <h1>Nuestro propósito</h1>
            <p>
              Desarrollamos e implementamos <span> proyectos innovadores</span>{" "}
              que reestablezcan el equilibrio de <span> ecosistemas </span>
              amenazados y <span> comunidades </span>
              de bajos recursos.
            </p>
            <button>Nuestras propuestas</button>
            <Link href={"#impactoEnNumeros"}>
              <RiArrowDownWideLine size={50} color="#000000da" />
            </Link>
          </div>
        </div>
      </div>
      <div className={s.custom_shape_divider_bottom_1726338031}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className={s.shape_fill}
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default SectionAcercaDe;
