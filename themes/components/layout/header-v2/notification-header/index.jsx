// Libs
import { BellFilled, DeleteFilled, CheckOutlined, SettingFilled } from "@ant-design/icons";
import { Popover, Col, Row, Button, Empty } from "antd";
import { useState } from "react";
import { useRouter } from "next/router";

// Components
import ThemesNotificationModalItem from "./notification-modal-item";
// Styles
import s from "./index.module.scss";

// Dummy
import { notificationList } from "dashboard/database/dummy/notification";
import ThemesButton from "themes/components/libs/button";

function ThemesNotificationModal() {
  const router = useRouter();
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
      <Col>
        <Button onClick={() => setEmptyNotification(false)}> Tiada </Button>
      </Col>
      <Col>
        <Button onClick={() => setEmptyNotification(true)}> Ada </Button>
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
                  trigger="hover"
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
            </Row>
            <Col className={s.containerItem}>
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
                  {notificationList
                    .filter((item, index) => index < 3)
                    .map((item, index) => {
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
            <Col span={24}>
              <ThemesButton
                style={{ width: "356px", marginTop: "12px" }}
                onClick={() => router.push("/notification")}
              >
                SEE ALL
              </ThemesButton>
            </Col>
          </Col>
        </Col>
      }
      trigger="hover"
    >
      <BellFilled style={{ fontSize: "25px", color: "black", cursor: "pointer" }} />
    </Popover>
  );
}

export default ThemesNotificationModal;
