import { Fragment } from "react/jsx-runtime";
import { SecaoInicio } from "../secao-inicio/secao-inicio";
import { SobreNos } from "../sobre/sobre";
import { NossoImpacto } from "../nosso-impacto/nosso-impacto";
import { NossosServiços } from "../nossos-serviços/nossos-serviços";
import { QuemSomos } from "../quem-somos/Quem-somos";
import { ComoAjudar } from "../Como-ajudar/Como-ajudar";

export function HomePage(){
    return(
        <Fragment>
        <SecaoInicio/>
        <SobreNos />
        <QuemSomos/>
        <NossosServiços/>
        <NossoImpacto/>
        <ComoAjudar/>
        </Fragment>
    )
}