import { FC, FormEventHandler, useEffect, useRef, useState } from "react";
import { CustomThemeProps, TBlockConfig } from "../../type";
import { useSelector } from "react-redux";
import { Container, TEleganteStore } from "../../components";
import { useGetColor } from "../../hooks";
import { useBlock1Styles } from "./useBlock1Styles";
import { SlHandbag } from "react-icons/sl";
import { RiMenu3Fill } from "react-icons/ri";
import { MdSearch } from "react-icons/md";
import clx from "classnames";
import { useMediaQuery, useTheme } from "@mui/material";
import { useRecordLinkClick } from "../../helper";
import block1 from "../../mappings/block1";

const { uuid: BLOCK_UUID } = block1;

export const EleganteBlock1: FC<TBlockConfig> = ({
  configuration,
  content,
  mode = "view",
  index,
  handleSelect,
  activeElement,
}) => {
  const { restaurant } = useSelector<TEleganteStore, TEleganteStore>((store) => store);
  const mainConfig = useGetColor(configuration as CustomThemeProps, "main");
  const classes = useBlock1Styles(mainConfig as CustomThemeProps);

  const cartItemCount = restaurant?.cart
    ? (restaurant?.cart?.cartItems?.length as number)
    : restaurant?.cartItemCount !== undefined
    ? restaurant?.cartItemCount
    : 0;
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const [openSearch, setOpenSearch] = useState<boolean>(false);
  const theme = useTheme();
  const isWeb = useMediaQuery(theme.breakpoints.up("lg"));
  const key = `blocks.${index}`;
  const [activeLink, setActiveLink] = useState<string>("");
  const [searchValue, setSearchValue] = useState<string>("");
  const [searchPage, setSearchPage] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const recordLinkClick = useRecordLinkClick();

  const handleClick = (text: string, url: string) => {
    mode === "view" && recordLinkClick(text, url, BLOCK_UUID);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value);

  const handleToggleDrawer = () => setOpenDrawer(!openDrawer);

  const handleToggleSearch = () => setOpenSearch(!openSearch);

  const renderNavLinks = () =>
    content?.links?.map((item: { text: string; url: string }, index: number) => (
      <li key={index} className={clx(classes.navLink, activeLink === item.url && "active")}>
        <a href={mode === "view" ? item.url : undefined} onClick={() => handleClick(item.text, item.url ?? "")}>
          {item.text}
        </a>
      </li>
    ));

  const handleNavigateToSearch: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (typeof window === "undefined") return;
    const path = window.location.pathname;
    if (path === "/search") {
      const newUrl =
        window.location.protocol + "//" + window.location.host + window.location.pathname + "?query=" + searchValue;
      window.history.pushState({ path: newUrl }, "", newUrl);
    } else window.location.href = `/search?query=${searchValue}`;
  };

  useEffect(() => {
    if (openSearch && inputRef?.current) inputRef?.current?.focus();
    if (typeof window !== "undefined") {
      document.body.style.overflowY = (openDrawer && !isWeb) || openSearch ? "hidden" : "visible";
      const path = window.location.pathname;
      setActiveLink(path);
      if (path === "/") {
        setActiveLink("");
      }
      if (path === "/search") {
        setSearchPage(true);
      }
    }
  }, [openDrawer, isWeb, openSearch]);

  return (
    <>
      <section className={clx(classes.root, activeElement === key && "active")} onClick={() => handleSelect?.(key)}>
        <Container>
          <nav className={classes.nav}>
            <h4 className={classes.navLogo}>
              <a href={mode === "view" ? "/" : undefined}>{content.text.main}</a>
            </h4>
            <div className={classes.navLinkContainer}>{renderNavLinks()}</div>
            <div className={classes.iconContainer}>
              {!searchPage && <MdSearch className={classes.searchIcon} onClick={handleToggleSearch} />}
              <div className={classes.iconBlockContainer}>
                <a href={mode === "view" ? "/cart" : undefined} className={classes.iconBlock}>
                  <p className={classes.iconBlockText}>Cart</p>
                  <SlHandbag className={classes.icon} />
                  <div className={classes.cartCounterContainer}>
                    <p className={classes.cartCounterText}>{cartItemCount}</p>
                  </div>
                </a>
              </div>
            </div>
            <RiMenu3Fill className={classes.hamburger} onClick={handleToggleDrawer} />
            <form onSubmit={handleNavigateToSearch} className={clx(classes.searchContainer, !openSearch && "hidden")}>
              <input
                className={classes.searchInput}
                value={searchValue}
                onChange={handleChange}
                placeholder={"Search ..."}
                autoFocus={true}
                ref={inputRef}
              />
              <button type="submit" className={classes.searchButton}>
                Search
              </button>
            </form>
          </nav>
          {openSearch && <div className={classes.searchOverlay} onClick={() => setOpenSearch(false)} />}
        </Container>
      </section>

      {!isWeb && mode === "view" && (
        <>
          <ul className={clx(classes.navDrawerContainer, openDrawer && "active")}>{renderNavLinks()}</ul>
          {openDrawer && <div className={classes.overlay} onClick={() => setOpenDrawer(false)} />}
        </>
      )}
    </>
  );
};
