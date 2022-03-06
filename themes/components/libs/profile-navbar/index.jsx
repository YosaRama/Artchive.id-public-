// Libs
import { Col } from "antd";

// Styles
import s from "./index.module.scss";

// Icons
import { MobileAccountIcon } from "public/icons/mobile-account-icon";
import { MobileHomeIcon } from "public/icons/mobile-home-icon";
import { MobileArtworkIcon } from "public/icons/mobile-artwork-icon";
import { MobileArtistListIcon } from "public/icons/mobile-artist-list-icon";
import { CirclePlusIcon } from "public/icons/circle-plus-icon";

function ThemesProfileNavbar() {
  return (
    <>
      <div className={s.container}>
        <Col className={s.iconBox} span={24}>
          <MobileHomeIcon className={s.icon} />
        </Col>
        <Col className={s.iconBox} span={24}>
          <MobileAccountIcon className={s.icon} />
        </Col>
        <Col className={s.iconBox} span={24}>
          <div className={s.plusIconBox}>
            <CirclePlusIcon className={s.plusIcon} />
          </div>
        </Col>
        <Col className={s.iconBox} span={24}>
          <MobileArtworkIcon className={s.icon} />
        </Col>
        <Col className={s.iconBox} span={24}>
          <MobileArtistListIcon className={s.icon} />
        </Col>
      </div>
    </>
  );
}

export default ThemesProfileNavbar;
