import styles from './header.module.css'

export function Header (){
    return (
        <header>
            <nav className={styles.navbar}>
                <div >
                    <img src="/assets/logo-projeto.png" alt="Logo Mãos Que Ajudam"/>
                </div>

                <ul className={styles['nav-links']}>
                    <li><a href="#sobrenos">Sobre Nós</a></li>
                    <li><a href="#projetos">Projetos</a></li>
                    <li><a href="#faleconosco">Fale Conosco</a></li>
                </ul>

            </nav>
        </header>
    )
}
