// Libs
import { Row, Col, Divider, Image, Table, Empty, Button, notification, Modal } from "antd";
import propTypes from "prop-types";
import { v4 as uuid } from "uuid";
import { useState } from "react";
import { useRouter } from "next/router";

// Components
import ThemesButton from "themes/components/libs/button";
import AuctionLogsColumn from "./utils";
import AppFormLotAuction from "dashboard/components/libs/form-lot-auction";

// Hooks
import { useAuctionItem } from "dashboard/hooks/auction/item";
import { useAuctionItemsLogs } from "dashboard/hooks/auction/logs";

// Helper
import priceFormatter from "dashboard/helpers/priceFormatter";

// Style
import s from "./index.module.scss";

function AppContentsAuctionDetailsLotsDetails(props) {
  const { onState, activeLotId } = props;
  const router = useRouter();
  const { id: auctionId } = router.query;

  //#region Auction item hooks
  const {
    data: itemDetails,
    onEdit: itemUpdate,
    onClosedBid: itemClosedBid,
    loading: itemLoading,
  } = useAuctionItem({
    auctionId: auctionId,
    singleId: activeLotId,
  });
  const { data: itemLogs, onRefresh } = useAuctionItemsLogs({
    auctionId: auctionId,
    itemId: activeLotId,
    queryString: "",
  });
  const latestPrice = itemLogs?.[0]?.bid_price;
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

  //#region Handle closed bid
  const handleClosedBid = () => {
    Modal.confirm({
      title: "Are you sure closed this items?",
      content: "This action will immedietly close this item",
      onOk: () => {
        itemClosedBid();
      },
    });
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
            <h4>
              Lot {itemDetails?.auction_details?.lot ? itemDetails?.auction_details?.lot : "-"}
            </h4>
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
        <Row gutter={[16, 0]} justify="end">
          <Col>
            <ThemesButton type="outlined" onClick={handleClosedBid} loading={itemLoading}>
              Closed Bid
            </ThemesButton>
          </Col>

          <Col style={{ textAlign: "right" }}>
            <ThemesButton type="primary" onClick={handleModal} loading={itemLoading}>
              Edit item
            </ThemesButton>
          </Col>
        </Row>

        <Divider />
        <h3 style={{ textAlign: "center" }}>History logs</h3>
        {itemLogs && (
          <>
            <Button onClick={onRefresh} style={{ marginBottom: 20 }} type="primary">
              Refresh
            </Button>
            <Table columns={columns} rowKey={() => uuid()} dataSource={itemLogs} />
          </>
        )}
        {!itemLogs && <Empty />}

        {!itemLoading && (
          <AppFormLotAuction
            visible={addModal}
            onClose={handleModal}
            isEdit={true}
            onSubmit={itemUpdate}
            singleSku={itemDetails?.auction_details?.item_id}
            initialData={itemDetails?.auction_details}
            isLoading={itemLoading}
            latestPrice={latestPrice}
          />
        )}
      </Col>
    </>
  );
}

AppContentsAuctionDetailsLotsDetails.propTypes = {
  activeLotId: propTypes.any,
  onState: propTypes.func,
};

export default AppContentsAuctionDetailsLotsDetails;
