import { FC, ReactNode } from "react";
import { BlockProviderProps, useBlockSelector } from "../../../../components";
import { useCategoryDrawerStyles } from "./useCategoryDrawerStyles";
import { CustomThemeProps } from "../../../../type";
import clx from "classnames";
import { MdClose } from "react-icons/md";

type TCategoryDrawer = {
  open: boolean;
  onClose?: () => void;
  children?: ReactNode;
};

export const CategoryDrawer: FC<TCategoryDrawer> = ({ open, onClose, children }) => {
  const { mainConfig } = useBlockSelector((store: BlockProviderProps) => store);
  const classes = useCategoryDrawerStyles(mainConfig as CustomThemeProps);

  return (
    <div className={clx(classes.categoryDrawer, open && "active")}>
      <div className={classes.drawerBlock}>
        <MdClose className={classes.closeDrawerBtn} onClick={onClose} />
        {children}
      </div>
    </div>
  );
};
