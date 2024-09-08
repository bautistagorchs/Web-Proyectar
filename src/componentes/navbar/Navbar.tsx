"use client";

import CCR from "@/assets/foto_ccr_blended_los_valientes.png";
import logo_apaisado from "@/assets/logo_apaisadp_gris_fondo_transparente.png";
import logoBlanco from "@/assets/logo_blanco_fondo_transparente.png";
import logoGris from "@/assets/logo_gris_fondo_transparente.png";
import reciclaje from "@/assets/proyecto_reciclaje.png";
import { Spin as Hamburger } from "hamburger-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineTeam } from "react-icons/ai";
import { BiDonateHeart } from "react-icons/bi";
import { BsTwitterX } from "react-icons/bs";
import { CiFacebook, CiMail } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { GoArrowRight, GoHome } from "react-icons/go";
import { PiLinkedinLogoLight, PiMapPinSimpleLight } from "react-icons/pi";
import {
  RiArrowDownSLine,
  RiArrowRightSLine,
  RiArrowUpSLine,
} from "react-icons/ri";
import { SlSocialInstagram } from "react-icons/sl";
import { TbWaveSawTool } from "react-icons/tb";
import s from "./navbar.module.scss";
import MailchimpForm from "@/commons/MailchimpForm/MailchimpForm";

const Navbar = () => {
  const initialState = {
    proyectos: false,
    nosotros: false,
  };
  const [isOpen, setOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [innerWidth, setInnerWidth] = useState(0);
  const [seccionActiva, setseccionActiva] = useState(initialState);
  const handleMenuClick = (seccion: string) => {
    setseccionActiva((prevState) => ({
      proyectos: seccion === "proyectos" ? !prevState.proyectos : false,
      nosotros: seccion === "nosotros" ? !prevState.nosotros : false,
    }));
  };
  useEffect(() => {
    if (window !== undefined) {
      setInnerWidth(window.innerWidth);
    }
    let scroll = window.scrollY;
    setScrollY(scroll);
    window.addEventListener("scroll", function () {
      scroll = window.scrollY;
      setScrollY(scroll);
    });
  }, []);

  return (
    <>
      <nav
        className={`${s.barraNavegacionTop} ${
          scrollY > 10 ? s.navbarScrolled : ""
        } ${!isOpen ? "" : s.cambiarBackground}`}
      >
        <div className={s.contenidoBarra}>
          <div className={s.logo}>
            {scrollY > 10 && window.innerWidth < 900 ? (
              <Image src={logo_apaisado} alt="Logo a color" />
            ) : (
              <Image
                src={isOpen && window.innerWidth < 900 ? logoGris : logoBlanco}
                alt="Logo a color"
              />
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
                  <h4>Otros proyectos:</h4>
                  <hr />
                  <ul>
                    <li>
                      <Link href=""> Barrio Limpio</Link>
                    </li>
                    <li>
                      <Link href=""> Biocorredores</Link>
                    </li>
                    <li>
                      <Link href=""> Educacion ambiental</Link>
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
                      Linea de tiempo <RiArrowRightSLine />{" "}
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
                      Contribuí con tu aporte <RiArrowRightSLine />{" "}
                    </Link>
                  </li>
                  <li className={s.segundoItemDonar}>
                    ¿Que mas puedo hacer? <RiArrowDownSLine />
                  </li>
                  <div className={s.opcionesDonarContainer}>
                    <li className={s.recursos}>
                      <Link href={""}>
                        Donar: <RiArrowRightSLine />
                      </Link>
                      <div className={s.flotanteListaDonaciones}>
                        <ul>
                          <li>Alimentos</li>
                          <li>Ropa</li>
                          <li>Muebles</li>
                          <li>Vajilla</li>
                          <li>Juegos</li>
                          <li className={s.ultimo}>Y mucho mas...</li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <Link href={""}>
                        Cocinar viandas <RiArrowRightSLine />
                      </Link>
                    </li>
                    <li>
                      <Link href={""}>
                        Tejer mantas <RiArrowRightSLine />
                      </Link>
                    </li>
                  </div>
                </ul>
              </div>
            </div>
            <div className={s.expandir}>
              <Hamburger
                color={innerWidth < 900 ? "#444444" : "white"}
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
        <div className={`${s.expandibleMobile} ${!isOpen ? "" : s.show}`}>
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
                    <Link href="/#ccr">CCR</Link>
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
                <button className={s.button}>Colaborá</button>
              </li>
            </ul>
          </div>
        </div>
        <div className={`${s.expandibleLaptop} ${!isOpen ? "" : s.show}`}>
          <div className={s.expandibleContenido}>
            <div className={s.infoContainer}>
              <div>
                <h2>Como trabajamos?</h2>
                <h4>Nuestros asesores</h4>
                <h4>Voluntarios</h4>
              </div>
              <div>
                <h2>Comunicacion 360°</h2>
                <h4>Proyectar en los medios</h4>
                <h4>Nuestros Newsletters</h4>
              </div>
              <div className={s.newsletter} style={{ width: "40%" }}>
                <h2>Mantenete conectado</h2>
                <p>
                  Subscribite al newsletter de <span> Proyectar</span>
                </p>
                <MailchimpForm />
              </div>
            </div>
            <div className={s.footer}>
              <div className={s.contacto}>
                <Link href={""}>
                  <PiMapPinSimpleLight /> Marcos Sastre 1031, Tigre
                </Link>
                <Link href={""}>
                  <CiMail /> proyectarong@proyectar.com.ar
                </Link>
                <Link href={""}>
                  {" "}
                  <FiPhone /> +54 9 11 5474-8745
                </Link>
              </div>
              <div className={s.iconos}>
                <h4>Encontranos en:</h4>
                <div>
                  <Link href={""} className={s.primero}>
                    <SlSocialInstagram size={25} />
                  </Link>
                  <Link href={""}>
                    <CiFacebook size={27} />
                  </Link>
                  <Link href={""}>
                    <PiLinkedinLogoLight size={27} />
                  </Link>
                  <Link href={""}>
                    <BsTwitterX size={25} />
                  </Link>
                </div>
              </div>
            </div>
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
            <Link href="/#empresas">
              <TbWaveSawTool size={20} />
              Proyectos
            </Link>
          </div>
          <div className={s.donar}>
            <Link href="">
              <BiDonateHeart size={21} />
              Colaborá
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
