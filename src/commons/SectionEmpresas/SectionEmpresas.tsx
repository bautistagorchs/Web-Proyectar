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
import SistemaB from "@/assets/SistemaB.png";
import FundacionReciduca from "@/assets/LogoReciduca.png";

const SectionEmpresas = () => {
  return (
    <section className={s.empresas} id="empresas">
      <div className={s.contenedorEmpresas}>
        <div className={s.contenidoEmpresas}>
          <h5>Colaboraciones que transforman y empoderan</h5>
          <h1>Empresas y fundaciones</h1>
          <div className={s.logos}>
            <Image src={NaranjaX} alt="Logo NaranjaX" />
            <Image src={SistemaB} alt="Logo SistemaB" />
            <Image src={FundacionFlechabus} alt="Logo FundacionFlechabus" />
            <Image src={AARA} alt="Logo AARA" />
            <Image src={BancoDeBosques} alt="Logo BancoDeBosques" />
            <Image src={Creacom} alt="Logo Creacom" />
            <Image
              src={FundacionMetropolitana}
              alt="Logo FundacionMetropolitana"
            />
            <Image src={Uiscumarr} alt="Logo Uiscumarr" />
            <Image
              src={FundacionPadres}
              alt="Logo Fundacion Padres"
              id={s.padres}
              color="black"
            />
            <Image
              src={FundacionReciduca}
              alt="Logo Fundacion Reciduca"
              id={s.reciduca}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionEmpresas;
