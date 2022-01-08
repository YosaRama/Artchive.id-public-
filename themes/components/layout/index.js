// Libs
import { Layout } from "antd";
const { Header, Footer, Content } = Layout;

// Component
import PageHeader from "./header";
import PageFooter from "./footer";

function PageLayout(props) {
  const { children } = props;
  return (
    <>
      <Header>
        <PageHeader />
      </Header>
      <Content className="page-content" id="frontpage">
        {children}
      </Content>
      <Footer>
        <PageFooter />
      </Footer>
    </>
  );
}

export default PageLayout;
