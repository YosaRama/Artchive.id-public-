// Libs
import { Affix, Layout } from "antd";
const { Content } = Layout;

// Component
import ThemesHeader from "./header";
import ThemesFooter from "./footer";
import ThemeMobileNavbar from "../libs/mobile-navbar";

// Styles
import s from "./index.module.scss";

function ThemesLayout(props) {
  const { children } = props;
  return (
    <>
      <Layout>
        <Affix className={s.header}>
          <ThemesHeader />
        </Affix>
        <Content className={s.content} id="frontpage">
          {children}
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
