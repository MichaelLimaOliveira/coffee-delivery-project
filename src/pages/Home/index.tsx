import { HomeContainer } from "./styles";
import { Intro } from "./components/Intro";
import { CoffeesList } from "./components/CoffeesList";

export function HomePage() {
    return (
        <HomeContainer>
            <Intro />
            <CoffeesList />
        </HomeContainer>
    );
}
