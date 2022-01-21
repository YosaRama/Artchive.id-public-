// Libs
import Image from "next/image";
import { Col, Select } from "antd";
import { useState } from "react";
const { Option } = Select;

// Styles
import s from "./index.module.scss";

function PageHomepageSearchBox() {
  //? ============== Handle Search ============= ?//
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (value) => {
    if (value.length == 0) {
      setDropdownOpen(false);
    } else {
      setDropdownOpen(true);
    }
  };
  // * ====================================== * //

  return (
    <Col className={s.box}>
      <Col className={s.search}>
        <Select
          className={s.searchBox + " homepage-search"}
          showSearch
          open={dropdownOpen}
          onSearch={handleSearch}
          placeholder="Search by artist ..."
          suffixIcon={
            <Image
              width={50}
              height={50}
              objectFit="contain"
              src="/images/search-icon.svg"
              alt=""
            />
          }
        >
          <Option value={"yosa"}>Yosa</Option>
          <Option value={"rama"}>Rama</Option>
          <Option value={"dinata"}>Dinata</Option>
        </Select>
      </Col>
      <Col className={s.title}>
        <h1>Your Trusted Online Gallery</h1>
      </Col>
      <Col className={s.text}>
        <p>
          It is a long established fact that a reader will be distracted by the readable content of
          a page when looking at its layout.
        </p>
      </Col>
    </Col>
  );
}

export default PageHomepageSearchBox;
