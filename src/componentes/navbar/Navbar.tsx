"use client";

import CCR from "@/archivos/foto_ccr_blended.png";
import logo_apaisado from "@/archivos/logo_apaisadp_gris_fondo_transparente.png";
import logoB from "@/archivos/logo_blanco_fondo_transparente.png";
import reciclaje from "@/archivos/proyecto_reciclaje.png";
import { Spin as Hamburger } from "hamburger-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineTeam } from "react-icons/ai";
import { BiDonateHeart } from "react-icons/bi";
import { GoArrowRight, GoHome } from "react-icons/go";
import {
  RiArrowDownSLine,
  RiArrowRightSLine,
  RiArrowUpSLine,
} from "react-icons/ri";
import { TbWaveSawTool } from "react-icons/tb";
import s from "./navbar.module.scss";
// import { LiaMapMarkerAltSolid } from "react-icons/lia";
import { PiLinkedinLogoLight, PiMapPinSimpleLight } from "react-icons/pi";
import { CiFacebook, CiMail } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { SlSocialInstagram } from "react-icons/sl";
import { BsTwitterX } from "react-icons/bs";

const Navbar = () => {
  const initialState = {
    proyectos: false,
    nosotros: false,
  };
  const [isOpen, setOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [seccionActiva, setseccionActiva] = useState(initialState);
  const handleMenuClick = (seccion: string) => {
    setseccionActiva((prevState) => ({
      proyectos: seccion === "proyectos" ? !prevState.proyectos : false,
      nosotros: seccion === "nosotros" ? !prevState.nosotros : false,
    }));
  };
  useEffect(() => {
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
              <Image src={logoB} alt="Logo a color" />
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
            <div className={s.donar}>
              <Link href="">
                Se parte del cambio <BiDonateHeart size={21} />
              </Link>
              <div className={s.flotanteDonar}>
                <ul>
                  <li>
                    <Link href={""}>
                      Apoyar economicamente <RiArrowRightSLine />{" "}
                    </Link>
                  </li>
                  <li className={s.recursos}>
                    <Link href={""}>
                      ¿Que mas puedo donar? <RiArrowRightSLine />
                    </Link>
                    <div className={s.flotanteListaDonaciones}>
                      <ul>
                        {/* <div className={s.primero}> */}
                        <li>Ropa</li>
                        <li>Comida</li>
                        <li>Libros</li>
                        <li>Utiles escolares</li>
                        {/* </div> */}
                        {/* <div> */}
                        <li>Vajilla</li>
                        <li>Juegos</li>
                        <li>Mantas</li>
                        <li className={s.ultimo}>Y mucho mas...</li>
                        {/* </div> */}
                      </ul>
                    </div>
                  </li>
                  <li>
                    <Link href={""}>
                      Otras formas de colaborar <RiArrowRightSLine />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className={s.expandir}>
              <Hamburger
                color={isOpen ? "white" : "#444444"}
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
        <div className={`${s.expandibleLaptop} ${!isOpen ? "" : s.show}`}>
          <div className={s.expandibleContenido}>
            <div className={s.infoContainer}>
              <div>
                <h2>Capital humano</h2>
                {/* <h4>Equipo</h4> */}
                <h4>Testimonios de valor</h4>
                <h4>Nuestros asesores</h4>
                <h4>Empresas que nos apoyan</h4>
              </div>
              <div>
                <h2>Sobre nosotros</h2>
                <h4>Linea de tiempo</h4>
                <h4>Noticias</h4>
                <h4>Algun item mas</h4>
              </div>
              <div>
                <h2>Colabora</h2>
                <h4>Hace a tu empresa parte</h4>
                <h4>Donacion mensual</h4>
              </div>
            </div>
            <div className={s.footer}>
              <div className={s.contacto}>
                <Link href={""}>
                  <PiMapPinSimpleLight /> Av. Libertador 1845, Martinez
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
            <Link href="">
              <TbWaveSawTool size={20} />
              Proyectos
            </Link>
          </div>
          <div className={s.donar}>
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
