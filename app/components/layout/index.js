import { Layout, Avatar, Col, Row, Popover } from "antd";
import Sidebar from "./sider";
import Content from "./content";
// import { signOut } from "next-auth/client";

const { Header, Footer } = Layout;

function DashboardLayout({ children }) {
  const handleLogout = () => {
    console.log("I am Logout");
    // signOut({ callbackUrl: `/dashboard` });
  };

  const popOverContent = (
    <div className="dashboard-header-user-popover">
      <p className="dashboard-header-logout" onClick={handleLogout}>
        Logout
      </p>
    </div>
  );

  return (
    <Layout
      style={{ minHeight: "100vh" }}
      className="main-dashboard-layout"
      id="dashboard"
    >
      <Sidebar />
      <Layout className="site-layout">
        <Header
          className="site-layout-background dashboard-layout-header"
          style={{ padding: 0 }}
        >
          <Row justify="end">
            <Col span={1} className="dashboard-header-ava">
              <Popover
                placement="bottomRight"
                trigger="click"
                content={popOverContent}
              >
                <Avatar src="/images/profile-default.png" />
              </Popover>
            </Col>
          </Row>
        </Header>
        <Content>{children}</Content>
        <Footer style={{ textAlign: "center" }}>
          Yosa Template v1.0 ©2021
        </Footer>
      </Layout>
    </Layout>
  );
}

export default DashboardLayout;
