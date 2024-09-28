import { CustomThemeProps, TBlockConfig } from "../../type";
import { FC, useRef } from "react";
import { useGetColor } from "../../hooks";
import { useBlock3Styles } from "./useBlock3Styles";
import { Container } from "../../components";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { ClassNameMap } from "@mui/material";
import clx from "classnames";
import { decodeText } from "../../helper/decodeText";
import { createResponsiveImage } from "../../helper/responsiveImage";
// import { Carousel } from "@wazobia-tech/wazcom/dist/core";

type TComment = {
  title: string;
  description: string;
  userName: string;
  userDescription: string;
  image: { src: string };
  user: {
    name: string;
    description: string;
    image: {
      src: string;
    };
  };
  classes: ClassNameMap<string>;
  screenSize?: number;
};

export const EleganteBlock3: FC<TBlockConfig> = ({
  activeElement,
  configuration,
  content,
  index,
  // screenSize,
  handleSelect,
}) => {
  const colorConfig = useGetColor(configuration as CustomThemeProps, "main");
  const backgroundConfig = useGetColor(configuration as CustomThemeProps, "background");
  const classes = useBlock3Styles(colorConfig as CustomThemeProps);
  const key = `blocks.${index}`;
  // const [activeSlide, setActiveSlide] = useState<number>(0);
  // const comments = useMemo(() => content?.comments ?? [], [content?.comments]);
  const carouselRef = useRef<{ next: () => void; prev: () => void }>(null);
  // const theme = useTheme();

  const handleClick = (direction: "prev" | "next") => {
    if (direction === "prev") {
      carouselRef.current?.prev();
    } else if (direction === "next") {
      carouselRef.current?.next();
    }
  };

  // const slides = {
  //   spacing: lg ? 24 : 16,
  //   perView: lg ? 3.4 : md ? 1.7 : 1.2,
  // };

  // const renderComments = () =>
  //   comments?.map((comment: TComment, index: number) => (
  //     <div key={index}>
  //       <Comment
  //         screenSize={screenSize}
  //         {...comment}
  //         user={{ name: comment?.userName, image: comment?.image, description: comment?.userDescription }}
  //         classes={classes}
  //       />
  //     </div>
  //   ));

  return (
    <section
      className={clx(classes.root, activeElement === key && "active")}
      onClick={() => handleSelect?.(key)}
      style={{ background: backgroundConfig?.colors?.[100] }}
    >
      <Container>
        <header className={classes.header}>
          <h4 className={classes.title}>{decodeText(content?.text?.title)}</h4>
          <div className={classes.buttonContainer}>
            <button className={clx(classes.button)} onClick={() => handleClick("prev")}>
              <BsArrowLeft className={classes.chevronIcon} />
            </button>
            <button className={clx(classes.button)} onClick={() => handleClick("next")}>
              <BsArrowRight className={classes.chevronIcon} />
            </button>
          </div>
        </header>
        <div className="slider-container">
          {/* <Carousel spaceBetween={slides?.spacing} itemsToShow={slides?.perView} ref={carouselRef}>
            {renderComments()}
          </Carousel> */}
        </div>
      </Container>
    </section>
  );
};

export const Comment: FC<TComment> = ({ classes, ...props }) => {
  return (
    <div className={classes.testimonialContainer}>
      <h5 className={classes.testimonialTitle}>{decodeText(props?.title)}</h5>
      <p className={classes.testimonialSubtitle}>{decodeText(props?.description)}</p>
      <div className={classes.testimonialDivider} />
      <div className={classes.userContainer}>
        {createResponsiveImage(props?.user?.image, {
          className: classes.userImage,
          screenSize: props?.screenSize,
          styles: {
            picture: {
              display: "block",
            },
          },
        })}
        <div>
          <h6 className={classes.userName}>{decodeText(props?.user?.name)}</h6>
          <p className={classes.userDescription}>{decodeText(props?.user?.description)}</p>
        </div>
      </div>
    </div>
  );
};
