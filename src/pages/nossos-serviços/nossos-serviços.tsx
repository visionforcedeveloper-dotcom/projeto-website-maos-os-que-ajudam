import styles from "./nossos-servicos.module.css"
import { CiHome } from "react-icons/ci";
import { CiForkAndKnife } from "react-icons/ci";
import { PiHeartbeatThin } from "react-icons/pi";
import { Card } from "../../components/Card/card";
import { PiBriefcaseThin } from "react-icons/pi";
import { PiGraduationCapLight } from "react-icons/pi";
import { GoPeople } from "react-icons/go";
import { CarouselSlidesOnlyExample } from "../../components/Carrossel/carrosel";

export function NossosServiços({}){
    return(
        <section id="NossosServiços" className={styles.container}>
            <h2 id="ns">Nossos Serviços</h2>
            <p id="sub">Oferecemos suporte integral com programas e serviços que atendem às necessidades básicas e promovem o desenvolvimento pessoal</p>
            {/* <div id="container" className={styles.cards}>
                <Card
                descricao="Moradia temporária segura e confortável para famílias em situação de vulnerabilidade."
                icone={<CiHome size={28} color="white" />}
                titulo="Acolhimento Residencial"
                />
                <Card
                descricao="Refeições nutritivas diárias preparadas com carinho para todos os acolhidos."
                icone={<CiForkAndKnife size={28} color="white" />}
                titulo="Alimentação"
                />
                <Card
                descricao="Acompanhamento psicológico individualizado e em grupo para apoio emocional."
                icone={< PiHeartbeatThin size={28} color="white" />}
                titulo="Suporte Psicológico"
                />
                <Card
                descricao="Oficinas e cursos profissionalizantes para desenvolvimento de habilidades."
                icone={< PiBriefcaseThin size={28} color="white" />}
                titulo="Qualificação Profissional"
                />
                <Card
                descricao="Apoio escolar e programas educacionais para crianças e adultos."
                icone={<PiGraduationCapLight size={28} color="white" />}
                titulo="Educação"
                />
                <Card
                descricao="Orientação e encaminhamento para serviços públicos e programas sociais."
                icone={< GoPeople size={28} color="white" />}
                titulo="Assistência Social"
                />
            </div> */}
                       <CarouselSlidesOnlyExample/>
        </section>
    )
}