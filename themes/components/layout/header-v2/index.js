// Libs
import { useRouter } from "next/router";
import { useState } from "react";
import { motion } from "framer-motion";
import { HideOn } from "react-hide-on-scroll";

// Components
import ThemesNavbarDrawer from "themes/components/libs/navbar-drawer";

// Styles
import { fadeTopToBottom, fadeBottomToTop } from "app/database/framer-motion";

// Dummy
import ThemesHeaderItem from "./header-item";
import ThemesAuctionHeaderItem from "./auction-header-item";

function ThemesHeader() {
  const router = useRouter();

  //? ============== Open Menu Drawer ============= ?//
  const [openMenu, setOpenMenu] = useState(false);
  // * ====================================== * //

  return (
    <>
      {router.pathname === "/auction/[id]/lots/[lotId]" ? (
        <HideOn atHeight height={180}>
          <motion.div variants={fadeTopToBottom} initial="hidden" animate="visible" exit="exit">
            <ThemesAuctionHeaderItem />
          </motion.div>
        </HideOn>
      ) : router.pathname !== "/" &&
        router.pathname !== "/artwork" &&
        router.pathname !== "/artist" &&
        router.pathname !== "/exhibition" &&
        router.pathname !== "/articles" &&
        router.pathname !== "/genre" &&
        router.pathname !== "/auction" &&
        router.pathname !== "/auction/[id]" &&
        router.pathname !== "/auction/[id]/details" &&
        router.pathname !== "/auction/[id]/lots" &&
        router.pathname !== "/about" ? (
        <>
          <div>
            {router.pathname.startsWith("/auction/[id]") ? (
              <ThemesAuctionHeaderItem />
            ) : (
              <ThemesHeaderItem />
            )}
          </div>
        </>
      ) : (
        <HideOn inverse={true} atHeight height={150}>
          <motion.div variants={fadeTopToBottom} initial="hidden" animate="visible" exit="exit">
            {router.pathname.startsWith("/auction/[id]") ? (
              <ThemesAuctionHeaderItem />
            ) : (
              <ThemesHeaderItem />
            )}
          </motion.div>
        </HideOn>
      )}

      <ThemesNavbarDrawer visible={openMenu} onClose={() => setOpenMenu(false)} />
    </>
  );
}

export default ThemesHeader;
