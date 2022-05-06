// Libs
import propTypes from "prop-types";
import { useState } from "react";
import { Button, Col, Divider, Empty, Row } from "antd";

// Components
import AppCardExhibitionArtist from "app/components/libs/card-exhibition-artist";
import AppSelectArtist from "app/components/libs/select-artist";
import deleteConfirmModal from "app/components/utils/delete-modal-confirm";

function AppContentsExhibitionDetailsArtist(props) {
  const { artistData, onAddArtist, onDeleteArtist } = props;

  //? ============== Handle Add Artist ============= ?//
  const [artistSearchResult, setArtistSearchResult] = useState("");
  const handleAddArtist = () => {
    onAddArtist({ artistId: +artistSearchResult });
  };
  // * ====================================== * //

  //? ============== Handle Delete Artist ============= ?//
  const handleDeleteArtist = (artistId) => {
    onDeleteArtist(artistId);
  };
  // * ====================================== * //

  return (
    <>
      <Col span={12} style={{ marginBottom: 50 }}>
        <p>Search Artist</p>
        <Row gutter={16}>
          <Col span={20}>
            <AppSelectArtist setResult={setArtistSearchResult} />
          </Col>
          <Col span={4}>
            <Button type="primary" onClick={handleAddArtist}>
              ADD
            </Button>
          </Col>
        </Row>
      </Col>
      {artistData?.length != 0 ? (
        artistData?.map((item, index) => {
          return (
            <Row key={index} gutter={16} align="middle">
              <Col span={20} style={{ marginBottom: 10 }}>
                <AppCardExhibitionArtist
                  name={item?.full_name}
                  city={item?.city}
                  profile={item?.profile?.url}
                />
              </Col>
              <Col style={{ marginBottom: 10 }}>
                <a
                  onClick={() =>
                    deleteConfirmModal({
                      title: "artist on exhibition",
                      onDelete: () => handleDeleteArtist(item.id),
                    })
                  }
                >
                  Remove
                </a>
              </Col>
              <Divider />
            </Row>
          );
        })
      ) : (
        <Empty />
      )}
    </>
  );
}

AppContentsExhibitionDetailsArtist.propTypes = {
  artistData: propTypes.any,
  onAddArtist: propTypes.func,
  onDeleteArtist: propTypes.func,
};

export default AppContentsExhibitionDetailsArtist;
