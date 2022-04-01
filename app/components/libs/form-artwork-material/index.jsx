import { Form, Select } from "antd";
const { Option } = Select;

function AppFormArtworkMaterial() {
  const artworkMaterialOption = [
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
  ];

  return (
    <Form.Item
      name="material"
      label="Material"
      rules={[{ required: true, message: "Please input material for this artwork!" }]}
    >
      <Select placeholder="Select artwork material">
        {artworkMaterialOption.map((item, index) => (
          <Option value={item.value} key={index}>
            {item.label}
          </Option>
        ))}
      </Select>
    </Form.Item>
  );
}

export default AppFormArtworkMaterial;
