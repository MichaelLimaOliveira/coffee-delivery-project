import { QuantityInput } from "../../../../components/QuantityInput";
import { RegularText, TitleText } from "../../../../components/Typography";
import {
    AddCartWrapper,
    CardFooter,
    CoffeeCardContainer,
    Description,
    Name,
    Tags,
} from "./styles";

import { v4 } from "uuid";

import { ShoppingCart } from "phosphor-react";
import { formatMoney } from "../../../../util/formatMoney";

export interface Coffee {
    id: number;
    tags: string[];
    name: string;
    description: string;
    photo: string;
    price: number;
}
interface CoffeeProps {
    coffee: Coffee;
}

export function CoffeeCard({ coffee }: CoffeeProps) {
    const formattedPrice = formatMoney(coffee.price);
    return (
        <CoffeeCardContainer>
            <img src={`/coffees/${coffee.photo}`} alt="" />
            <Tags>
                {coffee.tags.map((tag) => (
                    <span key={v4()}>{tag}</span>
                ))}
            </Tags>
            <Name>{coffee.name}</Name>
            <Description>{coffee.description}</Description>
            <CardFooter>
                <div>
                    <RegularText size="s">R$</RegularText>
                    <TitleText size="m" color="text" as="strong">
                        {formattedPrice}
                    </TitleText>
                </div>

                <AddCartWrapper>
                    <QuantityInput size="medium" />
                    <button>
                        <ShoppingCart size={22} weight="fill" />
                    </button>
                </AddCartWrapper>
            </CardFooter>
        </CoffeeCardContainer>
    );
}
