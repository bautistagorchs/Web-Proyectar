import React, { useEffect, useState } from "react";
import s from "./SectionCounter.module.scss";
import CountUp from "react-countup";

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
            {innerWidth < 900 ? (
              ""
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-recycle"
              >
                <path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5" />
                <path d="M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12" />
                <path d="m14 16-3 3 3 3" />
                <path d="M8.293 13.596 7.196 9.5 3.1 10.598" />
                <path d="m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843" />
                <path d="m13.378 9.633 4.096 1.098 1.097-4.096" />
              </svg>
            )}
            <div>
              <div className={s.p}>
                <CountUp end={2000} {...countUpConfig} suffix=" tns" />
              </div>
              <h6>PET recuperado</h6>
            </div>
          </div>
          <div className={s.box}>
            {innerWidth < 900 ? (
              ""
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="55"
                height="55"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-wrench"
              >
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
              </svg>
            )}
            <div>
              <div className={s.p}>
                <CountUp end={5} {...countUpConfig} duration={6} />
              </div>
              <h6>CCRs en construcción</h6>
            </div>
          </div>
          <div className={s.box}>
            {innerWidth < 900 ? (
              ""
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="55"
                height="55"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-book-open-check"
              >
                <path d="M12 21V7" />
                <path d="m16 12 2 2 4-4" />
                <path d="M22 6V4a1 1 0 0 0-1-1h-5a4 4 0 0 0-4 4 4 4 0 0 0-4-4H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h6a3 3 0 0 1 3 3 3 3 0 0 1 3-3h6a1 1 0 0 0 1-1v-1.3" />
              </svg>
            )}
            <div>
              <div className={s.p}>
                <CountUp end={2500} {...countUpConfig} prefix="+ " />
              </div>
              <h6>Personas capacitadas en educacion ambiental</h6>
            </div>
          </div>
          <div className={s.box}>
            {innerWidth < 900 ? (
              ""
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-sprout"
              >
                <path d="M7 20h10" />
                <path d="M10 20c5.5-2.5.8-6.4 3-10" />
                <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z" />
                <path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z" />
              </svg>
            )}
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
            {innerWidth < 900 ? (
              ""
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="55"
                height="55"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-cooking-pot"
              >
                <path d="M2 12h20" />
                <path d="M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8" />
                <path d="m4 8 16-4" />
                <path d="m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8" />
              </svg>
            )}
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
