/* eslint-disable jsx-a11y/alt-text */

// Libs
import propTypes from "prop-types";
import { Col, Image, Row, Select } from "antd";
import { useState } from "react";
const { Option } = Select;

// Data Hook
import { useArtworks } from "dashboard/hooks/artwork";

function AppSelectExhibitionArtwork(props) {
  const { setResult } = props;

  //? ============== Handle Search Artist ============= ?//
  const [artistName, setArtistName] = useState("");
  const handleSearch = (value) => {
    setArtistName(value);
  };
  // * ====================================== * //

  //? ============== Handle Result ============= ?//
  const handleSelect = (value) => {
    setResult(value);
    setArtistName("");
  };
  // * ====================================== * //

  //? ============== Artist Hook ============= ?//
  const { data: artworkData } = useArtworks({
    queryString: `isExhibition=true&artistName=${artistName}`,
  });
  // * ====================================== * //

  return (
    <>
      <Select
        style={{ width: "100%", height: "100%" }}
        showSearch
        onSearch={handleSearch}
        onSelect={handleSelect}
        placeholder="Select artwork by artist name"
        filterOption={false}
        className="AppArtworkExhibitionSelect"
      >
        {artworkData &&
          artworkData.map((item, index) => {
            return (
              <Option key={item.id}>
                <Row gutter={16} align="middle">
                  <Col span={8}>
                    <Image
                      src={
                        item?.media_cover
                          ? `${process.env.NEXT_PUBLIC_S3_URL}/${item?.media_cover?.url}`
                          : "/images/profile-default.png"
                      }
                      height={100}
                      style={{ objectFit: "contain" }}
                    />
                  </Col>
                  <Col span={14}>
                    <Col>
                      <p style={{ marginBottom: 0 }}>{item.title}</p>
                      <p style={{ marginBottom: 0 }}>
                        {item.width} x {item.height}
                      </p>
                    </Col>
                  </Col>
                </Row>
              </Option>
            );
          })}
      </Select>
    </>
  );
}

AppSelectExhibitionArtwork.propTypes = {
  setResult: propTypes.func,
};

export default AppSelectExhibitionArtwork;
