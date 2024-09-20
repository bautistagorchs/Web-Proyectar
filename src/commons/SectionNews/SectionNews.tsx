import reconquista from "@/assets/noticia_reconquista_vecinos_abrazo.jpg";
import { Noticia } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import {
  HiArrowLeft,
  HiArrowRight,
  HiMiniArrowTopRightOnSquare,
} from "react-icons/hi2";
import s from "./SectionNews.module.scss";
import basura_rio from "@/assets/jovenes_basura_rio.jpg";
import imagen1 from "@/assets/imagen1.jpg";
import imagen2 from "@/assets/imagen2.jpg";
import imagen3 from "@/assets/imagen3.jpg";
import reconquista_noticia from "@/assets/rio-reconquista.jpg";

const SectionNews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const noticias: Noticia[] = [
    {
      imgSrc: imagen2,
      imgAlt: "Imagen notica proyectar rio",
      titulo: "Planta de basura pionera",
      autor: "La Nacion",
      fecha: "23 mayo 2019",
      descripcion:
        "La planta de basura creada por vecinos que busca ser pionera en la provincia",
      link: "https://www.lanacion.com.ar/buenos-aires/la-planta-basura-ideada-vecinos-busca-ser-nid2250483/",
    },
    {
      imgSrc: reconquista_noticia,
      imgAlt: "Imagen notica proyectar rio",
      titulo: "Avanza el plan de saneamiento",
      autor: "La Nacion",
      fecha: "17 noviembre 2017",
      descripcion:
        "Un plan para sanear por completo la cuenca del río Reconquista",
      link: "https://www.lanacion.com.ar/buenos-aires/avanza-plan-integral-saneamiento-rio-reconquista-nid2082853/",
    },
    {
      imgSrc: imagen3,
      imgAlt: "Imagen notica proyectar rio",
      titulo: "Alarma en el Reconquista",
      autor: "La Nacion",
      fecha: "3 febrero 2017",
      descripcion: "Aumentaron 53% los asentamientos en la cuenca Reconquista",
      link: "https://www.lanacion.com.ar/buenos-aires/alarma-rio-reconquista-crecieron-53-por-ciento-asentamientos-cuenca-nid1981157/",
    },
    {
      imgSrc: imagen1,
      imgAlt: "Imagen notica reconquista",
      titulo: "Reconquista en alerta",
      autor: "La Nacion",
      fecha: "28 Feb 2019",
      descripcion:
        "El ingenioso plan de vecinos para salvar al río y terminar con la basura",
      link: "https://www.lanacion.com.ar/sociedad/reconquista-alerta-plan-vecinos-tigre-salvar-rio-basura-nid2224226/",
    },
    {
      imgSrc: reconquista,
      imgAlt: "Imagen notica reconquista",
      titulo: "Reconquista en alerta",
      autor: "La Nacion",
      fecha: "28 Feb 2019",
      descripcion:
        "El ingenioso plan de vecinos para salvar al río y terminar con la basura",
      link: "https://www.lanacion.com.ar/sociedad/reconquista-alerta-plan-vecinos-tigre-salvar-rio-basura-nid2224226/",
    },

    {
      imgSrc: basura_rio,
      imgAlt: "Imagen notica proyectar rio",
      titulo: "Proyectar",
      autor: "Perfil Marie Claire",
      fecha: "05 octubre 2021",
      descripcion: "Una ONG que apuesta fuerte por la economía circular",
      link: "https://marieclaire.perfil.com/noticias/sociedad/proyectar-ong-reciclaje-botellas-pet-donar-economia-circular.phtml",
    },
    {
      imgSrc: imagen2,
      imgAlt: "Imagen notica proyectar rio",
      titulo: "Planta de basura pionera",
      autor: "La Nacion",
      fecha: "23 mayo 2019",
      descripcion:
        "La planta de basura creada por vecinos que busca ser pionera en la provincia",
      link: "https://www.lanacion.com.ar/buenos-aires/la-planta-basura-ideada-vecinos-busca-ser-nid2250483/",
    },
    {
      imgSrc: reconquista_noticia,
      imgAlt: "Imagen notica proyectar rio",
      titulo: "Avanza el plan de saneamiento",
      autor: "La Nacion",
      fecha: "17 noviembre 2017",
      descripcion:
        "Un plan para sanear por completo la cuenca del río Reconquista",
      link: "https://www.lanacion.com.ar/buenos-aires/avanza-plan-integral-saneamiento-rio-reconquista-nid2082853/",
    },
    {
      imgSrc: imagen3,
      imgAlt: "Imagen notica proyectar rio",
      titulo: "Alarma en el Reconquista",
      autor: "La Nacion",
      fecha: "3 febrero 2017",
      descripcion: "Aumentaron 53% los asentamientos en la cuenca Reconquista",
      link: "https://www.lanacion.com.ar/buenos-aires/alarma-rio-reconquista-crecieron-53-por-ciento-asentamientos-cuenca-nid1981157/",
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === noticias.length - 1 ? 0 : prevIndex + 1
    );
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: carouselRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? noticias.length - 1 : prevIndex - 1
    );
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -carouselRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const textTrimed = (text: string): string => {
    const newText = text.toLowerCase().split(" ").join("") + ".com";
    return newText;
  };

  return (
    <section className={s.noticias}>
      <div className={s.contenedorNoticias}>
        <div className={s.contenidoNoticias}>
          <h1>Noticias</h1>
          <h5>Proyectar en los medios</h5>
          <div className={s.carousel}>
            <div className={s.carouselInner} ref={carouselRef}>
              {noticias.map((noticia, index) => (
                <div
                  className={`${s.card} ${
                    index === currentIndex ? s.active : ""
                  }`}
                  key={index}
                >
                  <div className={s.contenedorImg}>
                    <Image src={noticia.imgSrc} alt={noticia.imgAlt} />
                  </div>
                  <div className={s.contenido}>
                    <h3>{noticia.titulo}</h3>
                    <h6>
                      por {noticia.autor} - {noticia.fecha}
                    </h6>
                    <p>{noticia.descripcion}</p>
                    <Link href={noticia.link} target="_blank">
                      <button className={s.leerMas}>
                        <p>{textTrimed(noticia.autor)}</p>
                        <HiMiniArrowTopRightOnSquare color="black" size={15} />
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className={s.controls}>
              <button onClick={handlePrev} className={s.prevButton}>
                <HiArrowLeft color="white" size={30} />
              </button>
              <button onClick={handleNext} className={s.nextButton}>
                <HiArrowRight color="white" size={30} />
              </button>
            </div>
          </div>
          <button className={s.todasLasNovedades}>
            Ver todas las novedades
          </button>
        </div>
      </div>
    </section>
  );
};

export default SectionNews;

//   const noticias: Noticia[] = [
//     {
//       imgSrc: coperativa_noticia,
//       imgAlt: "Imagen notica proyectar rio",
//       titulo: "Planta de basura pionera",
//       autor: "La Nacion",
//       fecha: "23 mayo 2019",
//       descripcion:
//         "La planta de basura creada por vecinos que busca ser pionera en la provincia",
//       link: "https://www.lanacion.com.ar/buenos-aires/la-planta-basura-ideada-vecinos-busca-ser-nid2250483/",
//     },
//     {
//       imgSrc: reconquista_noticia,
//       imgAlt: "Imagen notica proyectar rio",
//       titulo: "Avanza el plan de saneamiento",
//       autor: "La Nacion",
//       fecha: "17 noviembre 2017",
//       descripcion:
//         "Un plan para sanear por completo la cuenca del río Reconquista",
//       link: "https://www.lanacion.com.ar/buenos-aires/avanza-plan-integral-saneamiento-rio-reconquista-nid2082853/",
//     },
//     {
//       imgSrc: noticia_plan_saneamiento,
//       imgAlt: "Imagen notica proyectar rio",
//       titulo: "Alarma en el Reconquista",
//       autor: "La Nacion",
//       fecha: "3 febrero 2017",
//       descripcion: "Aumentaron 53% los asentamientos en la cuenca Reconquista",
//       link: "https://www.lanacion.com.ar/buenos-aires/alarma-rio-reconquista-crecieron-53-por-ciento-asentamientos-cuenca-nid1981157/",
//     },
//     {
//       imgSrc: coperativa_noticia,
//       imgAlt: "Imagen notica proyectar rio",
//       titulo: "Nuevos aliados para el reconquista",
//       autor: "La Nacion",
//       fecha: "14 febrero 2020",
//       descripcion:
//         "Carreros, los nuevos aliados de la provincia para salvar al Reconquista",
//       link: "https://www.lanacion.com.ar/sociedad/carreros-nuevos-aliados-provincia-salvar-al-rio-nid2333557/",
//     },
//     // {
//     //   imgSrc: edu_mas_ale,
//     //   imgAlt: "Imagen notica proyectar rio",
//     //   titulo: "Impulsando el triple impacto",
//     //   autor: "Norte Online",
//     //   fecha: "30 enero 2023",
//     //   descripcion:
//     //     "La ONG que impulsa el triple impacto en los barrios más vulnerables",
//     //   link: "https://norteonline.com.ar/proyectar-la-ong-que-impulsa-el-triple-impacto-en-los-barrios-mas-vulnerables/",
//     // },
//     // {
//     //   imgSrc: basura_rio,
//     //   imgAlt: "Imagen notica proyectar rio",
//     //   titulo: "Proyectar",
//     //   autor: "Perfil Marie Claire",
//     //   fecha: "05 octubre 2021",
//     //   descripcion: "Una ONG que apuesta fuerte por la economía circular",
//     //   link: "https://marieclaire.perfil.com/noticias/sociedad/proyectar-ong-reciclaje-botellas-pet-donar-economia-circular.phtml",
//     // },

//     {
//       imgSrc: reconquista,
//       imgAlt: "Imagen notica reconquista",
//       titulo: "Reconquista en alerta",
//       autor: "La Nacion",
//       fecha: "28 Feb 2019",
//       descripcion:
//         "El ingenioso plan de vecinos para salvar al río y terminar con la basura",
//       link: "https://www.lanacion.com.ar/sociedad/reconquista-alerta-plan-vecinos-tigre-salvar-rio-basura-nid2224226/",
//     },
//     // {
//     //   imgSrc: marce,
//     //   imgAlt: "Imagen notica reconquista",
//     //   titulo: "Barrio Limpio",
//     //   autor: "Noticias Positivas",
//     //   fecha: "20 Jun 2019",
//     //   descripcion: "Villa La Garrote trabaja para ser un Barrio Limpio",
//     //   link: "https://noticiaspositivas.org/barrio-limpio-villa-la-garrote/",
//     // },
//     // {
//     //   imgSrc: basura_costa_rio,
//     //   imgAlt: "Imagen notica reconquista",
//     //   titulo: "Limpieza solidaria",
//     //   autor: "La nacion",
//     //   fecha: "17 May 2021",
//     //   descripcion: "El compromiso de años con el ambiente de la ONG Proyectar",
//     //   link: "https://www.lanacion.com.ar/editoriales/limpieza-solidaria-nid27052021/",
//     // },
//   ];
