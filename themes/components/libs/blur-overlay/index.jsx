import { LockOutlined } from "@ant-design/icons";
import s from "./index.module.scss";

function ThemesBlurOverlay() {
  return (
    <div className={s.blurOverlay}>
      <div className={s.content}>
        <LockOutlined style={{ fontSize: "24px" }} />
        <p>Login to view</p>
      </div>
    </div>
  );
}

export default ThemesBlurOverlay;
