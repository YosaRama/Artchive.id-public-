import { Col, Row, Image } from "antd";
import propTypes from "prop-types";

function ThemesCheckoutLogoPayment(props) {
  const { logo } = props;
  return (
    <Row gutter={[10, 10]} style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
      <Col style={{ height: "15px", width: "auto", margin: "10px 8px" }}>
        {" "}
        <Image src={logo} alt="" preview={false} />
      </Col>
    </Row>
  );
}

propTypes.ThemesCheckoutLogoPayment = {
  logo: propTypes.string,
};

export default ThemesCheckoutLogoPayment;
