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
        {isReadMore ? `${children?.slice(0, textLength)} ...` : children}
        <p onClick={toggleReadMore} className={s.toogle}>
          {isReadMore ? "read more" : " show less"}
        </p>
      </Col>
    </>
  );
}

export default ThemesTextReadMore;
