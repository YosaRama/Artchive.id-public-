// Libs
import { useRouter } from "next/router";
import { Affix, Layout } from "antd";
const { Content } = Layout;

// Components
import ThemesHeader from "./header";
import ThemesFooter from "./footer";
import ThemesContainerProfile from "themes/components/container/profile";
import ThemesMobileNavbar from "../libs/mobile-navbar";

// Styles
import s from "./index.module.scss";
import ThemesProfileMobileNavbar from "../libs/profile-mobile-navbar";

function ThemesLayout(props) {
  const { children } = props;
  const router = useRouter();

  return (
    <>
      <Layout>
        <Affix className={s.header}>
          <ThemesHeader />
        </Affix>
        <Content className={s.content} id="frontpage">
          {router.pathname.startsWith("/profile") ? (
            <ThemesContainerProfile>{children}</ThemesContainerProfile>
          ) : (
            <>{children}</>
          )}
        </Content>
        <ThemesFooter />

        {/* MAIN MOBILE NAVBAR */}
        {!router.pathname.startsWith("/profile") && (
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
      </Layout>
    </>
  );
}

export default ThemesLayout;
