import styled, { ThemeConsumer } from "styled-components";
import { SectionBasStyle } from "../../styles";

export const SelectedCoffeesContainer = styled.div`
    width: 100%;
    max-width: 28rem;

    display: flex;
    flex-direction: column;
    gap: 0.75rem;
`;

export const DetailsContainer = styled(SectionBasStyle)`
    border-radius: 6px 44px;
    display: flex;
    flex-direction: column;
`;

export const ConfirmationSectionContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`;

export const ButtonContainer = styled.button`
    padding: 0.75rem 2.8rem;
    color: ${({ theme }) => theme.colors["base-white"]};
    font-weight: 700;
    background: ${({ theme }) => theme.colors["brand-yellow"]};
    font-size: ${({ theme }) => theme.textSizes["components-button-g"]};
    border: none;
    border-radius: 6px;
    text-transform: uppercase;
    transition: 0.4s;
    line-height: 1.3rem;

    &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }

    &:not(:disabled):hover {
        background: ${({ theme }) => theme.colors["brand-yellow-dark"]};
    }
`;
