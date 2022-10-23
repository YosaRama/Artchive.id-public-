// Libs
import { Col, Row, Divider } from "antd";
import propTypes from "prop-types";
import { DownloadOutlined } from "@ant-design/icons";

// Components
import ThemesButton from "themes/components/libs/button";

// Helper
import priceFormatter from "app/helpers/priceFormatter";
import { useWindowSize } from "app/helpers/useWindowSize";

// Styles
import s from "./index.module.scss";

function ThemesProfileTransactionItemFooter(props) {
  const { totalAmount } = props;
  const { width } = useWindowSize();

  function kFormatter(num) {
    return Math.abs(num) > 999999999
      ? Math.sign(num) * (Math.abs(num) / 100000000).toFixed(1) + " Billion"
      : Math.sign(num) * Math.abs(num);
  }
  console.log(kFormatter(12000000000));
  return (
    <Col>
      <Col className={s.subTotalContainer}>
        <Col className={s.subTotalPrice}>
          <Col className={s.textSubtotal}>Subtotal : </Col>
          <Col className={s.subtotal}>
            <Col style={{ marginRight: 5 }}>IDR</Col>

            <Col> {priceFormatter(`${kFormatter(totalAmount)}`, ",")} </Col>
          </Col>
        </Col>
      </Col>
      <Col className={s.subTotalContainer}>
        <Col className={s.subTotalPrice}>
          {width > 500 && <Col className={s.textSubtotal}>Shipping Fee : </Col>}
          {width < 500 && <Col className={s.textSubtotal}>Shipping : </Col>}

          <Col className={s.subtotal}>
            <Col style={{ marginRight: 5 }}>IDR</Col>
            <Col>{priceFormatter(`0`, ",")} </Col>
          </Col>
        </Col>
      </Col>
      <Col className={s.dividerContainer}>
        <Col style={{ width: 300 }}>
          {" "}
          <Divider className={s.divider} />
        </Col>
      </Col>
      {width > 500 && (
        <Row className={s.footerContainer}>
          <Col className={s.invoiceButton}>
            {" "}
            <ThemesButton>
              <DownloadOutlined style={{ fontSize: "17px" }} />
              DOWNLOAD INVOICE
            </ThemesButton>
          </Col>

          <Col className={s.totalPrice}>
            <Col className={s.textTotal}>Total : </Col>
            <Col className={s.total}>
              <Col style={{ marginRight: 5 }}>IDR</Col>
              {/* <Col>{priceFormatter(`${totalAmount}`, ",")} </Col> */}
              <Col> {priceFormatter(`${kFormatter(totalAmount)}`, ",")} </Col>
            </Col>
          </Col>
        </Row>
      )}
      {width < 500 && (
        <Col>
          <Col className={s.footerContainer}>
            <Col className={s.totalPrice}>
              <Col className={s.textTotal}>Total :</Col>
              <Col className={s.total}>
                <Col style={{ marginRight: 5 }}>IDR</Col>
                {/* <Col>{priceFormatter(`${totalAmount}`, ",")}</Col> */}
                <Col> {priceFormatter(`${kFormatter(totalAmount)}`, ",")} </Col>
              </Col>
            </Col>
          </Col>
          <Col className={s.invoiceButton}>
            {" "}
            <ThemesButton>
              <DownloadOutlined style={{ fontSize: "20px" }} />
              DOWNLOAD INVOICE
            </ThemesButton>
          </Col>
        </Col>
      )}
    </Col>
  );
}

ThemesProfileTransactionItemFooter.propTypes = {
  total: propTypes.number,
};

export default ThemesProfileTransactionItemFooter;
