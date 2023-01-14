// Libs
import { Tooltip, Col } from "antd";

// Assets
import { VerifyIcon } from "public/icons/verify-icon";

// Style
import s from "./index.module.scss";

function ThemesVerifiedIcon() {
  return (
    <>
      <Tooltip title="Verified Artwork" color={"#e5890a"}>
        <VerifyIcon className={s.curatorBadge} />
      </Tooltip>
    </>
  );
}

export default ThemesVerifiedIcon;
