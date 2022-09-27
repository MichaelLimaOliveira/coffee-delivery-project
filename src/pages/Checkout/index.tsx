import { CompleteOrderContainer } from "./styles";

import { CompleteOrderForm } from "./components/CompleteOrderForm";
import { SelectedCoffees } from "./components/SelectedCoffees";

export function CheckoutPage() {
    return (
        <CompleteOrderContainer className="container">
            <CompleteOrderForm />
            <SelectedCoffees />
        </CompleteOrderContainer>
    );
}
