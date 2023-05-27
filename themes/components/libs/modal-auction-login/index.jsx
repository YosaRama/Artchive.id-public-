// Libs
import propTypes from "prop-types";
import { useState } from "react";
import moment from "moment";
import { useRouter } from "next/router";

// Component
import ThemesAuctionLoginForm from "./login-form";
import ThemesModal from "../modal-container";
import ThemesAuctionCountDown from "../auction-countdown";
import ThemesAuctionVerifyForm from "./verify-form";

// Style
import s from "./index.module.scss";

function ThemesModalAuctionLogin(props) {
  const { endDate, startDate } = props;
  const todayDate = moment();
  const router = useRouter();

  ///? ============== MODAL LOGIN============= ?//
  const [login, setLogin] = useState(false);
  const [verified, setVerified] = useState(false);
  // * ====================================== * //

  //? ============== CLOSE MODAL ============= ?//
  const [visible, setVisible] = useState(true);
  const closeModal = () => {
    setVisible(false);
  };
  const showModal = () => {
    if (todayDate.isBefore(endDate)) {
      setVisible(true);
    }
  };
  // * ====================================== * //

  return (
    <>
      <ThemesModal
        centered
        footer={null}
        closable={true}
        onCancel={
          !login || !verified || todayDate.isBefore(endDate)
            ? () => {
                router.push("/auction");
              }
            : closeModal
        }
        visible={visible}
        width={1000}
        className={s.modal}
        bodyStyle={{ padding: "0px", background: "white", borderRadius: "10px", height: "650px" }}
      >
        {!login && !verified ? (
          <ThemesAuctionLoginForm onClick={() => setLogin(!login)} />
        ) : login && !verified ? (
          <ThemesAuctionVerifyForm onClick={() => setVerified(!verified)} />
        ) : todayDate.isBefore(endDate) ? (
          <ThemesAuctionCountDown
            startDate={startDate}
            onClick={closeModal}
            todayDate={todayDate}
          />
        ) : (
          ""
        )}
      </ThemesModal>
    </>
  );
}

ThemesAuctionCountDown.propTypes = {
  endDate: propTypes.any,
  startDate: propTypes.any,
};

export default ThemesModalAuctionLogin;
