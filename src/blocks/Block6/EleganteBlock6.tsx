import { FC, useEffect, useMemo, useRef, useState } from "react";
import { CustomThemeProps, TBlockConfig } from "../../type";
import { ArrowButton, BlockProvider, Container, TEleganteStore } from "../../components";
import { useGetColor } from "../../hooks";
import { useBlock6Styles } from "./useBlock6Styles";
import clx from "classnames";
import { InstagramCard } from "./TInstagramCard";
import { useSelector } from "react-redux";
import { createApolloClient } from "../../helper";
import { useQuery } from "@apollo/client";
import { GET_INSTAGRAM_IMAGES } from "./qgl";
import { create2dMatrixFromStringArray } from "./helper";
import { decodeText } from "../../helper/decodeText";

export const EleganteBlock6: FC<TBlockConfig> = ({
  activeElement,
  content,
  configuration,
  mode = "view",
  index,
  handleSelect,
  screenSize,
}) => {
  const { gatewayUrl } = useSelector<TEleganteStore, TEleganteStore>((state) => state);
  const client = useMemo(() => createApolloClient(gatewayUrl ?? ""), [gatewayUrl]);
  const { data } = useQuery(GET_INSTAGRAM_IMAGES, {
    client,
    variables: {
      uuid: content?.site_uuid,
      platform: "Instagram",
      sociable_type: "site",
    },
  });
  const [_, setInstagramImages] = useState<string[]>([]);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const mainConfig = useGetColor(configuration as CustomThemeProps, "main");
  const backgroundConfig = useGetColor(configuration as CustomThemeProps, "background");
  const btnConfig = useGetColor(configuration as CustomThemeProps, "button");
  const classes = useBlock6Styles(mainConfig as CustomThemeProps);
  const key = `blocks.${index}`;

  const handleOpenModal = () => setOpenModal(true);

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const renderImages = (images: { image: { src: string } }[]) =>
    images.map((data, index) => (
      <InstagramCard
        image={data?.image}
        screenSize={screenSize}
        key={index}
        config={mainConfig as CustomThemeProps}
        onClick={handleOpenModal}
        mode={mode}
        index={index}
      />
    ));

  const renderImageCollections = () =>
    create2dMatrixFromStringArray(content?.images, 0, []).map((item, index) => (
      <div key={index} className={classes.imagesContainer}>
        {renderImages(item)}
      </div>
    ));

  // const renderModalImages = () =>
  //   (content?.images).map((data: { image: { src: string } }, index: number) => (
  //     <img
  //       key={index}
  //       src={data?.image?.src}
  //       alt={"instagram image"}
  //       className={clx(classes.modalImage)}
  //       srcSet={createImageSrcset(data?.image)}
  //     />
  //   ));

  if (typeof window !== "undefined") {
    document.body.style.overflowY = openModal ? "hidden" : "auto";
  }

  useEffect(() => {
    if (data) {
      setInstagramImages(() => {
        const images: string[] = data.getInstagramImages.images;
        return images.filter((image) => {
          const imageFileTypes = ["jpeg", "jpg", "gif", "png"];
          const imageUrl = image.split("?")[0];
          const ext = imageUrl.substring(imageUrl.lastIndexOf(".") + 1);
          return imageFileTypes.includes(ext);
        });
      });
    }
  }, [data]);

  const carouselRef = useRef<{ next: () => void; prev: () => void }>(null);

  const handleClick = (direction: "prev" | "next") => {
    if (direction === "prev") {
      carouselRef.current?.prev();
    } else if (direction === "next") {
      carouselRef.current?.next();
    }
  };

  return (
    <BlockProvider buttonConfig={btnConfig}>
      <section
        className={clx(classes.root, activeElement === key && "active")}
        onClick={() => handleSelect?.(key)}
        style={{ background: backgroundConfig?.colors?.[100] }}
      >
        <Container>
          <h4 className={classes.heading}>{decodeText(content?.text?.heading)}</h4>
          <div className={classes.collections}>{renderImageCollections()}</div>
        </Container>
      </section>
      {openModal && mode === "view" && (
        <div className={classes.modal}>
          <div className={classes.modalContent}>
            <ArrowButton orientation={"left"} className={classes.arrowLeft} onClick={() => handleClick("prev")} />
            <ArrowButton orientation={"right"} className={classes.arrowRight} onClick={() => handleClick("next")} />
          </div>
          <div className={classes.modalOverlay} onClick={handleCloseModal} />
        </div>
      )}
    </BlockProvider>
  );
};
