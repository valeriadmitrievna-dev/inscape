import { useState, useEffect, useRef } from "react";
import SideBarLayout from "./index.layout";
import useWindowSize from "../../utils/hooks/use-window-size";
import useOnClickOutside from "../../utils/hooks/use-on-click-outside";
import { useLocation } from "react-router-dom";
import { logout } from "../../redux/slices/rootSlice";
import { useDispatch, useSelector } from "react-redux";

export default function SideBar() {
  const dispatch = useDispatch();
  const location = useLocation();
  const username = useSelector((state) => state.root.user?.username);
  const [leftSide, setLeftSide] = useState(false);
  const { width } = useWindowSize();
  const sideBar = useRef();
  useOnClickOutside(sideBar, () => width <= 930 && setLeftSide(false));
  const [active, setActive] = useState(username);

  const handleLogout = () => {
    localStorage.removeItem("Access Token");
    dispatch(logout());
  };

  useEffect(() => {
    if (width > 930) {
      setLeftSide(true);
    } else {
      setLeftSide(false);
    }
  }, [width, location]);

  useEffect(() => {
    setActive(location.pathname.replace("/", ""));
  }, [location]);

  return (
    <SideBarLayout
      active={active}
      sideBar={sideBar}
      leftSide={leftSide}
      setLeftSide={setLeftSide}
      handleLogout={handleLogout}
      username={username}
    />
  );
}
