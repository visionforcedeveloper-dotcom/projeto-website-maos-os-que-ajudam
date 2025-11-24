import styles from "./carrosel.module.css"
import { CCarousel, CCarouselItem} from '@coreui/react'
import {Card} from "../Card/card";
import { CiForkAndKnife, CiHome } from 'react-icons/ci';
import { PiBriefcaseThin, PiGraduationCapLight, PiHeartbeatThin } from 'react-icons/pi';
import { GoPeople } from 'react-icons/go';

export const CarouselSlidesOnlyExample = () => {
  return (
    <div className={styles.carrousel}>

    <CCarousel controls  style={{
    ["--cui-carousel-indicator-active-bg"]: "red",
    ["--cui-carousel-indicator-bg"]: "rgba(255, 0, 0, 0.3)"
  } as React.CSSProperties}
>
      <CCarouselItem>
        <Card
          titulo="Acolhimento Residencial"
          descricao="Moradia temporária segura e confortável para famílias em situação de vulnerabilidade."
          icone={<CiHome size={28} color="white" />}
          />
      </CCarouselItem>

      <CCarouselItem>
        <Card
          titulo="Alimentação"
          descricao="Refeições nutritivas diárias preparadas com carinho para todos os acolhidos."
          icone={<CiForkAndKnife size={28} color="white" />}
          />
      </CCarouselItem>

      <CCarouselItem>
        <Card
          titulo="Suporte Psicológico"
          descricao="Acompanhamento psicológico individualizado e em grupo para apoio emocional."
          icone={<PiHeartbeatThin size={28} color="white" />}
          />
      </CCarouselItem>

      <CCarouselItem>
        <Card
          titulo="Qualificação Profissional"
          descricao="Oficinas e cursos profissionalizantes para desenvolvimento de habilidades."
          icone={<PiBriefcaseThin size={28} color="white"/>}
          
          />
      </CCarouselItem>

      <CCarouselItem>
        <Card
          titulo="Educação"
          descricao="Apoio escolar e programas educacionais para crianças e adultos."
          icone={<PiGraduationCapLight size={28} color="white"/>}
          />
      </CCarouselItem>

      <CCarouselItem>
        <Card
          titulo="Assistência Social"
          descricao="Orientação e encaminhamento para serviços públicos e programas sociais."
          icone={<GoPeople size={28} color="white"/>}
          />
      </CCarouselItem>
    </CCarousel>
          </div>
  );
};
