import { FC } from "react";
import { TContainerProps } from "./type";
import { useContainer } from "./useContainer";

export const Container: FC<TContainerProps> = ({ children }) => {
  const classes = useContainer();

  return <div className={classes.root}>{children}</div>;
};
