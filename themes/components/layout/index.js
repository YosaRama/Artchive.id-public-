// Libs
import { Layout } from "antd";
const { Content } = Layout;

// Component
import ThemesHeader from "./header";
import ThemesFooter from "./footer";

// Styles
import s from "./index.module.scss";

function ThemesLayout(props) {
  const { children } = props;
  return (
    <>
      <Layout>
        <ThemesHeader />
        <Content className={s.content} id="frontpage">
          {children}
        </Content>
        <ThemesFooter />
      </Layout>
    </>
  );
}

export default ThemesLayout;
