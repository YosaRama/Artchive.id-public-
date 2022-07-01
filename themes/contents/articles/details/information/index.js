// Libs
import moment from "moment";
import propTypes from "prop-types";
import { Carousel, Col, Image } from "antd";

// Styles
import s from "./index.module.scss";

function ThemesContentsArticleInformation(props) {
  const { title, tag, postDate, description, gallery } = props;
  return (
    <>
      <Col span={24}>
        <h1 className={s.title}>{title && title}</h1>
        <div className={s.tagList}>
          {tag &&
            tag.map((item) => {
              <span>{item}</span>;
            })}
        </div>
        <p className={s.postDate}>{moment(postDate).format("DD MMMM YYYY")}</p>
      </Col>
      <Col className={s.bannerImgContainer}>
        <Carousel autoplay>
          {gallery &&
            gallery.map((item, index) => {
              return (
                <Image
                  key={index}
                  src={
                    item.url
                      ? `${process.env.NEXT_PUBLIC_S3_URL}/${item.url}`
                      : "/images/default-images.jpg"
                  }
                  alt=""
                />
              );
            })}
        </Carousel>
      </Col>
      <Col>
        <div dangerouslySetInnerHTML={{ __html: description }} className={s.content} />
      </Col>
    </>
  );
}

ThemesContentsArticleInformation.propTypes = {
  title: propTypes.string,
  tag: propTypes.array,
  postDate: propTypes.string,
  description: propTypes.string,
  gallery: propTypes.array,
};

export default ThemesContentsArticleInformation;
