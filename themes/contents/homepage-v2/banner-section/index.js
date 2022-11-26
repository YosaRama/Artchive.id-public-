// Libs
import { motion } from "framer-motion";
import { fadeTopToBottom } from "app/database/framer-motion";

// Components
import ThemesBanner from "themes/components/libs/banner";
import ThemesHomepageSearchBox from "themes/components/libs/homepage-search-box";

// Styles
import s from "./index.module.scss";
import ThemesContainerMain from "themes/components/container/main";

function ThemesContentsHomepageV2BannerSection() {
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
    </>
  );
}

export default ThemesContentsHomepageV2BannerSection;
