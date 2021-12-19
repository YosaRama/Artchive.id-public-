import { Content } from "antd/lib/layout/layout";
import ContainerCard from "../container/containerCard";

function PageContent(props) {
  return (
    <Content>
      <div className="site-layout-background main-content-container">
        {props.children}
      </div>
    </Content>
  );
}

export default PageContent;
