// Libs
import ThemesModalAuctionLogin from "themes/components/libs/modal-auction-login";
import { useRouter } from "next/router";
import moment from "moment";

import { useAuction } from "app/hooks/auction";
import { useState } from "react";

function ThemesContainerAuction(props) {
  const { children } = props;
  const router = useRouter();
  const { id } = router.query;
  const session = false;

  const { data: auctionData } = useAuction({ singleId: id });

  //#region Handle Timeline
  const todayDate = moment();
  const beforeEvent = !session && todayDate.isBefore(auctionData?.start_date);
  //#endregion

  //#region Handle Modal
  const [modalVisible, setModalVisible] = useState(true);
  const handleModal = () => {
    setModalVisible(!modalVisible);
  };
  //#endregion

  return (
    <>
      <section>{children}</section>
      {beforeEvent && <ThemesModalAuctionLogin visible={true} handleModal={handleModal} />}
    </>
  );
}

export default ThemesContainerAuction;
