import { useState } from "react";
import styled from "styled-components";
import ImagePreloader from "../ImagePreloader";
// import LocalLoader from "./../LocalLoader/index";
import Loader from "./../Loader/index";

const ImageBox = styled.div`
  width: 100%;
  height: 100%;
  background-color: #1b2735;
  position: relative;
  > div {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
  }
  > img {
    opacity: ${({ loading }) => (loading ? "0" : "1")};
    visibility: ${({ loading }) => (loading ? "hidden" : "visible")};
  }
`;

const CloseIcon = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 50px;
  height: 50px;
  cursor: pointer;
  transition: 0.3s;
  z-index: 10;
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDMyOS4yNjkzMyAzMjkiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTE5NC44MDA3ODEgMTY0Ljc2OTUzMSAxMjguMjEwOTM4LTEyOC4yMTQ4NDNjOC4zNDM3NS04LjMzOTg0NCA4LjM0Mzc1LTIxLjgyNDIxOSAwLTMwLjE2NDA2My04LjMzOTg0NC04LjMzOTg0NC0yMS44MjQyMTktOC4zMzk4NDQtMzAuMTY0MDYzIDBsLTEyOC4yMTQ4NDQgMTI4LjIxNDg0NC0xMjguMjEwOTM3LTEyOC4yMTQ4NDRjLTguMzQzNzUtOC4zMzk4NDQtMjEuODI0MjE5LTguMzM5ODQ0LTMwLjE2NDA2MyAwLTguMzQzNzUgOC4zMzk4NDQtOC4zNDM3NSAyMS44MjQyMTkgMCAzMC4xNjQwNjNsMTI4LjIxMDkzOCAxMjguMjE0ODQzLTEyOC4yMTA5MzggMTI4LjIxNDg0NGMtOC4zNDM3NSA4LjMzOTg0NC04LjM0Mzc1IDIxLjgyNDIxOSAwIDMwLjE2NDA2MyA0LjE1NjI1IDQuMTYwMTU2IDkuNjIxMDk0IDYuMjUgMTUuMDgyMDMyIDYuMjUgNS40NjA5MzcgMCAxMC45MjE4NzUtMi4wODk4NDQgMTUuMDgyMDMxLTYuMjVsMTI4LjIxMDkzNy0xMjguMjE0ODQ0IDEyOC4yMTQ4NDQgMTI4LjIxNDg0NGM0LjE2MDE1NiA0LjE2MDE1NiA5LjYyMTA5NCA2LjI1IDE1LjA4MjAzMiA2LjI1IDUuNDYwOTM3IDAgMTAuOTIxODc0LTIuMDg5ODQ0IDE1LjA4MjAzMS02LjI1IDguMzQzNzUtOC4zMzk4NDQgOC4zNDM3NS0yMS44MjQyMTkgMC0zMC4xNjQwNjN6bTAgMCIgZmlsbD0iIzljOWNhYiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPjwvZz48L3N2Zz4=");
  background-color: #141e2a;
  border-radius: 0 0 0 4px;
  background-size: 30px;
  background-repeat: no-repeat;
  background-position: center;
