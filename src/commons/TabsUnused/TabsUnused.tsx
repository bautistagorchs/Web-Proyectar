import React, { useState } from "react";
import { SelectedSection } from "@/types/types";
import { FaHandsHelping, FaLeaf, FaRecycle, FaTree } from "react-icons/fa";
import { FaArrowUpRightDots } from "react-icons/fa6";
import { MdOutlineNaturePeople } from "react-icons/md";
import { PiPlant } from "react-icons/pi";
import s from "./TabsUnused.module.scss";

const TabsUnused = () => {
  const [selectedSection, setSelectedSection] = useState<SelectedSection>({
    mision: true,
    vision: false,
    valores: false,
    objetivo: false,
  });
  const handleClick = (section: keyof SelectedSection) => {
    setSelectedSection((_prevState: SelectedSection) => ({
      mision: false,
      vision: false,
      valores: false,
      objetivo: false,
      [section]: true,
    }));
  };
  return (
    <div className={s.tabContainer}>
      <div className={s.header}>
        <h4
          className={selectedSection.mision ? s.selected : ""}
          onClick={() => handleClick("mision")}
        >
          Mision
        </h4>
        <h4
          className={selectedSection.vision ? s.selected : ""}
          onClick={() => handleClick("vision")}
        >
          Vision
        </h4>
        <h4
          className={selectedSection.valores ? s.selected : ""}
          onClick={() => handleClick("valores")}
        >
          Valores
        </h4>
        <h4
          className={selectedSection.objetivo ? s.selected : ""}
          onClick={() => handleClick("objetivo")}
        >
          Objetivo
        </h4>
      </div>
      <div
        className={`${s.infoTabs} ${s.mision} ${
          selectedSection.mision ? s.selected : ""
        }`}
      >
        <ul>
          <li>
            <FaTree color="Tan" size={25} />
            <div>
              <span>Restaurar Ecosistemas:</span> Trabajar en proyectos que
              revitalicen la biodiversidad.
            </div>
          </li>
          <li>
            <FaHandsHelping color="Tan" size={25} />

            <div>
              <span>Apoyar Comunidades: </span>Colaborar para mejorar la calidad
              de vida en áreas vulnerables.
            </div>
          </li>
          <li>
            <FaLeaf color="Tan" size={25} />
            <div>
              <span>Promover la Educación Ambiental:</span>
              Crear conciencia y educar sobre la importancia del cuidado del
              medio ambiente.
            </div>
          </li>
          <li>
            <FaRecycle color="Tan" size={25} />
            <div>
              <span>Reducir la Huella Ecológica:</span>
              Implementar prácticas sostenibles para minimizar el impacto
              ambiental.
            </div>
          </li>
        </ul>
      </div>
      <div
        className={`${s.infoTabs} ${s.vision} ${
          selectedSection.vision ? s.selected : ""
        }`}
      >
        <ul>
          <li>
            <FaRecycle color="Tan" size={25} />
            <div>
              <span>Futuro Sostenible:</span> Un mundo con ecosistemas
              recuperados y saludables.
            </div>
          </li>
          <li>
            <FaArrowUpRightDots color="Tan" size={25} />

            <div>
              <span>Empoderamiento: </span>Comunidades vulnerables con las
              herramientas para prosperar.
            </div>
          </li>
          <li>
            <MdOutlineNaturePeople color="Tan" size={25} />
            <div>
              <span>Conciencia Ambiental:</span>
              Una sociedad que prioriza la sostenibilidad.
            </div>
          </li>
          <li>
            <PiPlant color="Tan" size={25} />
            <div>
              <span>Innovación Verde:</span>
              Tecnología al servicio de soluciones ambientales.
            </div>
          </li>
        </ul>
      </div>
      <div
        className={`${s.infoTabs} ${s.valores} ${
          selectedSection.valores ? s.selected : ""
        }`}
      >
        valores
      </div>
      <div
        className={`${s.infoTabs} ${s.objetivo} ${
          selectedSection.objetivo ? s.selected : ""
        }`}
      >
        objetivo
      </div>
    </div>
  );
};

export default TabsUnused;
