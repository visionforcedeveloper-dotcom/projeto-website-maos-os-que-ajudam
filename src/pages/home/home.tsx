import { Fragment } from "react/jsx-runtime";
import { ComoAjudar } from "../Quem-somos/quem-somos";
import { SecaoInicio } from "../secao-inicio/secao-inicio";
import { SobreNos } from "../sobre/sobre";
import { NossoImpacto } from "../nosso-impacto/nosso-impacto";
export function HomePage(){
    return(
        <Fragment>
        <SecaoInicio/>
        <SobreNos />
        <NossoImpacto/>
        <ComoAjudar/>
        </Fragment>
    )
}