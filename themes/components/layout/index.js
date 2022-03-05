// Libs
import { useRouter } from "next/router";
import { Affix, Layout } from "antd";
const { Content } = Layout;

// Components
import ThemesHeader from "./header";
import ThemesFooter from "./footer";
import ThemesContainerProfile from "themes/components/container/profile";
import ThemeMobileNavbar from "../libs/mobile-navbar";

// Styles
import s from "./index.module.scss";

function ThemesLayout(props) {
  const { children } = props;
  const router = useRouter();

  console.log();
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

        {/* MOBILE NAVBAR */}
        <Affix offsetBottom={0} className={s.mobileMenu}>
          <ThemeMobileNavbar />
        </Affix>
        {/* ============================ */}
      </Layout>
    </>
  );
}

export default ThemesLayout;
