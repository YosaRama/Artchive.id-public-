// Libs
import { useRouter } from "next/router";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { Avatar, Button, Col, Popover, Layout, Row } from "antd";
import Image from "next/image";
const { Header } = Layout;

// Components
import ThemesContainerMain from "themes/components/container/main";
import ThemesButton from "themes/components/libs/button";
import ThemesNavbarDrawer from "themes/components/libs/navbar-drawer";
import ThemesCartModal from "themes/components/libs/cart-modal";
import ThemesHeaderProfileAvatar from "./avatar";
import ThemesHeaderCart from "./cart";

// Hooks
import { useUser } from "app/hooks/user";

// Icons
import { CartIcon } from "public/icons/cart-icon";
import { MenuOutlined } from "@ant-design/icons";

// Styles
import s from "./index.module.scss";

function ThemesHeader() {
  const router = useRouter();

  //? ============== Open Cart Modal ============= ?//
  //TODO : Clean up all comment//
  // const [openCartModal, setOpenCartModal] = useState(false);
  // const [cartLoading, setCartLoading] = useState(false);
  // const showModal = () => {
  //   setOpenCartModal(true);
  // };
  // const handleOk = () => {
  //   setTimeout(() => {
  //     setOpenCartModal(false);
  //     setCartLoading(false);
  //   }, 3000);
  // };

  // const handleCancel = () => {
  //   setOpenCartModal(false);
  // };

  const content = <ThemesCartModal />;
  // * ====================================== * //

  //? ============== Open Menu Drawer ============= ?//
  const [openMenu, setOpenMenu] = useState(false);
  // * ====================================== * //

  //? ============== Handle Session ============= ?//
  const { data: session, status: sessionStatus } = useSession();
  // * ====================================== * //

  //? ============== User Hook ============= ?//
  const { data: userData } = useUser({ singleId: session?.user?.id || null });
  // * ====================================== * //

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
              {/* //TODO : Clean up comment// */}
              {/* <CartIcon
                style={{ marginRight: "15px", width: "25px" }}
                className={`${s.mobileHidden} ${s.cartIcon}`}
                onClick={() => setOpenCartModal(true)}
              /> */}
              <Popover placement="bottomRight" content={content} trigger="focus" arrowPointAtCenter>
                <Button shape="round" type="link">
                  <CartIcon
                    style={{ marginRight: "15px", width: "25px" }}
                    className={`${s.mobileHidden} ${s.cartIcon}`}
                  />
                </Button>
              </Popover>
              {/* //TODO : Clean up this comment// */}
              {/* <Modal
                title="Your Cart"
                visible={openCartModal}
                onOk={handleOk}
                onCancel={handleCancel}
                centered
                width={350}
                style={{ top: 30 }}
                footer={[
                  <Button
                    key="link"
                    href="/cart"
                    type="primary"
                    loading={cartLoading}
                    onClick={handleOk}
                    style={{
                      width: "100%",
                      height: "35px",
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "center",
                      fontSize: "16px",
                      fontWeight: 700,
                    }}
                  >
                    Go To Cart
                  </Button>,
                ]}
              >
                <ThemesCartModal />
              </Modal> */}
              {session && (
                <>
                  {/* //TODO : Clean up with new components// */}
                  {/* <ThemesHeaderProfileAvatar /> */}
                  {/* <ThemesHeaderCart /> */}
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
