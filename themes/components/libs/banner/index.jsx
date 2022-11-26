// Libs
import propTypes from "prop-types";
import Image from "next/image";
import { Col } from "antd";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useState } from "react";
import { fading } from "app/database/framer-motion";

// Components
import ThemesContainerMain from "themes/components/container/main";
import ThemesNavbarDrawer from "../navbar-drawer";

// Styles
import s from "./index.module.scss";

// Icons
import ThemesHeaderItem from "themes/components/layout/header-v2/header-item";

function ThemesBanner(props) {
  const router = useRouter();
  const { children, imgSrc, className } = props;

  //? ============== Open Menu Drawer ============= ?//
  const [openMenu, setOpenMenu] = useState(false);
  // * ====================================== * //

  return (
    <motion.div
      variants={fading}
      initial="hidden"
      animate="visible"
      span={24}
      className={`${s.container} ${className}`}
    >
      <Col span={24} className={`${s.image} banner-image`}>
        <Image src={imgSrc} alt="" layout="fill" objectFit="cover" preview={false} />
      </Col>
      <Col className={s.headerContainer}>
        <ThemesContainerMain>
          <ThemesHeaderItem isTransparent={true} logo="/images/logo-text-white.png" />
        </ThemesContainerMain>
      </Col>
      <ThemesNavbarDrawer visible={openMenu} onClose={() => setOpenMenu(false)} />

      <Col className={`${s.contentContainer} banner-content-container`}>{children}</Col>
    </motion.div>
  );
}

ThemesBanner.propTypes = {
  children: propTypes.node,
  imgSrc: propTypes.string.isRequired,
  className: propTypes.string,
};

export default ThemesBanner;
