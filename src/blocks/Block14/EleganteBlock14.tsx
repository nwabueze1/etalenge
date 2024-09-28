// import {
//   PlugInForm,
//   PluginFormClassNamesPropsType,
//   PluginFormRef,
//   FormPallette,
// } from "@wazobia-tech/wazcom/dist/io/PluginForm";
import { FC } from "react";
import { BlockProvider, Container, Section } from "../../components";
// import { createApolloClient, notify, useRecordFormSubmission } from "../../helper";
import { useGetColor } from "../../hooks";
import block14 from "../../mappings/block14";
import { CustomThemeProps, TBlockConfig } from "../../type";
import { useBlock14Styles } from "./useBlock14Styles";
// import { getResponsiveFontSize } from "../../helper/getResponsiveFontSize";
import { decodeText } from "../../helper/decodeText";
import { createResponsiveImage } from "../../helper/responsiveImage";

const { uuid: BLOCK_UUID } = block14;

export const EleganteBlock14: FC<TBlockConfig> = ({
  activeElement,
  index,
  configuration,
  content,
  handleSelect,
  screenSize,
}) => {
  const mainConfig = useGetColor(configuration as CustomThemeProps, "main");
  const backgroundConfig = useGetColor(configuration as CustomThemeProps, "background");
  const buttonConfig = useGetColor(configuration as CustomThemeProps, "button");
  const classes = useBlock14Styles(mainConfig as CustomThemeProps);
  const key = `blocks.${index}`;
  // const formRef = useRef<PluginFormRef>(null);
  // const { gatewayUrl } = useSelector<TEleganteStore, TEleganteStore>((store) => store);
  // const [loading, setLoading] = useState<boolean>(false);
  // const recordFormSubmission = useRecordFormSubmission();
  // const theme = useTheme();

  // const palette = {
  //   colors: {
  //     main: mainConfig?.colors?.[300],
  //     hover: mainConfig?.colors?.[400],
  //     error: mainConfig?.colors?.[500],
  //   },
  //   typography: {
  //     input: {
  //       fontFamily: mainConfig?.fonts?.body,
  //       fontSize: getResponsiveFontSize(theme.typography.fontSize - 2, theme.typography.fontSize),
  //     },
  //     label: {
  //       fontFamily: mainConfig?.fonts?.body,
  //       fontSize: getResponsiveFontSize(theme.typography.fontSize - 2, theme.typography.fontSize),
  //     },
  //   },
  // };

  // const formClassNames = {
  //   textArea: {
  //     input: clx(classes.textArea, classes.textInput, "textarea"),
  //     inputContainer: classes.textAreaContainer,
  //   },
  //   textField: {
  //     input: classes.textInput,
  //     inputContainer: classes.textFieldContainer,
  //     label: classes.inputLabel,
  //   },
  //   phoneNumberInput: {
  //     phoneNumberInput: "phone",
  //     buttonClass: "button",
  //     phoneNumberInputContainer: clx(classes.textFieldContainer, "phone"),
  //     phoneNumberInputRoot: classes.phoneNumberInputContainer,
  //     dropdownClass: "dropdown",
  //     label: classes.inputLabel,
  //   },
  //   imageUpload: {
  //     container: clx(classes.imageUploadContainer, "image-upload"),
  //   },
  // };

  // const handleNotify = (status: "success" | "error" | "warning" | "info", text: string) => {
  //   notify(status, text);

  //   if (status === "success") recordFormSubmission(content?.form_uuid, BLOCK_UUID);
  // };

  // const submitButton = (
  //   <Button
  //     variant={"contained"}
  //     className={classes.submitButton}
  //     size={"md"}
  //     type={"submit"}
  //   >
  //     {loading ? <CircularProgress size={16} color={"inherit"} /> : "Submit"}
  //   </Button>
  // );

  return (
    <BlockProvider buttonConfig={buttonConfig} mainConfig={mainConfig} block_uuid={BLOCK_UUID}>
      <>
        <Section
          isActive={activeElement === key}
          onClick={() => handleSelect?.(key)}
          background={backgroundConfig?.colors?.[100]}
        >
          <Container>
            <div className={classes.block}>
              <div>
                <header className={classes.header}>
                  <h4 className={classes.heading}>{decodeText(content?.text?.heading)}</h4>
                  <p className={classes.subheading}>{decodeText(content?.text?.subheading)}</p>
                </header>
                <div className={classes.formBlock}>
                  {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    // <PlugInForm
                    //   apolloClient={{ client: createApolloClient(gatewayUrl ?? "") }}
                    //   className={classes.formContainer}
                    //   form={content?.form}
                    //   form_uuid={content?.form_uuid}
                    //   classNames={formClassNames}
                    //   submitButton={submitButton}
                    //   setLoading={setLoading}
                    //   onNotify={handleNotify}
                    //   palette={palette}
                    // />
                  }
                </div>
              </div>
              {createResponsiveImage(content?.image, {
                className: classes.image,
                screenSize,
                styles: {
                  picture: {
                    display: "block",
                  },
                },
              })}
            </div>
          </Container>
        </Section>
      </>
    </BlockProvider>
  );
};
