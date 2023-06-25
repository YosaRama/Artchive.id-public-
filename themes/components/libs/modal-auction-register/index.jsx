// Libs
import propTypes from "prop-types";
import { useState } from "react";
import moment from "moment";

// Component
import ThemesAuctionRegisterForm from "./register-form";
import ThemesModal from "../modal-container";
import ThemesAuctionCountDown from "../auction-countdown";

// Style
import s from "./index.module.scss";

function ThemesModalAuctionRegister(props) {
  const { endDate, startDate } = props;
  const todayDate = moment();

  ///? ============== MODAL REGISTER ============= ?//
  const [register, setRegister] = useState(false);
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
        {!register ? (
          <ThemesAuctionRegisterForm onClick={() => setRegister(!register)} />
        ) : (
          <>
            <ThemesAuctionCountDown
              startDate={startDate}
              onClick={closeModal}
              todayDate={todayDate}
            />
          </>
        )}
      </ThemesModal>
    </>
  );
}

ThemesModalAuctionRegister.propTypes = {
  endDate: propTypes.any,
  startDate: propTypes.any,
};

export default ThemesModalAuctionRegister;
