// Libs
import { Col, Row } from "antd";
import { useRouter } from "next/router";
import propTypes from "prop-types";
import moment from "moment";
import { useEffect, useState } from "react";

// Style
import s from "./index.module.scss";

function ThemesBannerAuctionItem(props) {
  const { title, todayDate, startDate, endDate, slug, placeName } = props;
  const router = useRouter();

  return (
    <Col span={24} className={s.bannerItem}>
      <Col span={12}>
        <Row gutter={[32, 32]}>
          <Col
            onClick={() => {
              router.push(`/auction/${slug}`);
            }}
            className={router.asPath === `/auction/${slug}` ? s.btnActive : s.btn}
          >
            <h3>Overview</h3>
          </Col>
          <Col
            onClick={() => {
              router.push(`/auction/${slug}/lots`);
            }}
            className={router.asPath === `/auction/${slug}/lots` ? s.btnActive : s.btn}
          >
            <h3>Lots</h3>
          </Col>
          <Col
            onClick={() => {
              router.push(`/auction/${slug}/details`);
            }}
            className={router.asPath === `/auction/${slug}/details` ? s.btnActive : s.btn}
          >
            <h3>Auction Details</h3>
          </Col>
        </Row>
      </Col>
      <Col span={12} className={s.description}>
        <h1>{title}</h1>
        {/* {todayDate?.isBefore(startDate) ? (
          <p>{daysRemaining} Days Until Lots Begin</p>
        ) : todayDate?.isBefore(endDate) && todayDate.isAfter(startDate) ? (
          <p>{hoursRemaining} Days Until Lots Closing</p>
        ) : (
          <p>This auction already ended</p>
        )} */}

        <p>
          The auction started on {moment(startDate).format("DD MMMM YYYY")} |{" "}
          {moment(startDate).format("mm:hh")} WITA | {placeName}
        </p>
      </Col>
    </Col>
  );
}

propTypes.ThemesBannerAuctionItem = {
  title: propTypes.string,
  todayDate: propTypes.string,
  startDate: propTypes.string,
  endDate: propTypes.string,
  placeName: propTypes.string,
  slug: propTypes.string,
};

export default ThemesBannerAuctionItem;
