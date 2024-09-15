import React, { useEffect, useState } from "react";
import s from "./SectionCounter.module.scss";
import CountUp from "react-countup";
// import Link from "next/link";
// import { RiArrowDownWideLine } from "react-icons/ri";
import { MdRecycling } from "react-icons/md";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { FaSeedling, FaTools } from "react-icons/fa";
import { GiHotMeal } from "react-icons/gi";

const SectionCounter = () => {
  const [innerWidth, setInnerWidth] = useState(0);

  const countUpConfig = {
    duration: 3,
    enableScrollSpy: true,
    scrollSpyDelay: 500,
    scrollSpyOnce: true,
  };
  useEffect(() => {
    if (window !== undefined) {
      setInnerWidth(window.innerWidth);
    }
  }, []);
  return (
    <div className={s.contenedor} id="impactoEnNumeros">
      <div className={s.contenido}>
        <h1>Impacto</h1>
        <h5>Nuestras acciones en numeros</h5>
        <div className={s.boxesContainer}>
          <div className={s.box} id={s.first}>
            {innerWidth < 900 ? "" : <MdRecycling size={50} />}
            <div>
              <div className={s.p}>
                <CountUp end={2000} {...countUpConfig} suffix=" tns" />
              </div>
              <h6>PET recuperado</h6>
            </div>
          </div>
          <div className={s.box}>
            {innerWidth < 900 ? "" : <FaTools size={40} />}
            <div>
              <div className={s.p}>
                <CountUp end={5} {...countUpConfig} duration={6} />
              </div>
              <h6>CCRs en construcción</h6>
            </div>
          </div>
          <div className={s.box}>
            {innerWidth < 900 ? "" : <LiaChalkboardTeacherSolid size={60} />}
            <div>
              <div className={s.p}>
                <CountUp end={2500} {...countUpConfig} prefix="+ " />
              </div>
              <h6>Personas capacitadas en educacion ambiental</h6>
            </div>
          </div>
          <div className={s.box}>
            {innerWidth < 900 ? "" : <FaSeedling size={40} />}
            <div>
              <div className={s.p}>
                <CountUp end={1500} {...countUpConfig} suffix=" tns" />
              </div>
              <h6>
                Alimentos entregados <br />a centros comunitarios
              </h6>
            </div>
          </div>
          <div className={s.box}>
            {innerWidth < 900 ? "" : <GiHotMeal size={58} />}
            <div>
              <div className={s.p}>
                <CountUp end={100000} {...countUpConfig} prefix="+ " />
              </div>
              <h6>Viandas entregadas</h6>
            </div>
          </div>
        </div>
        {/* <Link href={"#proyectos"} className={s.arrowNextSection}>
          <RiArrowDownWideLine size={50} color="white" />
        </Link> */}
      </div>
      {/* <div className={s.custom_shape_divider_bottom_1726352060}>
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
      </div> */}
    </div>
  );
};

export default SectionCounter;
