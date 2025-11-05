import React from "react";
import styles from  "./sobre.module.css";
import { FaRegHeart } from "react-icons/fa";
import { TbTargetArrow } from "react-icons/tb";
import { MdOutlineRemoveRedEye } from "react-icons/md";

const SobreNos: React.FC = () => {
    return (
        <section className={styles.sobrenos} id="sobre-nos">
            <div className={styles.container}> 
                <h2>Sobre nós</h2>
                <p className={styles.descricao}>
                    Oferecemos suporte integral com programas e serviços que atendem às
                    necessidades básicas e promovem o desenvolvimento pessoal.
                </p>

                <div className={styles.cards}>
                    <div className={styles.card}>

                        <div className={styles.icon}>
                        <FaRegHeart size={28} color="white" />
                        </div>
                        <h3>Missão</h3>
                        <p>
                            Proporcionar acolhimento integral e suporte emocional, social e material para pessoas em
                            situação de vulnerabilidade, promovendo dignidade e autonomia.
                        </p>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.icon}>
                        <TbTargetArrow size={28} color="white"/>
                        </div>
                        <h3>Visão</h3>
                        <p>
                            Ser referência em apoio humanizado, construindo uma comunidade mais justa e solidária onde todos tenham acesso a oportunidades de desenvolvimento.
                        </p>
                    </div>

                    <div className={styles.card}>
                        <div className= {styles.icon}>
                            <MdOutlineRemoveRedEye size={28} color="white"/>
                        </div>
                        <h3>Valores</h3>
                        <p>
                            Empatia, respeito, transparência, compromisso social e trabalho em equipe são os pilares que guiam todas as nossas ações e decisões.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SobreNos;
