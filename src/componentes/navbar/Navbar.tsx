"use client";

import React, { useEffect, useState } from "react";
import s from "./navbar.module.scss";
import Image from "next/image";
import Link from "next/link";
import logo from "@/archivos/logo_gris_fondo_transparente.png";
import logo_apaisado from "@/archivos/logo_apaisadp_gris_fondo_transparente.png";
import { Spin as Hamburger } from "hamburger-react";
import { TbWaveSawTool } from "react-icons/tb";
import { AiOutlineTeam } from "react-icons/ai";
import { BiDonateHeart } from "react-icons/bi";
import {
  RiArrowDownSLine,
  RiArrowRightSLine,
  RiArrowUpSLine,
} from "react-icons/ri";
import { GoArrowRight, GoHome } from "react-icons/go";
import CCR from "@/archivos/foto_ccr_blended.png";
import reciclaje from "@/archivos/proyecto_reciclaje.png";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const initialState = {
    proyectos: false,
    nosotros: false,
  };
  const [seccionActiva, setseccionActiva] = useState(initialState);
  const handleMenuClick = (seccion: string) => {
    setseccionActiva((prevState) => ({
      proyectos: seccion === "proyectos" ? !prevState.proyectos : false,
      nosotros: seccion === "nosotros" ? !prevState.nosotros : false,
    }));
  };
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", function () {
      const scroll = window.scrollY;
      setScrollY(scroll);
    });
  }, []);
  return (
    <>
      <nav
        className={`${s.barraNavegacionTop} ${
          scrollY > 10 ? s.navbarScrolled : ""
        }`}
      >
        <div className={s.contenidoBarra}>
          <div className={s.logo}>
            {scrollY > 10 ? (
              <Image src={logo_apaisado} alt="Logo a color" />
            ) : (
              <Image src={logo} alt="Logo a color" />
            )}
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
            <div className={s.colabora}>
              <Link href="">
                Hace un cambio <BiDonateHeart size={21} />
              </Link>
            </div>
            <div className={s.expandir}>
              <Hamburger
                color="#444444"
                rounded
                distance="sm"
                size={30}
                toggled={isOpen}
                toggle={setOpen}
                label="Ver más"
              />
            </div>
          </div>
        </div>
        <div className={`${s.expandible} ${!isOpen ? "" : s.show}`}>
          <hr />
          <div className={s.contenidoExpandible}>
            <ul className={s.menu}>
              <li>
                <h4
                  className={s.menuButton}
                  onClick={() => handleMenuClick("proyectos")}
                >
                  Proyectos{" "}
                  {seccionActiva.proyectos ? (
                    <RiArrowUpSLine />
                  ) : (
                    <RiArrowDownSLine />
                  )}
                </h4>
                <ul
                  className={s.submenu}
                  style={{
                    display: seccionActiva.proyectos ? "block" : "none",
                  }}
                >
                  <li>
                    <a href="#">CCR</a>
                  </li>
                  <li>
                    <a href="#">Reciclado PET</a>
                  </li>
                  <li>
                    <a href="#">
                      Todos los proyectos <GoArrowRight /*size={19}*/ />
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <h4
                  className={s.menuButton}
                  onClick={() => handleMenuClick("nosotros")}
                >
                  Nosotros
                  {seccionActiva.nosotros ? (
                    <RiArrowUpSLine />
                  ) : (
                    <RiArrowDownSLine />
                  )}
                </h4>
                <ul
                  className={s.submenu}
                  style={{ display: seccionActiva.nosotros ? "block" : "none" }}
                >
                  <li>
                    <a href="#">Mision, Vision y Valores</a>
                  </li>
                  <li>
                    <a href="#">Equipo</a>
                  </li>
                  <li>
                    <a href="#">Contacto</a>
                  </li>
                </ul>
              </li>
              <li>
                <h4 className={s.menuButton}>Noticias</h4>
              </li>
              <li>
                <h4 className={s.menuButton}>Linea de tiempo</h4>
              </li>
              <li>
                <h4 className={s.menuButton}>Testimonios</h4>
              </li>
              <li>
                <h4 className={s.menuButton}>Nos acompañan</h4>
              </li>
              <li className={s.liButton}>
                <button className={s.button}>Colabora</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <nav className={s.barraNavegacionBottom}>
        <div className={s.elementosNavegacion}>
          <div className={s.home}>
            <Link href="">
              <GoHome size={19} />
              Inicio
            </Link>
          </div>
          <div className={s.proyectos}>
            <Link href="">
              <TbWaveSawTool size={20} />
              Proyectos
            </Link>
          </div>
          <div className={s.colabora}>
            <Link href="">
              <BiDonateHeart size={21} />
              Impulsá
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
