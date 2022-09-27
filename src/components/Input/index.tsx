import { InputHTMLAttributes } from "react";
import { InputStylesContainer } from "./styles";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input({ ...props }: InputProps) {
    return <InputStylesContainer {...props} />;
}
