import ProfileLayout from "./index.layout";
import { useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCheckingUser } from "../../redux/slices/rootSlice";
import {
  CheckUserThunk,
  UploadProfileBannerThunk,
  UploadProfilePhotoThunk,
} from "../../redux/thunks/user";
import Particle404 from "./../../components/Particle404/index";
import Loader from "./../../components/Loader/index";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Profile() {
  const { t } = useTranslation();
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const { user, checking_user, loading } = useSelector((state) => state.root);

  // profile avatar update logic
  const [isUploadAvatarVisible, setUploadAvatarVisible] = useState(false);
  const [profileAvatar, setProfileAvatar] = useState([]);
  const showUploadAvatarModal = () => {
    setUploadAvatarVisible(true);
  };
  const handleUploadAvatarOk = () => {
    const formData = new FormData();
    formData.append("file", profileAvatar[0].originFileObj);
    dispatch(UploadProfilePhotoThunk(formData));
    setProfileAvatar([]);
    setUploadAvatarVisible(false);
  };
  const handleUploadAvatarCancel = () => {
    setProfileAvatar([]);
    setUploadAvatarVisible(false);
  };
  const onAvatarChange = ({ fileList: newFileList }) => {
    setProfileAvatar(newFileList);
  };

  // profile banner update logic
  const [isUploadBannerVisible, setUploadBannerVisible] = useState(false);
  const [profileBanner, setProfileBanner] = useState([]);
  const showUploadBannerModal = () => {
    setUploadBannerVisible(true);
  };
  const handleUploadBannerOk = () => {
    const formData = new FormData();
    formData.append("file", profileBanner[0].originFileObj);
    dispatch(UploadProfileBannerThunk(formData));
    setProfileBanner([]);
    setUploadBannerVisible(false);
  };
  const handleUploadBannerCancel = () => {
    setProfileBanner([]);
    setUploadBannerVisible(false);
  };
  const onBannerChange = ({ fileList: newFileList }) => {
    setProfileBanner(newFileList);
  };

  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };

  useEffect(() => {
    const checking_username = location.pathname.replace("/profile/", "");
    if (user?.username && user?.username === checking_username) {
      dispatch(setCheckingUser(user));
    } else if (user?.username && user?.username !== checking_username) {
      dispatch(CheckUserThunk(checking_username));
    }
  }, [location, user]);

  if (loading || !user) {
    return <Loader />;
  }

  if (checking_user) {
    return (
      <ProfileLayout
        t={t}
        user={user}
        checking_user={checking_user}
        history={history}
        showUploadAvatarModal={showUploadAvatarModal}
        isUploadAvatarVisible={isUploadAvatarVisible}
        handleUploadAvatarOk={handleUploadAvatarOk}
        handleUploadAvatarCancel={handleUploadAvatarCancel}
        profileAvatar={profileAvatar}
        onAvatarChange={onAvatarChange}
        showUploadBannerModal={showUploadBannerModal}
        isUploadBannerVisible={isUploadBannerVisible}
        handleUploadBannerOk={handleUploadBannerOk}
        handleUploadBannerCancel={handleUploadBannerCancel}
        profileBanner={profileBanner}
        onBannerChange={onBannerChange}
        onPreview={onPreview}
      />
    );
  }

  if (!checking_user && user && !loading)
    return (
      <Particle404
        title="User not found"
        text="User with that username does not exist"
        button="Okay, go home"
        redirect={`/profile/${user?.username}`}
      />
    );

  // return <Loader />;
}
