import styles from "./paginaInicial.module.scss";
import banner from "./banner.png";

import Cabecalho from "componentes/cabecalho";
import Menu from "componentes/menu";
import Galeria from "componentes/galeria";
import Populares from "componentes/populares";

export default function PaginaInicial() {
  return (
    <>
      <Cabecalho />
      <main>
        <section className={styles.principal}>
          <Menu />
          <div className={styles.principal__imagem}>
            <h1>A galeria mais completa do espaço</h1>
            <img src={banner} alt="A imagem da terra vista do espaço" />
          </div>
        </section>
        <div className={styles.galeria}>
          <Galeria />
          <Populares />
        </div>
      </main>
    </>
  );
}