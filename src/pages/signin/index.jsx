import React, { useEffect, useState } from "react";
import SignInLayout from "./index.layout";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { SignInThunk } from "./../../redux/thunks/auth";
import { isEmail } from "validator";
import { useSelector } from "react-redux";
import Loader from "./../../components/Loader/index";
import { setError, setLoading } from "../../redux/slices/rootSlice";

export default function SignIn() {
  const [t] = useTranslation();
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.root);
  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    setInputs((prop) => ({
      ...prop,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSignIn = () => {
    const body = {
      password: inputs.password,
      [inputs.login?.includes("@") ? "email" : "username"]: inputs.login,
    };
    if (!inputs.login?.length) dispatch(setError('Enter username or email'))
    else if (!inputs.password?.length) dispatch(setError('Enter password'))
    else {
        dispatch(SignInThunk(body));
      setInputs({});
    }
  };

  useEffect(() => {
    dispatch(setLoading(false));
  }, [dispatch]);

  if (loading) return <Loader />;

  return (
    <SignInLayout
      inputs={inputs}
      handleSignIn={handleSignIn}
      handleChange={handleChange}
      t={t}
    />
  );
}
