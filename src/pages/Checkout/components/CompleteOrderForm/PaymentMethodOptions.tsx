import { PaymentMethodInput } from "../PaymentMethodInput";
import { PaymentMethodOptionsContainer } from "./styles";
import { CreditCard, Bank, Money } from "phosphor-react";

export function PaymentMethodOptions() {
    return (
        <PaymentMethodOptionsContainer>
            <PaymentMethodInput
                icon={<CreditCard size={16} />}
                text="Cartão de crédito"
            />
            <PaymentMethodInput
                icon={<Bank size={16} />}
                text="cartão de débito"
            />
            <PaymentMethodInput icon={<Money size={16} />} text="dinheiro" />
        </PaymentMethodOptionsContainer>
    );
}
