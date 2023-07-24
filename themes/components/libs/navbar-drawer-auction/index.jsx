// Libs
import propTypes from "prop-types";
import { Col, Divider, Drawer, Menu, Row } from "antd";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

// Styles
import s from "./index.module.scss";

// Icons
import { InstagramOutlined, FacebookOutlined } from "@ant-design/icons";
import ThemesButton from "../button";

function ThemesNavbarDrawerAuction(props) {
  const { visible, onClose, id } = props;
  const { data } = useSession();

  //? ============== Menu List ============= ?//
  const firstMenuList = [
    { link: `/auction`, label: "AUCTION LIST" },
    { link: `/auction/${id}/lots`, label: "LOTS" },
    { link: `/auction/${id}/details`, label: "AUCTION DETAILS" },
    { link: `/auction/${id}/`, label: "OVERVIEW" },
  ];
  // * ====================================== *//
  return (
    <>
      <Drawer visible={visible} onClose={onClose} width={300} bodyStyle={{ padding: 0 }}>
        <section className={s.container}>
          <Col span={24} className={s.bodyContainer}>
            <Col className={s.menuSection}>
              <Col className={s.name}>
                <h3>Welcome, {data?.user?.full_name}</h3>
              </Col>
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
              </Menu>
            </Col>
          </Col>

          <Col span={24} className={s.footerContainer}>
            <Col className={s.footerSection}>
              <ThemesButton style={{ width: "100%" }} onClick={() => signOut()}>
                Sign Out
              </ThemesButton>
              <Divider className={s.divider} />

              <p className={s.footerTitle}>Contact Us :</p>
              <Col>
                <a href="mailto:info@artchive.id">info@artchive.id</a>
              </Col>
              <Col>
                <p>
                  <a className={s.phone} href={`tel:${process.env.NEXT_PUBLIC_PHONE_NUMBER}`}>
                    +62821-4566-3008
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
                  <a
                    href={"https://www.facebook.com/artchive.id"}
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <Col>
                      <FacebookOutlined className={s.socialIcon} />
                    </Col>
                  </a>
                </Col>
              </Row>
            </Col>
          </Col>
        </section>
      </Drawer>
    </>
  );
}

ThemesNavbarDrawerAuction.propTypes = {
  visible: propTypes.bool,
  onClose: propTypes.func,
  id: propTypes.string,
};

export default ThemesNavbarDrawerAuction;
