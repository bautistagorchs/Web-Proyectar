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

export type SelectedSection = {
  mision: boolean;
  vision: boolean;
  valores: boolean;
  objetivo: boolean;
};

export interface HeaderSubPaginasProps {
  title: string;
  img: StaticImageData;
}
