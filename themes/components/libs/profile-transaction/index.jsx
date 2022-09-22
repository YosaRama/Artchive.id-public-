// Libs
import { Col, Row, Divider, Image, Badge } from "antd";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import propTypes from "prop-types";

// Helper
import priceFormatter from "app/helpers/priceFormatter";
import stringCapitalize from "app/helpers/capitalize";

// Styles
import s from "./index.module.scss";
import ThemesButton from "../button";
import { transactionList } from "app/database/dummy/transaction";

function ThemesProfileItemTransaction(props) {
  const {
    id,
    userId,
    shippingAddress,
    // fraud,
    shippingCity,
    shippingCountry,
    shippingZip,
    status,
    total,
    transactionTime,
    orderId,
    artwork,
    user,
  } = props;
  const router = useRouter();

  //? ============== Fraud Status Handle ============= ?//

  // * ====================================== * //
  return (
    <>
      <Col className={s.itemContainer}>
        <Col>{transactionTime}</Col>
        <Row className={s.headerContainer}>
          <Col className={s.transactionId}>{orderId}</Col>
          <Col
            className={
              status == "PENDING"
                ? s.statusPending
                : status == "PROCEED"
                ? s.statusProceed
                : status == "SHIPPING"
                ? s.statusShipping
                : status == "CANCEL"
                ? s.statusCancel
                : s.statusSuccess
            }
          >
            {stringCapitalize(status)}
          </Col>
        </Row>
        <Divider className={s.divider} />

        {/* //? ============== Item Transaction ============= ?// */}

        <Row gutter={[0, 10]} className={s.transactionItemContainer}>
          <Col className={s.imgSrcContainer}>
            <Image
              preview={false}
              className={s.imgSrc}
              alt=""
              // src={`${process.env.NEXT_PUBLIC_S3_URL}/${imgUrl}`}
              src="/images/artwork-1.jpg"
              // src={artwork}
              onClick={() => router.push(`/artwork/${artworkUrl}`)}
            />
          </Col>

          <Col className={s.descContainer}>
            <h2 className={s.title} onClick={() => router.push(`/artwork/${artworkUrl}`)}>
              {/* {title} */}
              Title
            </h2>
            <p className={s.artist} style={{ fontWeight: "600" }}>
              {`by `}
              {/* {artist} */}
              Artist
            </p>
            <p className={s.material}>
              {/* {stringCapitalize(material.replace(/_/g, " "))} */}
              Oil on Canvas
            </p>
            <p className={s.size}>
              {/* {`${imgWidth} x ${height} cm`} */}
              30 x 30 cm
            </p>
          </Col>
          <Col className={s.priceContainer}>
            <Col>IDR </Col>
            <Col>10.000.000</Col>
          </Col>
        </Row>
        {/* // * ====================================== * // */}
        <Col>
          <Row className={s.shippingFeeContainer}>
            <Col className={s.space} />
            <h2 className={s.shippingText}>Shipping Fee</h2>
            <Col className={s.shippingFee}>
              <Col>IDR </Col>
              <Col>10.000.000</Col>
            </Col>
          </Row>
        </Col>
        <Divider className={s.divider} />

        <Row className={s.footerContainer}>
          <Col className={s.invoiceButton}>
            {" "}
            <ThemesButton>DONWLOAD INVOICE</ThemesButton>
          </Col>

          <Col className={s.totalPrice}>
            <Col className={s.textTotal}>Total :</Col>
            <Col className={s.total}>
              <Col>IDR</Col>
              <Col>{priceFormatter(`${total}`, ",")} </Col>
            </Col>
          </Col>
        </Row>
      </Col>
    </>
  );
}

ThemesProfileItemTransaction.propTypes = {
  transactionTime: propTypes.string,
  orderId: propTypes.string,
  fraud: propTypes.string,
  total: propTypes.number,
};

export default ThemesProfileItemTransaction;
