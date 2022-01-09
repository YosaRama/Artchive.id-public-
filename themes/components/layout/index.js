// Libs
import { Layout } from "antd";
const { Content } = Layout;

// Component
import PageHeader from "./header";
import PageFooter from "./footer";

// Styles
import s from "./index.module.scss";

function PageLayout(props) {
  const { children } = props;
  return (
    <>
      <Layout>
        <PageHeader />
        <Content className={s.content} id="frontpage">
          {children}
        </Content>
        <PageFooter />
      </Layout>
    </>
  );
}

export default PageLayout;
