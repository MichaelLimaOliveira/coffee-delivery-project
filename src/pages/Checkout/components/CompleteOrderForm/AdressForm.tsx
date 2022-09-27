import { Input } from "../../../../components/Input";
import { AddressFormContainer } from "./styles";

export function AdressForm() {
    return (
        <AddressFormContainer>
            <Input placeholder="CEP" type="number" className="cep" />
            <Input placeholder="Rua" className="street" />
            <Input placeholder="Número" type="number" className="number" />
            <Input placeholder="Complemento" className="complement" />
            <Input placeholder="Bairro" className="district" />
            <Input placeholder="Cidade" />
            <Input placeholder="UF" />
        </AddressFormContainer>
    );
}
