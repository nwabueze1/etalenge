var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useBlockSelector } from "../../../../components";
import { useDeliveryStyles } from "./useDelivery";
import { useSelector } from "react-redux";
import { capitalizeFirstChar } from "../../../../utils";
import clx from "classnames";
import { deliveryOptions, useSchema } from "./schema";
import { Form, Formik } from "formik";
import { TextInput } from "./TextInput";
import { CircularProgress } from "@mui/material";
import { useCreateAddress, useUpdateGuest } from "./hooks";
export var Delivery = function (_a) {
    var onProceedToPayment = _a.onProceedToPayment;
    var _b = useBlockSelector(function (store) { return store; }), mainConfig = _b.mainConfig, buttonConfig = _b.buttonConfig;
    var classes = useDeliveryStyles(mainConfig);
    var buttonClass = useDeliveryStyles(buttonConfig);
    var _c = useSelector(function (store) { return store; }), loading = _c.loading, networkOperation = _c.networkOperation;
    var createAddress = useCreateAddress();
    var updateGuest = useUpdateGuest();
    var _d = useSchema(), validationSchema = _d.validationSchema, initialState = _d.initialState, addressKeys = _d.addressKeys, userInfoKeys = _d.userInfoKeys;
    var handleSubmit = function (values, _) { return __awaiter(void 0, void 0, void 0, function () {
        var guest, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!((values === null || values === void 0 ? void 0 : values["delivery option"]) === "dispatch")) return [3 /*break*/, 4];
                    return [4 /*yield*/, updateGuest({
                            lastname: values.lastname,
                            email: values.email,
                            firstname: values.firstname,
                            phone: values === null || values === void 0 ? void 0 : values.phone,
                        }, false)];
                case 1:
                    guest = _b.sent();
                    _a = guest;
                    if (!_a) return [3 /*break*/, 3];
                    return [4 /*yield*/, createAddress({
                            city: values.city,
                            country: values.country,
                            addressline1: values.addressline1,
                            postcode: values.postcode,
                            state: values.state,
                        }, guest, function () {
                            onProceedToPayment();
                        })];
                case 2:
                    _a = (_b.sent());
                    _b.label = 3;
                case 3:
                    _a;
                    return [3 /*break*/, 5];
                case 4:
                    updateGuest({
                        lastname: values.lastname,
                        email: values.email,
                        firstname: values.firstname,
                        phone: values === null || values === void 0 ? void 0 : values.phone,
                    }, true, function () {
                        onProceedToPayment();
                    });
                    _b.label = 5;
                case 5: return [2 /*return*/];
            }
        });
    }); };
    var renderPickUpButtons = function (props) {
        return deliveryOptions.map(function (option, index) {
            var _a;
            return (_jsx("div", { onClick: function () { return props.setFieldValue("delivery option", option); }, className: clx(buttonClass.pickUpButton, ((_a = props === null || props === void 0 ? void 0 : props.values) === null || _a === void 0 ? void 0 : _a["delivery option"]) === option && "active"), children: option }, index));
        });
    };
    var renderPickUpInputs = function () {
        return userInfoKeys.map(function (name, index) { return _jsx(TextInput, { name: name, label: capitalizeFirstChar(name) }, index); });
    };
    var renderDeliveryInputs = function () {
        return addressKeys.map(function (name, index) { return _jsx(TextInput, { name: name, label: capitalizeFirstChar(name) }, index); });
    };
    return (_jsxs("div", { children: [_jsx("header", { className: classes.header, children: _jsx("h3", { className: classes.heading, children: "Delivery Options" }) }), _jsx("div", { className: classes.block, children: _jsx(Formik, { initialValues: initialState, validationSchema: validationSchema, onSubmit: handleSubmit, children: function (props) {
                        var _a;
                        return (_jsx(Form, { children: _jsxs("div", { className: classes.inputContainer, children: [_jsx("div", { className: classes.pickupButtonContainer, children: renderPickUpButtons(props) }), renderPickUpInputs(), 
                                    //check if selected delivery is dispatch (by address)
                                    ((_a = props === null || props === void 0 ? void 0 : props.values) === null || _a === void 0 ? void 0 : _a["delivery option"]) === deliveryOptions[1] && renderDeliveryInputs(), _jsxs("button", { className: buttonClass.submitButton, type: "submit", children: ["Proceed to payment", " ", loading &&
                                                (networkOperation === "set.delivery.pickup" || networkOperation === "set.delivery.dispatch") && (_jsx(CircularProgress, { size: 14, className: classes.loader }))] })] }) }));
                    } }) })] }));
};
