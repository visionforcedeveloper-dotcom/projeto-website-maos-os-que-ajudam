import styles from "./Como-ajudar.module.css";
import { MdAttachMoney } from "react-icons/md";
import { FaGift } from "react-icons/fa6";
import { CiClock2 } from "react-icons/ci";
import { GoPaperAirplane } from "react-icons/go";

export function ComoAjudar() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Como Você Pode Ajudar</h2>
      <p className={styles.subtitle}>
        Sua contribuição, independente do tamanho, faz toda a diferença na vida
        de quem mais precisa
      </p>

      <div className={styles.cards}>
        <div className={styles.card}>
          <div className={styles.icon}>
            <MdAttachMoney size={35} />
          </div>

          <h3>Doe</h3>
          <p>
            Contribuições financeiras nos ajudam a manter nossos programas e
            expandir o atendimento.
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.icon}>
            <FaGift size={20} />
          </div>

          <h3>Doe Itens</h3>
          <p>
            Roupas, alimentos, materiais de higiene e outros itens são sempre
            bem-vindos.
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.icon}>
            <CiClock2 size={28} />
          </div>

          <h3>Seja Voluntário</h3>
          <p>
            Doe seu tempo e talento ajudando em nossas atividades e programas.
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.icon}>
            <GoPaperAirplane size={24} />
          </div>

          <h3>Divulgue</h3>
          <p>
            Compartilhe nossas ações nas redes sociais e ajude a alcançar mais
            pessoas.
          </p>
        </div>
      </div>

      <button className={styles.button}>Faça Sua Doação Agora</button>
      <div className={styles.whapper}>
        <div className={styles.contact}>
          <img
            src="assets/logo-projeto.png"
            alt="Logo-projeto"
            className={styles.logo}
          />
          <h3>Fale Conosco</h3>
          <p>
            <strong>Endereço:</strong> R. Treze de Maio, 10 - João de Deus
          </p>
          <p>
            <strong>Telefone/WhatsApp:</strong> (98) 9 9904-3539
          </p>
        </div>
      </div>
    </section>
  );
}
