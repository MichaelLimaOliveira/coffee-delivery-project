import {
    ButtonContainer,
    HeaderContainer,
    LogoContainer,
    LocaleContainer,
    ShoppingAreaContainer,
} from "./styles";
import logoCoffeDelivery from "../.././assets/logo-coffe-delivery.svg";
import logoCart from "../.././assets/logo-cart.svg";
import localeMark from "../.././assets/locale-mark.svg";

export function Header() {
    return (
        <HeaderContainer>
            <LogoContainer>
                <img src={logoCoffeDelivery} alt="" />
            </LogoContainer>
            <ShoppingAreaContainer>
                <div>
                    <LocaleContainer>
                        <img src={localeMark} alt="" />
                        <span>Porto Alegre, RS</span>
                    </LocaleContainer>
                </div>
                <div>
                    <ButtonContainer>
                        <img src={logoCart} alt="" />
                    </ButtonContainer>
                </div>
            </ShoppingAreaContainer>
        </HeaderContainer>
    );
}
