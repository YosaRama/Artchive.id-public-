// Libs
import propTypes from "prop-types";
import { Empty } from "antd";

// Styles
import s from "./index.module.scss";

function ThemesNoData(props) {
  const { description, children } = props;
  return (
    <>
      <section className={s.section}>
        <Empty description={description}>{children}</Empty>
      </section>
    </>
  );
}

ThemesNoData.propTypes = {
  description: propTypes.string,
  children: propTypes.any,
};

export default ThemesNoData;
