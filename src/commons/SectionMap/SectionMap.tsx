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
      <h1>¿Donde estamos?</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5982.972001883991!2d-58.669057654454406!3d-34.47719316587415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bca36a3e1416a1%3A0xa1e55e93c0756e3b!2sEXY%2C%20Marcos%20Sastre%201031%2C%20B1618%20El%20Talar%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1727893452771!5m2!1ses!2sar"
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
