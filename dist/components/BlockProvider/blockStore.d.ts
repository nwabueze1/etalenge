type mainAction = {
    type: "GET_MAIN_PROPS";
    payload: string[];
};
type blockAction = mainAction;
export type blockState = {
    main: {
        colors?: Record<string, string>;
        fonts?: {
            heading: string;
            body: string;
            misc?: string;
        };
    };
};
export declare const blockReducer: (state: blockState, action: blockAction) => blockState | {
    main: string[];
};
export declare const blockStore: (mainConfig: {
    [key: string]: string;
}, buttonConfig: {
    [key: string]: string;
}, gatewayUrl?: string, block_uuid?: string) => import("redux").Store<{
    mainConfig: {
        [key: string]: string;
    };
    buttonConfig: {
        [key: string]: string;
    };
    gatewayUrl: string | undefined;
    block_uuid: string | undefined;
}, import("redux").Action<any>>;
export declare const blockContext: import("react").Context<{}>;
export declare const useBlockSelector: import("react-redux/es/hooks/useSelector").UseSelector;
export {};
