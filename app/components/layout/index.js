// Libs
import { Layout, Avatar, Col, Row, Popover, Dropdown, Menu } from "antd";
import { useRouter } from "next/router";
const { Header, Footer } = Layout;
// import { signOut } from "next-auth/client";

// Component
import Sidebar from "./sider";
import Content from "./content";

// Icon
import { LogoutOutlined } from "@ant-design/icons";

function DashboardLayout({ children }) {
  const router = useRouter();

  // Handle logout
  const handleLogout = () => {
    router.push("/managepage");
    // signOut({ callbackUrl: `/dashboard` });
  };
  // ==================

  // Handle avatar dropdown content
  const popOverContent = (
    <Menu>
      <Menu.Item>
        <a onClick={handleLogout}>
          <span style={{ marginRight: 10 }}>
            <LogoutOutlined />
          </span>
          Logout
        </a>
      </Menu.Item>
    </Menu>
  );
  // ====================

  return (
    <Layout style={{ minHeight: "100vh" }} className="main-dashboard-layout" id="dashboard">
      <Sidebar />
      <Layout className="site-layout">
        <Header className="site-layout-background dashboard-layout-header" style={{ padding: 0 }}>
          <Row justify="end">
            <Col span={1} className="dashboard-header-ava">
              <Dropdown placement="bottomCenter" trigger="click" overlay={popOverContent}>
                <Avatar src="/images/profile-default.png" />
              </Dropdown>
            </Col>
          </Row>
        </Header>
        <Content>{children}</Content>
        <Footer style={{ textAlign: "center" }}>Artchive v1.0 ©2021</Footer>
      </Layout>
    </Layout>
  );
}

export default DashboardLayout;
