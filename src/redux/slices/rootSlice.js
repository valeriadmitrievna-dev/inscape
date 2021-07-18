import { createSlice } from "@reduxjs/toolkit";
import { SignInThunk, SignUpThunk } from "../thunks/auth";
import {
  CheckUserThunk,
  GetAllUsersInfoThunk,
  GetUserThunk,
  UpdateUserPrivacyThunk,
  UploadProfileBannerThunk,
  UploadProfilePhotoThunk,
} from "../thunks/user";

const rootSlice = createSlice({
  name: "root",
  initialState: {
    user: null,
    checking_user: null,
    all_users: [],
    loading: true,
    isAuth: !!localStorage.getItem("Access Token"),
    error: null,
  },
  reducers: {
    logout(state) {
      state.isAuth = false;
      state.user = null;
      state.checking_user = null;
    },
    setLoading(state, { payload }) {
      state.loading = payload;
    },
    setError(state, { payload }) {
      state.error = payload;
    },
    setCheckingUser(state, { payload }) {
      state.loading = true;
      state.checking_user = payload;
      state.loading = false;
    },
  },
  extraReducers: {
    [SignInThunk.pending]: (state) => {
      state.loading = true;
    },
    [SignInThunk.fulfilled]: (state, { payload }) => {
      if (payload) state.isAuth = true;
      state.loading = false;
    },
    [SignInThunk.rejected]: (state, { error }) => {
      state.error = error.message;
      state.loading = false;
    },
    [SignUpThunk.pending]: (state) => {
      state.loading = true;
    },
    [SignUpThunk.fulfilled]: (state, { payload }) => {
      if (payload) state.isAuth = true;
      state.loading = false;
    },
    [SignUpThunk.rejected]: (state, { error }) => {
      state.error = error.message;
      state.loading = false;
    },
    [GetUserThunk.pending]: (state) => {
      state.loading = true;
    },
    [GetUserThunk.fulfilled]: (state, { payload }) => {
      state.user = payload;
    },
    [GetUserThunk.rejected]: (state, { error }) => {
      state.error = error.message;
      state.loading = false;
      console.log(error);
    },
    [GetAllUsersInfoThunk.pending]: (state) => {
      state.loading = true;
    },
    [GetAllUsersInfoThunk.fulfilled]: (state, { payload }) => {
      state.all_users = payload;
      state.loading = false;
    },
    [GetAllUsersInfoThunk.rejected]: (state, { error }) => {
      state.error = error.message;
      state.loading = false;
    },
    [CheckUserThunk.pending]: (state) => {
      state.loading = true;
    },
    [CheckUserThunk.fulfilled]: (state, { payload }) => {
      state.loading = true;
      state.checking_user = payload;
      if (!state.checking_user.profile_photo) {
        state.checking_user.shortname =
          localStorage.getItem("lang") === "ja"
            ? state.checking_user?.full_name
            : state.checking_user?.full_name
                ?.split(" ")
                .map((word) => word[0])
                .join("");
      }
      state.loading = false;
    },
    [CheckUserThunk.rejected]: (state, { error }) => {
      state.error = error.message;
      state.loading = false;
    },
    [UpdateUserPrivacyThunk.pending]: (state) => {
      state.loading = true;
    },
    [UpdateUserPrivacyThunk.fulfilled]: (state, { payload }) => {
      state.user.privacy_settings[payload.setting] = payload.value;
      state.loading = false;
    },
    [UpdateUserPrivacyThunk.rejected]: (state, { error }) => {
      state.error = error.message;
      state.loading = false;
    },
    [UploadProfilePhotoThunk.pending]: (state) => {
      state.loading = true;
    },
    [UploadProfilePhotoThunk.fulfilled]: (state, { payload }) => {
      state.user.profile_photo = payload.url;
      state.loading = false;
    },
    [UploadProfilePhotoThunk.rejected]: (state, { error }) => {
      state.error = error.message;
      state.loading = false;
    },
    [UploadProfileBannerThunk.pending]: (state) => {
      state.loading = true;
    },
    [UploadProfileBannerThunk.fulfilled]: (state, { payload }) => {
      state.user.banner_photo = payload.url;
      state.loading = false;
    },
    [UploadProfileBannerThunk.rejected]: (state, { error }) => {
      state.error = error.message;
      state.loading = false;
    },
  },
});

const rootReducer = rootSlice.reducer;
export const { logout, setLoading, setError, setCheckingUser } =
  rootSlice.actions;
export default rootReducer;
