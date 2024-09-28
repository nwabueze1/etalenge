import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { BlockProvider, Container, Section } from "../../components";
// import { createApolloClient, notify, useRecordFormSubmission } from "../../helper";
import { useGetColor } from "../../hooks";
import block14 from "../../mappings/block14";
import { useBlock14Styles } from "./useBlock14Styles";
// import { getResponsiveFontSize } from "../../helper/getResponsiveFontSize";
import { decodeText } from "../../helper/decodeText";
import { createResponsiveImage } from "../../helper/responsiveImage";
var BLOCK_UUID = block14.uuid;
export var EleganteBlock14 = function (_a) {
    var _b, _c, _d;
    var activeElement = _a.activeElement, index = _a.index, configuration = _a.configuration, content = _a.content, handleSelect = _a.handleSelect, screenSize = _a.screenSize;
    var mainConfig = useGetColor(configuration, "main");
    var backgroundConfig = useGetColor(configuration, "background");
    var buttonConfig = useGetColor(configuration, "button");
    var classes = useBlock14Styles(mainConfig);
    var key = "blocks.".concat(index);
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
    return (_jsx(BlockProvider, { buttonConfig: buttonConfig, mainConfig: mainConfig, block_uuid: BLOCK_UUID, children: _jsx(_Fragment, { children: _jsx(Section, { isActive: activeElement === key, onClick: function () { return handleSelect === null || handleSelect === void 0 ? void 0 : handleSelect(key); }, background: (_b = backgroundConfig === null || backgroundConfig === void 0 ? void 0 : backgroundConfig.colors) === null || _b === void 0 ? void 0 : _b[100], children: _jsx(Container, { children: _jsxs("div", { className: classes.block, children: [_jsxs("div", { children: [_jsxs("header", { className: classes.header, children: [_jsx("h4", { className: classes.heading, children: decodeText((_c = content === null || content === void 0 ? void 0 : content.text) === null || _c === void 0 ? void 0 : _c.heading) }), _jsx("p", { className: classes.subheading, children: decodeText((_d = content === null || content === void 0 ? void 0 : content.text) === null || _d === void 0 ? void 0 : _d.subheading) })] }), _jsx("div", { className: classes.formBlock })] }), createResponsiveImage(content === null || content === void 0 ? void 0 : content.image, {
                                className: classes.image,
                                screenSize: screenSize,
                                styles: {
                                    picture: {
                                        display: "block",
                                    },
                                },
                            })] }) }) }) }) }));
};
