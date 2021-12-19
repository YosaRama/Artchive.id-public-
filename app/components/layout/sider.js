import { Col, Layout, Menu } from "antd";
import { HomeOutlined, BellOutlined } from "@ant-design/icons";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

const DashboardSider = (props) => {
  const router = useRouter();
  const { Sider } = Layout;
  const { SubMenu } = Menu;
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };

  return (
    <>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <Col span={24} className="dashboard-header-logo-container">
          <div
            className="dashboard-header-logo"
            style={{ position: "relative" }}
          >
            <Image
              src={
                !collapsed
                  ? "/images/header-logo-white.svg"
                  : "/images/favicon.svg"
              }
              objectFit="contain"
              layout="fill"
              alt=""
            />
          </div>
        </Col>
        <Menu theme="dark" mode="inline" selectedKeys={router.pathname}>
          <Menu.Item key="/dashboard" icon={<HomeOutlined />}>
            <Link href="/dashboard">Home</Link>
          </Menu.Item>
          <SubMenu icon={<BellOutlined />} title="Option" key="1">
            <Menu.Item key="/dashboard/options">
              <Link href="/dashboard/options">Option 1</Link>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    </>
  );
};

export default DashboardSider;
