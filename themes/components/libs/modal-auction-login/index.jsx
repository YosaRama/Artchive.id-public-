// Libs
import propTypes from "prop-types";
import { useState, useEffect } from "react";
import moment from "moment";
import { useRouter } from "next/router";
import { CloseOutlined } from "@ant-design/icons";

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

import { useAuction } from "app/hooks/auction";

function ThemesModalAuctionLogin(props) {
  const { isPrivate, userRegistered, visible, handleModal } = props;
  const router = useRouter();
  const { width } = useWindowSize();

  //? ============== Handle Auction and User Data ============= ?//
  const { data: auctionData } = useAuction({ singleId: router?.query?.id });
  // * ====================================== * //

  //? ============== Timeline ============= ?//
  const todayDate = moment();
  const beforeEvent = todayDate.isBefore(auctionData?.start_date);
  const inEvent = todayDate.isBetween(auctionData?.start_date, auctionData?.end_date);
  const afterEvent = todayDate.isAfter(auctionData?.end_date);
  // * ====================================== * //

  ///? ============== Handle Modal ============ ?//
  const [loginModal, setLoginModal] = useState("login");
  const [isVisible, setIsVisible] = useState(true);

  //? ============== Handle Login ============= ?//
  const handleLogin = () => {
    if (beforeEvent) {
      if (userRegistered) setLoginModal("countdown");
      else setLoginModal("register");
    } else if (inEvent) {
      if (userRegistered) setLoginModal("verify");
      else setLoginModal("sorry");
    } else "";
  };
  const handleRegister = () => {
    if (beforeEvent) {
      setLoginModal("countdown");
    }
  };
  const handleVerify = () => {
    if (beforeEvent) {
      setLoginModal("countdown");
    } else if (inEvent) {
      setIsVisible(!isVisible);
    }
  };
  // * ====================================== * //

  return (
    <>
      <ThemesModal
        maskStyle={{ background: "rgba(0, 0, 0, 0.75)" }}
        centered
        footer={null}
        closable={true}
        closeIcon={
          <p style={{ color: "white" }}>
            <CloseOutlined />
          </p>
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
        {loginModal === "login" && <ThemesAuctionLoginForm onClick={handleLogin} />}
        {loginModal === "verify" && <ThemesAuctionVerifyForm onClick={handleVerify} />}
        {loginModal === "register" && <ThemesAuctionRegisterForm onClick={handleRegister} />}
        {loginModal === "countdown" && (
          <ThemesAuctionCountDown startDate={auctionData.start_date} />
        )}
        {loginModal === "sorry" && <ThemesAuctionFailed />}
      </ThemesModal>
    </>
  );
}

propTypes.ThemesModalAuctionLogin = {
  isPrivate: propTypes.bool,
  userRegistered: propTypes.bool,
  visible: propTypes.bool,
  handleModal: propTypes.string,
};

export default ThemesModalAuctionLogin;
