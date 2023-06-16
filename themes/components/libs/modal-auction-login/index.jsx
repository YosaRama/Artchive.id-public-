// Libs
import propTypes from "prop-types";
import { useState } from "react";
import moment from "moment";
import { useRouter } from "next/router";
import { CloseOutlined } from "@ant-design/icons";
import { Col, Switch } from "antd";

// Component
import ThemesAuctionLoginForm from "./login-form";
import ThemesModal from "../modal-container";
import ThemesAuctionCountDown from "../auction-countdown";
import ThemesAuctionVerifyForm from "./verify-form";
import ThemesAuctionRegisterForm from "../modal-auction-register/register-form";
import ThemesAuctionFailed from "../auction-failed";

// Helper
import { useWindowSize } from "app/helpers/useWindowSize";

// Style
import s from "./index.module.scss";
import { toDataURL } from "qrcode";

function ThemesModalAuctionLogin(props) {
  const {
    endDate,
    startDate,
    bid,
    onLogin,
    onVerified,
    onRegister,
    visible,
    register,
    login,
    verified,
    onVisible,
    onHaveAccount,
  } = props;
  const todayDate = moment();
  const router = useRouter();
  const { width } = useWindowSize();

  //? ============== CLOSE MODAL ============= ?//
  const [loginState, setLoginState] = useState(false);
  const handleLoginState = () => {
    setLoginState(!loginState);
  };

  const handleCloseModal = () => {
    () => {
      router.push("/auction");
    };
  };
  // * ====================================== * //

  return (
    <>
      <ThemesModal
        centered
        footer={null}
        closable={true}
        closeIcon={
          <p style={{ color: "white" }}>
            <CloseOutlined />
          </p>
        }
        onCancel={
          !onVerified && todayDate.isBetween(startDate, endDate) ? handleCloseModal : onVisible
        }
        visible={visible}
        width={1000}
        className={s.modal}
        bodyStyle={{
          padding: "0px",
          background: "white",
          borderRadius: "10px",
          height: width > 500 ? "650px" : "550px",
        }}
      >
        <Col style={{ position: "absolute", zIndex: 2 }}>
          <Switch onChange={handleLoginState} />{" "}
          <span>{loginState ? "Already Have Account Flow" : "Dont have account flow"}</span>
        </Col>
        {todayDate.isBefore(startDate) && (
          <>
            {loginState &&
              (!login && !verified ? (
                <ThemesAuctionLoginForm onClick={onLogin} />
              ) : login && !verified ? (
                <ThemesAuctionVerifyForm onClick={onVerified} />
              ) : login && verified ? (
                <ThemesAuctionCountDown
                  startDate={startDate}
                  onClick={visible}
                  todayDate={todayDate}
                />
              ) : (
                ""
              ))}
            {!loginState &&
              (!register && !verified ? (
                <ThemesAuctionLoginForm onClick={onRegister} />
              ) : register && !verified ? (
                <ThemesAuctionRegisterForm onClick={onVerified} />
              ) : register && verified ? (
                <ThemesAuctionCountDown
                  startDate={startDate}
                  onClick={visible}
                  todayDate={todayDate}
                />
              ) : (
                ""
              ))}
          </>
        )}

        {todayDate.isBetween(startDate, endDate) && (
          <>
            {!loginState &&
              (!login && !verified ? (
                <ThemesAuctionLoginForm onClick={onLogin} />
              ) : login && !verified ? (
                <ThemesAuctionVerifyForm onClick={onHaveAccount} />
              ) : login && verified ? (
                <ThemesAuctionCountDown
                  startDate={startDate}
                  onClick={visible}
                  todayDate={todayDate}
                />
              ) : (
                ""
              ))}
            {loginState &&
              (!register && !verified ? (
                <ThemesAuctionLoginForm onClick={onRegister} />
              ) : register && !verified ? (
                <ThemesAuctionFailed />
              ) : (
                ""
              ))}
          </>
        )}
      </ThemesModal>
    </>
  );
}

ThemesAuctionCountDown.propTypes = {
  endDate: propTypes.any,
  startDate: propTypes.any,
  visible: propTypes.bool,
  onLogin: propTypes.any,
  onVerified: propTypes.any,
  onRegister: propTypes.any,
  onVisible: propTypes.any,
  onHaveAccount: propTypes.any,
  register: propTypes.any,
  login: propTypes.any,
  verified: propTypes.any,
};

export default ThemesModalAuctionLogin;
