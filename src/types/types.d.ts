import { StaticImageData } from "next/image";

export type Noticia = {
  imgSrc: StaticImageData;
  imgAlt: string;
  titulo: string;
  autor: string;
  fecha: string;
  descripcion: string;
  link: string;
};
