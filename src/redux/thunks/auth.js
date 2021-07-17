import { createAsyncThunk } from "@reduxjs/toolkit";
import { SignInService, SignUpService } from "../../services/auth";

export const SignInThunk = createAsyncThunk("root/signIn", async (body) => {
  const { data } = await SignInService(body);
  if (data.error) throw new Error(data.error);
  if (data.token) {
    localStorage.setItem("Access Token", data.token);
    return data.token;
  }
});

export const SignUpThunk = createAsyncThunk("root/signUp", async (body) => {
  const { data } = await SignUpService(body);
  if (data.error) throw new Error(data.error);
  if (data.token) {
    localStorage.setItem("Access Token", data.token);
    return data.token;
  }
});