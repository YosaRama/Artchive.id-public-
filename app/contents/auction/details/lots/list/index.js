// Libs
import propTypes from "prop-types";
import { Button, Col, Empty, Row, Spin } from "antd";
import { useState } from "react";

// Components
import deleteConfirmModal from "app/components/utils/delete-modal-confirm";
import AppCardAuctionArtwork from "app/components/libs/card-auction-artwork";
import AppFormLotAuction from "app/components/libs/form-lot-auction";

// Helper
import priceFormatter from "app/helpers/priceFormatter";
import { useAuctionItems } from "app/hooks/auction/item";
import { useRouter } from "next/router";

function AppContentsAuctionDetailsLotsList(props) {
  const { onState, onItemClick } = props;
  const router = useRouter();

  //#region Handle auction item data
  const { id: auctionId } = router.query;
  const {
    data: lotsData,
    onAdd: addLots,
    onDelete: deleteLots,
    loading: lotsLoading,
  } = useAuctionItems({
    auctionId: auctionId,
    queryString: ``,
  });
  //#endregion

  //#region Handle Modal
  const [addModal, setAddModal] = useState(false);
  const handleModal = () => {
    setAddModal(!addModal);
  };
  //#endregion

  //#region  Handle Delete Artist
  const handleDeleteLots = (artworkId) => {
    deleteLots(artworkId);
  };
  //#endregion

  return (
    <>
      <Row>
        <Col span={12} style={{ marginBottom: 50 }}>
          <p>
            Total item :{" "}
            <span style={{ fontWeight: "bold" }}>
              {lotsData?.length} item{lotsData?.length > 1 ? "s" : ""}
            </span>
          </p>
        </Col>
        <Col span={12} style={{ marginBottom: 50, textAlign: "right" }}>
          <Button type="primary" onClick={handleModal}>
            ADD LOT
          </Button>
        </Col>
      </Row>
      <Spin spinning={lotsLoading}>
        <Row gutter={[16, 32]} align="middle">
          {lotsData?.length != 1 ? (
            lotsData?.map((item, index) => {
              return (
                <Col span={8} style={{ marginBottom: 10 }} key={index}>
                  <AppCardAuctionArtwork
                    onClick={() => {
                      onItemClick(item?.auction_details?.id);
                      onState("details");
                    }}
                    image={
                      item?.artwork_details?.media_cover
                        ? `${process.env.NEXT_PUBLIC_S3_URL}/${item?.artwork_details?.media_cover?.url}`
                        : "/images/default-images.png"
                    }
                    artistImage={
                      item?.artwork_details?.artist?.profile?.url &&
                      `${process.env.NEXT_PUBLIC_S3_URL}/${item?.artwork_details?.artist?.profile?.url}`
                    }
                    artistName={item?.artwork_details?.artist?.full_name}
                    id={item?.artwork_details?.id}
                    size={
                      <>
                        <p>
                          {item?.artwork_details?.width} x {item?.artwork_details?.height} cm
                        </p>
                        <p>
                          End price : IDR{" "}
                          {priceFormatter(`${item?.auction_details?.initial_price}`, ",")}{" "}
                        </p>
                      </>
                    }
                    status={item?.auction_details?.item_status}
                    title={item?.artwork_details?.title}
                  />
                  <Col span={24} style={{ textAlign: "center" }}>
                    <Button
                      type="secondary"
                      style={{ marginTop: 10 }}
                      onClick={() =>
                        deleteConfirmModal({
                          title: `artwork from this events?`,
                          onDelete: () => handleDeleteLots(item?.auction_details?.id),
                        })
                      }
                    >
                      Remove
                    </Button>
                  </Col>
                </Col>
              );
            })
          ) : (
            <Col span={24}>
              <Empty />
            </Col>
          )}
        </Row>
      </Spin>

      <AppFormLotAuction visible={addModal} onClose={handleModal} onSubmit={addLots} />
    </>
  );
}

AppContentsAuctionDetailsLotsList.propTypes = {
  onItemClick: propTypes.any,
  onState: propTypes.any,
};

export default AppContentsAuctionDetailsLotsList;
