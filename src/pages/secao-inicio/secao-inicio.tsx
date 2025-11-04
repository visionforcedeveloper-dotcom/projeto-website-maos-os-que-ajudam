import { Header } from "../../components/Header/header";
import styles from "./secao-inicio.module.css";

export function SecaoInicio() {
  return (
    <section>
      <Header></Header>

      <div className={styles.container}>
        <div>
          <h1>Mãos Que Ajudam</h1>
          <button>
            <a href="">Faça Sua Doação Agora</a>
          </button>
        </div>
      </div>
    </section>
  );
}
