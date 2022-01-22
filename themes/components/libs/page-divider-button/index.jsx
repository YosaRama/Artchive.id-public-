// Libs
import { Divider } from "antd";

// Components
import PageButton from "themes/components/libs/page-button";

// Styles
import s from "./index.module.scss";

function PageDividerButton(props) {
  const { children } = props;
  return (
    <Divider style={{ margin: 0 }} className={s.divider}>
      <PageButton type="outlined">{children}</PageButton>
    </Divider>
  );
}

export default PageDividerButton;
