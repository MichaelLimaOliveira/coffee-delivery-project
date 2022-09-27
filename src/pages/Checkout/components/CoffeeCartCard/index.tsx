import { QuantityInput } from "../../../../components/QuantityInput";
import { RegularText } from "../../../../components/Typography";
import {
    ActionsContainer,
    CoffeeCartCardContainer,
    RemoveButton,
} from "./styles";
import { Trash } from "phosphor-react";

export function CoffeeCartCard() {
    const urlTemp =
        "https://s3-alpha-sig.figma.com/img/55b1/f9ee/64600f98b2bae456b96fdc624c4b4f47?Expires=1665360000&Signature=GwuaeJ9OFYSNDtQW7zxKRKb7QXahwHBHl2~uPITmt8-Gja-ImnB0utWVIx163I9WbUUcfnAhP9v-Pn1hPm1jdxTG616XhlAlu7XCSf31ahplonwDDyiER8e560rnuOJpSOoY6VCfzo9DzNiw-KjQ2HjMRjWxREPhG18Eb4JxB3h31CNFxUDCcj8ltax-UrZ0wkFixdSPe4m1~rHUpSAMzweOhe~EcfUPqZOzRvNWtjIdOIZdpjdRd8LPcPsUKERCR1UMmDuXV2TnNK2fblgALsDjeh8~VxGLNeMM~bsuriams8Ndim7~ZXIFYiVH6vIZrMgR5WjPCACYJvC5td-noQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA";
    return (
        <CoffeeCartCardContainer>
            <div>
                <img src={urlTemp} alt="" />
                <div>
                    <RegularText color="subtitle">
                        Expresso Tradicional
                    </RegularText>
                    <ActionsContainer>
                        <QuantityInput size="small" />
                        <RemoveButton>
                            <Trash size={16} />
                            REMOVER
                        </RemoveButton>
                    </ActionsContainer>
                </div>
            </div>

            <p>R$ 9,90</p>
        </CoffeeCartCardContainer>
    );
}
