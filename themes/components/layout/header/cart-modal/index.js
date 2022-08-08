// Libs
import { Popover, Button } from "antd";

// Components
import ThemesCartModal from "themes/components/libs/cart-modal";

// Icons
import { CartIcon } from "public/icons/cart-icon";

// Styles
import s from "./index.module.scss";

function ThemesHeaderCart() {
  return (
    <>
      <Popover
        placement="bottomRight"
        content={<ThemesCartModal />}
        trigger="hover"
        arrowPointAtCenter
      >
        <Button shape="round" type="link">
          <CartIcon style={{ width: "25px" }} />
        </Button>
      </Popover>
    </>
  );
}

export default ThemesHeaderCart;
