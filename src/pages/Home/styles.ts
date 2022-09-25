import styled from "styled-components";
import { devices } from "../../devices";

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: auto;
`;

export const BackgroundImageContainer = styled.div`
    display: flex;
    width: 100%;

    background-image: linear-gradient(
            to bottom,
            ${(props) => props.theme["--background"]} 0%,
            rgba(255, 255, 255, 0) 15%,
            rgba(255, 255, 255, 0) 85%,
            ${(props) => props.theme["--background"]} 100%
        ),
        url("/assets/background-image.svg");
`;

export const IntroContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-size: 100%;
    background-position: center;
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    flex-direction: column;

    @media ${devices.laptopL} {
        flex-direction: row;
        padding: 96px 0;
    }
`;

export const TitleContainer = styled.div`
    max-width: 36.75rem;

    h1 {
        font-family: "Baloo 2";
        font-weight: 800;
        font-size: 3rem;
        line-height: 130%;
        color: ${(props) => props.theme["--base-title"]};
    }

    span {
        font-weight: 400;
        font-size: 1.25rem;
        line-height: 130%;
        color: ${(props) => props.theme["--base-subtitle"]};
        padding-top: 1rem;
    }
`;

export const ItemsContainer = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    padding-top: 4.125rem;
    gap: 2.5rem;
    @media ${devices.tablet} {
        gap: 1.594rem;
        padding-bottom: 1rem;
    }
`;

export const ItemsInLine = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.5rem;

    @media ${devices.tablet} {
        flex-direction: row;
    }
`;
export const Item = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;

    @media ${devices.tablet} {
        min-width: 14.438rem;
    }
`;

const BaseCircles = styled.div`
    width: 2rem;
    height: 2rem;
    display: flex;
    padding: 0.5rem;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
`;

export const ShoppingCartCircle = styled(BaseCircles)`
    background: ${(props) => props.theme["--yellow-dark"]};
`;

export const PackageCircle = styled(BaseCircles)`
    background: ${(props) => props.theme["--base-text"]};
`;

export const TimerCircle = styled(BaseCircles)`
    background: ${(props) => props.theme["--yellow"]};
`;

export const CoffeeCircle = styled(BaseCircles)`
    background: ${(props) => props.theme["--purple"]};
`;

export const ImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    img {
        width: 100%;
        padding-top: 1rem;
    }

    @media ${devices.laptopL} {
        img {
            padding-top: 0;
        }
    }
`;

export const CoffeeList = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1120px;
    margin: auto;
`;

export const TitleCoffeeList = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 2rem;
    margin-bottom: 3.375rem;

    h1 {
        font-family: "Baloo 2", sans-serif;
        font-weight: 800;
        font-size: 2rem;
        line-height: 130%;
    }
`;

export const List = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 40px 24px;
`;

export const CoffeeCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 256px;
    height: 310px;
    background: ${(props) => props.theme["--base-card"]};
    border-radius: 6px 36px;

    img {
        margin-top: -20px;
        padding-bottom: 12px;
    }
    span {
        background-color: ${(props) => props.theme["--yellow-light"]};
        color: ${(props) => props.theme["--yellow-dark"]};
        border-radius: 100px;
        padding: 4px 8px;

        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 16px;
    }

    h4 {
        font-family: "Baloo 2", sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 130%;
        margin-bottom: 8px;
        color: ${(props) => props.theme["--base-subtitle"]};
    }

    p {
        font-weight: 400;
        font-size: 14px;
        line-height: 130%;
        text-align: center;
        padding: 0 20px;
        color: ${(props) => props.theme["--base-label"]};
    }
`;

export const CardPurchaseContainer = styled.div`
    width: 208px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 33px;
    margin-bottom: 20px;

    p {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        padding: unset;
        gap: 5px;

        font-weight: 400;
        font-size: 14px;
        line-height: 130%;
        color: ${(props) => props.theme["--base-text"]};

        span {
            margin: 0;
            background: none;
            font-family: "Baloo 2", sans-serif;
            color: ${(props) => props.theme["--base-text"]};
            font-weight: 800;
            font-size: 24px;
            line-height: 31.2px;
            padding: unset;
            padding-bottom: 2px;
        }
    }

    div {
        display: flex;
        gap: 8px;

        input {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            padding: 8px;
            gap: 4px;
            border: none;

            width: 72px;
            height: 38px;

            border-radius: 6px;

            background: ${(props) => props.theme["--base-button"]};
        }

        button {
            width: 38px;
            height: 38px;
            border: none;
            border-radius: 6px;

            display: flex;
            justify-content: center;
            align-items: center;

            background: ${(props) => props.theme["--purple-dark"]};

            cursor: pointer;

            img {
                padding: unset;
                margin: unset;
                height: 22px;
                width: 22px;
            }
            :hover {
                background: ${(props) => props.theme["--purple"]};
            }
        }
    }
`;
