// Libs
import propTypes from "prop-types";
import { Col, Row } from "antd";

// Styles
import s from "./index.module.scss";

// Icons
import { InstagramOutlined, FacebookOutlined, MailOutlined } from "@ant-design/icons";
import { WhatsappIcon } from "public/icons/whatsapp-icon";

function ThemesShareSocial(props) {
  const { mail, facebook, instagram, whatsapp, subject, url, message } = props;
  return (
    <>
      <Row gutter={[12, 0]} className={s.socialProfileBox}>
        <Col span={24}>
          <p className={s.shareTitle}>Share to:</p>
        </Col>
        {mail && (
          <a
            href={`mailto:?subject=${subject}&amp;body=${message}. Please take a look to this site ${url}.`}
          >
            <Col>
              <MailOutlined className={s.socialIcon} />
            </Col>
          </a>
        )}
        {instagram && (
          <a href={""} target={"_blank"} rel="noreferrer">
            <Col>
              <InstagramOutlined className={s.socialIcon} />
            </Col>
          </a>
        )}
        {facebook && (
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
            target={"_blank"}
            rel="noreferrer"
          >
            <Col>
              <FacebookOutlined className={s.socialIcon} />
            </Col>
          </a>
        )}
        {whatsapp && (
          <a
            href={`https://api.whatsapp.com/send?text=${message}. Please take a look to this site ${url}`}
            target={"_blank"}
            rel="noreferrer"
          >
            <Col>
              <WhatsappIcon className={s.socialIcon} />
            </Col>
          </a>
        )}
      </Row>
    </>
  );
}

ThemesShareSocial.propTypes = {
  mail: propTypes.bool,
  facebook: propTypes.bool,
  instagram: propTypes.bool,
  whatsapp: propTypes.bool,
  subject: propTypes.string,
  url: propTypes.string,
  message: propTypes.string,
};

export default ThemesShareSocial;
