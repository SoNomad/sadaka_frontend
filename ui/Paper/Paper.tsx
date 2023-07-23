import { ReactNode } from "react";
import styles from "./Paper.module.css";
import cn from "classNames";

interface PaperProps {
  className?: string;
  children: ReactNode;
}

export const Paper = ({ className = "", children }: PaperProps) => {
  return <div className={cn(styles.Paper, className)}>{children}</div>;
};
