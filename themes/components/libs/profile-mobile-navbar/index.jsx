// Libs
import { Card, Col, Row } from "antd";
import { useState } from "react";
import { useRouter } from "next/router";

// Styles
import s from "./index.module.scss";

// Icons
import { MobileHomeIcon } from "public/icons/mobile-home-icon";
import { MobileArtworkIcon } from "public/icons/mobile-artwork-icon";
import { MobileArtistListIcon } from "public/icons/mobile-artist-list-icon";
import { MobileAccountIcon } from "public/icons/mobile-account-icon";
import { CirclePlusIcon } from "public/icons/circle-plus-icon";

function ThemesProfileMobileNavbar() {
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
          <Col className={`${s.menuItemContainer}`}>
            <MobileHomeIcon
              onClick={() => {
                router.push("/");
                handleSelectMenu("HOME");
              }}
              className={`${s.menuItemIcon}  ${activeMenu == "HOME" ? s.menuItemIconActive : ""}`}
            />
          </Col>
          <Col
            className={`${s.menuItemContainer} ${
              activeMenu == "ARTWORK" ? s.menuItemIconActive : ""
            }`}
          >
            <MobileArtworkIcon
              className={s.menuItemIcon}
              onClick={() => {
                router.push("/profile/studio");
                handleSelectMenu("ARTWORK");
              }}
            />
          </Col>
          <Col className={`${s.menuItemContainer} ${s.iconPlus}`}>
            <div
              className={s.plusIconBox}
              onClick={() => {
                router.push("/profile/studio/create");
                handleSelectMenu();
              }}
            >
              <CirclePlusIcon className={s.plusIcon} />
            </div>
          </Col>
          <Col
            className={`${s.menuItemContainer} ${
              activeMenu == "ARTIST" ? s.menuItemIconActive : ""
            }`}
          >
            <MobileArtistListIcon
              className={s.menuItemIcon}
              onClick={() => {
                router.push("/profile/studio");
                handleSelectMenu("ARTIST");
              }}
            />
          </Col>
          <Col
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

export default ThemesProfileMobileNavbar;