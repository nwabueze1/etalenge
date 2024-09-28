import * as Yup from "yup";
export declare const deliveryOptions: string[];
export declare const useSchema: () => {
    initialState: Record<string, string>;
    validationSchema: Yup.ObjectSchema<{
        firstname: string;
        lastname: string;
        email: string;
        phone: string;
        "delivery option": string;
        addressline1: string | undefined;
        city: string | undefined;
        state: string | undefined;
        country: string | undefined;
        postcode: string | undefined;
    }, Yup.AnyObject, {
        firstname: undefined;
        lastname: undefined;
        email: undefined;
        phone: undefined;
        "delivery option": undefined;
        addressline1: undefined;
        city: undefined;
        state: undefined;
        country: undefined;
        postcode: undefined;
    }, "">;
    userInfoKeys: ("firstname" | "lastname" | "email" | "phone")[];
    addressKeys: ("addressline1" | "city" | "state" | "country" | "postcode")[];
};
