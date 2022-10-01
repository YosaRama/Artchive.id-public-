// Libs
import { Card, Col, Row, Avatar } from "antd";
import { useState } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

// Styles
import s from "./index.module.scss";

// Hooks
import { useUser } from "app/hooks/user";

// Icons
import { MobileHomeIcon } from "public/icons/mobile-home-icon";
import { MobileAccountIcon } from "public/icons/mobile-account-icon";
import { CirclePlusIcon } from "public/icons/circle-plus-icon";
import { ProfileArtworkIcon } from "public/icons/profile-artwork";
import { ProfileOrderIcon } from "public/icons/profile-order";

function ThemesProfileMobileNavbar() {
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
            <ProfileArtworkIcon
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
            <ProfileOrderIcon
              className={`${s.menuItemIcon} ${s.menuOrderIcon}`}
              onClick={() => {
                router.push("/profile/transaction");
                handleSelectMenu("ARTIST");
              }}
            />
          </Col>
          <Col
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
                // style={{ margin: "0px 15px" }}
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
    </>
  );
}

export default ThemesProfileMobileNavbar;
