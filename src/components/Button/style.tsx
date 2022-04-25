import styled from "styled-components";

interface ButtonStProps {
    readonly fullWidth: boolean
}

export const ButtonSt = styled.button<ButtonStProps>`
    width: ${props => props.fullWidth ? "100%" : "auto"};
`;



