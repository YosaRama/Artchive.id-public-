// Libs
import { useRouter } from "next/router";
import { useState } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { Avatar, Col, Drawer, Layout, Row } from "antd";
const { Header } = Layout;

// Components
import ThemesContainerMain from "themes/components/container/main";
import ThemesButton from "themes/components/libs/button";

// Icons
import { CartIcon } from "public/icons/cart-icon";
import { MenuOutlined } from "@ant-design/icons";

// Styles
import s from "./index.module.scss";
import ThemesNavbarDrawer from "themes/components/libs/navbar-drawer";

function ThemesHeader() {
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
        <ThemesContainerMain>
          <Row style={{ height: "100%" }} justify="space-between">
            <Col className={s.logo} onClick={() => router.push("/")}>
              <Image src="/images/logo-without-text.png" alt="" layout="fill" objectFit="contain" />
            </Col>
            <Col className={s.menu}>
              <CartIcon
                style={{ marginRight: "15px", width: "25px" }}
                className={`${s.mobileHidden}`}
              />
              {session && (
                <div
                  style={{ marginRight: "15px" }}
                  onClick={() => router.push("/profile")}
                  className={`${s.mobileHidden}`}
                >
                  <Avatar
                    src={
                      session?.user?.image
                        ? `${process.env.NEXT_PUBLIC_S3_URL}/${session?.user?.image}`
                        : "/images/profile-default.png"
                    }
                    className={s.avatar}
                  />
                </div>
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