`;

const Img = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  img {
    max-height: 80vw;
    opacity: ${({ loading }) => (loading ? "0" : "1")};
    visibility: ${({ loading }) => (loading ? "hidden" : "visible")};
  }
  ${({ change }) =>
    change &&
    `
  &::before {
    position: absolute;
    opacity: 0;
    transition: 0.3s;
    content: "";
    left: 45%;
    top: 45%;
    cursor: pointer;
    width: 10%;
    height: 10%;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 5;
    border-radius: 50%;
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIj48Zz48ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im0xNy40NTMgMjRjLS4xNjggMC0uMzQtLjAyMS0uNTEtLjA2NmwtMTUuNDYzLTQuMTQxYy0xLjA2LS4yOTItMS42OTItMS4zOS0xLjQxNC0yLjQ1bDEuOTUxLTcuMjcyYy4wNzItLjI2Ny4zNDYtLjQyMi42MTItLjM1NC4yNjcuMDcxLjQyNS4zNDYuMzU0LjYxMmwtMS45NSA3LjI3Yy0uMTM5LjUzLjE3OSAxLjA4Mi43MSAxLjIyOWwxNS40NTcgNC4xMzljLjUzMS4xNCAxLjA3OS0uMTc2IDEuMjE3LS43MDRsLjc4MS0yLjg5NGMuMDcyLS4yNjcuMzQ2LS40MjYuNjEzLS4zNTMuMjY3LjA3Mi40MjQuMzQ3LjM1My42MTNsLS43OCAyLjg5Yy0uMjM1Ljg5LTEuMDQ1IDEuNDgxLTEuOTMxIDEuNDgxeiIgZmlsbD0iIzljOWNhYiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPjwvZz48ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im0yMiAxOGgtMTZjLTEuMTAzIDAtMi0uODk3LTItMnYtMTJjMC0xLjEwMy44OTctMiAyLTJoMTZjMS4xMDMgMCAyIC44OTcgMiAydjEyYzAgMS4xMDMtLjg5NyAyLTIgMnptLTE2LTE1Yy0uNTUxIDAtMSAuNDQ5LTEgMXYxMmMwIC41NTEuNDQ5IDEgMSAxaDE2Yy41NTEgMCAxLS40NDkgMS0xdi0xMmMwLS41NTEtLjQ0OS0xLTEtMXoiIGZpbGw9IiM5YzljYWIiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcGF0aD48L2c+PGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtOSA5Yy0xLjEwMyAwLTItLjg5Ny0yLTJzLjg5Ny0yIDItMiAyIC44OTcgMiAyLS44OTcgMi0yIDJ6bTAtM2MtLjU1MSAwLTEgLjQ0OS0xIDFzLjQ0OSAxIDEgMSAxLS40NDkgMS0xLS40NDktMS0xLTF6IiBmaWxsPSIjOWM5Y2FiIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+PC9nPjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTQuNTcgMTYuOTNjLS4xMjggMC0uMjU2LS4wNDktLjM1NC0uMTQ2LS4xOTUtLjE5NS0uMTk1LS41MTIgMC0uNzA3bDQuNzIzLTQuNzIzYy41NjYtLjU2NiAxLjU1NS0uNTY2IDIuMTIxIDBsMS40MDYgMS40MDYgMy44OTItNC42N2MuMjgzLS4zMzkuNjk5LS41MzYgMS4xNDItLjU0aC4wMTFjLjQzOCAwIC44NTMuMTkgMS4xMzkuNTIzbDUuMjMgNi4xMDJjLjE4LjIwOS4xNTYuNTI1LS4wNTQuNzA1LS4yMDkuMTgtLjUyNC4xNTctLjcwNS0uMDU0bC01LjIzLTYuMTAyYy0uMDk3LS4xMTItLjIzMS0uMTc0LS4zOC0uMTc0LS4xMDQtLjAwOS0uMjg3LjA2My0uMzg0LjE4bC00LjI0MyA1LjA5MWMtLjA5LjEwOC0uMjIxLjE3My0uMzYyLjE3OS0uMTQyLjAxLS4yNzctLjA0Ni0uMzc2LS4xNDZsLTEuNzkzLTEuNzkzYy0uMTg5LS4xODgtLjUxOC0uMTg4LS43MDcgMGwtNC43MjMgNC43MjNjLS4wOTcuMDk3LS4yMjUuMTQ2LS4zNTMuMTQ2eiIgZmlsbD0iIzljOWNhYiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 40px;
  }
  &:hover::before {
    opacity: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 0;
  }`}
`;

export default function Image({ big, src, change }) {
  const [loading, setLoading] = useState(1);

  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    if (big) {
      setOpen(true);
    }
  };

  return (
    <ImageBox loading={loading}>
      {!!loading && <ImagePreloader />}
      <img alt="" onLoad={() => setLoading(0)} src={src} onClick={handleOpen} />
      {/* {big && (
        <Dialog
          open={open}
          onClose={handleClose}
          classes={{
            paperWidthSm: classes.paperWidthSm,
          }}
        >
          <CloseIcon onClick={handleClose} />
          <Img
            change={change}
            onClick={() => {
              handleClose();
              if (change) handleClickBig();
            }}
          >
            {!!loading && <LocalLoader />}
            <img alt="" onLoad={() => setLoading(0)} src={src} />
          </Img>
        </Dialog>
      )} */}
    </ImageBox>
  );
}
