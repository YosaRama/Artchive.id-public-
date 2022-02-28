// Libs
import { useState } from "react";
import { useRouter } from "next/router";
import { AutoComplete, Col, Form, Select } from "antd";
const { Option } = AutoComplete;
import Image from "next/image";

// Data Hooks
import { useUsers } from "app/hooks/user";

// Styles
import s from "./index.module.scss";

function ThemeArtistSearchBox() {
  const router = useRouter();
  const [form] = Form.useForm();

  //? ============== Handle Search ============= ?//
  const [searchValue, setSearchValue] = useState("");

  const handleSelect = (value) => {
    form.setFieldsValue({ name: value[0] });
    router.push(`/artist/${value[1]}`);
  };

  const handleChange = (value) => {
    setSearchValue(value);
  };

  const handleSubmit = () => {
    form.validateFields().then((value) => {
      router.push(`/artist?fullName=${value.name}`);
    });
  };

  const handlePressEnter = (e) => {
    if (e.keyCode == 13) {
      router.push(`/artist?fullName=${searchValue}`);
    }
  };
  // * ====================================== * //

  //? ============== Artist Hook ============= ?//
  const { data: artistData } = useUsers({
    queryString: `role=ARTIST&client=true&fullName=${searchValue}`,
  });
  // * ====================================== * //

  return (
    <Col className={s.search}>
      <Form form={form} onFinish={handleSubmit}>
        <Form.Item name={"name"}>
          <AutoComplete
            className={s.searchBox + " theme-search-box"}
            onSelect={handleSelect}
            onChange={handleChange}
            onKeyDown={handlePressEnter}
            defaultActiveFirstOption={false}
            placeholder="Search by artist ..."
          >
            {artistData?.map((item) => {
              return (
                <Option key={item.id} value={[item.full_name, item.slug]}>
                  {item.full_name}
                </Option>
              );
            })}
          </AutoComplete>
        </Form.Item>
      </Form>

      <div className={s.searchIcon} onClick={handleSubmit}>
        <Image layout="fill" objectFit="contain" src="/images/search-icon.svg" alt="" />
      </div>
    </Col>
  );
}

export default ThemeArtistSearchBox;
