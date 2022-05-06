/* eslint-disable jsx-a11y/alt-text */

// Libs
import { Col, Image, Row, Select } from "antd";
const { Option } = Select;
import { useState } from "react";
import propTypes from "prop-types";

// Data Hook
import { useUsers } from "app/hooks/user";

function AppSelectArtist(props) {
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
  const { data: artistData } = useUsers({ queryString: `role=ARTIST&fullName=${artistName}` });
  // * ====================================== * //

  return (
    <>
      <Select
        style={{ width: "100%" }}
        showSearch
        onSearch={handleSearch}
        onSelect={handleSelect}
        placeholder="Select artist"
        filterOption={false}
      >
        {artistData &&
          artistData.map((item, index) => {
            return (
              <Option key={item.id}>
                <Row gutter={16} align="middle">
                  <Col span={3}>
                    <Image
                      src={
                        item?.profile
                          ? `${process.env.NEXT_PUBLIC_S3_URL}/${item?.profile?.url}`
                          : "/images/profile-default.png"
                      }
                    />
                  </Col>
                  <Col span={21}>{item.full_name}</Col>
                </Row>
              </Option>
            );
          })}
      </Select>
    </>
  );
}

AppSelectArtist.propTypes = {
  setResult: propTypes.func,
};

export default AppSelectArtist;
