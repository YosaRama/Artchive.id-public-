// Libs
import { Divider } from "antd";

// Components
import PageButton from "themes/components/libs/page-button";

function PageDividerButton(props) {
  const { children } = props;
  return (
    <Divider style={{ margin: 0 }}>
      <PageButton type="outlined">{children}</PageButton>
    </Divider>
  );
}

export default PageDividerButton;
