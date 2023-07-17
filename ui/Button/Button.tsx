import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";
import cn from "classNames";
import styles from "./Button.module.css";

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "success";
}

export const Button = ({
  variant = "success",
  className = "",
  children,
  ...props
}: ButtonProps) => {
  return (
    <button className={cn(styles.Button, styles[variant], className)} {...props}>
      {children}
    </button>
  );
};
