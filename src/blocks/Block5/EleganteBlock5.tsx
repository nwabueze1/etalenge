import { FC, useEffect, useState } from "react";
import { CustomThemeProps, TBlockConfig } from "../../type";
import clx from "classnames";
import { useBlock5Styles } from "./useBlock5Styles";
import { useGetColor } from "../../hooks";
import { BlockProvider, Button, Container } from "../../components";
import { MdOutlineArrowForward, MdOutlineArrowBack } from "react-icons/md";
import block5 from "../../mappings/block5";
import { decodeText } from "@wazobia-tech/wazcom/dist/utilities";
import { createResponsiveImage } from "../../helper/responsiveImage";

const { uuid: BLOCK_UUID } = block5;

type TBlock = {
  title: string;
  image: {
    src: string;
  };
  button: { text: string; url: string };
};

export const EleganteBlock5: FC<TBlockConfig> = ({
  activeElement,
  mode = "view",
  content,
  configuration,
  index,
  handleSelect,
  screenSize,
}) => {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const mainConfig = useGetColor(configuration as CustomThemeProps, "main");
  const backgroundConfig = useGetColor(configuration as CustomThemeProps, "background");
  const btnConfig = useGetColor(configuration as CustomThemeProps, "button");
  const classes = useBlock5Styles(mainConfig as CustomThemeProps);
  const btnClasses = useBlock5Styles(btnConfig as CustomThemeProps);
  const key = `blocks.${index}`;
  const sizeOfBlocks = (content?.blocks || []).length;

  const handleNext = () =>
    setActiveSlide((prev) => {
      if (sizeOfBlocks === 0) return prev;
      if (prev === sizeOfBlocks - 1) return 0;
      return prev + 1;
    });

  const handlePrev = () =>
    setActiveSlide((prev) => {
      if (sizeOfBlocks === 0) return prev;
      if (prev === 0) return sizeOfBlocks - 1;
      return prev - 1;
    });

  const renderContent = () => {
    return content?.blocks?.map((block: { title: string; button: { text: string; url: string } }, index: number) => (
      <header className={clx(classes.header, activeSlide === index && "active")}>
        <h1 className={classes.heading}>{decodeText(block?.title)}</h1>
        <Button size={"md"} variant={"contained"} mode={mode} href={block?.button?.url}>
          {block?.button?.text}
        </Button>
      </header>
    ));
  };

  const renderTracks = () =>
    content?.blocks?.map((_: TBlock, index: number) => (
      <button
        key={index}
        className={clx(btnClasses.trackBtn, activeSlide === index && "active")}
        onClick={() => setActiveSlide(index)}
      />
    ));

  const renderNextAndPrevBtns = () =>
    Array(2)
      .fill(0)
      .map((_: number, index: number) => {
        const isNext = index === 1;
        const clickAction = isNext ? handleNext : handlePrev;

        return (
          <button onClick={clickAction} key={index} className={clx(btnClasses.nextPrevBtn, isNext && "next")}>
            {isNext ? <MdOutlineArrowForward className="icon" /> : <MdOutlineArrowBack className="icon" />}
          </button>
        );
      });

  const renderCarouselImages = () =>
    content?.blocks?.map((block: { image: { src: string; alt: string } }, index: number) =>
      createResponsiveImage(block?.image, {
        className: clx(classes.image, activeSlide === index && "active"),
        screenSize,
      })
    );

  useEffect(() => {
    //set interval for autoscroll
    const interval = setInterval(() => {
      setActiveSlide((prevState) => {
        if (prevState === (content?.blocks || []).length - 1) return 0;
        else return prevState + 1;
      });
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [activeSlide, content?.blocks]);

  useEffect(() => {
    if (mode === "edit") setActiveSlide(0); //reset the active slide when a block is removed in the editor
  }, [content?.blocks?.length]);

  return (
    <BlockProvider mainConfig={mainConfig} buttonConfig={btnConfig} block_uuid={BLOCK_UUID}>
      <section
        className={clx(classes.baseRoot, activeElement === key && "active")}
        onClick={() => handleSelect?.(key)}
        style={{ background: backgroundConfig?.colors?.[100] }}
      >
        <div className={clx(classes.root)}>
          <Container>
            <div className={clx(classes.root, "content")}>
              <div className={classes.blockRoot}>
                {renderContent()}
                {content?.blocks?.length > 1 && (
                  <div className={classes.actionContainer}>
                    <div className={classes.trackContainer}>{renderTracks()}</div>
                    <div className={classes.nextPrevBtnContainer}>{renderNextAndPrevBtns()}</div>
                  </div>
                )}
              </div>
            </div>
          </Container>
          {renderCarouselImages()}
          <div className={classes.overlay} />
        </div>
      </section>
    </BlockProvider>
  );
};
