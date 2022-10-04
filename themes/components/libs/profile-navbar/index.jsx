// Libs
import { Col } from "antd";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

// Styles
import s from "./index.module.scss";
import { fadingLeftToRight } from "app/database/framer-motion";

// Icons
import { MobileAccountIcon } from "public/icons/mobile-account-icon";
import { MobileHomeIcon } from "public/icons/mobile-home-icon";
import { CirclePlusIcon } from "public/icons/circle-plus-icon";
import { ProfileArtworkIcon } from "public/icons/profile-artwork";
import { ProfileOrderIcon } from "public/icons/profile-order";

function ThemesProfileNavbar() {
  const router = useRouter();

  return (
    <>
      <motion.div
        variants={fadingLeftToRight}
        initial="hidden"
        animate="visible"
        className={s.container}
      >
        <Col className={s.iconBox} span={24}>
          <MobileHomeIcon className={s.icon} onClick={() => router.push("/")} />
        </Col>
        <Col className={s.iconBox} span={24}>
          <MobileAccountIcon
            className={`${s.icon} ${router.pathname == "/profile" && s.active}`}
            onClick={() => router.push("/profile")}
          />
        </Col>
        <Col className={s.iconBox} span={24}>
          <div className={s.plusIconBox} onClick={() => router.push("/profile/studio/create")}>
            <CirclePlusIcon className={s.plusIcon} />
          </div>
        </Col>
        <Col className={s.iconBox} span={24}>
          <ProfileArtworkIcon
            className={`${s.icon} ${router.pathname == "/profile/studio" && s.active}`}
            onClick={() => router.push("/profile/studio")}
          />
        </Col>
        <Col className={s.iconBox} span={24}>
          <ProfileOrderIcon
            className={`${s.icon} ${router.pathname == "/profile/transaction" && s.active}`}
            onClick={() => router.push("/profile/transaction")}
          />
        </Col>
      </motion.div>
    </>
  );
}

export default ThemesProfileNavbar;
