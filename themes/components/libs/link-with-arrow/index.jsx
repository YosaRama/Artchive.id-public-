// Libs
import propTypes from "prop-types";
import { useRouter } from "next/router";

// Icons
import { ArrowRightOutlined } from "@ant-design/icons";

function ThemesLinkWithArrow(props) {
  const router = useRouter();
  const { text, link } = props;

  //? ============== Handle Direction ============= ?//
  const handleLink = () => {
    router.push(link);
  };
  // * ====================================== * //

  return (
    <>
      <a onClick={handleLink}>
        {text} <ArrowRightOutlined />
      </a>
    </>
  );
}

ThemesLinkWithArrow.propTypes = {
  text: propTypes.any,
  link: propTypes.string.isRequired,
};

export default ThemesLinkWithArrow;
