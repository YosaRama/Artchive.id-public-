// Libs
import { BellFilled, DeleteFilled, CheckOutlined, SettingFilled } from "@ant-design/icons";
import { Popover, Col, Row, Button, Empty, notification } from "antd";
import { useState } from "react";

// Components
import ThemesNotificationModalItem from "./notification-modal-item";
// Styles
import s from "./index.module.scss";

// Dummy
import { notificationList } from "app/database/dummy/notification";

function ThemesNotificationModal() {
  //? ============== Empty State ============= ?//
  const [emptyNotification, setEmptyNotification] = useState(true);
  // * ====================================== * //
  const generalSetting = (
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
        <span style={{ marginLeft: "5px" }}>{`Delete all notification`} </span>
      </Col>
      <Col className={s.readNotif}>
        <CheckOutlined />
        <span style={{ marginLeft: "5px" }}>{`Read all`} </span>
      </Col>
    </Col>
  );

  // * ====================================== * //

  return (
    <Popover
      zIndex={2}
      placement="bottomRight"
      title={false}
      content={
        <Col style={{ display: "flex", justifyContent: "center" }}>
          <Col className={s.card}>
            <Row style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <Col span={22} className={s.title}>
                Notification
              </Col>
              <Col className={s.setting}>
                <Popover
                  zIndex={2}
                  placement="right"
                  title={false}
                  content={generalSetting}
                  trigger="click"
                >
                  <SettingFilled />
                </Popover>
              </Col>
            </Row>
            <Row style={{ marginTop: "12px", marginBottom: "6px" }}>
              <Col span={3} className={s.all}>
                <p>All</p>
              </Col>
              <Col span={4} className={s.unread}>
                <p>Unread</p>
              </Col>
              <Col span={3}>
                <Button onClick={() => setEmptyNotification(false)}> Tiada </Button>
              </Col>
              <Col span={4}>
                <Button onClick={() => setEmptyNotification(true)}> Ada </Button>
              </Col>
            </Row>

            {!emptyNotification && (
              <Empty
                description={
                  <p
                    style={{
                      fontFamily: "Aileron",
                      fontSize: "16px",
                      fontWeight: "700",
                      color: "#C4C4C4",
                    }}
                  >
                    {`YOU DON'T HAVE ANY NOTIFICATION`}
                  </p>
                }
              />
            )}

            {emptyNotification && (
              <>
                {notificationList.map((item, index) => {
                  return (
                    <ThemesNotificationModalItem
                      key={index}
                      tittle={item.tittle}
                      message={item.message}
                      id={item.id}
                    />
                  );
                })}
              </>
            )}
          </Col>
        </Col>
      }
      trigger="hover"
    >
      <BellFilled style={{ fontSize: "25px", color: "black" }} />
    </Popover>
  );
}

export default ThemesNotificationModal;
