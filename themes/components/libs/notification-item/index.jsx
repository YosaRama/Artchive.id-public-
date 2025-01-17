// Libs
import { Col, Popover, Row } from "antd";
import { EllipsisOutlined, DeleteFilled, CheckOutlined } from "@ant-design/icons";
import propTypes from "prop-types";

// Styles
import s from "./index.module.scss";

function ThemesNotificationItem(props) {
  const { tittle, message, id } = props;

  const singleSetting = (
    <Col
      style={{
        width: "200px",
        borderRadius: "10px",
        color: "white",
        paddingLeft: "12px",
        paddingRight: "12px",
      }}
    >
      <Col className={s.deleteNotif}>
        <DeleteFilled />
        <span style={{ marginLeft: "10px" }}>{`Delete notification`} </span>
      </Col>
      <Col className={s.readNotif}>
        <CheckOutlined />
        <span style={{ marginLeft: "5px" }}> {`Mark as read`} </span>
      </Col>
    </Col>
  );

  return (
    <>
      <Row className={s.container}>
        <Col span={1}>
          <Col className={s.dot} />
        </Col>
        <Col span={21} className={s.itemContainer}>
          <p className={s.title}>{tittle}</p>
          <p style={{ marginBottom: "5px", fontSize: "14px" }}>{message}</p>
          <p className={s.days}>2 days ago</p>
        </Col>
        <Col span={1} className={s.dotDotDot}>
          <Popover
            zIndex={2}
            placement="right"
            title={false}
            content={singleSetting}
            trigger="hover"
          >
            <EllipsisOutlined />
          </Popover>
        </Col>
      </Row>
    </>
  );
}

ThemesNotificationItem.propTypes = {
  tittle: propTypes.string,
  message: propTypes.string,
};

export default ThemesNotificationItem;
