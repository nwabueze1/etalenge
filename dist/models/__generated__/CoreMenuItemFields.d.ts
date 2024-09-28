import { CoreMenuFields } from './CoreMenuFields';
import { CoreRelatedMenuItemFields } from './CoreRelatedMenuItems';
import { MediaValue } from '../../helper';
export interface CoreMenuItemFields_menuCategory {
    id: string;
    uuid: string;
    title?: string;
}
export interface CoreMenuItemFields {
    uuid?: string;
    name: string;
    description?: string;
    image: MediaValue;
    options?: string[];
    slug?: string;
    price: number;
    menuCategory?: CoreMenuItemFields_menuCategory;
    menu?: Partial<CoreMenuFields>;
    related_menu_items?: CoreRelatedMenuItemFields[];
}
