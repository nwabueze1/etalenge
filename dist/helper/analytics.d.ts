declare global {
    interface Window {
        dataLayer: Record<string, any>[];
    }
}
export declare const useRecordMenuItemView: () => (menu_item_uuid: string) => void;
export declare const useRecordPostView: () => (post_uuid: string) => void;
export declare const useRecordLinkClick: () => (text: string, url: string, block_uuid?: string) => void;
export declare const useRecordAddToCart: () => (menu_item_uuid: string, block_uuid: string) => void;
export declare const useRecordFormSubmission: () => (form_uuid: string, block_uuid: string) => void;
export declare const useRecordCartAction: () => (block_uuid: string, cart_action: string) => void;
