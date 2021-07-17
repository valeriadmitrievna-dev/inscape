import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  CheckUserService,
  GetAllUsersInfoService,
  GetUserService,
  UploadProfileBannerService,
  UploadProfilePhotoService,
} from "../../services/user";
import { UpdateUserPrivacyService } from "./../../services/user";

export const GetUserThunk = createAsyncThunk("root/getUser", async () => {
  const response = await GetUserService();
  const { data } = await response;
  if (data.error) throw new Error(data.error);
  return data;
});

export const CheckUserThunk = createAsyncThunk(
  "root/checkUser",
  async (username) => {
    const { data } = await CheckUserService(username);
    if (data.error) throw new Error(data.error);
    return data;
  }
);

export const GetAllUsersInfoThunk = createAsyncThunk(
  "root/getAllUsers",
  async () => {
    const { data } = await GetAllUsersInfoService();
    if (data.error) throw new Error(data.error);
    return data;
  }
);

export const UpdateUserPrivacyThunk = createAsyncThunk(
  "user/updatePrivacy",
  async (body) => {
    const { data } = await UpdateUserPrivacyService(body);
    if (data.error) throw new Error(data.error);
    return data;
  }
);

export const UploadProfilePhotoThunk = createAsyncThunk(
  "user/uploadProfilePhoto",
  async (formdata) => {
    const { data } = await UploadProfilePhotoService(formdata);
    if (data.error) throw new Error(data.error);
    return data;
  }
);

export const UploadProfileBannerThunk = createAsyncThunk(
  "user/uploadProfileBanner",
  async (formdata) => {
    const { data } = await UploadProfileBannerService(formdata);
    if (data.error) throw new Error(data.error);
    return data;
  }
);