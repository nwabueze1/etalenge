import { FC } from "react";
import { BlockProviderProps, TEleganteStore, useBlockSelector } from "../../../../components";
import { useDeliveryStyles } from "./useDelivery";
import { useSelector } from "react-redux";
import { CustomThemeProps } from "../../../../type";
import { capitalizeFirstChar } from "../../../../utils";
import clx from "classnames";
import { deliveryOptions, useSchema } from "./schema";
import { Form, Formik, FormikHelpers, FormikProps } from "formik";
import { TextInput } from "./TextInput";
import { CircularProgress } from "@mui/material";
import { useCreateAddress, useUpdateGuest } from "./hooks";
import { DeliveryProps } from "./types";

export const Delivery: FC<DeliveryProps> = ({ onProceedToPayment }) => {
  const { mainConfig, buttonConfig } = useBlockSelector((store: BlockProviderProps) => store);
  const classes = useDeliveryStyles(mainConfig as CustomThemeProps);
  const buttonClass = useDeliveryStyles(buttonConfig as CustomThemeProps);
  const { loading, networkOperation } = useSelector((store: TEleganteStore) => store);
  const createAddress = useCreateAddress();
  const updateGuest = useUpdateGuest();
  const { validationSchema, initialState, addressKeys, userInfoKeys } = useSchema();

  const handleSubmit = async (values: Record<string, string>, _: FormikHelpers<Record<string, string>>) => {
    //place an order using the values
    //check if the cart.guest has address
    //if not, create a new address
    if (values?.["delivery option"] === "dispatch") {
      const guest = await updateGuest(
        {
          lastname: values.lastname,
          email: values.email,
          firstname: values.firstname,
          phone: values?.phone,
        },
        false
      );
      guest &&
        (await createAddress(
          {
            city: values.city,
            country: values.country,
            addressline1: values.addressline1,
            postcode: values.postcode,
            state: values.state,
          },
          guest,
          () => {
            onProceedToPayment();
          }
        ));
    } else {
      updateGuest(
        {
          lastname: values.lastname,
          email: values.email,
          firstname: values.firstname,
          phone: values?.phone,
        },
        true,
        () => {
          onProceedToPayment();
        }
      );
    }
  };

  const renderPickUpButtons = (props: FormikProps<Record<string, string>>) =>
    deliveryOptions.map((option, index) => (
      <div
        key={index}
        onClick={() => props.setFieldValue("delivery option", option)}
        className={clx(buttonClass.pickUpButton, props?.values?.["delivery option"] === option && "active")}
      >
        {option}
      </div>
    ));

  const renderPickUpInputs = () =>
    userInfoKeys.map((name, index) => <TextInput name={name} key={index} label={capitalizeFirstChar(name)} />);

  const renderDeliveryInputs = () =>
    addressKeys.map((name, index) => <TextInput name={name} key={index} label={capitalizeFirstChar(name)} />);

  return (
    <div>
      <header className={classes.header}>
        <h3 className={classes.heading}>Delivery Options</h3>
      </header>
      <div className={classes.block}>
        <Formik initialValues={initialState} validationSchema={validationSchema} onSubmit={handleSubmit}>
          {(props) => (
            <Form>
              <div className={classes.inputContainer}>
                <div className={classes.pickupButtonContainer}>{renderPickUpButtons(props)}</div>
                {renderPickUpInputs()}
                {
                  //check if selected delivery is dispatch (by address)
                  props?.values?.["delivery option"] === deliveryOptions[1] && renderDeliveryInputs()
                }
                <button className={buttonClass.submitButton} type="submit">
                  Proceed to payment{" "}
                  {loading &&
                    (networkOperation === "set.delivery.pickup" || networkOperation === "set.delivery.dispatch") && (
                      <CircularProgress size={14} className={classes.loader} />
                    )}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
