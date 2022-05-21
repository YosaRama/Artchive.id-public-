// Libs
import { Col, Image } from "antd";

// Styles
import s from "./index.module.scss";

function ThemesContentsArticleInformation() {
  return (
    <>
      <Col span={24}>
        <h1 className={s.title}>[ARTICLE TITLE]</h1>
        <div className={s.tagList}>
          <span>[TAG]</span>
          <span>[TAG]</span>
          <span>[TAG]</span>
        </div>
        <p className={s.postDate}>[Article Post Date]</p>
      </Col>
      <Col className={s.bannerImgContainer}>
        <Image src="/images/artwork-2.jpg" alt="" />
      </Col>
      <Col>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Phasellus vestibulum lorem sed risus ultricies
          tristique. Consectetur purus ut faucibus pulvinar. Rhoncus dolor purus non enim praesent
          elementum facilisis leo. Vitae turpis massa sed elementum tempus egestas sed sed risus.
          Fringilla phasellus faucibus scelerisque eleifend donec. Eget lorem dolor sed viverra
          ipsum nunc aliquet bibendum. Id donec ultrices tincidunt arcu non sodales neque sodales.
          At quis risus sed vulputate odio ut. Tortor vitae purus faucibus ornare suspendisse sed
          nisi lacus. Pulvinar elementum integer enim neque. Venenatis urna cursus eget nunc. Magna
          ac placerat vestibulum lectus mauris ultrices eros in. Scelerisque varius morbi enim nunc
          faucibus. Bibendum neque egestas congue quisque egestas. Faucibus et molestie ac feugiat
          sed. Nisl condimentum id venenatis a condimentum. Lacus vestibulum sed arcu non odio
          euismod. Purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae. Fermentum dui
          faucibus in ornare quam viverra orci sagittis eu. Nulla facilisi nullam vehicula ipsum a
          arcu cursus. Feugiat sed lectus vestibulum mattis. Mauris nunc congue nisi vitae suscipit
          tellus mauris a. In cursus turpis massa tincidunt dui ut. Volutpat lacus laoreet non
          curabitur. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Mauris
          pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Diam in
          arcu cursus euismod quis viverra. Ac tortor vitae purus faucibus ornare suspendisse.
          Maecenas pharetra convallis posuere morbi leo urna molestie at. Tortor vitae purus
          faucibus ornare suspendisse sed nisi. Vestibulum mattis ullamcorper velit sed ullamcorper
          morbi tincidunt ornare. Duis ut diam quam nulla porttitor massa id neque. Auctor elit sed
          vulputate mi sit amet mauris. Lacus laoreet non curabitur gravida arcu ac. Viverra nam
          libero justo laoreet sit amet cursus sit amet. Nec tincidunt praesent semper feugiat nibh
          sed pulvinar proin gravida. Odio tempor orci dapibus ultrices in. Faucibus purus in massa
          tempor nec. Facilisis mauris sit amet massa vitae. Ut ornare lectus sit amet. Id venenatis
          a condimentum vitae sapien. Eu consequat ac felis donec. Tincidunt nunc pulvinar sapien et
          ligula ullamcorper malesuada proin libero. Enim lobortis scelerisque fermentum dui
          faucibus in. Urna condimentum mattis pellentesque id nibh tortor. Ut morbi tincidunt augue
          interdum velit euismod in pellentesque. Morbi tincidunt augue interdum velit. Et molestie
          ac feugiat sed lectus vestibulum mattis ullamcorper. Ultrices tincidunt arcu non sodales
          neque sodales. Id aliquet lectus proin nibh nisl condimentum id venenatis a. At in tellus
          integer feugiat scelerisque varius. Malesuada fames ac turpis egestas integer eget aliquet
          nibh praesent. Eu consequat ac felis donec et. Proin fermentum leo vel orci porta non
          pulvinar. Risus nec feugiat in fermentum posuere. Lectus vestibulum mattis ullamcorper
          velit. Nisl vel pretium lectus quam id leo in vitae turpis. Turpis egestas pretium aenean
          pharetra magna ac. Fermentum iaculis eu non diam phasellus. Volutpat lacus laoreet non
          curabitur gravida arcu ac tortor dignissim. Aenean vel elit scelerisque mauris. Turpis
          massa tincidunt dui ut ornare lectus sit amet est. Justo nec ultrices dui sapien eget mi.
          Egestas integer eget aliquet nibh. Egestas erat imperdiet sed euismod nisi.
        </p>
      </Col>
    </>
  );
}

export default ThemesContentsArticleInformation;
