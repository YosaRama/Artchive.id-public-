// Libs
import { Col, Image } from "antd";
import propTypes from "prop-types";
import ThemesButton from "../button";
import { useRouter } from "next/router";

// Style
import s from "./index.module.scss";

function ThemesAuctionFailed(props) {
  const { onClick } = props;
  const router = useRouter();

  return (
    <>
      <Col span={24} className={s.countDownContainer} onClick={onClick}>
        <Col className={s.container}>
          <h2>{`We apologize for any disappointment caused.`}</h2>
          <p>
            {`We regret to inform you that since you did not register prior to the auction's
            commencement, you are currently ineligible to participate.`}
          </p>
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
  onClick: propTypes.any,
};

export default ThemesAuctionFailed;
