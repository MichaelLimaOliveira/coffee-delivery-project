import { InfoWithIconContainer, IconContainer } from "./styles";
import { ReactNode } from "react";

interface BenefitItemProps {
    icon: ReactNode;
    text: string | ReactNode;
    iconBackground: string;
}

export function InfoWithIcon({ icon, text, iconBackground }: BenefitItemProps) {
    return (
        <InfoWithIconContainer>
            <IconContainer iconBackground={iconBackground}>
                {icon}
            </IconContainer>
            {typeof text === "string" ? <p>{text}</p> : text}
        </InfoWithIconContainer>
    );
}
