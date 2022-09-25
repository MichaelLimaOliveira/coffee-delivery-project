import styled from "styled-components";
import { devices } from "../../devices";

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-height: 6.5rem;
    max-width: 1120px;
    margin: 0 auto;

    width: 100%;

    @media ${devices.mobileS} {
        padding: 2rem 0.5rem;
    }

    @media ${devices.mobileM} {
        padding: 2rem 0.5rem;
    }

    @media ${devices.mobileL} {
        padding: 2rem 0.5rem;
    }

    @media ${devices.laptop} {
        padding: 2rem 0.5rem;
    }

    @media ${devices.laptopL} {
        padding: 2rem 0rem;
    }
`;

export const LogoContainer = styled.div`
    display: flex;
`;

export const ShoppingAreaContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 0.75rem;
`;

export const ButtonContainer = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: ${(props) => props.theme["--yellow-light"]};
    border-radius: 6px;
    height: 2.375rem;
    width: 2.375rem;
`;

export const LocaleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.375rem;
    border-radius: 6px;
    padding: 0.5rem;
    gap: 0.25rem;
    background: ${(props) => props.theme["--purple-light"]};

    span {
        color: ${(props) => props.theme["--purple-dark"]};
    }
`;
