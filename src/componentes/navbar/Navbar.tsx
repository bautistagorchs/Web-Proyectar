"use client";

import React, { useState } from "react";
import s from "./navbar.module.scss";
import Image from "next/image";
import Link from "next/link";
// import logo from "@/archivos/logo_blanco_fondo_transparente.png";
import logo from "@/archivos/logo_gris_fondo_transparente.png";
import { Spin as Hamburger } from "hamburger-react";
import { TbWaveSawTool } from "react-icons/tb";
import { AiOutlineTeam } from "react-icons/ai";
import { BiDonateHeart } from "react-icons/bi";
import { RiArrowRightSLine } from "react-icons/ri";
import { GoArrowRight } from "react-icons/go";

import CCR from "@/archivos/foto_ccr_blended.png";
import reciclaje from "@/archivos/proyecto_reciclaje.png";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className={s.barraNavegacion}>
      <div className={s.contenidoBarra}>
        <div className={s.logo}>
          <Image src={logo} alt="Logo a color" />
        </div>
        <div className={s.elementosNavegacion}>
          <div className={s.proyectos}>
            <Link href="">
              Proyectos <TbWaveSawTool size={20} />
            </Link>
            <div className={s.flotanteProyectos}>
              <div className={s.contenedorImagen}>
                <Image src={CCR} alt="CCR" />
                <button>
                  <p>
                    Centro Comunitario Resiliente <RiArrowRightSLine />
                  </p>
                </button>
              </div>
              <div className={s.contenedorImagen}>
                <Image src={reciclaje} alt="CCR" />
                <button>
                  <p>
                    Reciclado PET <RiArrowRightSLine />
                  </p>
                </button>
              </div>
              <div className={s.listaProyectos}>
                <h4>Nuestra huella de impacto:</h4>
                <hr />
                <ul>
                  <li>
                    <Link href="">- Barrio Limpio</Link>
                  </li>
                  <li>
                    <Link href="">- Huertas Agroecológicas</Link>
                  </li>
                  <li>
                    <Link href="">- Saneamiento Reconquista</Link>
                  </li>
                  <li>
                    <Link href="">- Botellas de Amor</Link>
                  </li>
                  <li className={s.todosLosProyectos}>
                    <Link href="">
                      Todos los proyectos{" "}
                      <span>
                        {" "}
                        <GoArrowRight size={19} />
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={s.nosotros}>
            <Link href="">
              Nosotros <AiOutlineTeam size={19} />
            </Link>
            <div className={s.flotanteNosotros}>
              <ul>
                <li>
                  <Link href={""}>
                    Misión, Visión y Valores <RiArrowRightSLine />{" "}
                  </Link>
                </li>
                <li>
                  <Link href={""}>
                    Equipo <RiArrowRightSLine />
                  </Link>
                </li>
                <li>
                  <Link href={""}>
                    Contacto <RiArrowRightSLine />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={s.donar}>
            <Link href="">
              Se parte del cambio <BiDonateHeart size={21} />
            </Link>
            <div className={s.flotanteDonar}>
              <ul>
                <li>
                  <Link href={""}>
                    Dona tu tiempo <RiArrowRightSLine />{" "}
                  </Link>
                </li>
                <li>
                  <Link href={""}>
                    Aportá economicamente <RiArrowRightSLine />
                  </Link>
                </li>
                <li>
                  <Link href={""}>
                    Ver más? <RiArrowRightSLine />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={s.expandir}>
            <Hamburger
              color="rgba(34, 34, 34, 0.849)"
              rounded
              distance="sm"
              size={27}
              toggled={isOpen}
              toggle={setOpen}
              label="Ver más"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
