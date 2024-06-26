// Libs
import propTypes from "prop-types";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { CloseOutlined } from "@ant-design/icons";
import moment from "moment";

// Component
import ThemesModal from "../modal-container";
import ThemesAuctionCountDown from "../auction-countdown";
import ThemesAuctionLoginForm from "./login-form-v2";
import ThemesAuctionRegisterForm from "../modal-auction-register/register-form";
import ThemesAuctionFailed from "../auction-failed";

// Helper
import { useWindowSize } from "dashboard/helpers/useWindowSize";

// Style
import s from "./index.module.scss";

import { useAuction } from "dashboard/hooks/auction";

function ThemesModalAuctionLogin(props) {
  const { visible, handleModal } = props;
  const router = useRouter();
  const { width } = useWindowSize();

  // #region Auction Data
  const { data: auctionData } = useAuction({ singleId: router?.query?.id });
  // #endregion

  // #region Timeline
  const todayDate = moment();
  const beforeEvent = todayDate.isBefore(auctionData?.start_date);
  const inEvent = todayDate.isBetween(auctionData?.start_date, auctionData?.end_date);
  const eventStatus = beforeEvent ? "BEFORE" : inEvent ? "LIVE" : "AFTER";
  // #endregion

  const [loading, setLoading] = useState(false);

  // #region Handle Modal
  const [loginModal, setLoginModal] = useState("login");

  const handleBack = () => {
    setLoginModal("login");
  };

  const handleCloseModal = () => {
    if (beforeEvent) {
      router.push("/auction");
    } else
      setTimeout(() => {
        handleModal();
        setLoginModal("login");
      }, 0);
  };

  const handleRegister = () => {
    if (beforeEvent) {
      setLoading(true);
      setLoginModal("countdown");
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  // #endregion
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
        onCancel={handleCloseModal}
        visible={visible}
        width={1000}
        className={s.modal}
        bodyStyle={{
          padding: "0px",
          background: "white",
          borderRadius: "10px",
          height: width > 500 ? "650px" : "600px",
        }}
      >
        {loginModal === "login" && (
          <ThemesAuctionLoginForm
            eventStatus={eventStatus}
            handleModalStage={setLoginModal}
            handleModalVisible={handleCloseModal}
          />
        )}
        {loginModal === "register" && (
          <ThemesAuctionRegisterForm
            onClick={handleRegister}
            handleBack={handleBack}
            loading={loading}
          />
        )}
        {loginModal === "countdown" && (
          <ThemesAuctionCountDown startDate={auctionData.start_date} />
        )}
        {loginModal === "sorry" && (
          <ThemesAuctionFailed eventStatus={eventStatus} handleBack={handleBack} />
        )}
      </ThemesModal>
    </>
  );
}

ThemesModalAuctionLogin.propTypes = {
  visible: propTypes.bool,
  handleModal: propTypes.func,
};

export default ThemesModalAuctionLogin;
