import styles from "./nosso-impacto.module.css";

export function NossoImpacto() {
  return (
    <section id="NossoImpacto" className={styles.section}>

      <h1 className={styles.h1}>Nosso Impacto</h1>
      <div className={styles.container}>
        <div className={styles.card}>
          <h2 className={styles.title}>40</h2>
          <h3 className={styles.subtitle}>Familía Cadastradas</h3>
          <p className={styles.description}>
            Atendimento direto e personalizado para cada núcleo familiar em
            vulnerabilidade
          </p>
        </div>
        <div className={styles.card}>
          <h2 className={styles.title}>100%</h2>
          <h3 className={styles.subtitle}>Doações Empresarias</h3>
          <p className={styles.description}>
            Cestas básicas fornecidas através de parcerias estratégicas com
            empresas locais
          </p>
        </div>
        <div className={styles.card}>
          <h2 className={styles.title}>3</h2>
          <h3 className={styles.subtitle}>Áreas de Apoio</h3>
          <p className={styles.description}>
            Atendimento multiplicinar: nutricional, júridico e psicoóogico
          </p>
        </div>
      </div>
    </section>
  
  );
}
