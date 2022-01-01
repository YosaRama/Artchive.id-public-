// Libs
import propTypes from "prop-types";
import { Tag } from "antd";

// Icons
import { UserOutlined } from "@ant-design/icons";

function RoleTag(props) {
  const { role } = props;
  return (
    <Tag
      icon={<UserOutlined />}
      color={
        (role == "ARTIST" && "green") ||
        (role == "GALLERY" && "magenta") ||
        (role == "COLLECTOR" && "blue") ||
        (role == "ADMIN" && "default")
      }
    >
      {role}
    </Tag>
  );
}

RoleTag.propTypes = {
  role: propTypes.oneOf(["ARTIST", "GALLERY", "ADMIN", "COLLECTOR"]),
};

export default RoleTag;
