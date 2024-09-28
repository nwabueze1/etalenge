import { CSSProperties, FC, ReactNode } from "react";
import { useSectionStyles } from "./useSectionStyles";
import clx from "classnames";

type TSection = {
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
  background: string;
  styles?: CSSProperties;
  isActive?: boolean;
};

export const Section: FC<TSection> = ({ background, children, onClick, className, styles, isActive }) => {
  const classes = useSectionStyles({ background });

  return (
    <section className={clx(classes.root, className, isActive && "active")} onClick={onClick} style={styles}>
      {children}
    </section>
  );
};
