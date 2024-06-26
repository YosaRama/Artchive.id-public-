// Libs
import { Col, Row } from "antd";
import propTypes from "prop-types";

// Helper
import priceFormatter from "dashboard/helpers/priceFormatter";

// Styles
import s from "./index.module.scss";

function ThemesAuctionLotListPrice(props) {
  const { startEstimation, endEstimation, status, lotPrice, grid } = props;
  return (
    <Row gutter={[0, 5]} className={`${grid ? s.containerGrid : s.container}`}>
      <Col span={24}>
        <p>Estimation : </p>
        <p>IDR {priceFormatter(`${startEstimation} - ${endEstimation} `, ",")}</p>
      </Col>
      <Col span={24}>
        <h3>
          {status === "READY" && "Current Bid: "}
          {status === "CLOSED" && "Final Bid: "}
        </h3>
        <h3>IDR {lotPrice}</h3>
      </Col>
    </Row>
  );
}

ThemesAuctionLotListPrice.propTypes = {
  startEstimation: propTypes.string,
  endEstimation: propTypes.string,
  status: propTypes.string,
  currentBid: propTypes.string,
  session: propTypes.any,
  lotPrice: propTypes.string,
  grid: propTypes.bool,
};

export default ThemesAuctionLotListPrice;
