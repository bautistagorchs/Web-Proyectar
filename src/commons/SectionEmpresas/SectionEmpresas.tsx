import React, { useEffect, useState } from "react";
import s from "./SectionEmpresas.module.scss";
import Image from "next/image";
import NaranjaX from "@/assets/LogoNaranjaX.png";
import FundacionFlechabus from "@/assets/LogoFundacionFlechabus.png";
import AARA from "@/assets/LogoAARA-sinfondo.png";
import BancoDeBosques from "@/assets/logoBancoDeBosques-sinfondo.svg";
import Creacom from "@/assets/LogoCreacom--sinfondo.png";
import FundacionMetropolitana from "@/assets/LogoFundacionMetropolitana.png";
import FundacionPadres from "@/assets/LogoFundacionPadres.png";
import Uiscumarr from "@/assets/LogoUiscumarr.png";
import bhive from "@/assets/logo_bhive.png";
import FundacionReciduca from "@/assets/LogoReciduca.png";
import tonka from "@/assets/logo_tonka.png";
import pentamar from "@/assets/logo_pentamar.png";
import sturla from "@/assets/logo_sturla.png";
import uba from "@/assets/logo_uba.png";

const SectionEmpresas = () => {
  const [_innerWidth, setInnerWidth] = useState(0);
  useEffect(() => {
    if (window !== undefined) {
      setInnerWidth(window.innerWidth);
    }
  }, []);
  return (
    <section className={s.empresas} id="empresas">
      <div className={s.contenedorEmpresas}>
        <div className={s.contenidoEmpresas}>
          <h1>Nuestros socios</h1>
          {/* <h5>Colaboraciones que transforman y empoderan</h5> */}

          <h2>Fundaciones</h2>
          <div className={`${s.logos} ${s.fundaciones}`}>
            <div className={`${s.container} ${s.logo1}`}>
              <Image src={FundacionReciduca} alt="Logo Fundacion Reciduca" />
            </div>
            <div className={`${s.container} ${s.logo2}`}>
              <Image src={FundacionFlechabus} alt="Logo FundacionFlechabus" />
            </div>
            <div className={`${s.container} ${s.logo3}`}>
              <Image
                src={FundacionPadres}
                alt="Logo Fundacion Padres"
                color="black"
              />
            </div>
            <div className={`${s.container} ${s.logo4}`}>
              <Image className={s.logo7} src={AARA} alt="Logo AARA" />
            </div>
            <div className={`${s.container} ${s.logo5}`}>
              <Image src={BancoDeBosques} alt="Logo BancoDeBosques" />
            </div>
            <div className={`${s.container} ${s.logo6}`}>
              <Image
                src={FundacionMetropolitana}
                alt="Logo FundacionMetropolitana"
              />
            </div>
            <div className={`${s.container} ${s.logo7}`}>
              <Image src={uba} alt="Logo FundacionMetropolitana" />
            </div>
          </div>
          <h2 style={{ marginTop: "3rem" }}>Empresas</h2>
          <div className={`${s.logos} ${s.empresas}`}>
            <div className={`${s.container} ${s.logo1}`}>
              <Image src={NaranjaX} alt="Logo NaranjaX" />
            </div>
            <div className={`${s.container} ${s.logo2}`}>
              <Image src={bhive} alt="Logo SistemaB" />
            </div>
            <div className={`${s.container} ${s.logo3}`}>
              <Image src={Creacom} alt="Logo Creacom" />
            </div>
            <div className={`${s.container} ${s.logo4}`}>
              <Image src={Uiscumarr} alt="Logo Uiscumarr" />
            </div>
            <div className={`${s.container} ${s.logo5}`}>
              <Image src={sturla} alt="Logo NaranjaX" />
            </div>
            <div className={`${s.container} ${s.logo6}`}>
              <Image src={pentamar} alt="Logo NaranjaX" />
            </div>
            <div className={`${s.container} ${s.logo7}`}>
              <Image src={tonka} alt="Logo NaranjaX" />
            </div>
          </div>
        </div>
        {/* <div className={s.mapaContainer}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3291.0948325952654!2d-58.59644231153283!3d-34.42434620345107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bca5b121ca019b%3A0x1ac1b04ce415efa1!2sMarcos%20Sastre%201031%2C%20B1624BWA%20Rinc%C3%B3n%20de%20Milberg%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1726934537259!5m2!1ses!2sar"
            width={innerWidth < 1000 ? innerWidth - 200 : innerWidth - 300}
            height="500"
            style={{ border: 0, borderRadius: "15px" }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div> */}
      </div>
    </section>
  );
};

export default SectionEmpresas;
