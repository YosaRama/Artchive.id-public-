// Libs
import Link from "next/link";
import Image from "next/image";
import propTypes from "prop-types";
import { Avatar, Badge, Col, Layout, Row } from "antd";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { PlusCircleFilled } from "@ant-design/icons";
import { CartIcon } from "public/icons/cart-icon";

// Components
import ThemesContainerMain from "themes/components/container/main";
import ThemesHeaderCart from "../cart-modal";
import ThemesButton from "themes/components/libs/button";
import ThemesNavbarDrawer from "themes/components/libs/navbar-drawer";

// Helpers
import { useWindowSize } from "dashboard/helpers/useWindowSize";

// Hooks
import { useCarts } from "dashboard/hooks/cart";
import { useUser } from "dashboard/hooks/user";

// Styles
import s from "./index.module.scss";

// Icons
import { MenuOutlined } from "@ant-design/icons";

function ThemesHeaderItem(props) {
  const router = useRouter();
  const { logo = "/images/logo-without-text.png", isTransparent = false } = props;
  const { Header } = Layout;
  const { width } = useWindowSize();

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

  return (
    <>
      <Header className={`${s.container} ${isTransparent ? s.transparent : ""}`}>
        <ThemesContainerMain>
          <Row>
            <Col className={s.headerContainer}>
              <ThemesContainerMain containerClass={s.headerBox}>
                <Row
                  className={`${s.header} ${isTransparent ? s.transparent : ""}`}
                  justify="space-between"
                >
                  <Col
                    className={`${s.logo}`}
                    onClick={() => router.push("/")}
                    xl={{ span: 2 }}
                    lg={{ span: 3 }}
                    md={{ span: 4 }}
                    xs={{ span: 8 }}
                  >
                    <Image
                      src={logo}
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

                  <Col xl={{ span: 22 }} lg={{ span: 21 }} md={{ span: 20 }} xs={{ span: 16 }}>
                    <>
                      <Row
                        gutter={[30, 30]}
                        justify="end"
                        align="middle"
                        className={s.headerItemContainer}
                      >
                        {width > 500 ? (
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
                          </>
                        ) : (
                          ""
                        )}

                        {session && (
                          <>
                            {width > 500 ? (
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
                                {width > 1024 ? (
                                  <Col className={s.iconHeader}>
                                    <Col>
                                      <div
                                        className={s.nameContainer}
                                        onClick={() => router.push("/profile")}
                                      >
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
                                  </Col>
                                ) : (
                                  ""
                                )}
                              </>
                            ) : (
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
                          </>
                        )}
                        {!session && (
                          <>
                            <Col className={`${s.button}`}>
                              <ThemesButton
                                style={{
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                }}
                                type={`outlined`}
                                onClick={() => router.push("/signin")}
                              >
                                LOGIN
                              </ThemesButton>
                            </Col>
                            <Col className={`${s.mobileHidden}`}>
                              <ThemesButton
                                style={{
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                }}
                                onClick={() => router.push("/register")}
                                type={`default`}
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
                    </>
                  </Col>
                </Row>
              </ThemesContainerMain>
            </Col>
          </Row>
        </ThemesContainerMain>
        <ThemesNavbarDrawer visible={openMenu} onClose={() => setOpenMenu(false)} />
      </Header>
    </>
  );
}

ThemesHeaderItem.propTypes = {
  logo: propTypes.string,
  isTransparent: propTypes.bool,
};

export default ThemesHeaderItem;
