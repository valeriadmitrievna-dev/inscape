import React, { useEffect, useState } from "react";
import SignUpLayout from "./index.layout";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./../../components/Loader/index";
import { setError, setLoading } from "../../redux/slices/rootSlice";
import { isEmail } from "validator";
import { SignUpThunk } from "../../redux/thunks/auth";
import SignUpStep1 from "./../../layouts/SignUpStep1/index";
import SignUpStep2 from "./../../layouts/SignUpStep2/index";
import SignUpStep3 from "./../../layouts/SignUpStep3/index";
import SignUpStep4 from "./../../layouts/SignUpStep4/index";
import { SignUpGetRoommatesService } from "../../services/auth";

export default function SignUp() {
  const [t] = useTranslation();
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.root);
  const [inputs, setInputs] = useState({});
  const [current, setCurrent] = useState(0);
  const [isRoommatesChecked, setRoommatesChecked] = useState(false);
  const [isRoommatesConfirmed, setRoommatesConfirmed] = useState(false);
  const [roommates, setRoommates] = useState([]);
  const [localLoad, setLocalLoad] = useState(false);

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

  const next = () => {
    switch (current) {
      case 0:
        if (!inputs?.first_name) dispatch(setError("Enter first name"));
        else if (!inputs?.last_name) dispatch(setError("Enter last name"));
        else if (!inputs?.username) dispatch(setError("Enter username"));
        else if (inputs?.username.length < 8)
          dispatch(setError("Username length should be greater than 8"));
        else if (inputs?.username.trim().includes(" "))
          dispatch(setError("Username can't contain spaces"));
        else if (!inputs?.email) dispatch(setError("Enter email"));
        else if (!isEmail(inputs?.email.trim()))
          dispatch(setError("Email is invalid"));
        else setCurrent(current + 1);
        break;
      case 1:
        if (!inputs?.role) dispatch(setError("Select role"));
        else if (
          inputs?.role === "admin" &&
          inputs?.verification_code !== "admin"
        ) {
          dispatch(setError("Incorrect admin verification code"));
        } else if (
          inputs?.role === "commandant" &&
          inputs?.verification_code !== "commandant"
        ) {
          dispatch(setError("Incorrect admin verification code"));
        } else setCurrent(current + 1);
        break;
      case 2:
        if (
          inputs?.role === "resident" ||
          (inputs?.role === "admin" && inputs?.live_in)
        ) {
          if (!inputs?.dormitory) dispatch(setError("Select dormitory number"));
          else if (!dormitories.includes(inputs?.dormitory))
            dispatch(setError("Select dormitory number from dropdown"));
          else if (!inputs?.room) dispatch(setError("Enter room number"));
          else if (inputs?.room < 1)
            dispatch(setError("Enter valid room number"));
          else if (
            roommates.length > 0 &&
            !isRoommatesConfirmed &&
            !inputs?.add_roommates
          ) {
            dispatch(
              setError("Click 'yes' or 'no' at the answer or submit checkbox")
            );
          } else if (roommates?.length === 0 && !inputs?.add_roommates) {
            dispatch(
              setError(
                "Find roommates by dormitory and room or submit checkbox"
              )
            );
          } else {
            setInputs((prop) => ({
              ...prop,
              roommates,
            }));
            setCurrent(current + 1);
          }
        }
        if (inputs?.role === "commandant") {
          if (!inputs?.dormitory) dispatch(setError("Select dormitory number"));
          else if (!dormitories.includes(inputs?.dormitory))
            dispatch(setError("Select dormitory number from dropdown"));
          else setCurrent(current + 1);
        }
        if (inputs?.role === "admin") {
          setCurrent(current + 1);
        }
        break;
      default:
        setError("Problems with sign up, please try later");
    }
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const handleChangeDormitory = (e) => {
    setInputs((prop) => ({
      ...prop,
      dormitory: e,
    }));
    setRoommatesChecked(false);
    setRoommatesConfirmed(false);
    setRoommates([]);
  };
  const handleChangeRole = (e) => {
    setInputs((prop) => ({
      ...prop,
      role: e,
      live_in: false,
    }));
  };

  const handleChange = (e) => {
    if (e.target.value) {
      setInputs((prop) => ({
        ...prop,
        [e.target.id]: e.target.value,
      }));
    } else {
      setInputs((prop) => ({
        ...prop,
        [e.target.id]: e.target.checked,
      }));
    }
    if (e.target.id === "room") {
      setRoommatesChecked(false);
      setRoommatesConfirmed(false);
      setRoommates([]);
    }
  };

  const handleGetRoommates = async () => {
    try {
      setLocalLoad(true);
      const response = await SignUpGetRoommatesService({
        dormitory: parseInt(inputs.dormitory),
        room: parseInt(inputs.room),
      });
      if (response.status === 200) {
        setRoommatesChecked(true);
        setRoommates([...response.data]);
        setLocalLoad(false);
      }
    } catch (error) {
      dispatch(setError(error));
    }
  };

  const handleSignUp = () => {
    if (!inputs?.password) dispatch(setError("Enter password"));
    else if (inputs?.password.length < 6)
      dispatch(setError("Password length should be greater than 6"));
    else if (inputs?.password.trim().includes(" "))
      dispatch(setError("Password can't contain spaces"));
    else if (!inputs?.repeat_password) dispatch(setError("Repeat password"));
    else if (inputs?.password !== inputs?.repeat_password)
      dispatch(setError("Passwords should be equal"));
    else {
      dispatch(SignUpThunk(inputs));
    }
  };

  const deleteRoommateCandidate = (username) => {
    setRoommates(roommates.filter((rm) => rm.username !== username));
  };

  const steps = [
    {
      title: t("info"),
      content: <SignUpStep1 inputs={inputs} handleChange={handleChange} />,
    },
    {
      title: t("role"),
      content: (
        <SignUpStep2
          inputs={inputs}
          handleChange={handleChange}
          handleChangeRole={handleChangeRole}
        />
      ),
    },
    {
      title: t("dormitory"),
      content: (
        <SignUpStep3
          localLoad={localLoad}
          inputs={inputs}
          handleChange={handleChange}
          handleChangeDormitory={handleChangeDormitory}
          dormitories={dormitories}
          isRoommatesChecked={isRoommatesChecked}
          roommates={roommates}
          handleGetRoommates={handleGetRoommates}
          isRoommatesConfirmed={isRoommatesConfirmed}
          setRoommatesConfirmed={setRoommatesConfirmed}
          deleteRoommateCandidate={deleteRoommateCandidate}
        />
      ),
    },
    {
      title: t("finish"),
      content: <SignUpStep4 t={t} handleChange={handleChange} />,
    },
  ];

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
      steps={steps}
      current={current}
      next={next}
      prev={prev}
    />
  );
}
