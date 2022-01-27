// Libs
import propTypes from "prop-types";
import { Divider } from "antd";

// Components
import PageButton from "themes/components/libs/page-button";

// Styles
import s from "./index.module.scss";

function PageDividerButton(props) {
  const { children, onClick } = props;
  return (
    <Divider style={{ margin: 0 }} className={s.divider}>
      <PageButton type="outlined" onClick={onClick}>
        {children}
      </PageButton>
    </Divider>
  );
}

PageDividerButton.propTypes = {
  children: propTypes.node,
  onClick: propTypes.func,
};

export default PageDividerButton;
