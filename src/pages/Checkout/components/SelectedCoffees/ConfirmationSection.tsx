import { RegularText } from "../../../../components/Typography";
import { ButtonContainer, ConfirmationSectionContainer } from "./styles";

export function ConfirmationSection() {
    return (
        <ConfirmationSectionContainer>
            <div>
                <RegularText size="s">Total de itens</RegularText>
                <RegularText>R$ 9,90</RegularText>
            </div>
            <div>
                <RegularText size="s">Total de itens</RegularText>
                <RegularText>R$ 9,90</RegularText>
            </div>
            <div>
                <RegularText weight={700} size="l" color="subtitle">
                    Total
                </RegularText>
                <RegularText weight={700} size="l" color="subtitle">
                    R$ 29,90
                </RegularText>
            </div>
            <ButtonContainer>confirmar pedido</ButtonContainer>
        </ConfirmationSectionContainer>
    );
}
