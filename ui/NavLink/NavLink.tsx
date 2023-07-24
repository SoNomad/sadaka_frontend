import Link, { LinkProps as NexLinkProps } from "next/link";
import { ReactNode } from "react";
import styles from "./NavLink.module.css";
import cn from "classNames";

interface NavLinkProps extends NexLinkProps {
  children: ReactNode;
  className?: string;
  href: string;
}

export const NavLink = ({
  href,
  children,
  className = "",
  ...props
}: NavLinkProps) => {
  return (
    <Link href={href} className={cn(styles.NavLink, className)} {...props}>
      {children}
    </Link>
  );
};
