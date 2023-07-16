// imports ------
import logo from "./logo.png"
import search from "./search.png"
import styles from "./cabecalho.module.scss"
// imports ------


export default function Cabecalho (){
    return (
        <header className={styles.cabecalho}>
            <img src={logo} alt="Logo do Aguilar-Space" />
            <div className={styles.cabecalho__container}>
                <input type="text" placeholder="O que você procura?" className={styles.cabecalho__input}/>
                <img src={search} alt="icone de Lupa" />
            </div>
        </header>
    )
}