// Libs
import propTypes from "prop-types";
import Image from "next/image";
import { Col } from "antd";
import { motion } from "framer-motion";
import { useState } from "react";
import { fading } from "app/database/framer-motion";
import { useRouter } from "next/router";

// Styles
import s from "./index.module.scss";

// Icons
import ThemesHeaderItem from "themes/components/layout/header-v2/header-item";
import ThemesAuctionHeaderItem from "themes/components/layout/header-v2/auction-header-item";

function ThemesBanner(props) {
  const { children, imgSrc, className } = props;
  const router = useRouter();

  return (
    <motion.div
      variants={fading}
      initial="hidden"
      animate="visible"
      span={24}
      className={`${s.container} ${className}`}
    >
      <Col span={24} className={`${s.image} banner-image`}>
        <Image src={imgSrc} alt="" layout="fill" objectFit="cover" />
      </Col>
      <Col className={s.headerContainer}>
        {router.pathname.startsWith("/auction/[id]") ? (
          <ThemesAuctionHeaderItem isTransparent={true} logo={true} />
        ) : (
          <ThemesHeaderItem isTransparent={true} logo="/images/logo-text-white.png" />
        )}
      </Col>
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
