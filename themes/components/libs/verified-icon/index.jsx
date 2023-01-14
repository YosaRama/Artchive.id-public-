// Libs
import { Tooltip } from "antd";

// Assets
import { VerifyIcon } from "public/icons/verify-icon";

// Style
import s from "./index.module.scss";

function ThemesVerifiedIcon() {
  return (
    <>
      <Tooltip title="Verified Artwork" color={"#e5890a"}>
        <span className={s.curatorBadge}>
          <VerifyIcon />
        </span>
      </Tooltip>
    </>
  );
}

export default ThemesVerifiedIcon;
