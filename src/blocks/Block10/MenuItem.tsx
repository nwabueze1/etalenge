import { FC, Fragment, useEffect, useState } from "react";
import { CoreMenuItemFields } from "../../models";
import { calculateSumOfOption, extractMenuItemOptions } from "./helpers";
import { BlockProviderProps, Button, useBlockSelector } from "../../components";
import { useBlock10Styles } from "./useBlock10Styles";
import { CustomThemeProps } from "../../type";
import { CircularProgress } from "@mui/material";
import clx from "classnames";
import { parseApiImage } from "../../utils";
import { getCurrency, notify } from "../../helper";
import { TAddToCartVariables, useAddToCart } from "../../hooks/useAddToCart";
import { TCart, TOption } from "./type";
import { useDispatch } from "react-redux";
import { createResponsiveImage } from "../../helper/responsiveImage";

export const MenuItem: FC<{
  menu_item: CoreMenuItemFields;
  onItemAddedToCart?: (args: TAddToCartVariables) => void;
  isSsr?: boolean;
  screenSize?: number;
}> = ({ menu_item, onItemAddedToCart, isSsr, screenSize }) => {
  const { mainConfig } = useBlockSelector((store: BlockProviderProps) => store);
  const { initialState } = extractMenuItemOptions(menu_item);
  const classes = useBlock10Styles(mainConfig as CustomThemeProps);
  const initialCartItem: TCart = {
    count: 1,
    errors: [],
    loading: false,
    options: initialState,
  };
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [cartItem, setCartItem] = useState<TCart>(initialCartItem);
  const parsedImage = parseApiImage(menu_item?.image);
  const currencySymbol = getCurrency(menu_item?.menu?.restaurant?.bank_info?.currency ?? "");
  const addToCart = useAddToCart();
  const dispatch = useDispatch();

  const handleIncrement = () => setCartItem({ ...cartItem, count: cartItem.count + 1 });
  const handleDecrement = () =>
    setCartItem({ ...cartItem, count: cartItem.count > 1 ? cartItem.count - 1 : cartItem.count });

  const handleChange = (option: TOption, index: number) => {
    let currentSelection = cartItem.options[index];

    if (currentSelection.type === "extras") {
      const isAdded = currentSelection.selectedChoices.find((item) => item.name === option.name);
      if (isAdded) {
        currentSelection = {
          ...currentSelection,
          selectedChoices: currentSelection.selectedChoices.filter((item) => item.name !== option.name),
        };
      } else {
        currentSelection = { ...currentSelection, selectedChoices: [...currentSelection.selectedChoices, option] };
      }
    } else {
      currentSelection = { ...currentSelection, selectedChoices: [option] };
    }

    setCartItem({ ...cartItem, options: cartItem.options.map((opt, i) => (i === index ? currentSelection : opt)) });
  };

  const handleValidateOption = (index?: number) => {
    const error: number[] = [];
    let isFormValid: boolean = true;
    if (!index) {
      cartItem.options.forEach((opt, index) => {
        const isValid = opt.selectedChoices.length > 0;
        if (!isValid) {
          error.push(index);
          isFormValid &&= isValid;
        }
      });
    } else {
      const isValid = cartItem.options[index].selectedChoices.length > 0;
      if (!isValid) {
        error.push(index);
        isFormValid &&= isValid;
      }
    }

    setCartItem({ ...cartItem, errors: error });
    return isFormValid;
  };

  const handleAddToCart = async () => {
    setCartItem({ ...cartItem, loading: true });
    const cartParams: TAddToCartVariables = {
      menu_item_uuid: menu_item.uuid ?? "",
      detail: menu_item?.description ?? "",
      quantity: cartItem.count,
      options: JSON.stringify(cartItem.options),
    };

    try {
      await addToCart(cartParams);
      notify("success", "Item has been added to cart");
      onItemAddedToCart?.(cartParams);
    } catch (e) {
      notify("error", "Failed to add item to cart");
    } finally {
      setCartItem(initialCartItem);
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (!isSsr) return;
    dispatch({ type: "GET_MENU_ITEMS", payload: [menu_item] });
  }, []);

  return (
    <div className={classes.block}>
      {createResponsiveImage(parsedImage, {
        className: classes.image,
        screenSize,
        classNames: {
          picture: classes.imageContainer,
        },
        styles: {
          picture: { display: "block" },
        },
      })}
      <div>
        <header>
          <h3 className={classes.modalHeading}>{menu_item?.name}</h3>
          <p className={clx(classes.categorySub, "description")}>{menu_item?.description}</p>
        </header>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setIsSubmitting(true);

            const isFormValid = handleValidateOption();
            if (!isFormValid) return;
            setCartItem({ ...cartItem, errors: [] });
            handleAddToCart();
          }}
        >
          {cartItem.options.map((state, index) => (
            <Fragment key={index}>
              <div key={index}>
                <div className={classes.configTitle}>
                  <span>
                    {state.name} ({state.type})
                  </span>
                  <span className={classes.requiredContainer}>Required</span>
                </div>
                <p className={classes.categorySub}>
                  {state.type === "selection"
                    ? "Please select a variant. You can only pick one option"
                    : state.type === "deselection"
                    ? "Select items you don’t want to be in your meal"
                    : "Select extra items"}
                </p>
                {state?.options?.map((option, inner_index) => (
                  <div key={inner_index} className={classes.selectionContainer}>
                    <label className={classes.selectionText}>
                      <input
                        type={state.type === "extras" ? "checkbox" : "radio"}
                        name={state.name}
                        key={inner_index}
                        onChange={() => {
                          handleChange(option, index);
                        }}
                        checked={
                          cartItem.options[index].selectedChoices.findIndex((item) => item.name === option.name) !== -1
                        }
                        className={classes.checkBoxInput}
                      />

                      {option.name}
                    </label>
                    <p className={classes.selectionAmount}>
                      {state.type === "deselection" ? "-" : "+"} {currencySymbol} {option.amount}
                    </p>
                  </div>
                ))}
                {cartItem.options[index].selectedChoices.length === 0 && isSubmitting && (
                  <span className={classes.errorMessage}>You must select at least one option from here</span>
                )}
              </div>
            </Fragment>
          ))}
          <div>
            <div className={classes.priceContainer}>
              <h5 className={classes.menuItemPrice}>
                {currencySymbol} {(menu_item.price + calculateSumOfOption(cartItem.options)) * cartItem.count}
              </h5>
              <div className={classes.incrementButtonContainer}>
                <div className={classes?.addBtn} onClick={handleDecrement}>
                  -
                </div>
                <div className={classes.counterContainer}>
                  <span className={classes.counterText}>{cartItem.count}</span>
                </div>
                <div className={classes?.addBtn} onClick={handleIncrement}>
                  +
                </div>
              </div>
            </div>
            <Button variant={"contained"} size={"md"} className={classes?.addToCartBtn} type="submit">
              Add to Cart {cartItem?.loading && <CircularProgress size={14} />}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
