import React from "react";
import s from "./SectionCounter.module.scss";
import CountUp from "react-countup";
import Link from "next/link";
import { RiArrowDownWideLine } from "react-icons/ri";

const SectionCounter = () => {
  const countUpConfig = {
    duration: 3,
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
    scrollSpyOnce: true,
  };
  return (
    <div className={s.contenedor} id="impactoEnNumeros">
      <div className={s.contenido}>
        <h5>El cambio medido en numeros</h5>
        <h1>Impacto</h1>
        <div className={s.boxesContainer}>
          <div className={s.box} id={s.first}>
            <div>
              <div className={s.p}>
                <CountUp end={2000} {...countUpConfig} suffix=" t" />
              </div>
              <h6>Plastico PET reciclado</h6>
            </div>
          </div>
          <div className={s.box}>
            <div>
              <div className={s.p}>
                <CountUp end={1500} {...countUpConfig} suffix=" t" />
              </div>
              <h6>Alimentos distibuidos a 140 + comedores</h6>
            </div>
          </div>
          <div className={s.box}>
            <div>
              <div className={s.p}>
                <CountUp end={5} {...countUpConfig} duration={6} />
              </div>
              <h6>CCRs en construcción</h6>
            </div>
          </div>
          <div className={s.box}>
            <div>
              <div className={s.p}>
                <CountUp end={2500} {...countUpConfig} suffix=" +" />
              </div>
              <h6>Personas capacitadas en educacion ambiental</h6>
            </div>
          </div>
          <div className={s.box}>
            <div>
              <div className={s.p}>
                <CountUp end={100} {...countUpConfig} suffix=" k" />
              </div>
              <h6>Viandas entregadas</h6>
            </div>
          </div>
        </div>
        <Link href={"#proyectos"} className={s.arrowNextSection}>
          <RiArrowDownWideLine size={50} color="white" />
        </Link>
      </div>
    </div>
  );
};

export default SectionCounter;
