import React from "react";
import styles from "./Quem-somos.module.css"

const ComoAjudar: React.FC = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Como Você Pode Ajudar</h2>
      <p className={styles.subtitle}>
        Sua contribuição, independente do tamanho, faz toda a diferença na vida
        de quem mais precisa
      </p>

      <div className={styles.cards}>
        <div className={styles.card}>
          <span className={styles.icon}>💰</span>
          <h3>Doe</h3>
          <p>
            Contribuições financeiras nos ajudam a manter nossos programas e
            expandir o atendimento.
          </p>
        </div>

        <div className={styles.card}>
          <span className={styles.icon}>🎁</span>
          <h3>Doe Itens</h3>
          <p>
            Roupas, alimentos, materiais de higiene e outros itens são sempre
            bem-vindos.
          </p>
        </div>

        <div className={styles.card}>
          <span className={styles.icon}>🤝</span>
          <h3>Seja Voluntário</h3>
          <p>
            Doe seu tempo e talento ajudando em nossas atividades e programas.
          </p>
        </div>

        <div className={styles.card}>
          <span className={styles.icon}>📢</span>
          <h3>Divulgue</h3>
          <p>
            Compartilhe nossas ações nas redes sociais e ajude a alcançar mais
            pessoas.
          </p>
        </div>
      </div>

      <button className={styles.button}>Faça Sua Doação Agora</button>

      <div className={styles.contact}>
        <img
          src="/logo-projeto.png"
          alt="Logo-projeto"
          className={styles.logo}
        />
        <h3>Fale Conosco</h3>
        <p>
          <strong>Endereço:</strong> Rua Esperança, nº 123 – Bairro da Esperança
        </p>
        <p>
          <strong>Telefone/WhatsApp:</strong> (00) 00000-0000
        </p>
        <p>
          <strong>E-mail:</strong> contato@casadeapoio.org
        </p>
      </div>
    </section>
  );
};

export default ComoAjudar;