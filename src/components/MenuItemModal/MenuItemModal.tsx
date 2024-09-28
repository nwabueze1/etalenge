import { FC } from "react";
import { BlockProviderProps, useBlockSelector } from "../BlockProvider";
import { CustomThemeProps } from "../../type";
import { CoreMenuItemFields } from "../../models";
import { MdClose } from "react-icons/md";
import { useMenuItemPreviewModal } from "./useMenuItemPreviewModal";
import { MenuItem } from "../../blocks/Block10/MenuItem";

type TMenuItemModalProps = {
  menuItem: CoreMenuItemFields;
  open: boolean;
  onClose: () => void;
};
export const MenuItemModal: FC<TMenuItemModalProps> = ({ menuItem, open, onClose }) => {
  const { mainConfig } = useBlockSelector((store: BlockProviderProps) => store);
  const classes = useMenuItemPreviewModal(mainConfig as CustomThemeProps);

  if (typeof window !== "undefined") {
    document.body.style.overflowY = open ? "hidden" : "auto";
  }

  if (!open) return null;

  return (
    <div className={classes.modal}>
      <div className={classes.overlay} />
      <div className={classes.modalContainer}>
        <MdClose className={classes.closeButton} onClick={onClose} />
        <MenuItem menu_item={menuItem} onItemAddedToCart={() => onClose?.()} />
      </div>
    </div>
  );
};
