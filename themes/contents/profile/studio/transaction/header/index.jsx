// Libs
import { Col, Row, Divider } from "antd";
import propTypes from "prop-types";
import moment from "moment";
import { useWindowSize } from "dashboard/helpers/useWindowSize";

// Helper
import { stringCapitalize } from "dashboard/helpers/capitalize";

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
  const { width } = useWindowSize();

  return (
    <>
      <Col>
        {width > 500 && (
          <Row className={s.headerContainer}>
            <Col xs={{ order: 2 }} sm={{ span: 18, order: 1 }}>
              <Col>{moment(transactionTime)?.format("MMMM DD, YYYY")}</Col>
              <Col className={s.transactionId}>{orderId}</Col>
            </Col>
            <Col xs={{ order: 2 }} sm={{ order: 1 }}>
              <Col
                style={{ padding: "5px 15px" }}
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

                {status}
              </Col>
            </Col>
          </Row>
        )}

        {width < 500 && (
          <Col>
            <Col
              xs={{ order: 2 }}
              sm={{ span: 18, order: 1 }}
              style={{ display: "flex", justifyContent: "space-between", marginBottom: "5px" }}
            >
              <Col style={{ display: "flex", alignItems: "center" }}>
                {moment(transactionTime)?.format("MMMM DD, YYYY")}
              </Col>

              <Col
                style={{ padding: "5px 15px" }}
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

                {status}
              </Col>
            </Col>
            <Col xs={{ order: 2 }} sm={{ order: 1 }}>
              <Col className={s.transactionId}>{orderId}</Col>
            </Col>
          </Col>
        )}
        <Divider className={s.divider} />
      </Col>
    </>
  );
}

ThemesProfileTransactionItemHeader.propTypes = {
  transactionTime: propTypes.string,
  orderId: propTypes.string,
  status: propTypes.string,
};

export default ThemesProfileTransactionItemHeader;
