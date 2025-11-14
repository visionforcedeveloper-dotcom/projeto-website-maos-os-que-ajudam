import type { ReactNode } from "react"
import styles from "./card.module.css"


type CardProps = {
    titulo: string
    descricao: string
    icone: ReactNode
}
export function Card(props:CardProps){

    return(
        
                    <div className={styles.card}>

                        <div className={styles.icon}>
                        {props.icone}
                        </div>

                        <h3>{props.titulo}</h3>
                        <p>
                        {props.descricao}
                        </p>
                    </div>
                   
    )
}
