import { Dispatch, SetStateAction } from "react";
import { CoreMenuItemFields } from "../../../models";
export declare const useGetMenuItem: (setLoading: Dispatch<SetStateAction<boolean>>) => (uuid: string, setSsrMenuItem: Dispatch<SetStateAction<CoreMenuItemFields>>) => Promise<void>;
