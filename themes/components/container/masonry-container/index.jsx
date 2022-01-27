// Libs
import propTypes from "prop-types";
import Masonry from "react-masonry-css";

// Styles
import s from "./index.module.scss";

function MasonryContainer(props) {
  const { children, breakPoint } = props;
  return (
    <Masonry breakpointCols={breakPoint} className={s.grid} columnClassName={s.column}>
      {children}
    </Masonry>
  );
}

MasonryContainer.propTypes = {
  children: propTypes.node,
  breakPoint: propTypes.number,
};

export default MasonryContainer;
