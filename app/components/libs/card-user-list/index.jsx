// Libs
import { Avatar, Card, Col, Popover, Row, Tag } from "antd";
import moment from "moment";
import Link from "next/link";

// Icon
import { UserOutlined, EllipsisOutlined } from "@ant-design/icons";

// Style
import s from "../card-user-list/index.module.scss";

function CardUserList(props) {
  const { image, name, email, role, date, id } = props;
  return (
    <>
      <Card className={s.card} bodyStyle={{ padding: "10px 24px" }}>
        <Row justify="center" align="middle">
          <Col span={3}>
            <Avatar src={image} />
          </Col>
          <Col span={6} className={s.nameBox}>
            <div>
              <h1 className={s.name}>{name}</h1>
              <p className={s.email}>{email}</p>
            </div>
          </Col>
          <Col span={6}>
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
          </Col>
          <Col span={6}>{moment({ date }).format("DD MMMM YYYY")}</Col>
          <Col span={3} className={s.menu}>
            <Popover
              trigger="click"
              content={
                <Link href={`/dashboard/user/${id}`}>
                  <a>View Details</a>
                </Link>
              }
            >
              <EllipsisOutlined />
            </Popover>
          </Col>
        </Row>
      </Card>
    </>
  );
}

export default CardUserList;
