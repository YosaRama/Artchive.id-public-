// Libs
import propTypes from "prop-types";
import { Col, Divider, Drawer, Menu, Row } from "antd";
import Link from "next/link";

// Components
import ThemeArtistSearchBox from "../artist-search-box";

// Styles
import s from "./index.module.scss";

// Icons
import { InstagramOutlined, FacebookOutlined } from "@ant-design/icons";

function ThemesNavbarDrawer(props) {
  const { visible, onClose } = props;

  //? ============== Menu List ============= ?//
  const firstMenuList = [
    { link: "/", label: "HOME" },
    { link: "/profile/studio", label: "STUDIO" },
  ];

  const secondMenuList = [
    { link: "/artist", label: "ARTIST" },
    { link: "/artwork", label: "ARTWORK" },
    { link: "/maintenance", label: "EXHIBITION" },
    { link: "/maintenance", label: "NFT GALLERY" },
  ];

  const thirdMenuList = [
    { link: "/maintenance", label: "ART ARTICLE" },
    { link: "/maintenance", label: "ABOUT US" },
    { link: "/contact-us", label: "CONTACT US" },
  ];
  // * ====================================== * //

  return (
    <>
      <Drawer visible={visible} onClose={onClose} width={300}>
        <section className={s.container}>
          <section>
            <ThemeArtistSearchBox />
          </section>

          <section>
            <Menu>
              {firstMenuList.map((item, index) => {
                return (
                  <Menu.Item key={item.label} className={s.menuItemBold} onClick={onClose}>
                    <Link href={item.link}>
                      <a>{item.label}</a>
                    </Link>
                  </Menu.Item>
                );
              })}
              <Divider className={s.divider} />
              {secondMenuList.map((item, index) => {
                return (
                  <Menu.Item key={item.label} className={s.menuItemBold} onClick={onClose}>
                    <Link href={item.link}>
                      <a>{item.label}</a>
                    </Link>
                  </Menu.Item>
                );
              })}
              <Divider className={s.divider} />
              {thirdMenuList.map((item, index) => {
                return (
                  <Menu.Item key={item.label} className={s.menuItem} onClick={onClose}>
                    <Link href={item.link}>
                      <a>{item.label}</a>
                    </Link>
                  </Menu.Item>
                );
              })}
            </Menu>
          </section>

          <section className={s.footerSection}>
            <p className={s.footerTitle}>Contact Us :</p>
            <Col>
              <a href="mailto:info@artchive.id">info@artchive.id</a>
            </Col>
            <Col>
              <p>
                <a className={s.phone} href="tel:081236947277">
                  +6281-236-947-277
                </a>
              </p>
            </Col>
            <Row>
              <Col>
                <a
                  href={"https://www.instagram.com/__artchive.id/"}
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <Col>
                    <InstagramOutlined className={s.socialIcon} />
                  </Col>
                </a>
              </Col>
              <Col>
                <a href={"https://www.facebook.com/artchive.id"} target={"_blank"} rel="noreferrer">
                  <Col>
                    <FacebookOutlined className={s.socialIcon} />
                  </Col>
                </a>
              </Col>
            </Row>
          </section>
        </section>
      </Drawer>
    </>
  );
}

ThemesNavbarDrawer.propTypes = {
  visible: propTypes.bool,
  onClose: propTypes.func,
};

export default ThemesNavbarDrawer;
