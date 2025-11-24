import { Header } from "../../components/Header/header";
import styles from "./secao-inicio.module.css";

export function SecaoInicio() {
      const mensagem="Olá vim pr meio do site gostaria de fazer uma  doação"
  const redirectZap= `https://api.whatsapp.com/send/?phone=559899043539&text=${encodeURI(mensagem)}`
  return (
    <section>
      <Header></Header>

      <div className={styles.container}>
        <div>
          <h1>Mãos Que Ajudam</h1>
          <button>
            <a href={redirectZap} target="_blank">Faça Sua Doação Agora</a>
          </button>
        </div>
      </div>
    </section>
  );
}
