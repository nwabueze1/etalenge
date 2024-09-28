import { FC, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { BlockProvider, Container, Section, BackButton, TEleganteStore } from "../../components";
import { useGetColor } from "../../hooks";
// import block11 from "../../mappings/block11";
import { CustomThemeProps, TBlockConfig } from "../../type";
import { CartItems, Delivery, EmptyCart, OrderSummary, Payment, OrderDetails } from "./views";
import { CircularProgress } from "@mui/material";
import { useBlock11Styles } from "./useBlock11Styles";
// import { useVerifyGlobalPayments } from "@wazobia-tech/wazcom/dist/core/PaymentUI/globalPayment";
// import Cookies from "universal-cookie";

// const { uuid: BLOCK_UUID } = block11;

export const EleganteBlock11: FC<TBlockConfig> = ({ content, activeElement, configuration, index, handleSelect }) => {
  const { restaurant } = useSelector<TEleganteStore, TEleganteStore>((store) => store);
  const mainConfig = useGetColor(configuration as CustomThemeProps, "main");
  const backgroundConfig = useGetColor(configuration as CustomThemeProps, "background");
  const btnConfig = useGetColor(configuration as CustomThemeProps, "button");
  const [loading] = useState(content?.loading !== undefined ? content?.loading : true);
  const [activeStep, setActiveStep] = useState(1);
  const classes = useBlock11Styles();
  const cart = restaurant?.cart;
  // const site_uuid = cart?.restaurant?.site?.uuid as string;
  const isCartEmpty = !cart?.cartItems || cart?.cartItems?.length === 0;
  // const cookies = new Cookies();
  // const cartCookie = useMemo(() => cookies.get("cart"), []);
  // const verifyGlobalPayments = useVerifyGlobalPayments();

  const key = "blocks." + String(index);

  useEffect(() => {
    handleOrderConfirmation();
  }, []);

  const handleOrderConfirmation = async () => {
    // const queryParams = new URLSearchParams(window.location.search);
    // if (queryParams.get("hivedeck_payment_type") && cartCookie[site_uuid])
    // await verifyGlobalPayments(
    //   BLOCK_UUID,
    //   () => {
    //     setLoading(false);
    //     setActiveStep(4);
    //   },
    //   () => {
    //     window.history.pushState({}, "", "/cart");
    //     setLoading(false);
    //   }
    // );
    // else setLoading(false);
  };

  const handleGoBack = () => {
    if (activeStep === 1) return;

    setActiveStep(activeStep - 1);
  };

  const renderCheckoutStep = () => {
    switch (activeStep) {
      case 1:
        return (
          <OrderSummary
            onProceedToCheckout={() => {
              setActiveStep(2);
            }}
          />
        );
      case 2:
        return (
          <Delivery
            onProceedToPayment={() => {
              setActiveStep(3);
            }}
          />
        );
      case 3:
        return (
          <Payment
            onSuccess={() => {
              setActiveStep(4);
            }}
          />
        );
      case 4:
        return <OrderDetails />;
      default:
        return <div />;
    }
  };

  if (loading)
    return (
      <div className={classes.cartLoaderContainer} style={{ color: mainConfig?.colors?.[100] }}>
        <CircularProgress size="20px" color="inherit" />
      </div>
    );

  return (
    <BlockProvider mainConfig={mainConfig} buttonConfig={btnConfig}>
      <Section
        isActive={activeElement === key}
        onClick={() => handleSelect?.(key)}
        background={backgroundConfig?.colors?.[100]}
      >
        <Container>
          {activeStep > 1 && <BackButton className={classes.cartBackButton} onClick={handleGoBack} />}
          {isCartEmpty ? (
            <EmptyCart />
          ) : (
            <div className={classes.root}>
              <div className={classes.cartItems}>
                <CartItems />
              </div>
              <div className={classes.cartSidebar}>{renderCheckoutStep()}</div>
            </div>
          )}
        </Container>
      </Section>
    </BlockProvider>
  );
};
