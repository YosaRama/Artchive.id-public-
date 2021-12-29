// Libs
import { Col, Layout, Menu } from "antd";
import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
const { Sider } = Layout;
const { SubMenu } = Menu;

// Icon
import { HomeOutlined, UserOutlined, PictureOutlined } from "@ant-design/icons";

const DashboardSider = (props) => {
  const router = useRouter();

  // Handle collapse menu
  const [collapsed, setCollapsed] = useState(false);
  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };
  // =======================

  return (
    <>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={onCollapse}
        theme="light"
        className="dashboard-sider"
      >
        <Col span={24} className="dashboard-header-logo-container">
          <div className="dashboard-header-logo" style={{ position: "relative" }}>
            <Image
              src={!collapsed ? "/images/favicon.svg" : "/images/favicon.jpg"}
              objectFit="contain"
              layout="fill"
              alt=""
            />
          </div>
        </Col>
        {/* Menu Section */}
        <Menu theme="light" mode="inline" selectedKeys={router.pathname}>
          {/* Homepage Menu Section */}
          <Menu.Item key="/dashboard" icon={<HomeOutlined />}>
            <Link href="/dashboard">Home</Link>
          </Menu.Item>
          {/* ============================ */}

          {/* User Menu Section */}
          <SubMenu icon={<UserOutlined />} title="Users" key="1">
            <Menu.Item key="/dashboard/users/artist">
              <Link href="/dashboard/users/artist">Artist</Link>
            </Menu.Item>
            <Menu.Item key="/dashboard/users/collector">
              <Link href="/dashboard/users/collector">Collector</Link>
            </Menu.Item>
            <Menu.Item key="/dashboard/users/gallery">
              <Link href="/dashboard/users/gallery">Gallery</Link>
            </Menu.Item>
          </SubMenu>
          {/* ============================ */}

          {/* Artwork Menu Section */}
          <Menu.Item key="/dashboard/artworks" icon={<PictureOutlined />}>
            <Link href="/dashboard/artworks">Artwork</Link>
          </Menu.Item>
          {/* ============================ */}
        </Menu>
        {/* ============================ */}
      </Sider>
    </>
  );
};

export default DashboardSider;
