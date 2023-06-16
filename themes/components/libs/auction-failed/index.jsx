// Libs
import { Col, Row, Image } from "antd";
import propTypes from "prop-types";
import ThemesButton from "../button";
import moment from "moment";
import { useState, useEffect } from "react";
import { Spin } from "antd";
import { useRouter } from "next/router";

// Helper
import { useWindowSize } from "app/helpers/useWindowSize";

// Style
import s from "./index.module.scss";

function ThemesAuctionFailed(props) {
  const { todayDate, startDate, endDate, onClick } = props;
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { width } = useWindowSize();

  return (
    <>
      <Col span={24} className={s.countDownContainer} onClick={onClick}>
        <Col className={s.container}>
          <h2>{`Sorry you can't participate in this auction.`}</h2>
          <p>You should register your phone number before the auction started.</p>
          <ThemesButton onClick={() => router.push("/auction")}>BACK TO AUCTION LIST</ThemesButton>
        </Col>
      </Col>
      <Col className={s.background}>
        <Image src="/images/countdown.png" alt="" preview={false} />
      </Col>
    </>
  );
}

propTypes.ThemesAuctionFailed = {
  todayDate: propTypes.any,
  startDate: propTypes.any,
  onClick: propTypes.any,
};

export default ThemesAuctionFailed;
