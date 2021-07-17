import React, { useEffect, useState } from "react";
import SignUpLayout from "./index.layout";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./../../components/Loader/index";
import { setError, setLoading } from "../../redux/slices/rootSlice";
import { isEmail } from "validator";
import { SignUpThunk } from "../../redux/thunks/auth";

export default function SignUp() {
  const [t] = useTranslation();
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.root);
  const [inputs, setInputs] = useState({});

  const dormitories = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "1",
    "4А",
    "4Б",
    "5А",
    "5Б",
    "5В",
    "6Б",
    "6В",
    "6Г",
    "8Б",
    "9А",
    "9Б",
  ];

  const handleChange = (e) => {
    if (e.target) {
      setInputs((prop) => ({
        ...prop,
        [e.target.id]: e.target.value,
      }));
    } else
      setInputs((prop) => ({
        ...prop,
        dormitory: e,
      }));
  };

  const handleSignUp = () => {
    if (!inputs?.username) dispatch(setError("Enter username"));
    else if (inputs?.username.length < 8)
      dispatch(setError("Username length should be greater than 8"));
    else if (inputs?.username.trim().includes(" "))
      dispatch(setError("Username can't contain spaces"));
    else if (!inputs?.email) dispatch(setError("Enter email"));
    else if (!isEmail(inputs?.email.trim()))
      dispatch(setError("Email is invalid"));
    else if (!inputs?.full_name) dispatch(setError("Enter full name"));
    else if (
      localStorage.getItem("lang") !== "ja" &&
      inputs?.full_name
        .trim()
        .replace(/[' ']+/g, " ")
        .split(" ").length < 2
    )
      dispatch(
        setError(
          "Full name field should contain two words as minimum: first name and last name"
        )
      );
    else if (!inputs?.dormitory) dispatch(setError("Select dormitory number"));
    else if (!dormitories.includes(inputs?.dormitory))
      dispatch(setError("Select dormitory number from dropdown"));
    else if (!inputs?.room) dispatch(setError("Enter room number"));
    else if (inputs?.room < 1) dispatch(setError("Enter valid room number"));
    else if (!inputs?.password) dispatch(setError("Enter password"));
    else if (inputs?.password.length < 6)
      dispatch(setError("Password length should be greater than 6"));
    else if (inputs?.password.trim().includes(" "))
      dispatch(setError("Password can't contain spaces"));
    else if (!inputs?.repeat_password) dispatch(setError("Repeat password"));
    else if (inputs?.password !== inputs?.repeat_password)
      dispatch(setError("Passwords should be equal"));
    else {
      dispatch(SignUpThunk(inputs));
      setInputs({});
    }
  };

  useEffect(() => {
    dispatch(setLoading(false));
  }, [dispatch]);

  if (loading) return <Loader />;

  return (
    <SignUpLayout
      t={t}
      dormitories={dormitories}
      handleChange={handleChange}
      handleSignUp={handleSignUp}
    />
  );
}
