// Libs
import moment from "moment";
import Link from "next/link";
import propTypes from "prop-types";
import { useRouter } from "next/router";
import { useState } from "react";
import { Avatar, Card, Col, Row, Tooltip } from "antd";

// Icon
import { EllipsisOutlined, CloseOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";

// Style
import s from "./index.module.scss";

// Component
import deleteConfirmModal from "../delete-modal-confirm";
import RoleTag from "../role-tag";

function CardUserList(props) {
  const { image, name, email, role, date, id, onDelete } = props;
  const router = useRouter();

  //? ============== Handle Options ============= ?//
  const [openMenu, setOpenMenu] = useState(false);
  const handleOpen = () => {
    setOpenMenu(!openMenu);
  };
  // * ====================================== * //

  //? ============== Handle Delete ============= ?//
  const handleDelete = () => {
    onDelete && onDelete(id);
  };
  // * ====================================== * //

  return (
    <>
      <Card className={s.card} bodyStyle={{ padding: "10px 24px" }}>
        <Row justify="center" align="middle">
          <Col span={3}>
            <Avatar src={image ? image : "/images/profile-default.png"} />
          </Col>
          <Col span={6} className={s.nameBox}>
            <div>
              <Link href={`/dashboard/users/${id}`}>
                <a>
                  <h1 className={s.name}>{name}</h1>
                </a>
              </Link>
              <p className={s.email}>{email}</p>
            </div>
          </Col>
          <Col span={6}>
            <RoleTag role={role} />
          </Col>
          <Col span={6}>{moment({ date }).format("DD MMMM YYYY")}</Col>
          <Col span={3} className={s.menu}>
            {!openMenu && (
              <Col>
                <Tooltip title="Show menu">
                  <EllipsisOutlined onClick={handleOpen} className={s.icon} />
                </Tooltip>
              </Col>
            )}
            {openMenu && (
              <>
                <Row gutter={[16, 0]}>
                  <Col onClick={() => router.push(`/dashboard/users/${id}`)}>
                    <Tooltip title="Edit user">
                      <EditOutlined className={s.icon} />
                    </Tooltip>
                  </Col>
                  <Col>
                    <Tooltip title="Delete user">
                      <DeleteOutlined
                        className={s.icon}
                        onClick={() =>
                          deleteConfirmModal({ title: "user", onDelete: handleDelete })
                        }
                      />
                    </Tooltip>
                  </Col>
                  <Col>
                    <Tooltip title="Close menu">
                      <CloseOutlined onClick={handleOpen} className={s.icon} />
                    </Tooltip>
                  </Col>
                </Row>
              </>
            )}
          </Col>
        </Row>
      </Card>
    </>
  );
}

CardUserList.propTypes = {
  image: propTypes.string,
  name: propTypes.string,
  email: propTypes.string,
  role: propTypes.oneOf(["ARTIST", "GALLERY", "ADMIN", "COLLECTOR"]),
  date: propTypes.string,
  id: propTypes.oneOfType([propTypes.string, propTypes.number]).isRequired,
  onDelete: propTypes.func,
};

export default CardUserList;
