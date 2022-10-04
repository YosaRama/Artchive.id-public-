// Libs
import { Card, Col, Row, Avatar } from "antd";
import { useState } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { motion } from "framer-motion";

// Styles
import s from "./index.module.scss";
import { fadingBottomToTop } from "app/database/framer-motion";

// Hooks
import { useUser } from "app/hooks/user";

// Icons
import { ArtworkIcon } from "/public/icons/artwork-icon";
import { MobileHomeIcon } from "public/icons/mobile-home-icon";
import { MobileArtworkIcon } from "public/icons/mobile-artwork-icon";
import { MobileArtistListIcon } from "public/icons/mobile-artist-list-icon";
import { MobileAccountIcon } from "public/icons/mobile-account-icon";

function ThemesMobileNavbar() {
  const router = useRouter();

  //? ============== Handle Active Menu ============= ?//
  const [activeMenu, setActiveMenu] = useState("HOME");
  const handleSelectMenu = (value) => {
    setActiveMenu(value);
  };
  // * ====================================== * //

  //? ============== Handle User ============= ?//
  const { data: session, status: sessionStatus } = useSession();
  const userId = session?.user.id;
  // * ====================================== * //

  //? ============== User Hook ============= ?//
  const { data: userData } = useUser({ singleId: session?.user?.id || null });
  // * ====================================== * //

  return (
    <>
      <motion.div variants={fadingBottomToTop} initial="hidden" animate="visible">
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
              {!userId ? (
                <MobileAccountIcon
                  className={s.menuItemIcon}
                  onClick={() => {
                    router.push("/profile");
                    handleSelectMenu("PROFILE");
                  }}
                />
              ) : (
                <div
                  style={{ margin: "0px 15px" }}
                  onClick={() => router.push("/profile")}
                  className={`${s.mobileHidden}`}
                >
                  <Avatar
                    src={
                      userData?.profile
                        ? `${process.env.NEXT_PUBLIC_S3_URL}/${userData?.profile?.url}`
                        : "/images/profile-default.png"
                    }
                    className={s.avatar}
                  />
                </div>
              )}
            </Col>
          </Row>
        </Card>
      </motion.div>
    </>
  );
}

export default ThemesMobileNavbar;
