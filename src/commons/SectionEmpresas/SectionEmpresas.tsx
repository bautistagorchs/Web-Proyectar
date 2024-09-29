import React from "react";
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
      </div>
    </section>
  );
};

export default SectionEmpresas;
