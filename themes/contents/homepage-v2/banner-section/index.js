// Libs
// import { Col, Image } from "antd";
import { motion } from "framer-motion";
import { fadeTopToBottom } from "dashboard/database/framer-motion";

// Components
import ThemesBanner from "themes/components/libs/banner";
import ThemesHomepageSearchBox from "themes/components/libs/homepage-search-box";

// Hooks
// import { useArtwork } from "dashboard/hooks/artwork";

// Styles
import s from "./index.module.scss";

function ThemesContentsHomepageV2BannerSection() {
  // const { data: artworkData } = useArtwork({ singleId: "5" }); //todo: Getpromoted artwork
  // console.log(artworkData);
  return (
    <>
      <ThemesBanner imgSrc="/images/banner-homepage-1.jpg" className={s.bannerContainer}>
        <motion.div
          variants={fadeTopToBottom}
          initial="hidden"
          whileInView="visible"
          className={s.searchBox}
        >
          <ThemesHomepageSearchBox />
        </motion.div>
      </ThemesBanner>
      {/* <motion.div
        variants={fadeTopToBottom}
        initial="hidden"
        animate="visible"
        className={s.showCase}
      >
        <Col className={s.imageContainer}>
          <Col className={s.border}>
            <Image
              // src={`${process.env.NEXT_PUBLIC_S3_URL}/${artworkData?.media_cover?.url}`}
              // src="/images/artwork-1.jpg" //todo: POTRAIT
              src="/images/artwork-7.jpg" //todo: LANDSCAPE
              alt=""
              preview={false}
            />
          </Col>
        </Col>
      </motion.div> */}
    </>
  );
}

export default ThemesContentsHomepageV2BannerSection;
