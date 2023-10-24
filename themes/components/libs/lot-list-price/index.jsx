import s from "./index.module.scss";
import { Col, Row } from "antd";
import propTypes from "prop-types";
import priceFormatter from "app/helpers/priceFormatter";

function ThemesAuctionLotListPrice(props) {
  const { startEstimation, endEstimation, status, currentBid, session, lotPrice, grid } = props;
  return (
    <Row gutter={[0, 5]} className={`${grid ? s.containerGrid : s.container}`}>
      <Col span={24}>
        <p>Estimation : </p>
        <p>IDR {priceFormatter(`${startEstimation} - ${endEstimation} `, ",")}</p>
      </Col>
      <Col span={24}>
        <h3>
          {status === "PUBLISH" && "Current Bid: "}
          {status === "SOLD" && "Final Bid: "}
          IDR {lotPrice}
        </h3>
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
