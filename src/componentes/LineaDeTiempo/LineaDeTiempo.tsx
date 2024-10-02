import React from "react";
import hero from "@/assets/hero_linea_de_tiempo1.webp";
import s from "./Lineadetiempo.module.scss";
import HeaderSubPaginas from "@/commons/HeaderSubPaginas/HeaderSubPaginas";

const LineaDeTiempo = () => {
  // const arrowRight = (
  //   <svg
  //     xmlns="http://www.w3.org/2000/svg"
  //     width="24"
  //     height="24"
  //     viewBox="0 0 24 24"
  //     fill="none"
  //     stroke="currentColor"
  //     stroke-width="1"
  //     stroke-linecap="round"
  //     stroke-linejoin="round"
  //     className="lucide lucide-chevron-right"
  //   >
  //     <path d="m9 18 6-6-6-6" />
  //   </svg>
  // );
  return (
    <div className={s.outerContainer}>
      <div className={s.contentContainer}>
        <div className={s.content}>
          <HeaderSubPaginas title="Linea de timpo" img={hero} />
          <div className={s.historia}>
            <h2>Nuestra historia</h2>
            <p>
              Desde su fundación, nuestra ONG ha trabajado incansablemente para
              promover la sostenibilidad y el bienestar de las comunidades.
              Nacimos de la visión de un grupo de apasionados por el medio
              ambiente que creían en un futuro mejor.{" "}
              <span>
                A lo largo de los años, hemos implementado numerosos proyectos
                enfocados en la educación ambiental, la conservación de recursos
                y la recuperación de ecosistemas. Cada hito en nuestro camino
                refleja nuestro compromiso y dedicación hacia un planeta más
                saludable, y hoy, te invitamos a recorrer nuestra historia a
                través de esta línea de tiempo, que resalta los momentos más
                significativos de nuestra trayectoria.
              </span>
            </p>
          </div>
          <div className={s.lineaDeTiempo}>
            <div className={s.timeline}>
              <div className={s.container}>
                <div className={s.circle}></div>
                <div className={s.textBox}>
                  <h2>Fundación</h2>
                  <small>Junio 2010</small>
                  <p>
                    Nacimos con la misión de restaurar ecosistemas y apoyar
                    comunidades vulnerables, iniciando con pequeños proyectos
                    locales.
                  </p>
                  <span className={s.containerArrow}></span>
                </div>
              </div>

              <div className={s.container}>
                <div className={s.circle}></div>
                <div className={s.textBox}>
                  <h2>Primer Proyecto Ambiental</h2>
                  <small>Agosto 2012</small>
                  <p>
                    Implementamos nuestro primer proyecto para restaurar el
                    equilibrio en un ecosistema amenazado por la deforestación.
                  </p>
                  <span className={s.containerArrow}></span>
                </div>
              </div>

              <div className={s.container}>
                <div className={s.circle}></div>
                <div className={s.textBox}>
                  <h2>Alianza con Empresas</h2>
                  <small>Mayo 2015</small>
                  <p>
                    En 2015, establecimos alianzas con empresas locales para
                    promover prácticas sostenibles en sus operaciones.
                  </p>
                  <span className={s.containerArrow}></span>
                </div>
              </div>

              <div className={s.container}>
                <div className={s.circle}></div>
                <div className={s.textBox}>
                  <h2>Reconocimiento Nacional</h2>
                  <small>Octubre 2016</small>
                  <p>
                    Recibimos un premio a nivel nacional por nuestro impacto
                    positivo en comunidades vulnerables y ecosistemas.
                  </p>
                  <span className={s.containerArrow}></span>
                </div>
              </div>

              <div className={s.container}>
                <div className={s.circle}></div>
                <div className={s.textBox}>
                  <h2>Expansión a Nuevas Comunidades</h2>
                  <small>Mayo 2019</small>
                  <p>
                    En 2019, expandimos nuestras actividades a comunidades
                    cercanas, impactando a más de 500 personas.
                  </p>
                  <span className={s.containerArrow}></span>
                </div>
              </div>

              <div className={s.container}>
                <div className={s.circle}></div>
                <div className={s.textBox}>
                  <h2>Lanzamiento de la Plataforma Digital</h2>
                  <small>Enero 2020</small>
                  <p>
                    En 2020, lanzamos una plataforma digital para compartir
                    recursos y conectar con más voluntarios.
                  </p>
                  <span className={s.containerArrow}></span>
                </div>
              </div>

              <div className={s.container}>
                <div className={s.circle}></div>
                <div className={s.textBox}>
                  <h2>Premio al Impacto Social</h2>
                  <small>Junio 2021</small>
                  <p>
                    En 2021, recibimos un premio por nuestro trabajo en
                    sostenibilidad y contribución a la comunidad.
                  </p>
                  <span className={s.containerArrow}></span>
                </div>
              </div>

              <div className={s.container}>
                <div className={s.circle}></div>
                <div className={s.textBox}>
                  <h2>Iniciativas Post-pandemia</h2>
                  <small>Marzo 2022</small>
                  <p>
                    En 2022, adaptamos nuestros programas para continuar
                    trabajando en medio de la pandemia, alcanzando nuevos
                    logros.
                  </p>
                  <span className={s.containerArrow}></span>
                </div>
              </div>

              <div className={s.container}>
                <div className={s.circle}></div>
                <div className={s.textBox}>
                  <h2>Programa de Educación Ambiental</h2>
                  <small>Abril 2023</small>
                  <p>
                    Lanzamos un programa educativo que capacitó a más de 1,000
                    personas en prácticas ambientales sostenibles.
                  </p>
                  <span className={s.containerArrow}></span>
                </div>
              </div>

              <div className={s.container}>
                <div className={s.circle}></div>
                <div className={s.textBox}>
                  <h2>Alcance Internacional</h2>
                  <small>Septiembre 2023</small>
                  <p>
                    En 2023, llevamos nuestras iniciativas a nivel
                    internacional, colaborando con otras organizaciones
                    globales.
                  </p>
                  <span className={s.containerArrow}></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LineaDeTiempo;
