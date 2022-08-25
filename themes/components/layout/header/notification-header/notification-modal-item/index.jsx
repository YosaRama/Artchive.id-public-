// Libs
import { Col, Popover, Row, Divider } from "antd";
import { EllipsisOutlined, DeleteFilled, CheckOutlined } from "@ant-design/icons";
import propTypes from "prop-types";

// Styles
import s from "./index.module.scss";

function ThemesNotificationModalItem(props) {
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
      <Divider style={{ margin: "6px 0px 12px" }} />
      <Row className={s.container}>
        <Col span={1}>
          <Col className={s.dot} />
        </Col>
        <Col span={20} className={s.itemContainer}>
          <p className={s.title}>{tittle}</p>
          <p className={s.message}>{message}</p>
          <p className={s.days}>2 days ago</p>
        </Col>
        <Col span={1} className={s.dotDotDot}>
          <Popover
            zIndex={2}
            placement="right"
            title={false}
            content={singleSetting}
            trigger="click"
          >
            <EllipsisOutlined />
          </Popover>
        </Col>
      </Row>
    </>
  );
}

ThemesNotificationModalItem.propTypes = {
  tittle: propTypes.string,
  message: propTypes.string,
  id: propTypes.number,
};

export default ThemesNotificationModalItem;
