// Libs
import { Col, Row, Divider } from "antd";
import { useRouter } from "next/router";
import propTypes from "prop-types";
import moment from "moment";

// Helper
import stringCapitalize from "app/helpers/capitalize";
import { useWindowSize } from "app/helpers/useWindowSize";

// Styles
import s from "./index.module.scss";

// Icons
import {
  ClockCircleOutlined,
  SyncOutlined,
  CompassOutlined,
  ExclamationCircleOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

function ThemesProfileTransactionItemHeader(props) {
  const { status, transactionTime, orderId } = props;
  const router = useRouter();
  const { width } = useWindowSize();

  return (
    <>
      {width > 500 && (
        <Col>
          <Col>{moment(transactionTime).format("MMMM DD, YYYY")}</Col>
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
              {status == "PENDING" ? (
                <ClockCircleOutlined style={{ marginRight: "6px" }} />
              ) : status == "PROCEED" ? (
                <SyncOutlined style={{ marginRight: "6px" }} />
              ) : status == "SHIPPING" ? (
                <CompassOutlined style={{ marginRight: "6px" }} />
              ) : status == "CANCEL" ? (
                <ExclamationCircleOutlined style={{ marginRight: "6px" }} />
              ) : (
                <CheckCircleOutlined style={{ marginRight: "6px" }} />
              )}

              {stringCapitalize(status)}
            </Col>
          </Row>
          <Divider className={s.divider} />
        </Col>
      )}
      {width < 500 && (
        <Col>
          <Row className={s.headerContainer}>
            <Col style={{ width: "60%" }}>
              <Col>{moment(transactionTime).format("MMMM DD, YYYY")}</Col>
              <Col className={s.transactionId}>{orderId}</Col>
            </Col>
            <Col>
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
                {status == "PENDING" ? (
                  <ClockCircleOutlined style={{ marginRight: "6px" }} />
                ) : status == "PROCEED" ? (
                  <SyncOutlined style={{ marginRight: "6px" }} />
                ) : status == "SHIPPING" ? (
                  <CompassOutlined style={{ marginRight: "6px" }} />
                ) : status == "CANCEL" ? (
                  <ExclamationCircleOutlined style={{ marginRight: "6px" }} />
                ) : (
                  <CheckCircleOutlined style={{ marginRight: "6px" }} />
                )}

                {stringCapitalize(status)}
              </Col>
            </Col>
          </Row>
          <Divider className={s.divider} />
        </Col>
      )}

      {/* <Row>
          <Col style={{ display: "flex", justifyContent: "flex-end" }}>
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
              {status == "PENDING" ? (
                <ClockCircleOutlined style={{ marginRight: "6px" }} />
              ) : status == "PROCEED" ? (
                <SyncOutlined style={{ marginRight: "6px" }} />
              ) : status == "SHIPPING" ? (
                <CompassOutlined style={{ marginRight: "6px" }} />
              ) : status == "CANCEL" ? (
                <ExclamationCircleOutlined style={{ marginRight: "6px" }} />
              ) : (
                <CheckCircleOutlined style={{ marginRight: "6px" }} />
              )}
              {stringCapitalize(status)}
            </Col>
          </Col>

          <Col>{transactionTime}</Col>
          <Col className={s.transactionId}>{orderId}</Col>
          <Divider className={s.divider} />
        </Row> */}
    </>
  );
}

ThemesProfileTransactionItemHeader.propTypes = {
  transactionTime: propTypes.string,
  orderId: propTypes.string,
  status: propTypes.string,
};

export default ThemesProfileTransactionItemHeader;
