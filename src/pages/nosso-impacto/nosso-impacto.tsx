import styles from "./nosso-impacto.module.css";

export function NossoImpacto() {
  return (
    <section>
      <div className={styles.container}>
        <h1 className={styles.tlite}>Nosso Impacto</h1> 
        <div className={styles.box}>
          <h2>40</h2>
          <h3>Familía Cadastradas</h3>
          <p>
            Atendimento direto e personalizado para cada núcleo familiar em
            vulnerabilidade
          </p>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.box}>
          <h2>100%</h2>
          <h3>Doações Empresariais</h3>
          <p>
            Cestas básicas fornecidas através de parcerias estratégicas com
            empresas locais
          </p>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.box}>
          <h2>3</h2>
          <h3>Áreas de Apoio</h3>
          <p>
            Atendimento multiplicinar: nutricional, júridico e psicoóogico
          </p>
        </div>
      </div>
    </section>
  );
}
