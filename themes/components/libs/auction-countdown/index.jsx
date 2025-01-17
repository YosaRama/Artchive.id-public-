// Libs
import { Col, Row, Image } from "antd";
import propTypes from "prop-types";
import ThemesButton from "../button";
import moment from "moment";
import { useState, useEffect } from "react";
import { Spin } from "antd";
import { useRouter } from "next/router";

// Helper
import { useWindowSize } from "dashboard/helpers/useWindowSize";

// Style
import s from "./index.module.scss";

function ThemesAuctionCountDown(props) {
  const { startDate, endDate, onClick } = props;
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { width } = useWindowSize();
  const todayDate = moment();
  const beforeEvent = todayDate.isBefore(startDate);

  //? ============== Countdown Auction Start ============= ?//
  const [countdown, setCountdown] = useState({
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = moment();
      const targetDate = moment(now.isBefore(startDate) ? startDate : endDate);
      const duration = moment.duration(targetDate.diff(now));

      setCountdown({
        months: duration.months(),
        days: duration.days(),
        hours: duration.hours(),
        minutes: duration.minutes(),
        seconds: duration.seconds(),
      });
      setLoading(false);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [startDate, endDate]);
  const countdownData = [
    { time: `${countdown.months}`, title: `Month${countdown.months > 1 ? "s" : ""}` },
    { time: `${countdown.days}`, title: `Day${countdown.days > 1 ? "s" : ""}` },
    { time: `${countdown.hours}`, title: `Hour${countdown.hours > 1 ? "s" : ""}` },
    { time: `${countdown.minutes}`, title: `Minute${countdown.minutes > 1 ? "s" : ""}` },
    { time: `${countdown.seconds}`, title: `Second${countdown.seconds > 1 ? "s" : ""}` },
  ];
  //   * ====================================== * //

  return (
    <>
      <Col span={24} className={s.countDownContainer}>
        <Col className={s.container}>
          <Col span={24}>
            {width > 500 ? (
              <h3>Auction Will Start at {moment(startDate).format("DD MMMM YYYY")}</h3>
            ) : (
              <h2>Start at {moment(startDate).format("DD MMMM YYYY")}</h2>
            )}
          </Col>

          {width >= 500 && (
            <>
              <p>Countdown</p>
              <Row className={s.timer}>
                {countdownData.map((item, index) => {
                  return (
                    <>
                      <Col className={s.bgWhite}>
                        <Col className={s.item}>
                          <h1>{loading ? <Spin /> : <>{item.time}</>}</h1>
                          <p>{item.title}</p>
                        </Col>
                      </Col>
                    </>
                  );
                })}
              </Row>
            </>
          )}

          <Col span={24}>
            <p>{`Mark your calendars and don't miss the chance to bid on your dream items at our upcoming auction event`}</p>
            <p>{`Please check your inbox to make sure you receive our email.`}</p>
          </Col>

          <ThemesButton type={`primary + ${s.btn}`} onClick={() => router.push("/auction")}>
            BACK TO AUCTION LIST
          </ThemesButton>
        </Col>
      </Col>
      <Col className={s.background}>
        <Image src="/images/countdown.png" alt="" preview={false} />
      </Col>
    </>
  );
}

propTypes.ThemesAuctionCountDown = {
  todayDate: propTypes.any,
  startDate: propTypes.any,
  onClick: propTypes.any,
};

export default ThemesAuctionCountDown;
