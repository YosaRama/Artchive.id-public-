// Libs
import { useState } from "react";
import Image from "next/image";
import { Col, Select } from "antd";
const { Option } = Select;

// Styles
import s from "./index.module.scss";

function ThemesSearchBox() {
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
    <Col className={s.search}>
      <Select
        className={s.searchBox + " theme-search-box"}
        showSearch
        open={dropdownOpen}
        onSearch={handleSearch}
        placeholder="Search by artist ..."
        suffixIcon={
          <Image width={50} height={50} objectFit="contain" src="/images/search-icon.svg" alt="" />
        }
      >
        <Option value={"yosa"}>Yosa</Option>
        <Option value={"rama"}>Rama</Option>
        <Option value={"dinata"}>Dinata</Option>
      </Select>
    </Col>
  );
}

export default ThemesSearchBox;
