// Libs
import { Card, Col, Row } from "antd";
import { useState } from "react";
import { useRouter } from "next/router";

// Styles
import s from "./index.module.scss";

// Icons
import { ArtworkIcon } from "/public/icons/artwork-icon";
import { MobileHomeIcon } from "public/icons/mobile-home-icon";
import { MobileArtworkIcon } from "public/icons/mobile-artwork-icon";
import { MobileArtistListIcon } from "public/icons/mobile-artist-list-icon";
import { MobileAccountIcon } from "public/icons/mobile-account-icon";

function ThemeMobileNavbar() {
  const router = useRouter();

  //? ============== Handle Active Menu ============= ?//
  const [activeMenu, setActiveMenu] = useState("HOME");
  const handleSelectMenu = (value) => {
    setActiveMenu(value);
  };
  // * ====================================== * //
  return (
    <>
      <Card bodyStyle={{ padding: 0 }} className={s.card}>
        <Row justify="center" align="middle">
          <Col span={6} className={`${s.menuItemContainer}`}>
            <MobileHomeIcon
              onClick={() => {
                router.push("/");
                handleSelectMenu("HOME");
              }}
              className={`${s.menuItemIcon}  ${activeMenu == "HOME" ? s.menuItemIconActive : ""}`}
            />
          </Col>
          <Col
            span={6}
            className={`${s.menuItemContainer} ${
              activeMenu == "ARTWORK" ? s.menuItemIconActive : ""
            }`}
          >
            <MobileArtworkIcon
              className={s.menuItemIcon}
              onClick={() => {
                router.push("/artwork");
                handleSelectMenu("ARTWORK");
              }}
            />
          </Col>
          <Col
            span={6}
            className={`${s.menuItemContainer} ${
              activeMenu == "ARTIST" ? s.menuItemIconActive : ""
            }`}
          >
            <MobileArtistListIcon
              className={s.menuItemIcon}
              onClick={() => {
                router.push("/artist");
                handleSelectMenu("ARTIST");
              }}
            />
          </Col>
          <Col
            span={6}
            className={`${s.menuItemContainer} ${
              activeMenu == "PROFILE" ? s.menuItemIconActive : ""
            }`}
          >
            <MobileAccountIcon
              className={s.menuItemIcon}
              onClick={() => {
                router.push("/profile");
                handleSelectMenu("PROFILE");
              }}
            />
          </Col>
        </Row>
      </Card>
    </>
  );
}

export default ThemeMobileNavbar;
