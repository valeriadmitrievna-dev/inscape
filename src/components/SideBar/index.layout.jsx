import {
  Footer,
  LeftSide,
  LeftSideButton,
  Logo,
  SideMenu,
  SideTitle,
  SideWrapper,
  MenuLink,
} from "./index.styled";
import { ReactComponent as MobileMenuIcon } from "../../assets/mobile-menu-lines.svg";
import { ReactComponent as MobileMenuClose } from "../../assets/mobile-menu-close.svg";
import { ReactComponent as EventsIcon } from "../../assets/events-icon.svg";
import { ReactComponent as MessageIcon } from "../../assets/message-icon.svg";
import { ReactComponent as FilesIcon } from "../../assets/files-icon.svg";
import { ReactComponent as HomeIcon } from "../../assets/home-icon.svg";
import { ReactComponent as LogoutIcon } from "../../assets/logout.svg";
import { ReactComponent as PeopleIcon } from "../../assets/people.svg";
import { ReactComponent as SettingsIcon } from "../../assets/settings.svg";
import { ReactComponent as LogoText } from "../../assets/logo_text.svg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function SideBarLayout({
  active,
  leftSide,
  setLeftSide,
  sideBar,
  username,
  handleLogout,
}) {
  const [t] = useTranslation();
  return (
    <LeftSide active={leftSide} ref={sideBar}>
      <LeftSideButton active={leftSide} onClick={() => setLeftSide(!leftSide)}>
        <MobileMenuIcon />
        <MobileMenuClose />
      </LeftSideButton>
      <Logo active={leftSide}>
        <LogoText />
      </Logo>
      <SideWrapper active={leftSide}>
        <SideTitle>{t("menu")}</SideTitle>
        <SideMenu>
          <Link to={`/profile/${username}`}>
            <MenuLink active={active === `profile/${username}`}>
              <HomeIcon />
              {t("profile")}
            </MenuLink>
          </Link>
          <Link to="/news">
            <MenuLink active={active === "news"}>
              <EventsIcon />
              {t("news")}
            </MenuLink>
          </Link>
          <Link to="/chat">
            <MenuLink active={active === "chat"}>
              <MessageIcon />
              {t("chat")}
            </MenuLink>
          </Link>
          <Link to="/files">
            <MenuLink active={active === "files"}>
              <FilesIcon />
              {t("files")}
            </MenuLink>
          </Link>
        </SideMenu>
      </SideWrapper>
      <SideWrapper active={leftSide}>
        <SideMenu>
          <Link to="/contacts">
            <MenuLink active={active === "contacts"}>
              <PeopleIcon />
              {t("contacts")}
            </MenuLink>
          </Link>
          <Link to="/settings">
            <MenuLink active={active === "settings"}>
              <SettingsIcon />
              {t("settings")}
            </MenuLink>
          </Link>
        </SideMenu>
      </SideWrapper>
      <Footer onClick={handleLogout} active={leftSide}>
        <LogoutIcon />
        <span>{t("logout")}</span>
      </Footer>
    </LeftSide>
  );
}
