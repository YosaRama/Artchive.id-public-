// Libs
import propTypes from "prop-types";
import { Col, Layout, Row } from "antd";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";

// Components
import ThemesContainerMain from "themes/components/container/main";
import ThemesNavbarDrawerAuction from "themes/components/libs/navbar-drawer-auction";

// Helpers
import { useWindowSize } from "dashboard/helpers/useWindowSize";

// Styles
import s from "./index.module.scss";

// Icons
import { MenuOutlined } from "@ant-design/icons";

function ThemesAuctionHeaderItem(props) {
  const { logo = false, isTransparent = false } = props;
  const { Header } = Layout;
  const router = useRouter();
  const { id } = router.query;
  const { width } = useWindowSize();

  // * ====================================== * //

  //? ============== Open Menu Drawer ============= ?//
  const [openMenu, setOpenMenu] = useState(false);
  // * ====================================== * //

  return (
    <>
      <Header className={`${s.container} ${isTransparent ? s.transparent : ""}`}>
        <ThemesContainerMain>
          <Col className={s.headerContainer}>
            <Row
              className={`${s.header} ${isTransparent ? s.transparent : ""}`}
              justify="space-between"
            >
              <Col
                className={`${s.logo}`}
                onClick={() => router.push("/")}
                xl={{ span: 2 }}
                lg={{ span: 3 }}
                md={{ span: 4 }}
                xs={{ span: 8 }}
              >
                <Image
                  src={logo ? "/images/logo-text-white.png" : "/images/logo-without-text.png"}
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
              {width > 500 && (
                <Col xl={{ span: 19 }} lg={{ span: 18 }} md={{ span: 17 }} xs={{ span: 13 }}>
                  <Row
                    gutter={[30, 30]}
                    justify="start"
                    align="middle"
                    className={s.headerItemContainer}
                  >
                    <Col
                      onClick={() => {
                        router.push(`/auction/${id}`);
                      }}
                      className={router.asPath === `/auction/${id}` ? s.btnActive : s.btn}
                    >
                      <h3>Overview</h3>
                    </Col>
                    <Col
                      onClick={() => {
                        router.push(`/auction/${id}/lots`);
                      }}
                      className={router.asPath === `/auction/${id}/lots` ? s.btnActive : s.btn}
                    >
                      <h3>Lots</h3>
                    </Col>
                    <Col
                      onClick={() => {
                        router.push(`/auction/${id}/details`);
                      }}
                      className={router.asPath === `/auction/${id}/details` ? s.btnActive : s.btn}
                    >
                      <h3>Auction Details</h3>
                    </Col>
                  </Row>
                </Col>
              )}

              <Col className={s.iconHeader} span={2}>
                <MenuOutlined
                  style={{ cursor: "pointer" }}
                  className={`${s.hamburger}`}
                  onClick={() => setOpenMenu(true)}
                />
              </Col>
            </Row>
          </Col>
        </ThemesContainerMain>
        <ThemesNavbarDrawerAuction id={id} visible={openMenu} onClose={() => setOpenMenu(false)} />
      </Header>
    </>
  );
}

ThemesAuctionHeaderItem.propTypes = {
  logo: propTypes.string,
  isTransparent: propTypes.bool,
};

export default ThemesAuctionHeaderItem;
