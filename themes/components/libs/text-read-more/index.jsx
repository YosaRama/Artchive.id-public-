import { Col } from "antd";
import { useState } from "react";

import s from "./index.module.scss";
function ThemesTextReadMore({ children, textLength }) {
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <>
      <Col className={s.text}>
        <p>
          {isReadMore
            ? children?.length > textLength && `${children?.slice(0, textLength)} ...`
            : children}
        </p>
        {children?.length > textLength && (
          <p onClick={toggleReadMore} className={s.toogle}>
            {isReadMore ? "read more" : " show less"}
          </p>
        )}
      </Col>
    </>
  );
}

export default ThemesTextReadMore;
