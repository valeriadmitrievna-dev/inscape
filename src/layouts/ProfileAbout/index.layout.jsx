import {
  AboutContent,
  BoxTitle,
  InfoItem,
  UserImage,
  UserItem,
  UserName,
  UsersList,
  InfoBlock,
  InfoItemTitle,
  BoxTitleText,
} from "./index.styled";
import { ReactComponent as ApartmentIcon } from "../../assets/apartment-icon.svg";
import { ReactComponent as RoomIcon } from "../../assets/room-icon.svg";
import { ReactComponent as EducationIcon } from "../../assets/education-icon.svg";
import { Box, DotsButton } from "../../common.styled";
import { Link } from "react-router-dom";
import Image from "./../../components/Image/index";
import { Dropdown, Menu } from "antd";

export default function ProfileAboutLayout({
  t,
  user,
  checking_user,
  handleChangePrivacySetting,
}) {
  return (
    <AboutContent>
      <Box fullwidth={!checking_user?.privacy_settings?.show_roommates}>
        <BoxTitle>
          <BoxTitleText>{t("info")}</BoxTitleText>
          {user?.username === checking_user?.username && (
            <Dropdown
              overlay={() =>
                info_dropdown(
                  t,
                  checking_user?.privacy_settings,
                  handleChangePrivacySetting
                )
              }
              trigger={["click"]}
              placement="bottomRight"
              overlayClassName="custom-dropdown"
            >
              <DotsButton onClick={(e) => e.preventDefault()} />
            </Dropdown>
          )}
        </BoxTitle>
        <InfoBlock>
          <InfoItem>
            <ApartmentIcon />
            <InfoItemTitle>
              {t("dormitory")}: {checking_user?.dormitory}
            </InfoItemTitle>
          </InfoItem>
          {checking_user?.privacy_settings?.show_room && (
            <InfoItem>
              <RoomIcon />
              <InfoItemTitle>
                {t("room")}: {checking_user?.room}
              </InfoItemTitle>
            </InfoItem>
          )}
          {checking_user?.personal_info?.speciality_code &&
            checking_user?.personal_info?.speciality_code && (
              <InfoItem>
                <EducationIcon />
                <InfoItemTitle>
                  Speciality code:{" "}
                  {checking_user?.personal_info?.speciality_code}
                </InfoItemTitle>
              </InfoItem>
            )}
        </InfoBlock>
      </Box>
      {checking_user?.privacy_settings?.show_roommates && (
        <Box>
          <BoxTitle>
            <BoxTitleText>{t("roommates")}</BoxTitleText>
            {user?.username === checking_user?.username &&
              checking_user?.roommates?.length !== 0 && (
                <Dropdown
                  overlay={() =>
                    roomates_dropdown(
                      t,
                      checking_user?.privacy_settings?.show_roommates,
                      handleChangePrivacySetting
                    )
                  }
                  trigger={["click"]}
                  placement="bottomRight"
                  overlayClassName="custom-dropdown"
                >
                  <DotsButton onClick={(e) => e.preventDefault()} />
                </Dropdown>
              )}
          </BoxTitle>
          {checking_user?.roommates.length !== 0 && (
            <UsersList>
              {checking_user?.privacy_settings?.show_roommates ? (
                checking_user?.roommates.map((user, id) => (
                  <Link key={id} to={`/profile/${user?.username}`}>
                    <UserItem>
                      <UserImage>
                        {user?.profile_photo ? (
                          <Image src={user?.profile_photo} />
                        ) : (
                          <span>
                            {user?.full_name
                              ?.split(" ")
                              .map((word) => word[0])
                              .join("")}
                          </span>
                        )}
                      </UserImage>
                      <UserName>{user?.full_name}</UserName>
                    </UserItem>
                  </Link>
                ))
              ) : (
                <p>Count: {checking_user?.roommates.length}</p>
              )}
            </UsersList>
          )}
          {checking_user?.roommates?.length === 0 && <p>{t("no roommates")}</p>}
        </Box>
      )}
    </AboutContent>
  );
}

const info_dropdown = (t, privacy_settings, handleChangePrivacySetting) => (
  <Menu>
    <Menu.Item
      key="0"
      onClick={() => handleChangePrivacySetting("show_room")}
      className="dropdown-menu-item"
    >
      {privacy_settings.show_room ? t("hide room") : t("show room")}
    </Menu.Item>
    <Menu.Item
      key="1"
      className="dropdown-menu-item"
      onClick={() => handleChangePrivacySetting("show_speciality_code")}
    >
      {privacy_settings.show_speciality_code
        ? t("hide speciality code")
        : t("show speciality code")}
    </Menu.Item>
    {!privacy_settings.show_roommates && (
      <Menu.Item
        key="2"
        className="dropdown-menu-item"
        onClick={() => handleChangePrivacySetting("show_roommates")}
      >
        {t("show roommates")}
      </Menu.Item>
    )}
  </Menu>
);

const roomates_dropdown = (t, show_roommates, handleChangePrivacySetting) => (
  <Menu>
    <Menu.Item
      key="0"
      className="dropdown-menu-item"
      onClick={() => handleChangePrivacySetting("show_roommates")}
    >
      {show_roommates ? t("hide roommates") : t("show roommates")}
    </Menu.Item>
  </Menu>
);
