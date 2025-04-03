import React, { FC } from "react";


String

type ButtonProps = {
    onClick?: () => void;
    text: string;
}

export const Button: FC<ButtonProps> = (props) => {
    const { onClick, text } = props;

    const handleClick = () => {
        if (!onClick) return;
        onClick();
    }

    return <button onClick={handleClick}>{text}</button>
}
