import React, { useEffect, useRef } from "react";
import s from "./SectionAcercaDe.module.scss";
import Link from "next/link";

const SectionAcercaDe = () => {
  const contenidoRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(s.isVisible); // Agrega la clase cuando es visible
          }
        });
      },
      { threshold: 0.9 } // El umbral es el porcentaje de visibilidad requerido para activar la animación
    );

    if (contenidoRef.current) {
      observer.observe(contenidoRef.current);
    }

    return () => {
      if (contenidoRef.current) {
        observer.unobserve(contenidoRef.current);
      }
    };
  }, []);
  return (
    <section className={s.acercaDe}>
      <div className={s.contenedorContenido}>
        <div className={s.contenidoAcercaDe} ref={contenidoRef}>
          <div className={s.central}>
            <h1>Nuestro Propósito</h1>
            <p>
              Desarrollamos e implementamos proyectos innovadores que
              reestablezcan el equilibrio de ecosistemas amenazados y
              comunidades de bajos recursos.
            </p>
            <button>Nuestras propuestas</button>
            <Link href={"#impactoEnNumeros"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="70"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-down"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
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
