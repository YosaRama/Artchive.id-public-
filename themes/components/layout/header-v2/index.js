// Libs
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { Avatar, Col, Layout, Row, Badge } from "antd";
import Image from "next/image";
const { Header } = Layout;
import ThemesNotificationModal from "./notification-header";
import { motion } from "framer-motion";
import { HideDuring, HideOn, Hide } from "react-hide-on-scroll";
import Link from "next/link";

// Components
import ThemesContainerMain from "themes/components/container/main";
import ThemesButton from "themes/components/libs/button";
import ThemesNavbarDrawer from "themes/components/libs/navbar-drawer";
import ThemesHeaderCart from "./cart-modal";

// Hooks
import { useUser } from "app/hooks/user";
import { useWindowSize } from "app/helpers/useWindowSize";
import { useCarts } from "app/hooks/cart";

// Icons
import { MenuOutlined, BellFilled } from "@ant-design/icons";
import { CartIcon } from "public/icons/cart-icon";

// Styles
import s from "./index.module.scss";
import { fadeTopToBottom } from "app/database/framer-motion";

// Dummy
import { notificationList } from "app/database/dummy/notification";

function ThemesHeader() {
  const router = useRouter();
  console.log(router);
  // * ====================================== * //
  //? ============== User Hook ============= ?//
  const [iconVisible, setIconVisible] = useState(false);
  // * ====================================== * //

  //? ============== Open Menu Drawer ============= ?//
  const [openMenu, setOpenMenu] = useState(false);
  // * ====================================== * //

  //? ============== Handle User ============= ?//
  const { data: session, status: sessionStatus } = useSession();
  const userId = session?.user.id;
  // * ====================================== * //

  //? ============== User Hook ============= ?//
  const { data: userData } = useUser({ singleId: session?.user?.id || null });
  // * ====================================== * //

  //? ============== Cart Hooks ============= ?//
  const { data: cartItem } = useCarts({ queryString: `id=${userId}` }); //TODO : Change ID with current user ID//
  // * ====================================== * //

  const { width } = useWindowSize();
  const header = (
    <motion.div variants={fadeTopToBottom} initial="hidden" animate="visible">
      <Header className={s.container}>
        <ThemesContainerMain>
          <Row className={s.header}>
            <Col className={s.logo} onClick={() => router.push("/")}>
              {" "}
              <Image
                src="/images/logo-without-text.png"
                alt=""
                layout="fill"
                objectFit="contain"
                okButtonProps={{
                  visible: false,
                }}
                cancelButtonProps={{
                  visible: false,
                }}
              />
            </Col>

            <Col>
              <>
                {width > 1024 && (
                  <Row gutter={[30, 30]} style={{ display: "flex", alignItems: "center" }}>
                    <Col className={s.iconHeader}>
                      <Link href="/artwork">
                        <a>ARTWORK</a>
                      </Link>
                    </Col>
                    <Col className={s.iconHeader}>
                      <Link href="/artist">
                        <a>ARTIST</a>
                      </Link>
                    </Col>
                    <Col className={s.iconHeader}>
                      <Link href="/exhibition">
                        <a>EXHIBITION</a>
                      </Link>
                    </Col>
                    <Col className={s.iconHeader}>
                      <Link href="/articles">
                        <a>ARTICLES</a>
                      </Link>
                    </Col>
                    {session && (
                      <>
                        <Col className={s.iconHeader}>
                          <Link href="/profile/studio/create">
                            <a>STUDIO</a>
                          </Link>
                        </Col>

                        <Col onChange={(e) => setIconVisible()} className={s.iconHeader}>
                          <Badge
                            count={cartItem?.length}
                            size="small"
                            style={{ backgroundColor: "#e5890a" }}
                          >
                            <Link href="/cart">
                              <a>CART</a>
                            </Link>
                          </Badge>
                        </Col>
                        <Col className={s.iconHeader}>
                          <div className={s.nameContainer} onClick={() => router.push("/profile")}>
                            <div className={s.userName}>{session.user.full_name}</div>
                            <p className={s.userRole}>{session.user.role}</p>
                          </div>
                        </Col>
                        <div
                          style={{ marginRight: "15px" }}
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
                      </>
                    )}
                    {!session && (
                      <>
                        <Col>
                          <ThemesButton
                            style={{ display: "flex", justifyContent: "center" }}
                            type="outlined"
                            onClick={() => router.push("/signin")}
                          >
                            LOGIN
                          </ThemesButton>
                        </Col>
                        <Col>
                          <ThemesButton
                            style={{ display: "flex", justifyContent: "center" }}
                            onClick={() => router.push("/register")}
                            type={`default ${s.mobileHidden}`}
                          >
                            REGISTER
                          </ThemesButton>
                        </Col>
                      </>
                    )}
                  </Row>
                )}

                {width <= 1024 && (
                  <Row gutter={[15, 15]}>
                    {session && (
                      <>
                        <Col className={s.iconHeader}>
                          <Link href="/artwork">
                            <a>ARTWORK</a>
                          </Link>
                        </Col>
                        <Col className={s.iconHeader}>
                          <Link href="/artist">
                            <a>ARTIST</a>
                          </Link>
                        </Col>
                        <Col onChange={(e) => setIconVisible()} className={s.iconHeader}>
                          <Badge
                            count={cartItem?.length}
                            size="small"
                            style={{ backgroundColor: "#e5890a" }}
                          >
                            <Link href="/cart">
                              <a>CART</a>
                            </Link>
                          </Badge>
                        </Col>
                        <Col className={s.iconHeader}>
                          <div className={s.nameContainer} onClick={() => router.push("/profile")}>
                            <div className={s.userName}>{session.user.full_name}</div>
                            <p className={s.userRole}>{session.user.role}</p>
                          </div>
                        </Col>
                        <div
                          style={{ marginRight: "15px" }}
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
                      </>
                    )}
                    {!session && (
                      <>
                        <Col>
                          <ThemesButton
                            style={{ display: "flex", justifyContent: "center" }}
                            type="outlined"
                            onClick={() => router.push("/signin")}
                          >
                            LOGIN
                          </ThemesButton>
                        </Col>
                        <Col>
                          <ThemesButton
                            style={{ display: "flex", justifyContent: "center" }}
                            onClick={() => router.push("/register")}
                            type={`default ${s.mobileHidden}`}
                          >
                            REGISTER
                          </ThemesButton>
                        </Col>
                      </>
                    )}
                    <Col className={s.iconHeader}>
                      <MenuOutlined
                        style={{ cursor: "pointer" }}
                        className={`${s.hamburger}`}
                        onClick={() => setOpenMenu(true)}
                      />
                    </Col>
                  </Row>
                )}
              </>
            </Col>
          </Row>
        </ThemesContainerMain>
      </Header>
    </motion.div>
  );
  return (
    <>
      {router.pathname !== "/" &&
      router.pathname !== "/artwork" &&
      router.pathname !== "/artist" &&
      router.pathname !== "/exhibition" &&
      router.pathname !== "/articles" &&
      router.pathname !== "/about" ? (
        <>{header}</>
      ) : (
        <HideOn inverse={true} atHeight height={150}>
          {header}
        </HideOn>
      )}

      <ThemesNavbarDrawer visible={openMenu} onClose={() => setOpenMenu(false)} />
    </>
  );
}

export default ThemesHeader;
