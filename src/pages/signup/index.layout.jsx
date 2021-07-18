import React from "react";
import { Link } from "react-router-dom";
import { message, Select, Steps } from "antd";
import {
  AuthButton,
  AuthContent,
  AuthInput,
  AuthPage,
  AuthTitle,
  AuthRow,
  AuthSwitch,
  AuthInputs,
} from "../../auth.styled";
import LanguageFooter from "../../components/LanguageFooter";
import BlueButton from "./../../components/BlueButton/index";
import useWindowSize from "./../../utils/hooks/use-window-size";

export default function SignUpLayout({
  t,
  steps,
  current,
  next,
  prev,
  dormitories,
  handleChange,
  handleSignUp,
}) {
  const { Option } = Select;
  const { width } = useWindowSize();
  return (
    <AuthPage>
      <AuthContent wide>
        <AuthTitle>{t("sign up")}</AuthTitle>
        <Steps
          current={current}
          size={width <= 640 && "small"}
          direction={width <= 640 ? "vertical" : "horizontal"}
        >
          {steps.map((item) => (
            <Steps.Step key={item.title} title={item.title} />
          ))}
        </Steps>
        <div className="steps-content">{steps[current].content}</div>
        <div className="steps-action">
          <BlueButton disabled={current === 0} onClick={() => prev()}>
            {t("previous")}
          </BlueButton>
          {current < steps.length - 1 && (
            <BlueButton onClick={() => next()}>{t("next")}</BlueButton>
          )}
          {current === steps.length - 1 && (
            <BlueButton onClick={handleSignUp}>
              {t("sign up")}
            </BlueButton>
          )}
        </div>
      </AuthContent>
      <LanguageFooter />
    </AuthPage>
  );
}
