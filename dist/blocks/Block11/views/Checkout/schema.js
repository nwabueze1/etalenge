import * as Yup from "yup";
import { useSelector } from "react-redux";
var stringSchema = Yup.string().required();
var addressSchema = Yup.string().when("delivery option", {
    is: "dispatch",
    then: function (schema1) { return schema1.required(); },
});
export var deliveryOptions = ["pickup", "dispatch"];
export var useSchema = function () {
    var _a;
    var restaurant = useSelector(function (store) { return store; }).restaurant;
    var guest = (_a = restaurant === null || restaurant === void 0 ? void 0 : restaurant.cart) === null || _a === void 0 ? void 0 : _a.guest;
    var userInfoKeys = ["firstname", "lastname", "email", "phone"];
    var addressKeys = [
        "addressline1",
        "postcode",
        "city",
        "state",
        "country",
    ];
    var phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;
    var schema = Yup.object().shape({
        firstname: Yup.string().required("First name is a required field"),
        lastname: Yup.string().required("Last name is a required field"),
        email: Yup.string()
            .required("Email is a required field")
            .email("Must be a valid email address"),
        phone: Yup.string()
            .required("Phone number is required")
            .matches(phoneRegExp, "Invalid phone number"),
        "delivery option": stringSchema,
        addressline1: addressSchema.label("Address"),
        city: addressSchema.label("City"),
        state: addressSchema.label("State"),
        country: addressSchema.label("Country"),
        postcode: addressSchema.label("Post code"),
    });
    var initialState = function () {
        var _a;
        var state = {};
        userInfoKeys.forEach(function (key) { var _a; return (state[key] = (_a = guest === null || guest === void 0 ? void 0 : guest[key]) !== null && _a !== void 0 ? _a : ""); });
        addressKeys.forEach(function (key) { var _a, _b; return (state[key] = (_b = (_a = guest === null || guest === void 0 ? void 0 : guest.address) === null || _a === void 0 ? void 0 : _a[key]) !== null && _b !== void 0 ? _b : ""); });
        state["payment method"] = "";
        state["delivery option"] = ((_a = guest === null || guest === void 0 ? void 0 : guest.address) === null || _a === void 0 ? void 0 : _a.uuid) ? "dispatch" : "pickup";
        return state;
    };
    return {
        initialState: initialState(),
        validationSchema: schema,
        userInfoKeys: userInfoKeys,
        addressKeys: addressKeys,
    };
};
