// import basura_costa_rio from "@/assets/basura_costa_rio.jpg";
// import marce from "@/assets/comida_mesa_marce_euge.png";
// import edu_mas_ale from "@/assets/edu_con_ale_foto_frente_comedor_garrote.jpeg";
// import basura_rio from "@/assets/jovenes_basura_rio.jpg";
import reconquista from "@/assets/noticia_reconquista_vecinos_abrazo.jpg";
import { Noticia } from "@/types/types";
import basura_pexels from "@/assets/pexels_basura_rio.jpg";
import alarma_reconquista from "@/assets/pexels_alarma_reconquista.jpg";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";
import { RiArrowLeftWideLine, RiArrowRightWideLine } from "react-icons/ri";
import s from "./SectionNews.module.scss";
// import noticia_plan_saneamiento from "@/assets/noticia_reconquista_plan_saneamiento.jpg";
import coperativa_noticia from "@/assets/coperativa.jpg";
// import reconquista_noticia from "@/assets/rio-reconquista.jpg";

const SectionNews = () => {
  const [opcion, _setOpcion] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(1);

  const noticias: Noticia[] = [
    {
      imgSrc: coperativa_noticia,
      imgAlt: "Imagen notica proyectar rio",
      titulo: "Planta de basura pionera",
      autor: "La Nacion",
      fecha: "23 mayo 2019",
      descripcion:
        "La planta de basura creada por vecinos que busca ser pionera en la provincia",
      link: "https://www.lanacion.com.ar/buenos-aires/la-planta-basura-ideada-vecinos-busca-ser-nid2250483/",
    },
    {
      imgSrc: basura_pexels,
      imgAlt: "Imagen notica proyectar rio",
      titulo: "Avanza el plan de saneamiento",
      autor: "La Nacion",
      fecha: "17 noviembre 2017",
      descripcion:
        "Un plan para sanear por completo la cuenca del río Reconquista",
      link: "https://www.lanacion.com.ar/buenos-aires/avanza-plan-integral-saneamiento-rio-reconquista-nid2082853/",
    },
    {
      imgSrc: alarma_reconquista,
      imgAlt: "Imagen notica proyectar rio",
      titulo: "Alarma en el Reconquista:",
      autor: "La Nacion",
      fecha: "3 febrero 2017",
      descripcion: "Aumentaron 53% los asentamientos en la cuenca",
      link: "https://www.lanacion.com.ar/buenos-aires/alarma-rio-reconquista-crecieron-53-por-ciento-asentamientos-cuenca-nid1981157/",
    },
    {
      imgSrc: coperativa_noticia,
      imgAlt: "Imagen notica proyectar rio",
      titulo: "Nuevos aliados para el reconquista",
      autor: "La Nacion",
      fecha: "14 febrero 2020",
      descripcion:
        "Carreros, los nuevos aliados de la provincia para salvar al río Reconquista",
      link: "https://www.lanacion.com.ar/sociedad/carreros-nuevos-aliados-provincia-salvar-al-rio-nid2333557/",
    },
    // {
    //   imgSrc: edu_mas_ale,
    //   imgAlt: "Imagen notica proyectar rio",
    //   titulo: "Impulsando el triple impacto",
    //   autor: "Norte Online",
    //   fecha: "30 enero 2023",
    //   descripcion:
    //     "La ONG que impulsa el triple impacto en los barrios más vulnerables",
    //   link: "https://norteonline.com.ar/proyectar-la-ong-que-impulsa-el-triple-impacto-en-los-barrios-mas-vulnerables/",
    // },
    // {
    //   imgSrc: basura_rio,
    //   imgAlt: "Imagen notica proyectar rio",
    //   titulo: "Proyectar",
    //   autor: "Perfil Marie Claire",
    //   fecha: "05 octubre 2021",
    //   descripcion: "Una ONG que apuesta fuerte por la economía circular",
    //   link: "https://marieclaire.perfil.com/noticias/sociedad/proyectar-ong-reciclaje-botellas-pet-donar-economia-circular.phtml",
    // },

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
    // {
    //   imgSrc: marce,
    //   imgAlt: "Imagen notica reconquista",
    //   titulo: "Barrio Limpio",
    //   autor: "Noticias Positivas",
    //   fecha: "20 Jun 2019",
    //   descripcion: "Villa La Garrote trabaja para ser un Barrio Limpio",
    //   link: "https://noticiaspositivas.org/barrio-limpio-villa-la-garrote/",
    // },
    // {
    //   imgSrc: basura_costa_rio,
    //   imgAlt: "Imagen notica reconquista",
    //   titulo: "Limpieza solidaria",
    //   autor: "La nacion",
    //   fecha: "17 May 2021",
    //   descripcion: "El compromiso de años con el ambiente de la ONG Proyectar",
    //   link: "https://www.lanacion.com.ar/editoriales/limpieza-solidaria-nid27052021/",
    // },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % noticias.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + noticias.length) % noticias.length
    );
  };

  const textTrimed = (text: string): string => {
    const newText = text.toLowerCase().split(" ").join("") + ".com";
    return newText;
  };
  return (
    <section className={s.noticias}>
      <div className={s.contenedorNoticias}>
        {opcion === 1 ? (
          <div className={s.contenidoNoticias}>
            <h1>Noticias</h1>
            <h5>Proyectar en los medios</h5>
            <div className={s.carousel}>
              <div className={s.card}>
                <div className={s.contenedorImg}>
                  <Image
                    src={noticias[currentIndex].imgSrc}
                    alt={noticias[currentIndex].imgAlt}
                  />
                </div>
                <div className={s.contenido}>
                  <h3>{noticias[currentIndex].titulo}</h3>
                  <h6>
                    por {noticias[currentIndex].autor} -{" "}
                    {noticias[currentIndex].fecha}
                  </h6>
                  <p>{noticias[currentIndex].descripcion}</p>
                  <Link href={noticias[currentIndex].link} target="_blank">
                    <button className={s.leerMas}>
                      <p>{textTrimed(noticias[currentIndex].autor)}</p>
                      <HiMiniArrowTopRightOnSquare color="black" size={15} />
                    </button>
                  </Link>
                </div>
              </div>
              <div className={s.controls}>
                <button onClick={handlePrev} className={s.prevButton}>
                  {/* <FaArrowLeftLong color="white" /> */}
                  <RiArrowLeftWideLine />
                </button>
                <button onClick={handleNext} className={s.nextButton}>
                  {/* <FaArrowRightLong color="white" /> */}
                  <RiArrowRightWideLine />
                </button>
              </div>
            </div>
            <button className={s.todasLasNovedades}>
              Ver todas las novedades
            </button>
          </div>
        ) : (
          <div className={s.contenidoNoticias}>
            <h5>Proyectar en los medios</h5>
            <h1>Noticias</h1>
            {noticias.map((noticia, index) => (
              <div className={s.card} key={index}>
                <div className={s.contenedorImg}>
                  <Image src={noticia.imgSrc} alt={noticia.imgAlt} />
                  <h3>{noticia.titulo}</h3>
                </div>
                <h6>
                  por {noticia.autor} - {noticia.fecha}
                </h6>
                <p>{noticia.descripcion}</p>
                <Link href={noticia.link} target="_blank">
                  <button className={s.leerMas}>
                    <p>{textTrimed(noticia.autor)}</p>
                    <HiMiniArrowTopRightOnSquare color="white" size={15} />
                  </button>
                </Link>
              </div>
            ))}
            {/* <div className={s.card}>
              <div className={s.contenedorImg}>
                <Image src={edu_mas_ale} alt="Imagen notica proyectar rio" />
                <h3>Impulsando el triple impacto</h3>
              </div>
              <h6>por Norte Online - 30 enero 2023</h6>
              <p>
                La ONG que impulsa el triple impacto en los barrios más
                vulnerables
              </p>
              <Link
                href={
                  "https://norteonline.com.ar/proyectar-la-ong-que-impulsa-el-triple-impacto-en-los-barrios-mas-vulnerables/"
                }
                target="_blank"
              >
                <button className={s.leerMas}>
                  <p>{textTrimed("Norte Online")}</p>
                  <HiMiniArrowTopRightOnSquare color="white" size={15} />
                </button>
              </Link>
            </div>
            <div className={s.card}>
              <div className={s.contenedorImg}>
                <Image src={basura_rio} alt="Imagen notica proyectar rio" />
                <h3>Proyectar</h3>
              </div>
              <h6>por Perfil, Marie Claire - 05 octubre 2021</h6>
              <p>Una ONG que apuesta fuerte por la economía circular</p>
              <Link
                href={
                  "https://marieclaire.perfil.com/noticias/sociedad/proyectar-ong-reciclaje-botellas-pet-donar-economia-circular.phtml"
                }
                target="_blank"
              >
                <button className={s.leerMas}>
                  <p>{textTrimed("Perfil Marie Claire")}</p>
                  <HiMiniArrowTopRightOnSquare color="white" size={15} />
                </button>{" "}
              </Link>
            </div>
            <div className={s.card}>
              <div className={s.contenedorImg}>
                <Image src={reconquista} alt="Imagen notica reconquista" />
                <h3>Reconquista en alerta</h3>
              </div>
              <h6>por La Nacion - 28 Feb 2019</h6>
              <p>
                El ingenioso plan de vecinos para salvar al río y terminar con
                la basura
              </p>
              <Link
                href={
                  "https://www.lanacion.com.ar/sociedad/reconquista-alerta-plan-vecinos-tigre-salvar-rio-basura-nid2224226/"
                }
                target="_blank"
              >
                <button className={s.leerMas}>
                  <p>{textTrimed("La Nacion")}</p>
                  <HiMiniArrowTopRightOnSquare color="white" size={15} />
                </button>{" "}
              </Link>
            </div>
            <div className={s.card}>
              <div className={s.contenedorImg}>
                <Image src={marce} alt="Imagen notica reconquista" />
                <h3>Barrio Limpio</h3>
              </div>
              <h6>por Noticias Positivas - 20 Jun 2019</h6>
              <p>Villa La Garrote trabaja para ser un Barrio Limpio</p>
              <Link
                href={
                  "https://noticiaspositivas.org/barrio-limpio-villa-la-garrote/"
                }
                target="_blank"
              >
                <button className={s.leerMas}>
                  <p>{textTrimed("Noticias Positivas")}</p>
                  <HiMiniArrowTopRightOnSquare color="white" size={15} />
                </button>{" "}
              </Link>
            </div> */}
            <button className={s.todasLasNovedades}>
              Ver todas las novedades
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default SectionNews;
