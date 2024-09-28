import { FC, ChangeEvent, useEffect } from "react";
import { useField, useFormikContext } from "formik";
import { CustomThemeProps } from "../../../../../type";
import { BlockProviderProps, useBlockSelector } from "../../../../../components";
import clx from "classnames";
import { useTextInputStyles } from "./useTextInputStyles";

export const TextInput: FC<{
  name: string;
  label?: string;
}> = ({ name, label }) => {
  const [field, meta] = useField(name);
  const { buttonConfig } = useBlockSelector((store: BlockProviderProps) => store);
  const classes = useTextInputStyles(buttonConfig as CustomThemeProps);
  const hasError = meta.touched && meta.error;
  const context = useFormikContext();

  useEffect(() => {
    return () => {
      context.setFieldTouched(name, false);
      context.setFieldValue(name, '');
    }
  }, [])

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!meta?.touched) context.setFieldTouched(name, true);

    context.setFieldValue(name, event.target.value);
  };

  let parsedLabel = (label ?? "").toLowerCase();
  parsedLabel = parsedLabel.includes("address") ? "address" : parsedLabel;
  parsedLabel = parsedLabel.includes("firstname")
    ? "first name"
    : parsedLabel.includes("lastname")
    ? "last name"
    : parsedLabel;
  parsedLabel = parsedLabel.charAt(0).toUpperCase() + parsedLabel.slice(1).toLowerCase() + " *";

  return (
    <div className={classes.root}>
      <input
        {...field}
        onChange={handleChange}
        placeholder={parsedLabel}
        className={clx(classes.input, hasError && "error")}
      />
      {hasError && <span className={classes.errorMessage}>{meta.error}</span>}
    </div>
  );
};
