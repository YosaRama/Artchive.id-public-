// Libs
import { useRouter } from "next/router";
import { useState } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { Avatar, Col, Drawer, Layout, Row } from "antd";
const { Header } = Layout;

// Components
import PageContainerBox from "themes/components/container/box-container";
import PageButton from "themes/components/libs/page-button";

// Icons
import { CartIcon } from "public/icons/cart-icon";
import { MenuOutlined, LogoutOutlined, UserOutlined } from "@ant-design/icons";

// Styles
import s from "./index.module.scss";

function PageHeader() {
  const router = useRouter();

  //? ============== Open Menu Drawer ============= ?//
  const [openMenu, setOpenMenu] = useState(false);
  // * ====================================== * //

  //? ============== Handle Session ============= ?//
  const { data: session, status: sessionStatus } = useSession();
  // * ====================================== * //

  return (
    <>
      <Header className={s.container}>
        <PageContainerBox>
          <Row style={{ height: "100%" }} justify="space-between">
            <Col className={s.logo} onClick={() => router.push("/")}>
              <Image src="/images/logo-without-text.png" alt="" layout="fill" objectFit="contain" />
            </Col>
            <Col className={s.menu}>
              <CartIcon style={{ marginRight: "15px", width: "25px" }} />
              {session && (
                <div style={{ marginRight: "15px" }} onClick={() => router.push("/profile")}>
                  <Avatar
                    src={
                      session.user.image
                        ? `${process.env.NEXT_PUBLIC_S3_URL}/${session.user.image}`
                        : "/images/profile-default.png"
                    }
                    className={s.avatar}
                  />
                </div>
              )}
              {!session && (
                <>
                  <PageButton
                    style={{ marginRight: "15px" }}
                    type="outlined"
                    onClick={() => router.push("/signin")}
                  >
                    LOGIN
                  </PageButton>
                  <PageButton
                    style={{ marginRight: "15px" }}
                    onClick={() => router.push("/register")}
                  >
                    REGISTER
                  </PageButton>
                </>
              )}
              <MenuOutlined className={s.hamburger} onClick={() => setOpenMenu(true)} />
            </Col>
          </Row>
        </PageContainerBox>
      </Header>

      <Drawer onClose={() => setOpenMenu(false)} visible={openMenu}></Drawer>
    </>
  );
}

export default PageHeader;
