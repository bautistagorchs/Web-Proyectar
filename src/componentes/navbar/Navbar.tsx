"use client";

import CCR from "@/assets/foto_ccr_blended_los_valientes.png";
import logo_apaisado from "@/assets/logo_apaisadp_gris_fondo_transparente.png";
import logoBlanco from "@/assets/logo_blanco_fondo_transparente.png";
import logoGris from "@/assets/logo_gris_fondo_transparente.png";
import { Spin as Hamburger } from "hamburger-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import pet from "@/assets/shutterstock_PET.jpg";
import s from "./Navbar.module.scss";

const Navbar = () => {
  const initialState = {
    proyectos: false,
    nosotros: false,
  };
  const [isOpen, setOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [_scrollEnd, setScrollEnd] = useState(false);
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
      console.log(window.outerHeight);
    }
    let scroll = window.scrollY;
    setScrollY(scroll);
    window.addEventListener("scroll", function () {
      scroll = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      setScrollY(scroll);

      if (scroll + windowHeight >= docHeight) {
        setScrollEnd(true);
      } else setScrollEnd(false);
    });
  }, []);

  const arrowRight = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-chevron-right"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );

  const arrowUpSline = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-chevron-up"
    >
      <path d="m18 15-6-6-6 6" />
    </svg>
  );
  const arrowDownSline = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-chevron-down"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );

  return (
    <>
      <nav
        className={`${s.barraNavegacionTop} ${
          scrollY > 10 ? s.navbarScrolled : ""
        } ${!isOpen ? "" : s.cambiarBackground}`}
      >
        <div className={s.contenidoBarra}>
          <div className={s.logo}>
            {scrollY > 10 && innerWidth < 900 ? (
              <Image src={logo_apaisado} alt="Logo a color" />
            ) : (
              <Image
                src={
                  innerWidth < 900 ? logoGris : isOpen ? logoBlanco : logoGris
                }
                alt="Logo a color"
              />
            )}
          </div>
          <div className={s.elementosNavegacion}>
            <div className={s.proyectos}>
              <Link href="">
                Proyectos{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-package"
                >
                  <path d="m7.5 4.27 9 5.15" />
                  <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                  <path d="m3.3 7 8.7 5 8.7-5" />
                  <path d="M12 22V12" />
                </svg>
              </Link>
              <div className={s.flotanteProyectos}>
                <div className={s.contenedorImagen}>
                  <Image src={CCR} alt="CCR" />
                  <button>
                    <p>Centro Comunitario Resiliente {arrowRight}</p>
                  </button>
                </div>
                <div className={s.contenedorImagen}>
                  <Image src={pet} alt="CCR" />
                  <button>
                    <p>Reciclado PET {arrowRight}</p>
                  </button>
                </div>
                <div className={s.listaProyectos}>
                  <h4>Otros proyectos:</h4>
                  <hr />
                  <ul>
                    <li>
                      <Link href=""> Educación Ambiental</Link>
                    </li>
                    <li>
                      <Link href=""> Barrio Limpio</Link>
                    </li>
                    <li>
                      <Link href=""> Biocorredores</Link>
                    </li>
                    <li className={s.todosLosProyectos}>
                      <Link href="">
                        Todos los proyectos{" "}
                        <span>
                          {" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-arrow-right"
                          >
                            <path d="M5 12h14" />
                            <path d="m12 5 7 7-7 7" />
                          </svg>
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={s.nosotros}>
              <Link href="">
                Nosotros{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-users"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </Link>
              <div className={s.flotanteNosotros}>
                <ul>
                  <li>
                    <Link href={""}>
                      Misión, Visión y Valores {arrowRight}{" "}
                    </Link>
                  </li>
                  <li>
                    <Link href={""}>Equipo {arrowRight}</Link>
                  </li>
                  <li>
                    <Link href={""}>Linea de tiempo {arrowRight} </Link>
                  </li>
                  <li>
                    <Link href={""}>Contacto {arrowRight}</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className={s.donar}>
              <Link href="">
                Se parte del cambio{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="21"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-hand-heart"
                >
                  <path d="M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16" />
                  <path d="m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
                  <path d="m2 15 6 6" />
                  <path d="M19.5 8.5c.7-.7 1.5-1.6 1.5-2.7A2.73 2.73 0 0 0 16 4a2.78 2.78 0 0 0-5 1.8c0 1.2.8 2 1.5 2.8L16 12Z" />
                </svg>
              </Link>
              <div className={s.flotanteDonar}>
                <ul>
                  <li>
                    <Link href={""}>Contribuí con tu aporte {arrowRight}</Link>
                  </li>
                  <li /*className={s.segundoItemDonar}*/>
                    <Link href={""}>
                      ¿Que mas puedo hacer? {arrowDownSline}
                    </Link>
                  </li>
                  <div className={s.opcionesDonarContainer}>
                    <li className={s.recursos}>
                      <Link href={""}>- Donar {/*<RiArrowRightSLine />*/}</Link>
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
                        - Cocinar viandas {/*<RiArrowRightSLine />*/}
                      </Link>
                    </li>
                    <li>
                      <Link href={""}>
                        - Tejer mantas {/*<RiArrowRightSLine />*/}
                      </Link>
                    </li>
                  </div>
                </ul>
              </div>
            </div>
            <div className={s.expandir}>
              <Hamburger
                color={
                  innerWidth < 900 ? "#444444" : isOpen ? "white" : "black"
                }
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
                    arrowUpSline
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-chevron-down"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
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
                    <a href="#">Todos los proyectos {arrowRight}</a>
                  </li>
                </ul>
              </li>
              <li>
                <h4
                  className={s.menuButton}
                  onClick={() => handleMenuClick("nosotros")}
                >
                  Nosotros
                  {seccionActiva.nosotros ? arrowUpSline : arrowDownSline}
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
                <h4 style={{ textAlign: "start" }}>Nuestros asesores</h4>
                <h4 style={{ textAlign: "start" }}>Voluntarios</h4>
              </div>
              <div>
                <h2>Comunicacion 360°</h2>
                <h4 style={{ textAlign: "end" }}>Proyectar en los medios</h4>
                <h4 style={{ textAlign: "end" }}>Nuestros Newsletters</h4>
              </div>
              <div className={s.newsletter}>
                <h2 style={{ textAlign: "center" }}>Newsletter</h2>
                {/* <MailchimpForm /> */}
              </div>
            </div>
            <div className={s.footer}>
              <div className={s.contacto}>
                <Link href={""}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-map-pin"
                  >
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>{" "}
                  Marcos Sastre 1031, Tigre
                </Link>
                <Link href={""}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-mail"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>{" "}
                  contacto@proyectarong.ar
                </Link>
                <Link href={""}>
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-phone"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>{" "}
                  +54 9 11 5474-8745
                </Link>
              </div>
              <div className={s.iconos}>
                <h4>Encontranos en:</h4>
                <div>
                  <Link href={""} className={s.primero}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-instagram"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  </Link>
                  <Link href={""}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-facebook"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </Link>
                  <Link href={""}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-linkedin"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </Link>
                  <Link href={""}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-twitter"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* <nav
        className={`${s.barraNavegacionBottom} ${
          scrollEnd ? s.displayNone : ""
        }`}
      >
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
      </nav> */}
    </>
  );
};

export default Navbar;
