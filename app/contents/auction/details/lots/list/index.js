// Libs
import propTypes from "prop-types";
import { Button, Col, Empty, Row } from "antd";
import { useState } from "react";

// Components
import deleteConfirmModal from "app/components/utils/delete-modal-confirm";
import AppCardAuctionArtwork from "app/components/libs/card-auction-artwork";
import AppFormLotAuction from "app/components/libs/form-lot-auction";

// Helper
import priceFormatter from "app/helpers/priceFormatter";

function AppContentsAuctionDetailsLotsList(props) {
  const { onState, onItemClick, lotsData, onDeleteArtwork, auctionTitle } = props;

  //? ============== Handle Modal ============= ?//
  const [addModal, setAddModal] = useState(false);
  const handleModal = () => {
    setAddModal(!addModal);
  };
  // * ====================================== * //

  //? ============== Handle Delete Artist ============= ?//
  const handleDeleteArtist = (artworkId) => {
    onDeleteArtwork(artworkId);
  };
  // * ====================================== * //

  return (
    <>
      <Row>
        <Col span={12} style={{ marginBottom: 50 }}>
          <p>
            Total item :{" "}
            <span style={{ fontWeight: "bold" }}>
              {lotsData.length} item{lotsData.length > 1 ? "s" : ""}
            </span>
          </p>
        </Col>
        <Col span={12} style={{ marginBottom: 50, textAlign: "right" }}>
          <Button type="primary" onClick={handleModal}>
            ADD LOT
          </Button>
        </Col>
      </Row>
      <Row gutter={[16, 32]} align="middle">
        {lotsData?.length != 0 ? (
          lotsData?.map((item, index) => {
            return (
              <Col span={8} style={{ marginBottom: 10 }} key={index}>
                <AppCardAuctionArtwork
                  onClick={() => {
                    onItemClick(item.id);
                    onState(onState);
                  }}
                  image={
                    item?.media_cover
                      ? `${process.env.NEXT_PUBLIC_S3_URL}/${item?.media_cover?.url}`
                      : "/images/default-images.png"
                  }
                  artistImage={
                    item?.artist?.profile?.url &&
                    `${process.env.NEXT_PUBLIC_S3_URL}/${item?.artist?.profile?.url}`
                  }
                  artistName={item?.artist?.full_name}
                  id={item?.id}
                  size={
                    <>
                      <p>
                        {item?.width} x {item?.height} cm
                      </p>
                      <p>End price : IDR {priceFormatter(`${item?.initial_price}`, ",")} </p>
                    </>
                  }
                  status={item?.status}
                  title={item.title}
                />
                <Col span={24} style={{ textAlign: "center" }}>
                  <Button
                    type="secondary"
                    style={{ marginTop: 10 }}
                    onClick={() =>
                      deleteConfirmModal({
                        title: `artwork from ${auctionTitle}`,
                        onDelete: () => handleDeleteArtist(item.id),
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
          <Empty />
        )}
      </Row>
      <AppFormLotAuction visible={addModal} onClose={handleModal} />
    </>
  );
}

AppContentsAuctionDetailsLotsList.propTypes = {
  onAddArtwork: propTypes.func,
  lotsData: propTypes.any,
  onDeleteArtwork: propTypes.func,
  auctionTitle: propTypes.any,
  onItemClick: propTypes.any,
  onState: propTypes.any,
};

export default AppContentsAuctionDetailsLotsList;
