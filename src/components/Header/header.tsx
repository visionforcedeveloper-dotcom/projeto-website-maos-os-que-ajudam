import { useEffect, useState } from "react";
import styles from "./header.module.css";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
     
    >

      <nav  className={`${
        isScrolled
          ? styles.useEffect
          : styles.navbar
      }`}>
        <div>
          <img src="/assets/logo-projeto.png" alt="Logo Mãos Que Ajudam" />
        </div>

        <ul className={styles["nav-links"]}>
          <li>
            <a href="#sobre-nos">Sobre Nós</a>
          </li>
          <li>
            <a href="#QuemSomos">Quem Somos</a>
          </li>
          <li>
            <a href="#NossosServiços">Nosso Serviços</a>
          </li>
          <li>
            <a href="#NossoImpacto">Nosso Impacto</a>
          </li>
          <li>
            <a href="#ComoAjudar">Como Ajudar</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
