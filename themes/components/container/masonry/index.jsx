// Libs
import propTypes from "prop-types";
import Masonry from "react-masonry-css";

// Styles
import s from "./index.module.scss";

function ThemesContainerMasonry(props) {
  const { children, breakPoint } = props;
  return (
    <Masonry breakpointCols={breakPoint} className={s.grid} columnClassName={s.column}>
      {children}
    </Masonry>
  );
}

ThemesContainerMasonry.propTypes = {
  children: propTypes.node,
  breakPoint: propTypes.number,
};

export default ThemesContainerMasonry;
