import React from "react";
import s from "./landing.module.scss";
import Image from "next/image";
import img from "@/archivos/niño_parado_espaldas.jpg";

export default function Landing() {
  return (
    <main className={s.main}>
      <Image src={img} alt="hsd" className={s.video} />
      {/* <video autoPlay loop muted className={s.video}>
        <source
          src={
            "https://videos.pexels.com/video-files/6753733/6753733-uhd_2560_1440_30fps.mp4"
            // "https://videos.pexels.com/video-files/2330708/2330708-uhd_2560_1440_24fps.mp4"
            // "https://videos.pexels.com/video-files/4516426/4516426-uhd_2560_1440_24fps.mp4"
          }
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video> */}
      <div className={s.mainContent}>
        <div className={s.left}>
          <h1>¿Que planeta le dejamos a nuestros hijos?</h1>
          <h3>Desarrollo ambiental</h3>
        </div>
        {/* <hr /> */}
        <div className={s.right}>
          <h1>
            ¿Que hijos le dejamos a <br />
            nuestro planeta?
          </h1>
          <h3>Capital social</h3>
        </div>
      </div>
    </main>
  );
}
