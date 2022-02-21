// Libs
import { signOut } from "next-auth/react";
import { Layout, Avatar, Col, Row, Popover, Dropdown, Menu } from "antd";
import { useRouter } from "next/router";
const { Header, Footer } = Layout;

// Component
import AppSider from "./sider";
import AppLayoutContent from "./content";

// Icon
import { LogoutOutlined } from "@ant-design/icons";

function AppLayout({ children }) {
  const router = useRouter();

  //? ============== Handle Logout ============= ?//
  const handleLogout = () => {
    signOut({ callbackUrl: "/managepage" });
  };
  // * ====================================== * //

  //? ============== Avatar Dropdown Content ============= ?//
  const popOverContent = (
    <Menu>
      <Menu.Item key="logout">
        <a onClick={handleLogout}>
          <span style={{ marginRight: 10 }}>
            <LogoutOutlined />
          </span>
          Logout
        </a>
      </Menu.Item>
    </Menu>
  );
  // * ====================================== * //

  return (
    <Layout style={{ minHeight: "100vh" }} className="main-dashboard-layout" id="dashboard">
      {/* Sidebar Section */}
      <AppSider />
      {/* ============================ */}

      <Layout className="site-layout">
        {/* Header Section */}
        <Header className="site-layout-background dashboard-layout-header" style={{ padding: 0 }}>
          <Row justify="end">
            <Col span={1} className="dashboard-header-ava">
              <Dropdown placement="bottomCenter" trigger="click" overlay={popOverContent}>
                <Avatar src="/images/profile-default.png" />
              </Dropdown>
            </Col>
          </Row>
        </Header>
        {/* ============================ */}

        {/* Content Section */}
        <AppLayoutContent>
          {children}
          {/* Footer Section */}
          <Footer style={{ textAlign: "center", marginTop: 50 }}>Artchive v1.0 ©2021</Footer>
          {/* ============================ */}
        </AppLayoutContent>
        {/* ============================ */}
      </Layout>
    </Layout>
  );
}

export default AppLayout;
