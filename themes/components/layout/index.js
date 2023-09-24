// Libs
import { useRouter } from "next/router";
import { Affix, Col, Layout } from "antd";
const { Content } = Layout;

// Components
import ThemesHeader from "./header";
import ThemesFooter from "./footer/v1";
import ThemesFooterV2 from "./footer/v2";
import ThemesContainerProfile from "themes/components/container/profile";
import ThemesMobileNavbar from "../libs/mobile-navbar";
import ThemesProfileMobileNavbar from "../libs/profile-mobile-navbar";
import ThemesHeaderAutoShow from "./header-v2";

// Icon
import { WhatsappIcon } from "public/icons/whatsapp-icon";

// Styles
import s from "./index.module.scss";

function ThemesLayout(props) {
  const { children } = props;
  const router = useRouter();

  return (
    <>
      <Layout>
        <Affix className={s.header}>
          <ThemesHeaderAutoShow />
        </Affix>
        <Content className={s.content} id="frontpage">
          {router.pathname.startsWith("/profile") ? (
            <ThemesContainerProfile>{children}</ThemesContainerProfile>
          ) : (
            <>{children}</>
          )}
        </Content>
        {/* <ThemesFooter /> */}
        <ThemesFooterV2 />

        {/* MAIN MOBILE NAVBAR */}
        {!router.pathname.startsWith("/profile") &&
          !router.pathname.startsWith("/auction/[id]/lots") && (
            <Affix offsetBottom={0} className={s.mobileMenu}>
              <ThemesMobileNavbar />
            </Affix>
          )}
        {/* ============================ */}

        {/* PROFILE MOBILE NAVBAR */}
        {router.pathname.startsWith("/profile") && (
          <Affix offsetBottom={0} className={s.mobileMenu}>
            <ThemesProfileMobileNavbar />
          </Affix>
        )}
        {/* ============================ */}

        {/* CHAT BOX */}
        <Col span={24} className={s.chatBoxContainer}>
          <div className={s.chatBox}>
            <a
              href={`https://wa.me/${process.env.NEXT_PUBLIC_PHONE_NUMBER}`}
              target="_blank"
              rel="noreferrer"
            >
              <WhatsappIcon />
            </a>
          </div>
        </Col>
        {/* ============================ */}
      </Layout>
    </>
  );
}

export default ThemesLayout;
