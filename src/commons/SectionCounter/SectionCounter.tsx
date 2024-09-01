import React from "react";
import s from "./SectionCounter.module.scss";
import CountUp from "react-countup";
import Link from "next/link";
import { RiArrowDownWideLine } from "react-icons/ri";

const SectionCounter = () => {
  return (
    <div className={s.contenedor} id="impactoEnNumeros">
      <div className={s.contenido}>
        <h1>Impacto en numeros</h1>
        <div className={s.boxesContainer}>
          <div className={s.box} id={s.first}>
            <div>
              <p>
                <CountUp end={5} duration={3} />
              </p>
              <h6>CCRs en construcción</h6>
            </div>
          </div>
          <div className={s.box}>
            <div>
              <p>
                <CountUp end={1500} duration={3} /> t
              </p>
              <h6>Alimentos distibuidos a 140 + centros</h6>
            </div>
          </div>
          <div className={s.box}>
            <div>
              <p>
                <CountUp end={2000} duration={3} /> t
              </p>
              <h6>Plastico PET reciclado</h6>
            </div>
          </div>
          <div className={s.box}>
            <div>
              <p>
                <CountUp end={2500} duration={3} /> +
              </p>
              <h6>Personas capacitadas en educacion ambiental</h6>
            </div>
          </div>
          <div className={s.box}>
            <div>
              <p>
                <CountUp end={100} duration={3} /> k
              </p>
              <h6>Viandas entregadas</h6>
            </div>
          </div>
        </div>
        <Link href={"#proyectos"}>
          <RiArrowDownWideLine size={50} color="white" />
        </Link>
      </div>
    </div>
  );
};

export default SectionCounter;
