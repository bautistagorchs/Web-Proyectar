"use client";

import logo from "@/archivos/WhatsApp_Image_2024-07-26_at_18.16.09-removebg-preview.png";
import { Spin as Hamburger } from "hamburger-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineTeam } from "react-icons/ai";
import { BiDonateHeart } from "react-icons/bi";
import { GrLineChart } from "react-icons/gr";
import s from "./navbar.module.scss";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className={s.barraNavegacion}>
      <div className={s.contenidoBarra}>
        <div className={s.logo}>
          <Image src={logo} alt="Logo a color" />
        </div>
        <div className={s.elementosNavegacion}>
          <div>
            <Link href="">
              Proyectos <GrLineChart />
            </Link>
          </div>
          <div>
            <Link href="">
              Nosotros <AiOutlineTeam size={19} />
            </Link>
          </div>
          <div>
            <Link href="">
              Colabora <BiDonateHeart size={21} />
            </Link>
          </div>
          <div className={s.expandir}>
            <Hamburger
              color="#222222bb"
              rounded
              distance="sm"
              size={25}
              toggled={isOpen}
              toggle={setOpen}
              label="Ver más"
            />
          </div>
        </div>
      </div>
      <div className={s.menuFlotante}>
        <div className={s.contenidoProyectos}>
          <div className={s.proyectoCCR}>
            <h3>Proyecto Centros Comunitarios Resilientes</h3>
          </div>
          <div className={s.proyectoPET}>
            <h3>Proyecto PET</h3>
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
                <Link href="">- Saneamiento del Reconquista</Link>
              </li>
              <li>
                <Link href="">- Botellas de Amor</Link>
              </li>
              <li>
                <Link href="">Todos los proyectos</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={s.contenidoNosotros}>
          <h3>Conoce a Nuestro Equipo</h3>
          <ul>
            <li>
              <Link href={""}>Misión, Visión y Valores</Link>
            </li>
            <li>
              <Link href={""}>Documentos y Estatutos</Link>
            </li>
            <li>
              <Link href={""}>Estatuto de la ONG</Link>
            </li>
            <li>
              <Link href={""}>Manual del Voluntario</Link>
            </li>
            <li>
              <Link href={""}>Política de Privacidad</Link>
            </li>
            <li>
              <Link href={""}>Código de Conducta</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
