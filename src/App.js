import { useEffect } from "react";
import { Container } from "./common.styled";
import { useRoutes } from "./routes";
import { useTranslation } from "react-i18next";
import SideBar from "./components/SideBar/index";
import { useDispatch, useSelector } from "react-redux";
import { setError } from "./redux/slices/rootSlice";
import { message } from "antd";
import jwt_decode from "jwt-decode";
import { GetAllUsersInfoThunk, GetUserThunk } from "./redux/thunks/user";

function App() {
  const { loading, error, isAuth } = useSelector((state) => state.root);
  const { username } =
    !!localStorage.getItem("Access Token") &&
    jwt_decode(localStorage.getItem("Access Token"));
  const dispatch = useDispatch();
  const routes = useRoutes(isAuth, username);
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(localStorage.getItem("lang") || "en");
  }, [i18n]);

  const errorMessage = (text) => {
    message.error({
      content: text,
      className: "custom-message",
      onClose: () => dispatch(setError(null)),
      duration: 5,
    });
  };

  useEffect(() => {
    if (isAuth) {
      dispatch(GetUserThunk());
    }
    dispatch(GetAllUsersInfoThunk());
  }, [isAuth]);

  useEffect(() => {
    if (error) errorMessage(error);
  }, [error]);

  return (
    <Container>
      {isAuth && <SideBar />}
      {routes}
    </Container>
  );
}

export default App;
