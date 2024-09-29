import React from "react";
// import s from "@/commons/SectionAcercaDe/SectionAcercaDe.module.scss";
import s from "./Footer.module.scss";
import { PiLinkedinLogoLight } from "react-icons/pi";
import Link from "next/link";
import { CiFacebook, CiMail } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { SlSocialInstagram } from "react-icons/sl";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <div className={s.contenedor}>
      <div className={s.contenido}>
        <div className={s.divFooter}>
          <div className={s.agradecimientos}>
            <h3>Gracias por acompañarnos en esta mision</h3>
            <div>
              <p>
                ¿Te gusta lo que hacemos? Te invitamos a compartirla con tus
                amigos/as y multiplicar el impacto
              </p>
              <p>
                Nos encantaria recibir tus comentarios, podes sumarte a las
                redes sociales y unirte a nuestra comunidad
              </p>
            </div>
          </div>
          <div className={s.contactoContainer}>
            <div className={s.contacto}>
              <Link href={""}>
                <FiPhone /> +54 9 11 5474-8745
              </Link>
              <Link href={""}>
                <CiMail /> contacto@proyectarong.ar
              </Link>
            </div>
            <div className={s.iconos}>
              <div>
                <Link href={""} style={{ paddingLeft: "0" }}>
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
          <div className={s.menu}>
            <button>
              <Link href={""}>Inicio</Link>
            </button>
            <button>
              <Link href={""}>Menu</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
