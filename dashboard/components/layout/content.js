import { Content } from "antd/lib/layout/layout";

function AppLayoutContent(props) {
  return (
    <Content>
      <div className="site-layout-background main-content-container">{props.children}</div>
    </Content>
  );
}

export default AppLayoutContent;
