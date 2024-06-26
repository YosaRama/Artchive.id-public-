// Libs
import propTypes from "prop-types";
import { Card, Tooltip } from "antd";

// Helpers
import priceFormatter from "dashboard/helpers/priceFormatter";

// Icons
import { QuestionCircleOutlined } from "@ant-design/icons";

function AppCardFinalPrice(props) {
  const { markupPrice } = props;

  return (
    <>
      <Card
        type="inner"
        title="Final Price"
        extra={
          <Tooltip title="Final price is 40% raised up from original artwork, including artwork management, certificate, insurance, and shipping management">
            <a>
              <QuestionCircleOutlined />
            </a>
          </Tooltip>
        }
      >
        {priceFormatter(`Rp ${markupPrice}`, ",")}
      </Card>
      <p style={{ margin: "10px 0 0", fontStyle: "italic", opacity: "0.5" }}>
        *Note: Final price is raise up 40% from original price{" "}
      </p>
    </>
  );
}

AppCardFinalPrice.propTypes = {
  markupPrice: propTypes.any,
};

export default AppCardFinalPrice;
