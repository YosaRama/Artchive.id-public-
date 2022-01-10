// Libs
import { useState } from "react";
import Image from "next/image";
import { Button, Col, Drawer, Layout, Row } from "antd";
const { Header } = Layout;

// Components
import PageContainerBox from "themes/components/container/box-container/indes";
import PageButton from "themes/components/libs/page-button";

// Icons
import { MenuOutlined } from "@ant-design/icons";

// Styles
import s from "./index.module.scss";

function PageHeader() {
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
              <PageButton style={{ marginRight: "26px" }} type="outlined">
                LOGIN
              </PageButton>
              <PageButton style={{ marginRight: "26px" }}>REGISTER</PageButton>
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
