import { ComoAjudar } from '../Quem-somos/quem-somos'
import styles from './home.module.css'

export function HomePage(){
    return(
        <div>
            <h1 className={styles.h1}>eu sou Home</h1> 
            <ComoAjudar />
        </div>
    )
}