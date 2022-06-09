// Libs
import { Spin } from "antd";
import FlipBook from "react-pageflip";

// Components
import ThemesContainerMain from "themes/components/container/main";

// Styles
import s from "./index.module.scss";

function ThemesContentsExhibitionCatalogue() {
  return (
    <>
      <ThemesContainerMain>
        <section className={s.section}>
          <FlipBook
            width={550}
            height={733}
            size="stretch"
            minWidth={315}
            maxWidth={1000}
            minHeight={400}
            maxHeight={1533}
            maxShadowOpacity={0.5}
            showCover={true}
            mobileScrollSupport={true}
            className="demo-book"
          >
            <div>
              <div style={{ height: "100%", width: "100%" }}>
                <img src="/images/catalogue-1.jpg" style={{ width: "100%", height: "100%" }} />
              </div>
            </div>
            <div>
              <div style={{ height: "100%", width: "100%" }}>
                <img src="/images/catalogue-1.jpg" style={{ width: "100%", height: "100%" }} />
              </div>
            </div>
            <div>
              <div style={{ height: "100%", width: "100%" }}>
                <img src="/images/catalogue-2.jpg" style={{ width: "100%", height: "100%" }} />
              </div>
            </div>
            <div>
              <div style={{ height: "100%", width: "100%" }}>
                <img src="/images/catalogue-3.jpg" style={{ width: "100%", height: "100%" }} />
              </div>
            </div>
            <div>
              <div style={{ height: "100%", width: "100%" }}>
                <img src="/images/catalogue-4.jpg" style={{ width: "100%", height: "100%" }} />
              </div>
            </div>
            <div>
              <div style={{ height: "100%", width: "100%" }}>
                <img src="/images/catalogue-5.jpg" style={{ width: "100%", height: "100%" }} />
              </div>
            </div>
            <div>
              <div style={{ height: "100%", width: "100%" }}>
                <img src="/images/catalogue-6.jpg" style={{ width: "100%", height: "100%" }} />
              </div>
            </div>
            <div>
              <div style={{ height: "100%", width: "100%" }}>
                <img src="/images/catalogue-7.jpg" style={{ width: "100%", height: "100%" }} />
              </div>
            </div>
            <div>
              <div style={{ height: "100%", width: "100%" }}>
                <img src="/images/catalogue-8.jpg" style={{ width: "100%", height: "100%" }} />
              </div>
            </div>
            <div>
              <div style={{ height: "100%", width: "100%" }}>
                <img src="/images/catalogue-9.jpg" style={{ width: "100%", height: "100%" }} />
              </div>
            </div>
            <div>
              <div style={{ height: "100%", width: "100%" }}>
                <img src="/images/catalogue-10.jpg" style={{ width: "100%", height: "100%" }} />
              </div>
            </div>
            <div>
              <div style={{ height: "100%", width: "100%" }}>
                <img src="/images/catalogue-11.jpg" style={{ width: "100%", height: "100%" }} />
              </div>
            </div>
          </FlipBook>
        </section>
      </ThemesContainerMain>
    </>
  );
}

export default ThemesContentsExhibitionCatalogue;
