import { Button, Popconfirm, Select } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";
import * as S from "../../auth.styled";
import { NeutralButton } from "../../common.styled";
import ImagePreloader from "./../../components/ImagePreloader/index";
import { UserImage, UserItem, UserName } from "./../ProfileAbout/index.styled";
import Image from "./../../components/Image/index";
import Checkbox from "antd/lib/checkbox/Checkbox";

export default function SignUpStep3({
  inputs,
  handleChange,
  handleChangeDormitory,
  dormitories,
  localLoad,
  handleGetRoommates,
  isRoommatesChecked,
  roommates,
  deleteRoommateCandidate,
  isRoommatesConfirmed,
  setRoommatesConfirmed,
}) {
  const { t } = useTranslation();

  if (inputs?.role === "resident" || inputs?.live_in) {
    return (
      <>
        <S.AuthRow>
          <S.AuthInput>
            <label htmlFor="dormitory">{t("dormitory")}</label>
            <Select
              style={{
                width: "100%",
                background: "#1b2735",
                borderBottom: "1px solid #fff",
                color: "#fff",
              }}
              bordered={false}
              dropdownStyle={{
                background: "#1b2735",
              }}
              id="dormitory"
              onChange={handleChangeDormitory}
              value={inputs?.dormitory || ""}
            >
              {dormitories.map((number, id) => (
                <Select.Option
                  key={id}
                  value={number}
                  className="dark-select-option"
                >
                  {number}
                </Select.Option>
              ))}
            </Select>
          </S.AuthInput>
          <S.AuthInput>
            <label htmlFor="room">{t("room")}</label>
            <input
              onChange={handleChange}
              type="text"
              id="room"
              value={inputs?.room || ""}
            />
          </S.AuthInput>
        </S.AuthRow>
        {!isRoommatesChecked && !inputs?.add_roommates && (
          <NeutralButton
            disabled={!inputs.dormitory || !inputs.room}
            margin="10px 0 0 0"
            onClick={() => {
              if (!isRoommatesChecked && !localLoad) {
                handleGetRoommates();
              }
            }}
          >
            {localLoad ? <ImagePreloader /> : t("find roommates")}
          </NeutralButton>
        )}
        {isRoommatesChecked &&
          roommates.length > 0 &&
          isRoommatesConfirmed !== "no" && (
            <S.RoommatesCandiadtes>
              <p>{t("roommates")}</p>
              {roommates.map((user, id) => (
                <UserItem key={id}>
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
                  <Popconfirm
                    title={t("sure not your roommate")}
                    onConfirm={() => deleteRoommateCandidate(user.username)}
                    okText={t("yes")}
                    cancelText={t("no")}
                  >
                    {!isRoommatesConfirmed && <S.Delete />}
                  </Popconfirm>
                </UserItem>
              ))}
              {!isRoommatesConfirmed && (
                <p>
                  {t("your roommates?")}
                  <Button
                    type="primary"
                    onClick={() => setRoommatesConfirmed("yes")}
                  >
                    {t("yes")}
                  </Button>
                  <Button onClick={() => setRoommatesConfirmed("no")}>
                    {t("no")}
                  </Button>
                </p>
              )}
            </S.RoommatesCandiadtes>
          )}
        {isRoommatesChecked &&
          roommates.length === 0 &&
          isRoommatesConfirmed !== "no" && (
            <p className="no-roommates">{t("no roommates sign up")}</p>
          )}
        {isRoommatesConfirmed !== "yes" && (
          <Checkbox
            id="add_roommates"
            onChange={handleChange}
            checked={inputs?.add_roommates}
          >
            {t("find roommates in db")}
          </Checkbox>
        )}
        <p className="admin-will-verify">
          {t("administration will verify info")}
        </p>
      </>
    );
  }

  if (inputs?.role === "commandant") {
    return (
      <>
        <S.AuthInput>
          <label htmlFor="dormitory">{t("dormitory")}</label>
          <Select
            style={{
              width: "100%",
              background: "#1b2735",
              borderBottom: "1px solid #fff",
              color: "#fff",
            }}
            bordered={false}
            dropdownStyle={{
              background: "#1b2735",
            }}
            id="dormitory"
            onChange={handleChangeDormitory}
            value={inputs?.dormitory || ""}
          >
            {dormitories.map((number, id) => (
              <Select.Option
                key={id}
                value={number}
                className="dark-select-option"
              >
                {number}
              </Select.Option>
            ))}
          </Select>
        </S.AuthInput>
      </>
    );
  }

  return (
    <p>
      Your role does not include living in a dormitory. You can skip this step.
    </p>
  );
}
