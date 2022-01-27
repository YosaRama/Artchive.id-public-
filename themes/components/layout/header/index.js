// Libs
import { useRouter } from "next/router";
import { useState } from "react";
import Image from "next/image";
import { Col, Drawer, Layout, Row } from "antd";
const { Header } = Layout;

// Components
import PageContainerBox from "themes/components/container/box-container";
import PageButton from "themes/components/libs/page-button";

// Icons
import { MenuOutlined } from "@ant-design/icons";

// Styles
import s from "./index.module.scss";

function PageHeader() {
  const router = useRouter();

  //? ============== Open Menu Drawer ============= ?//
  const [openMenu, setOpenMenu] = useState(false);
  // * ====================================== * //

  return (
    <>
      <Header className={s.container}>
        <PageContainerBox>
          <Row style={{ height: "100%" }} justify="space-between">
            <Col className={s.logo}>
              <Image src="/images/logo-without-text.png" alt="" layout="fill" objectFit="contain" />
            </Col>
            <Col className={s.menu}>
              <PageButton
                style={{ marginRight: "26px" }}
                type="outlined"
                onClick={() => router.push("/signin")}
              >
                LOGIN
              </PageButton>
              <PageButton style={{ marginRight: "26px" }} onClick={() => router.push("/register")}>
                REGISTER
              </PageButton>
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
