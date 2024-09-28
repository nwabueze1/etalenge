import { CustomThemeProps } from "../../type";
import { FC, useState } from "react";
import { useBlock6Styles } from "./useBlock6Styles";
import clx from "classnames";
import { MdArrowUpward } from "react-icons/md";
import { MediaValue } from "../../helper";
import { createResponsiveImage } from "../../helper/responsiveImage";

type TInstagramCard = {
  config: CustomThemeProps;
  index: number;
  onClick?: (index: number) => void;
  mode?: "view" | "edit";
  image?: MediaValue;
  screenSize?: number;
};
export const InstagramCard: FC<TInstagramCard> = ({ config, index, onClick, mode, image, screenSize }) => {
  const classes = useBlock6Styles(config);
  const [active, setActive] = useState<boolean>(false);

  const handleMouseEnter = () => setActive(true);
  const handleMouseLeave = () => setActive(false);

  return (
    <article
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={clx(classes.imageContainer, `image-${index + 1}`)}
    >
      {createResponsiveImage(image, {
        screenSize,
        className: classes.image,
      })}
      {active && <div className={classes.instagramCardOverlay} />}
      <div className={clx(classes.cardContent, active && "active")} onClick={() => mode === "view" && onClick?.(index)}>
        <p className={classes.cardText}>Preview</p>
        <MdArrowUpward className={classes.arrowUpward} />
      </div>
    </article>
  );
};
