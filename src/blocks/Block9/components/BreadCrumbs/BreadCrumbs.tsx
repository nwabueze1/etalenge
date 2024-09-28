import { FC, Fragment } from "react";
import clx from "classnames";
import { FaChevronRight } from "react-icons/fa";
import { BlockProviderProps, useBlockSelector } from "../../../../components";
import { useBreadCrumbtyles } from "./useBreadCrumbStyles";
import { CustomThemeProps } from "../../../../type";

type TBreadCrumbs = {
  crumbs: string[];
};

export const BreadCrumbs: FC<TBreadCrumbs> = ({ crumbs }) => {
  const { mainConfig } = useBlockSelector((store: BlockProviderProps) => store);
  const classes = useBreadCrumbtyles(mainConfig as CustomThemeProps);
  const renderBreadCrumbs = () =>
    crumbs.map((crumb, index) => {
      const hasNextItem = crumbs?.[index + 1];

      return (
        <Fragment key={index}>
          <p className={clx(classes.breadCrumb, hasNextItem && "prev")}>
            <a href={index === 0 ? "/" : undefined} className={classes.breadCrumbLink}>
              {crumb}
            </a>
          </p>
          {hasNextItem && <FaChevronRight className={clx(classes?.chevronRight, hasNextItem && "prev")} />}
        </Fragment>
      );
    });

  return <div className={classes.breadCrumbContainer}>{renderBreadCrumbs()}</div>;
};
