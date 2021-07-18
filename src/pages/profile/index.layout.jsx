import {
  ProfileHeader,
  Banner,
  ProfileAvatar,
  ProfileImage,
  ProfileName,
  ProfileRole,
} from "./index.styled";
import {
  Main,
  MainContainer,
  UploadFiles,
  PreviewFiles,
  PopoverBodyList,
  PopoverBodyListItem,
  DotsButton,
} from "../../common.styled";
import Image from "../../components/Image";
import { DEFAULT_BANNER } from "../../constants/profile";
import { ReactComponent as UploadIcon } from "../../assets/upload.svg";
import Search from "./../../components/SearchBar/index";
import { Dropdown, Menu } from "antd";
import ProfileAbout from "./../../layouts/ProfileAbout/index";
import { shortname } from "./../../constants/profile";
import Modal from "antd/lib/modal/Modal";
import { Upload } from "antd";
import ImgCrop from "antd-img-crop";

export default function ProfileLayout({
  t,
  loading,
  checking_user,
  user,
  history,

  showUploadAvatarModal,
  isUploadAvatarVisible,
  handleUploadAvatarOk,
  handleUploadAvatarCancel,
  profileAvatar,
  onAvatarChange,

  showUploadBannerModal,
  isUploadBannerVisible,
  handleUploadBannerOk,
  handleUploadBannerCancel,
  profileBanner,
  onBannerChange,

  onPreview,
}) {
  return (
    <Main>
      <Modal
        title={t("update profile photo")}
        visible={isUploadAvatarVisible}
        onOk={handleUploadAvatarOk}
        onCancel={handleUploadAvatarCancel}
        centered
        closable
        wrapClassName="custom-modal"
      >
        <ImgCrop rotate quality={0.8}>
          <Upload
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            listType="picture-card"
            fileList={profileAvatar}
            onChange={onAvatarChange}
            onPreview={onPreview}
          >
            {profileAvatar.length < 1 && <UploadIcon className="upload-icon" />}
          </Upload>
        </ImgCrop>
      </Modal>
      <Modal
        title={t("update profile banner")}
        visible={isUploadBannerVisible}
        onOk={handleUploadBannerOk}
        onCancel={handleUploadBannerCancel}
        centered
        closable
        wrapClassName="custom-modal"
      >
        <ImgCrop rotate aspect={900 / 400} quality={0.8}>
          <Upload
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            listType="picture-card"
            fileList={profileBanner}
            onChange={onBannerChange}
            onPreview={onPreview}
          >
            {profileBanner.length < 1 && <UploadIcon className="upload-icon" />}
          </Upload>
        </ImgCrop>
      </Modal>
      <Search />
      <MainContainer>
        <ProfileHeader banner={checking_user?.banner_photo || DEFAULT_BANNER}>
          <ProfileAvatar>
            <Dropdown
              overlay={() =>
                profile_dropdown(
                  t,
                  user?.username,
                  checking_user.username,
                  history,
                  showUploadAvatarModal,
                  showUploadBannerModal
                )
              }
              trigger={["click"]}
              placement="bottomRight"
              overlayClassName="custom-dropdown"
            >
              <DotsButton onClick={(e) => e.preventDefault()} />
            </Dropdown>
            <ProfileImage withImage={checking_user?.profile_photo || false}>
              {checking_user?.profile_photo ? (
                <Image big src={checking_user?.profile_photo} alt="" />
              ) : (
                shortname(checking_user?.full_name)
              )}
            </ProfileImage>
            <ProfileName>
              {checking_user?.full_name}
              <ProfileRole>
                {!checking_user?.role ? "" : t(checking_user?.role)}
              </ProfileRole>
            </ProfileName>
          </ProfileAvatar>
          <Banner>
            <Image src={checking_user?.banner_photo || DEFAULT_BANNER} />
          </Banner>
        </ProfileHeader>
        <ProfileAbout user={user} checking_user={checking_user} />
      </MainContainer>
    </Main>
  );
}

const profile_dropdown = (
  t,
  username,
  checking_username,
  history,
  showUploadAvatarModal,
  showUploadBannerModal
) => (
  <Menu>
    {username === checking_username && (
      <>
        <Menu.Item key={0} onClick={showUploadAvatarModal}>
          {t("update profile photo")}
        </Menu.Item>
        <Menu.Item key={1} onClick={showUploadBannerModal}>
          {t("update profile banner")}
        </Menu.Item>
        <Menu.Item
          key={2}
          onClick={() => {
            history.push("/settings");
          }}
        >
          {t("settings")}
        </Menu.Item>
      </>
    )}
    {username !== checking_username && (
      <>
        <Menu.Item
          key={0}
          onClick={() => {
            console.log("Add to contacts");
          }}
        >
          {t("add to contacts")}
        </Menu.Item>
        <Menu.Item
          key={1}
          onClick={() => {
            console.log("Report");
          }}
        >
          {t("report")}
        </Menu.Item>
      </>
    )}
  </Menu>
);
