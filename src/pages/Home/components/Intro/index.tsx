import {
    BenefitsContainer,
    IntroContainer,
    IntroContent,
    IntroTitle,
} from "./styles";
import introImg from "../../../../assets/intro-img.png";
import { ShoppingCart, Package, Timer, Coffee } from "phosphor-react";
import { InfoWithIcon } from "../../../../components/InfoWithIcon";
import { useTheme } from "styled-components";
import { RegularText } from "../../../../components/Typography";
export function Intro() {
    const { colors } = useTheme();
    return (
        <IntroContainer>
            <IntroContent className="container">
                <div>
                    <section>
                        <IntroTitle size="xl">
                            Encontre o café perfeito para qualquer hora do dia
                        </IntroTitle>
                        <RegularText size="l" color="subtitle" as="h3">
                            Com o Coffee Delivery você recebe seu café onde
                            estiver, a qualquer hora
                        </RegularText>
                    </section>
                    <BenefitsContainer>
                        <InfoWithIcon
                            iconBackground={colors["brand-yellow-dark"]}
                            icon={<ShoppingCart weight="fill" />}
                            text="Compra simples e segura"
                        />
                        <InfoWithIcon
                            iconBackground={colors["base-text"]}
                            icon={<Package weight="fill" />}
                            text="Embalagem mantém o café intacto"
                        />
                        <InfoWithIcon
                            iconBackground={colors["brand-yellow"]}
                            icon={<Timer weight="fill" />}
                            text="Entrega rápida e rastreada"
                        />
                        <InfoWithIcon
                            iconBackground={colors["brand-purple"]}
                            icon={<Coffee weight="fill" />}
                            text="O café chega fresquinho até você"
                        />
                    </BenefitsContainer>
                </div>
                <img src={introImg} alt="" />
            </IntroContent>
        </IntroContainer>
    );
}
