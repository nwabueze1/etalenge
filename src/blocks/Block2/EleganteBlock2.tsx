import clx from "classnames";
import { FC, ReactNode } from "react";
import { FaDiscord, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter, FiYoutube, FiGithub } from "react-icons/fi";
import { Container } from "../../components";
import { useGetColor } from "../../hooks";
import { CustomThemeProps, TBlockConfig } from "../../type";
import { Link, TFooterLink, TSocialMediaButton } from "./type";
import { useBlock2Styles } from "./useBlock2Styles";

export const EleganteBlock2: FC<TBlockConfig> = ({
  activeElement,
  mode = "view",
  content,
  configuration,
  index,
  handleSelect,
}) => {
  const styleConfig = useGetColor(configuration as CustomThemeProps, "main");
  const classes = useBlock2Styles(styleConfig as CustomThemeProps);
  // const formRef = useRef<PluginFormRef>(null);
  const key = `blocks.${index}`;

  type TLink = {
    text: string;
    url: string;
  };
  type TSocialMedia = {
    icon: "facebook" | "instagram" | "youtube" | "twitter" | "linkedin" | "discord" | "whatsapp" | "tiktok" | "github";
    url: string;
  };

  const renderSocialMedia = (icon: TSocialMediaButton, index: number) => {
    const props = { className: classes.icon, key: index };
    let element: ReactNode = null;
    switch (icon?.type?.toLowerCase()) {
      case "facebook":
        element = <FiFacebook {...props} />;
        break;
      case "instagram":
        element = <FiInstagram {...props} />;
        break;
      case "youtube":
        element = <FiYoutube {...props} />;
        break;
      case "twitter":
        element = <FiTwitter {...props} />;
        break;
      case "linkedin":
        element = <FiLinkedin {...props} />;
        break;
      case "discord":
        element = <FaDiscord {...props} />;
        break;
      case "whatsapp":
        element = <FaWhatsapp {...props} />;
        break;
      case "tiktok":
        element = <FaTiktok {...props} />;
        break;
      case "github":
        element = <FiGithub {...props} />;
        break;
      default:
        element = null;
        break;
    }

    return (
      <a href={mode === "edit" ? undefined : icon?.url} className={classes.iconContainer} key={index}>
        {element}
      </a>
    );
  };

  const renderFooterLink = (link: TLink | TSocialMedia, index: number) => {
    let element: ReactNode = null;

    const tag = link as Link;
    element = (
      <a
        href={mode === "view" ? tag.url : undefined}
        className={clx(classes.footerLink, !tag.not_url && "url")}
        key={index}
      >
        {tag.text}
      </a>
    );
    return element;
  };

  const handleSubmit = () => {};
  const renderFooter = () =>
    content?.footerLinks?.map((item: TFooterLink, index: number) => (
      <div key={index}>
        {!item?.links?.[0]?.icon && <h6 className={classes.footerLinkHeader}>{item?.name}</h6>}
        <div className={classes.footerLinkContainer}>
          {item.links?.map(renderFooterLink)}
          {index === content?.footerLinks?.length - 1 && (
            <div className={classes.socialMediaContainer}>{renderSocialMediaButtons()}</div>
          )}
        </div>
      </div>
    ));

  const renderSocialMediaButtons = () => (content?.icons || []).map(renderSocialMedia);

  return (
    <section className={clx(classes.section, activeElement === key && "active")} onClick={() => handleSelect?.(key)}>
      <footer className={classes.root}>
        <Container>
          <div className={classes.block}>
            <header className={classes.footerHeader}>
              <h6 className={classes.footerLogo}>{content?.text?.main}</h6>
              <p className={classes.footerCaption}>{content?.text?.body}</p>
              <div className={classes.formContainer}>
                {
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // <PlugInForm
                  //   apolloClient={{ client: createApolloClient(gatewayUrl ?? "") }}
                  //   ref={formRef}
                  //   form={content?.form}
                  //   form_uuid={content?.form_uuid}
                  //   classNames={pluginFormClasses}
                  //   style={{ flex: 1 }}
                  //   onNotify={handleNotify}
                  //   palette={palette}
                  // />
                }
                <button onClick={handleSubmit} className={classes.submitBtn}>
                  Submit
                </button>
              </div>
            </header>
            {renderFooter()}
          </div>
        </Container>
      </footer>
      <menu className={classes.footerMenu}>
        <Container>
          <div className={classes.footerMenuContent}>
            <p className={classes.footerMenuText}>&copy; Elegante, {new Date().getFullYear()} - All rights reserved.</p>
            <p className={classes.footerMenuText}>Made with Hivedeck</p>
          </div>
        </Container>
      </menu>
    </section>
  );
};
