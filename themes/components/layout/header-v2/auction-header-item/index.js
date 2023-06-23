// Libs
import propTypes from "prop-types";
import { Col, Layout, Row } from "antd";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";

// Components
import ThemesContainerMain from "themes/components/container/main";
import ThemesNavbarDrawerAuction from "themes/components/libs/navbar-drawer-auction";
import ThemesBannerAuctionItem from "themes/components/libs/banner-auction";

// Helpers
import { useWindowSize } from "app/helpers/useWindowSize";

// Styles
import s from "./index.module.scss";

// Icons
import { MenuOutlined } from "@ant-design/icons";

function ThemesAuctionHeaderItem(props) {
  const { logo = "/images/logo-without-text.png", isTransparent = false, id } = props;
  const { Header } = Layout;
  const router = useRouter();
  const { width } = useWindowSize();

  // * ====================================== * //

  //? ============== Open Menu Drawer ============= ?//
  const [openMenu, setOpenMenu] = useState(false);
  // * ====================================== * //

  //? ============== Handle User ============= ?//
  const { data: session, status: sessionStatus } = useSession();
  const userId = session?.user.id;
  // * ====================================== * //

  return (
    <>
      <Header className={`${s.container} ${isTransparent ? s.transparent : ""}`}>
        <ThemesContainerMain>
          <Row
            className={`${s.headerContainer} ${isTransparent ? s.transparent : ""}`}
            justify={"space-between"}
          >
            <Col>
              {width > 500 && (
                <Row gutter={[32, 32]}>
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
              )}
            </Col>

            <Col className={s.iconHeader}>
              <MenuOutlined
                style={{ cursor: "pointer" }}
                className={`${s.hamburger}`}
                onClick={() => setOpenMenu(true)}
              />
            </Col>
          </Row>
        </ThemesContainerMain>
        <ThemesNavbarDrawerAuction visible={openMenu} onClose={() => setOpenMenu(false)} id={id} />
      </Header>
    </>
  );
}

ThemesAuctionHeaderItem.propTypes = {
  logo: propTypes.string,
  isTransparent: propTypes.bool,
  id: propTypes.string,
};

export default ThemesAuctionHeaderItem;
