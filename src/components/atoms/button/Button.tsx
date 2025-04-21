import React from "react";
import s from "./Button.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
}

export function Button({ title, ...props }: ButtonProps) {
    return (
        <button className={s.button} {...props}>
            {title}
        </button>
    );
}