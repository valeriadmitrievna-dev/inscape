import API from "./api";

export const SignInService = async (body) => {
  try {
    const response = await API.post("/user/signin", body);
    return response;
  } catch (error) {
    return error.response;
  }
};

export const SignUpService = async (body) => {
  try {
    const response = await API.post("/user/signup", body);
    return response;
  } catch (error) {
    return error.response;
  }
};

export const SignUpGetRoommatesService = async (body) => {
  try {
    const response = await API.post("/user/signup/get_roommates", body);
    return response;
  } catch (error) {
    return error.response;
  }
};
