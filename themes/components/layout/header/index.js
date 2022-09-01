// Libs
import { useRouter } from "next/router";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { Avatar, Col, Layout, Row, Button, Badge } from "antd";
import Image from "next/image";
const { Header } = Layout;

// Components
import ThemesContainerMain from "themes/components/container/main";
import ThemesButton from "themes/components/libs/button";
import ThemesNavbarDrawer from "themes/components/libs/navbar-drawer";
import ThemesHeaderCart from "./cart-modal";

// Hooks
import { useUser } from "app/hooks/user";
import { useWindowSize } from "app/helpers/useWindowSize";
import { useCarts } from "app/hooks/cart";

// Icons
import { MenuOutlined, BellFilled } from "@ant-design/icons";
import { CartIcon, CheckCircleFilled } from "public/icons/cart-icon";

// Styles
import s from "./index.module.scss";
import ThemesContentsNotification from "themes/contents/notification";
import ThemesNotificationModal from "./notification-header";

// Dummy
import { notificationList } from "app/database/dummy/notification";

function ThemesHeader() {
  const router = useRouter();

  // * ====================================== * //
  //? ============== User Hook ============= ?//
  const [iconVisible, setIconVisible] = useState(false);
  // * ====================================== * //

  //? ============== Open Menu Drawer ============= ?//
  const [openMenu, setOpenMenu] = useState(false);
  // * ====================================== * //

  //? ============== Handle User ============= ?//
  const { data: session, status: sessionStatus } = useSession();
  const userId = session?.user.id;
  // * ====================================== * //

  //? ============== User Hook ============= ?//
  const { data: userData } = useUser({ singleId: session?.user?.id || null });
  // * ====================================== * //

  //? ============== Cart Hooks ============= ?//
  const { data: cartItem } = useCarts({ queryString: `id=${userId}` }); //TODO : Change ID with current user ID//
  // * ====================================== * //

  const { width } = useWindowSize();

  return (
    <>
      <Header className={s.container}>
        <ThemesContainerMain>
          <Row style={{ height: "100%" }} justify="space-between">
            <Col className={s.logo} onClick={() => router.push("/")}>
              <Image
                src="/images/logo-without-text.png"
                alt=""
                layout="fill"
                objectFit="contain"
                okButtonProps={{
                  visible: false,
                }}
                cancelButtonProps={{
                  visible: false,
                }}
              />
            </Col>
            <Col className={s.menu}>
              {session && (
                <>
                  {width >= 500 && (
                    <Row>
                      <Col
                        style={{
                          marginRight: "16px",
                          width: "30px",
                          color: "black",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Badge
                          count={cartItem?.length}
                          size="small"
                          style={{ backgroundColor: "#e5890a" }}
                        >
                          <ThemesHeaderCart onChange={(e) => setIconVisible()} />
                        </Badge>
                      </Col>
                      <Col
                        style={{
                          marginRight: "16px",
                          width: "30px",
                          color: "black",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Badge
                          count={notificationList?.length}
                          size="small"
                          style={{ backgroundColor: "#e5890a" }}
                        >
                          <ThemesNotificationModal onChange={(e) => setIconVisible()} />
                        </Badge>
                      </Col>
                    </Row>
                  )}

                  {width < 500 && (
                    <Row>
                      <Col style={{ marginRight: "19px" }}>
                        <Badge
                          count={cartItem?.length}
                          size="small"
                          style={{ backgroundColor: "#e5890a" }}
                        >
                          <CartIcon
                            style={{
                              fontSize: "25px",
                              width: "25px",
                              paddingRight: "0px",
                              paddingLeft: "0px",
                            }}
                            onClick={() => router.push("/cart")}
                          />
                        </Badge>
                      </Col>
                      <Col style={{ marginRight: "19px" }}>
                        <Badge
                          count={notificationList?.length}
                          size="small"
                          style={{ backgroundColor: "#e5890a" }}
                        >
                          <BellFilled
                            onClick={() => router.push("/notification")}
                            style={{
                              fontSize: "25px",
                              color: "black",
                              paddingRight: "0px",
                              paddingLeft: "0px",
                            }}
                          />
                        </Badge>
                      </Col>
                    </Row>
                  )}
                  {width > 500 && (
                    <div className={s.nameContainer}>
                      <div
                        style={{
                          margin: "0px",
                          padding: "0px",
                          width: "auto",
                          height: "15px",
                          lineHeight: "15px",
                          fontWeight: 700,
                          fontSize: "14px",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                        }}
                      >
                        {session.user.full_name}
                      </div>
                      <p
                        style={{
                          margin: "4px 0px 0px 0px",
                          padding: "0px",
                          width: "auto",
                          height: "10px",
                          lineHeight: "10px",
                          color: "rgb(229, 137, 10)",
                          fontSize: "10px",
                        }}
                      >
                        {session.user.role}
                      </p>
                    </div>
                  )}

                  <div
                    style={{ marginRight: "15px" }}
                    onClick={() => router.push("/profile")}
                    className={`${s.mobileHidden}`}
                  >
                    <Avatar
                      src={
                        userData?.profile
                          ? `${process.env.NEXT_PUBLIC_S3_URL}/${userData?.profile?.url}`
                          : "/images/profile-default.png"
                      }
                      className={s.avatar}
                    />
                  </div>
                </>
              )}
              {!session && (
                <>
                  <ThemesButton
                    style={{ marginRight: "15px" }}
                    type="outlined"
                    onClick={() => router.push("/signin")}
                  >
                    LOGIN
                  </ThemesButton>
                  <ThemesButton
                    style={{ marginRight: "15px" }}
                    onClick={() => router.push("/register")}
                    type={`default ${s.mobileHidden}`}
                  >
                    REGISTER
                  </ThemesButton>
                </>
              )}
              <MenuOutlined className={`${s.hamburger}`} onClick={() => setOpenMenu(true)} />
            </Col>
          </Row>
        </ThemesContainerMain>
      </Header>

      <ThemesNavbarDrawer visible={openMenu} onClose={() => setOpenMenu(false)} />
    </>
  );
}

export default ThemesHeader;
