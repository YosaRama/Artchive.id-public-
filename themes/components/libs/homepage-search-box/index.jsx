// Libs
import { Col } from "antd";
import { useSession } from "next-auth/react";

// Helper
import { useWindowSize } from "app/helpers/useWindowSize";

//Components
import ThemeArtistSearchBox from "../artist-search-box";

// Styles
import s from "./index.module.scss";

function ThemesHomepageSearchBox() {
  //? ============== Handle User ============= ?//
  const { data: session, status: sessionStatus } = useSession();
  const userRole = session?.user.role;
  const userName = session?.user.full_name;
  // * ====================================== * //

  const { width } = useWindowSize();

  return (
    <Col className={s.box}>
      {!session ? (
        <Col className={s.title}>
          <h1>
            Your Trusted Online <span style={{ color: "#e5a03f" }}>Art Platform</span> Gallery
          </h1>
        </Col>
      ) : (
        ""
      )}
      {userRole == "ARTIST" ? (
        <Col className={s.title}>
          {width > 500 && (
            <h3>
              Welcome <span style={{ color: "#e5a03f" }}>{userName}</span>,
            </h3>
          )}

          <h1>
            Show Your Art In This <span style={{ color: "#e5a03f" }}>Art Platform</span>!
          </h1>
        </Col>
      ) : userRole == "COLLECTOR" ? (
        <Col className={s.title}>
          {width > 500 && (
            <h3>
              Welcome <span style={{ color: "#e5a03f" }}>{userName}</span>,
            </h3>
          )}

          <h1>
            Build Your Dream Art Collection In This{" "}
            <span style={{ color: "#e5a03f" }}>Art Platform</span>!
          </h1>
        </Col>
      ) : userRole == "GALLERY" ? (
        <Col className={s.title}>
          {width > 500 && (
            <h3>
              Welcome <span style={{ color: "#e5a03f" }}>{userName}</span>,
            </h3>
          )}

          <h1>
            Build Your Online Gallery in This <span style={{ color: "#e5a03f" }}>Art Platform</span>
            !
          </h1>
        </Col>
      ) : userRole == "ADMIN" ? (
        <Col className={s.title}>
          {width > 500 && (
            <h3>
              Welcome <span style={{ color: "#e5a03f" }}>{userName}</span>,
            </h3>
          )}

          <h1>
            Manage This <span style={{ color: "#e5a03f" }}>Art Platform</span>!
          </h1>
        </Col>
      ) : (
        ""
      )}

      <Col className={s.text}>
        <p>
          Art is the imposing of a pattern on experience, and our aesthetic enjoyment is recognition
          of the pattern.
        </p>
      </Col>
      <Col className={s.searchBoxSection}>
        <ThemeArtistSearchBox />
      </Col>
    </Col>
  );
}

export default ThemesHomepageSearchBox;
