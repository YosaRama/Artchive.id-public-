// Libs
import { Col, Row, Divider } from "antd";
import propTypes from "prop-types";

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
  return (
    <Col>
      <Col className={s.subTotalContainer}>
        <Col className={s.subTotalPrice}>
          <Col className={s.textSubtotal}>Subtotal </Col>
          <Col className={s.subtotal}>
            <Col>IDR</Col>
            <Col>{priceFormatter(`${totalAmount}`, ",")} </Col>
          </Col>
        </Col>
      </Col>
      <Col className={s.subTotalContainer}>
        <Col className={s.subTotalPrice}>
          <Col className={s.textSubtotal}>Shipping </Col>
          <Col className={s.subtotal}>
            <Col>IDR</Col>
            <Col>{priceFormatter(`0`, ",")} </Col>
          </Col>
        </Col>
      </Col>
      <Divider className={s.divider} />

      {width > 500 && (
        <Row className={s.footerContainer}>
          <Col className={s.invoiceButton}>
            {" "}
            <ThemesButton>DOWNLOAD INVOICE</ThemesButton>
          </Col>

          <Col className={s.totalPrice}>
            <Col className={s.textTotal}>Total </Col>
            <Col className={s.total}>
              <Col>IDR</Col>
              <Col>{priceFormatter(`${totalAmount}`, ",")} </Col>
            </Col>
          </Col>
        </Row>
      )}
      {width < 500 && (
        <Col>
          <Col className={s.footerContainer}>
            <Col className={s.totalPrice}>
              <Col className={s.textTotal}>Total </Col>
              <Col className={s.total}>
                <Col>IDR</Col>
                <Col>{priceFormatter(`${totalAmount}`, ",")}</Col>
              </Col>
            </Col>
          </Col>
          <Col className={s.invoiceButton}>
            {" "}
            <ThemesButton>DOWNLOAD INVOICE</ThemesButton>
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
