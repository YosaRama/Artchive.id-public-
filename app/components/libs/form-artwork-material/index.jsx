// Libs
import { Divider, Form, Input, Select, Space, Typography } from "antd";
import { useRef, useState } from "react";
const { Option } = Select;

// Icons
import { PlusOutlined } from "@ant-design/icons";
import { stringCapitalize } from "app/helpers/capitalize";

function AppFormArtworkMaterial() {
  //? ============== Handle Option ============= ?//
  const newMaterial = useRef();
  const [option, setOption] = useState([
    {
      label: "Water Colour",
      value: "WATER_COLOUR",
    },
    {
      label: "Acrylic on Canvas",
      value: "ACRYLIC_ON_CANVAS",
    },
    {
      label: "Acrylic on Paper",
      value: "ACRYLIC_ON_PAPER",
    },
    {
      label: "Oil on Canvas",
      value: "OIL_ON_CANVAS",
    },
    {
      label: "Mix Media",
      value: "MIXED_MEDIA",
    },
    {
      label: "Other",
      value: "OTHER",
    },
  ]);

  const handleAddOption = () => {
    const addMaterial = newMaterial.current.input.value;
    const newOption = {
      label: stringCapitalize(addMaterial),
      value: addMaterial.toUpperCase().replace(/ /g, "_"),
    };
    setOption([...option, newOption]);
  };
  // * ====================================== * //

  return (
    <Form.Item
      name="material"
      label="Material"
      rules={[{ required: true, message: "Please input material for this artwork!" }]}
    >
      <Select
        placeholder="Select artwork material"
        dropdownRender={(menu) => (
          <>
            {menu}
            <Divider style={{ margin: "8px 0" }} />
            <Space align="center" style={{ padding: "0 8px 4px" }}>
              <Input placeholder="Please enter item" ref={newMaterial} />
              <Typography.Link onClick={handleAddOption} style={{ whiteSpace: "nowrap" }}>
                <PlusOutlined /> Add item
              </Typography.Link>
            </Space>
          </>
        )}
      >
        {option.map((item, index) => (
          <Option value={item.value} key={index}>
            {item.label}
          </Option>
        ))}
      </Select>
    </Form.Item>
  );
}

export default AppFormArtworkMaterial;
