import React, { useState } from "react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../../redux/slices/rootSlice";
import SettingsLayout from "./index.layout";
import useWindowSize from "./../../utils/hooks/use-window-size";
import SettingsMobile from "./index.mobile";

export default function Settings() {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { loading, user } = useSelector((store) => store.root);
  const [activeTab, setActiveTab] = useState("common");
  const { width } = useWindowSize();

  useEffect(() => {
    dispatch(setLoading(false));
  }, [user]);

  if (width > 710)
    return (
      <SettingsLayout
        t={t}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        loading={loading}
      />
    );

  return <SettingsMobile t={t} loading={loading} />;
}
