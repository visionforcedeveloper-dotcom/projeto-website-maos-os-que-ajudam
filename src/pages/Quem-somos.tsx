import React from "react";
import styles from "./Quem-somos.module.css"

export const QuemSomos: React.FC = () => {
  return (
    <section className={styles.quemSomos}>
      <div className="container">
        <div className="texto">
          <h2>Quem somos</h2>
          <p>
            Somos uma <strong>Casa de Apoio</strong> dedicada a oferecer suporte, acolhimento e oportunidades
            para a comunidade do nosso bairro. Acreditamos no poder da união e do trabalho conjunto para
            transformar vidas.
          </p>
          <p>
            Nosso objetivo é construir um espaço de esperança, solidariedade e crescimento para todas as
            pessoas que buscam apoio.
          </p>
        </div>

        <div className="imagem">
          <img
            src="/assets/Rectangle 93.png"
            alt="Crianças em atividade comunitária"
            className={styles.logo} 
          />
        </div>
      </div>
    </section>
  );
};


