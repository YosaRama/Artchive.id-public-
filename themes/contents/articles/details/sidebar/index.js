// Libs
import { Col } from "antd";

// Components
import ThemesShareSocial from "themes/components/libs/share-social";
import ThemesThumbnailCard from "themes/components/libs/thumbnail-card";

// Styles
import s from "./index.module.scss";

function ThemesContentsArticleSidebar() {
  return (
    <>
      <Col span={24}>
        <h1 className={s.sideTitle}>Author</h1>
        <p>[Author Name]</p>
      </Col>
      <Col span={24}>
        <h1 className={s.sideTitle}>Posted Date</h1>
        <p>[Article Date]</p>
      </Col>
      <Col span={24}>
        <ThemesShareSocial
          className={s.shareSection}
          facebook={true}
          mail={true}
          whatsapp={true}
          url="/[this-link]"
          message="Did you know about this ? article from Artchive.id with title [article title]"
        />
      </Col>
      <Col span={24} className={s.thumbnailSection}>
        <h1 className={s.sideTitle}>Popular Article</h1>
        <ThemesThumbnailCard
          title="[Article Title]"
          subtitle="[post date]"
          imageWidthDesktop={8}
          imageWidthMobile={10}
          className={s.thumbnailCard}
        />
      </Col>
    </>
  );
}

export default ThemesContentsArticleSidebar;
