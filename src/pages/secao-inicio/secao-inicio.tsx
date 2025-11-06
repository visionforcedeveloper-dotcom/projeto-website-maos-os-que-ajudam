import { Header } from "../../components/Header/header"
import styles from "./secao-inicio.module.css"

export function SecaoInicio (){
    return(
        <section>
        <Header></Header>
        
            <div className={styles.container}>
                <h1>Mãos Que Ajudam</h1>
                <button>Faça Sua Doação Agora</button>
            </div>
        </section>
    )
}
