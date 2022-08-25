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
import { MenuOutlined } from "@ant-design/icons";
import { CartIcon, CheckCircleFilled } from "public/icons/cart-icon";

// Styles
import s from "./index.module.scss";
import ThemesContentsNotification from "themes/contents/notification";
import ThemesNotificationModal from "./notification-header";

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
                          marginRight: "12px",
                          width: "30px",
                          color: "black",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Badge
                          count={cartItem?.length}
                          size="small"
                          style={{ backgroundColor: "#e5890a", color: "black" }}
                        >
                          <ThemesNotificationModal onChange={(e) => setIconVisible()} />
                        </Badge>
                      </Col>
                      <Col
                        style={{
                          marginRight: "12px",
                          width: "30px",
                          color: "black",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Badge
                          count={cartItem?.length}
                          size="small"
                          style={{ backgroundColor: "#e5890a", color: "black" }}
                        >
                          <ThemesHeaderCart onChange={(e) => setIconVisible()} />
                        </Badge>
                      </Col>
                    </Row>
                  )}

                  {width < 500 && (
                    <Row>
                      <Badge
                        count={cartItem?.length}
                        size="small"
                        style={{ backgroundColor: "#e5890a", color: "black" }}
                      >
                        <CartIcon
                          style={{ width: "25px", cursor: "pointer" }}
                          type="link"
                          onClick={() => router.push("/notification")}
                        />
                      </Badge>
                      <Badge
                        count={cartItem?.length}
                        size="small"
                        style={{ backgroundColor: "#e5890a", color: "black" }}
                      >
                        {/* <Button shape="round" type="link" onClick={() => router.push("/cart")}> */}
                        <CartIcon
                          style={{ width: "25px", cursor: "pointer" }}
                          type="link"
                          onClick={() => router.push("/cart")}
                        />
                        {/* </Button> */}
                      </Badge>
                      {/* {cartItem?.length !== 0 && <Col className={s.dot}>{cartItem?.length}</Col>}
                      <Button shape="round" type="link" onClick={() => router.push("/cart")}>
                        <CartIcon style={{ width: "25px" }} />
                      </Button> */}
                    </Row>
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
