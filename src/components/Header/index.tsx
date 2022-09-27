import {
    HeaderButton,
    HeaderButtonsContainer,
    HeaderContainer,
} from "./styles";
import logoCoffeDelivery from "../.././assets/logo-coffe-delivery.svg";
import { NavLink } from "react-router-dom";
import { MapPin, ShoppingCart } from "phosphor-react";

export function Header() {
    return (
        <HeaderContainer>
            <div className="container">
                <NavLink to={"/"} title="Home">
                    <img src={logoCoffeDelivery} alt="" />
                </NavLink>
                <HeaderButtonsContainer>
                    <HeaderButton variant="purple">
                        <MapPin size={20} weight="fill" />
                        Porto Alegre, RS
                    </HeaderButton>
                    <HeaderButton variant="yellow">
                        <NavLink to={"/checkout"} title="Carrinho de compras">
                            <ShoppingCart size={20} weight="fill" />
                        </NavLink>
                    </HeaderButton>
                </HeaderButtonsContainer>
            </div>
        </HeaderContainer>
    );
}
