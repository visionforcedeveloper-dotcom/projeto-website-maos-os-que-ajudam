import { Fragment } from "react/jsx-runtime";
import { ComoAjudar } from "../Quem-somos/quem-somos";
import { SecaoInicio } from "../secao-inicio/secao-inicio";
import { SobreNos } from "../sobre/sobre";
import { NossoImpacto } from "../nosso-impacto/nosso-impacto";
import { QuemSomos } from "../quem-somo/Quem-somos";

export function HomePage(){
    return(
        <Fragment>
        <SecaoInicio/>
        <QuemSomos/>
        <SobreNos />
        <NossoImpacto/>
        <ComoAjudar/>
        </Fragment>
    )
}