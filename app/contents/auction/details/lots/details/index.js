// Libs
import { Row, Col, Divider, Image, Table, Empty } from "antd";
import propTypes from "prop-types";
import { v4 as uuid } from "uuid";
import moment from "moment";
import { useState } from "react";

// Components
import ThemesButton from "themes/components/libs/button";
import AuctionLogsColumn from "./utils";
import AppFormLotAuction from "app/components/libs/form-lot-auction";

// Helper
import priceFormatter from "app/helpers/priceFormatter";

// Style
import s from "./index.module.scss";
import { useAuctionItem } from "app/hooks/auction/item";
import { useRouter } from "next/router";

function AppContentsAuctionDetailsLotsDetails(props) {
  const { onState, activeLotId } = props;
  const router = useRouter();
  const { id: auctionId } = router.query;

  //#region Auction item hooks
  const { data: itemDetails, onEdit: itemUpdate } = useAuctionItem({
    auctionId: auctionId,
    singleId: activeLotId,
  });
  const itemLogs = [];
  //#endregion

  //#region  Handle Column
  const columns = AuctionLogsColumn({ onDelete: () => {} });
  //#endregion

  //#region Handle Modal
  const [addModal, setAddModal] = useState(false);
  const handleModal = () => {
    setAddModal(!addModal);
  };
  //#endregion

  return (
    <>
      <ThemesButton onClick={() => onState("list")} className={s.back}>
        BACK TO LIST
      </ThemesButton>
      <Divider />
      <Col>
        <Row gutter={16} style={{ width: "100%", marginBottom: "20px" }}>
          <Col span={7}>
            <Image
              preview={false}
              width={200}
              height={200}
              style={{ objectFit: "cover", width: "200px", height: "200px" }}
              src={`${process.env.NEXT_PUBLIC_S3_URL}/${itemDetails?.artwork_details?.media_cover?.url}`}
              alt=""
            />
          </Col>
          <Col span={16}>
            <p style={{ fontWeight: "bold" }}>{itemDetails?.artwork_details?.title}</p>
            <p>by {itemDetails?.artwork_details?.artist?.full_name}</p>
            <p>{itemDetails?.artwork_details?.description}</p>
            <p>
              Final Price : IDR{" "}
              {priceFormatter(`${itemDetails?.auction_details?.initial_price}`, ",")}
            </p>
            <p>
              Estimation : IDR{" "}
              {priceFormatter(`${itemDetails?.auction_details?.start_estimation}`, ",")} - IDR{" "}
              {priceFormatter(`${itemDetails?.auction_details?.end_estimation}`, ",")}
            </p>
          </Col>
        </Row>
        <Col style={{ textAlign: "right" }}>
          <ThemesButton type="primary" onClick={handleModal}>
            Edit item
          </ThemesButton>
        </Col>
        <Divider />
        <h3 style={{ textAlign: "center" }}>History logs</h3>
        {itemLogs?.logs && (
          <Table columns={columns} rowKey={() => uuid()} dataSource={itemLogs?.logs} />
        )}
        {!itemLogs?.logs && <Empty />}

        <AppFormLotAuction
          visible={addModal}
          onClose={handleModal}
          isEdit={true}
          onSubmit={itemUpdate}
          singleSku={itemDetails?.auction_details?.item_id}
        />
      </Col>
    </>
  );
}

AppContentsAuctionDetailsLotsDetails.propTypes = {
  activeLotId: propTypes.any,
  onState: propTypes.func,
};

export default AppContentsAuctionDetailsLotsDetails;
