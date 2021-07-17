import React from "react";
import ProfileAboutLayout from "./index.layout";
import { useDispatch } from "react-redux";
import { UpdateUserPrivacyThunk } from "./../../redux/thunks/user";
import { useTranslation } from "react-i18next";

export default function ProfileAbout({ user, checking_user }) {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleChangePrivacySetting = (property) => {
    dispatch(
      UpdateUserPrivacyThunk({
        [property]: !user.privacy_settings[property],
      })
    );
  };

  return (
    <ProfileAboutLayout
      t={t}
      user={user}
      checking_user={checking_user}
      handleChangePrivacySetting={handleChangePrivacySetting}
    />
  );
}
