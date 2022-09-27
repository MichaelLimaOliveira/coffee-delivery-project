import { PaymentMethodInputContainer } from "./styles";
import { CreditCard } from "phosphor-react";
import { ReactNode } from "react";
interface PaymentMethodInputProps {
    icon: ReactNode;
    text: string;
}
export function PaymentMethodInput({ icon, text }: PaymentMethodInputProps) {
    return (
        <PaymentMethodInputContainer>
            {icon}
            {text}
        </PaymentMethodInputContainer>
    );
}
