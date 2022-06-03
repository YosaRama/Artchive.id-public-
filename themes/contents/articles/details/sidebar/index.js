// Libs
import moment from "moment";
import propTypes from "prop-types";
import { Col } from "antd";

// Components
import ThemesShareSocial from "themes/components/libs/share-social";
import ThemesThumbnailCard from "themes/components/libs/thumbnail-card";

// Styles
import s from "./index.module.scss";

function ThemesContentsArticleSidebar(props) {
  const { title, author, postDate, slug } = props;
  return (
    <>
      <Col span={24}>
        <h1 className={s.sideTitle}>Author</h1>
        <p>{author && author}</p>
      </Col>
      <Col span={24}>
        <h1 className={s.sideTitle}>Posted Date</h1>
        <p>{postDate && moment(postDate).format("DD MMMM YYYY")}</p>
      </Col>
      <Col span={24}>
        <ThemesShareSocial
          className={s.shareSection}
          facebook={true}
          mail={true}
          whatsapp={true}
          url={`/articles/${slug}`}
          message={`Did you know about this ? article from Artchive.id with title ${title}`}
        />
      </Col>
      {/* <Col span={24} className={s.thumbnailSection}> //TODO : Create Algorithm for popular articles
        <h1 className={s.sideTitle}>Popular Article</h1>
        <ThemesThumbnailCard
          title={title}
          subtitle={postDate}
          imageWidthDesktop={8}
          imageWidthMobile={10}
          className={s.thumbnailCard}
        />
      </Col> */}
    </>
  );
}

ThemesContentsArticleSidebar.propsType = {
  title: propTypes.string,
  author: propTypes.string,
  date: propTypes.string,
  slug: propTypes.string,
};

export default ThemesContentsArticleSidebar;
