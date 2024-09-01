import Image from "next/image";
import React from "react";
import bolson from "@/assets/foto_bolson_pet.png";
import barrioLimpio from "@/assets/foto_casa_euge_pet.jpg";
import ccr from "@/assets/foto_ccr_majo_jovenes.jpg";
import s from "./SectionProjects.module.scss";
import { RiArrowDownWideLine } from "react-icons/ri";

const SectionProjects = () => {
  return (
    <section className={s.proyectos} id="proyectos">
      <div>
        <div className={s.contenidoProyectos}>
          <h1>Nuestros proyectos</h1>
          <div className={s.card} id="ccr">
            <div className={s.cardInner}>
              <div className={s.cardFront}>
                <div className={s.contenedorImagen}>
                  <Image src={ccr} alt="ccr" />
                  <h3>Centro Comunitario Resiliente</h3>
                  <RiArrowDownWideLine color="white" size={30} />
                </div>
                <p>
                  Este proyecto busca convertir Centros Comunitarios en
                  resilientes, logrando un impacto social y ambiental positivo.
                  Se enfocará en alcanzar autonomía política, alimentaria y
                  económica mediante el reciclaje y la producción local.
                </p>
                <button>Ver ubicaciones</button>
              </div>
            </div>
          </div>
          <div className={s.card}>
            <div className={s.cardInner}>
              <div className={s.cardFront}>
                <div className={s.contenedorImagen}>
                  <Image src={bolson} alt="ccr" />
                  <h3>Reciclado PET</h3>
                  <RiArrowDownWideLine color="white" size={30} />
                </div>
                <p>
                  Este proyecto busca convertir Centros Comunitarios en
                  resilientes, logrando un impacto social y ambiental positivo.
                </p>
                <button>Saber más</button>
              </div>
            </div>
          </div>
          <div className={s.card}>
            <div className={s.cardInner}>
              <div className={s.cardFront}>
                <div className={s.contenedorImagen}>
                  <Image src={barrioLimpio} alt="ccr" />
                  <h3>Barrio Limpio</h3>
                  <RiArrowDownWideLine color="white" size={30} />
                </div>
                <p>
                  Diseñar de manera participativa una metodología para
                  recolectar, acopiar y clasificar la basura, realizando una
                  prueba piloto en el Barrio Alte Brown, Tigre Sur que sirva
                  como modelo para el diseño del Programa Barrio Limpio.
                </p>
                <button>Saber más</button>
              </div>
            </div>
          </div>
          <div className={s.buttonContainer}>
            <button>Ver todos los proyectos</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionProjects;
