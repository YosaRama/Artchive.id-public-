// Libs
import propTypes from "prop-types";
import Link from "next/link";

// Icons
import { ArrowRightOutlined } from "@ant-design/icons";

// Styles
import s from "./index.module.scss";

function ThemesLinkWithArrow(props) {
  const { text, link } = props;

  return (
    <>
      <Link href={link ? link : "/"}>
        <a className={s.textContainer}>
          {text} <ArrowRightOutlined />
        </a>
      </Link>
    </>
  );
}

ThemesLinkWithArrow.propTypes = {
  text: propTypes.any,
  link: propTypes.string.isRequired,
};

export default ThemesLinkWithArrow;
