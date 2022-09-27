import { coffees } from "../../../../CoffeeData/CoffeeData";
import { TitleText } from "../../../../components/Typography";
import { CoffeeCard } from "../CoffeeCard";
import { CoffeesContainer, CoffeeList } from "./styles";

export function CoffeesList() {
    //     const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    return (
        <CoffeesContainer className="container">
            <TitleText size="l" color="subtitle">
                Nossos cafés
            </TitleText>
            <CoffeeList>
                {coffees.map((coffee) => (
                    <CoffeeCard key={coffee.id} coffee={coffee} />
                ))}
            </CoffeeList>
        </CoffeesContainer>
    );
}
