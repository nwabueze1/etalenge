import { BlockProviderProps, useBlockSelector } from "../../../../components";
import { useEmptyCartStyles } from "./useEmptyCartStyles";
import { CustomThemeProps } from "../../../../type";
import clx from "classnames";

export const EmptyCart = () => {
  const { mainConfig } = useBlockSelector((store: BlockProviderProps) => store);
  const classes = useEmptyCartStyles(mainConfig as CustomThemeProps);

  return (
    <div className={classes.root}>
      <img
        src={"https://sytbuildr.s3.eu-west-2.amazonaws.com/templates/elegante/Empty+Cart.svg"}
        alt={"Empty cart icon"}
        height={400}
        width={400}
        className={clx(classes.emptyCartIcon, classes.fadeIn)}
      />
      <div className={classes.textContainer}>
        <h5>Your cart is empty</h5>
        <p>You are are yet to add any item to cart, check out our awesome menu and place your order now.</p>
      </div>
    </div>
  );
};
