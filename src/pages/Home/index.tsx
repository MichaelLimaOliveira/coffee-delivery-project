import {
    CoffeeCircle,
    HomeContainer,
    ImageContainer,
    IntroContainer,
    ItemsInLine,
    ItemsContainer,
    Item,
    PackageCircle,
    ShoppingCartCircle,
    TimerCircle,
    TitleContainer,
    CoffeeList,
    BackgroundImageContainer,
    TitleCoffeeList,
    List,
    CoffeeCard,
    CardPurchaseContainer,
} from "./styles";

import coffeCupLogo from "./assets/coffee-cup-logo.svg";
import shoppingCart from "./assets/shopping-cart.svg";
import packageIcon from "./assets/package-icon.svg";
import timerIcon from "./assets/timer-icon.svg";
import coffeeIcon from "./assets/coffee-icon.svg";
import coffeeExpressoTradicional from "./assets/coffeesImages/coffee-expresso-tradicional.svg";

export function Home() {
    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    return (
        <HomeContainer>
            <BackgroundImageContainer>
                <IntroContainer>
                    <TitleContainer>
                        <h1>
                            Encontre o café perfeito para qualquer hora do dia
                        </h1>
                        <span>
                            Com o Coffee Delivery você recebe seu café onde
                            estiver, a qualquer hora
                        </span>
                        <ItemsContainer>
                            <ItemsInLine>
                                <Item>
                                    <ShoppingCartCircle>
                                        <img src={shoppingCart} alt="" />
                                    </ShoppingCartCircle>
                                    <p>Compra simples e segura</p>
                                </Item>
                                <Item>
                                    <PackageCircle>
                                        <img src={packageIcon} alt="" />
                                    </PackageCircle>
                                    <p>Embalagem mantém o café intacto</p>
                                </Item>
                            </ItemsInLine>
                            <ItemsInLine>
                                <Item>
                                    <TimerCircle>
                                        <img src={timerIcon} alt="" />
                                    </TimerCircle>
                                    <p>Entrega rápida e rastreada</p>
                                </Item>
                                <Item>
                                    <CoffeeCircle>
                                        <img src={coffeeIcon} alt="" />
                                    </CoffeeCircle>
                                    <p>O café chega fresquinho até você</p>
                                </Item>
                            </ItemsInLine>
                        </ItemsContainer>
                    </TitleContainer>
                    <ImageContainer>
                        <img src={coffeCupLogo} alt="" />
                    </ImageContainer>
                </IntroContainer>
            </BackgroundImageContainer>
            <CoffeeList>
                <TitleCoffeeList>
                    <h1>Nossos cafés</h1>
                </TitleCoffeeList>
                <List>
                    {cards.map((card) => (
                        <CoffeeCard key={String(new Date())}>
                            <div>
                                <img src={coffeeExpressoTradicional} alt="" />
                            </div>
                            <span>Tradicional</span>
                            <h4>Expresso Tradicional</h4>
                            <p>
                                O tradicional café feito com água quente e grãos
                                moídos
                            </p>
                            <CardPurchaseContainer>
                                <p>
                                    R$<span>9,90</span>
                                </p>
                                <div>
                                    <input type="number" />
                                    <button>
                                        <img src={shoppingCart} alt="" />
                                    </button>
                                </div>
                            </CardPurchaseContainer>
                        </CoffeeCard>
                    ))}
                </List>
            </CoffeeList>
        </HomeContainer>
    );
}
