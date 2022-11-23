// Libs
import propTypes from "prop-types";
import Image from "next/image";
import { Col, Row, Badge, Avatar } from "antd";
import { motion } from "framer-motion";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Link from "next/link";

// Hooks
import { useUser } from "app/hooks/user";
import { useWindowSize } from "app/helpers/useWindowSize";
import { useCarts } from "app/hooks/cart";

// Styles
import s from "./index.module.scss";
import { fading } from "app/database/framer-motion";
import { isWhiteSpaceLike } from "typescript";
import ThemesContainerMain from "themes/components/container/main";
import ThemesHeaderCart from "themes/components/layout/header-v2/cart-modal";
import ThemesButton from "../button";
import ThemesNavbarDrawer from "../navbar-drawer";

// Icons
import { MenuOutlined, BellFilled } from "@ant-design/icons";
import { CartIcon } from "public/icons/cart-icon";

function ThemesBanner(props) {
  const router = useRouter();
  const { children, imgSrc, className } = props;
  const { width } = useWindowSize();

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

  const bannerClass =
    router.pathname == "/" ? s.containerHomepage + " " + className : s.container + " " + className;
  return (
    <motion.div
      variants={fading}
      initial="hidden"
      animate="visible"
      span={24}
      // className={s.container + " " + className}
      className={bannerClass}
    >
      <Col span={24} className={s.image}>
        <Image src={imgSrc} alt="" layout="fill" objectFit="cover" preview={false} />
      </Col>
      <Col className={s.headerContainer}>
        <ThemesContainerMain>
          <Row className={s.header}>
            <Col className={s.logo} onClick={() => router.push("/")}>
              {" "}
              <Image
                src="/images/logo-text-white.png"
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
                  <Row gutter={[30, 30]}>
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
                            <ThemesHeaderCart />
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

                {width <= 1024 && width > 500 && (
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

                {width <= 500 && (
                  <Row gutter={[15, 15]}>
                    {session && (
                      <>
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
      </Col>
      <ThemesNavbarDrawer visible={openMenu} onClose={() => setOpenMenu(false)} />

      <Col className={s.contentContainer}>{children}</Col>
    </motion.div>
  );
}

ThemesBanner.propTypes = {
  children: propTypes.node,
  imgSrc: propTypes.string.isRequired,
  className: propTypes.string,
};

export default ThemesBanner;
