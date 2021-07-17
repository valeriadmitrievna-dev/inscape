import API from "./api";

export const GetUserService = async () => {
  try {
    const response = await API.get("/user");
    return response;
  } catch (error) {
    return error.response;
  }
};

export const CheckUserService = async (username) => {
  try {
    const response = await API.get(`/user/check/${username}`);
    return response;
  } catch (error) {
    return error.response;
  }
};

export const GetAllUsersInfoService = async () => {
  try {
    const response = await API.get("/user/all");
    return response;
  } catch (error) {
    return error.response;
  }
};

export const UpdateUserPrivacyService = async (body) => {
  try {
    const response = await API.put("user/update/privacy", body);
    return response;
  } catch (error) {
    return error.response;
  }
};

export const UploadProfilePhotoService = async (formdata) => {
  try {
    const response = await API.put("/user/upload/profile-photo", formdata, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const UploadProfileBannerService = async (formdata) => {
  try {
    const response = await API.put("/user/upload/user-banner", formdata, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response;
  } catch (error) {
    return error.response;
  }
};
