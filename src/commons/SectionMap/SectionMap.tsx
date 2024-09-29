import React, { useEffect, useState } from "react";
import s from "./SectionMap.module.scss";

const SectionMap = () => {
  const [innerWidth, setInnerWidth] = useState(0);
  useEffect(() => {
    if (window !== undefined) {
      setInnerWidth(window.innerWidth);
    }
  }, []);
  return (
    <div className={s.mapaContainer}>
      <h1>Titulo?</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3291.0948325952654!2d-58.59644231153283!3d-34.42434620345107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bca5b121ca019b%3A0x1ac1b04ce415efa1!2sMarcos%20Sastre%201031%2C%20B1624BWA%20Rinc%C3%B3n%20de%20Milberg%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1726934537259!5m2!1ses!2sar"
        width={
          innerWidth && innerWidth < 1000 ? innerWidth - 200 : innerWidth - 300
        }
        height="500"
        style={{ border: 0, borderRadius: "15px" }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default SectionMap;
