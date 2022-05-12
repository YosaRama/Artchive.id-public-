// Libs
import propTypes from "prop-types";
import Masonry from "react-masonry-css";

// Styles
import s from "./index.module.scss";

function ThemesContainerMasonry(props) {
  const { children, breakPoint, className, columnClassName } = props;
  return (
    <Masonry
      breakpointCols={breakPoint}
      className={`${s.grid} ${className}`}
      columnClassName={`${s.column} ${columnClassName}`}
    >
      {children}
    </Masonry>
  );
}

ThemesContainerMasonry.propTypes = {
  children: propTypes.node,
  breakPoint: propTypes.number,
  className: propTypes.string,
  columnClassName: propTypes.string,
};

export default ThemesContainerMasonry;
