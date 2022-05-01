// Libs
import { Row, Col, Tooltip } from "antd";
import propTypes from "prop-types";

// Styles
import s from "./index.module.scss";

// Icons
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

function AppTableAction(props) {
  const { id, onEdit, onDelete } = props;

  return (
    <>
      <Row gutter={[16, 0]}>
        <Col>
          <Tooltip title="Edit">
            <EditOutlined onClick={() => onEdit(id)} className={s.action} />
          </Tooltip>
        </Col>
        <Col>
          <Tooltip title="Delete">
            <DeleteOutlined onClick={() => onDelete(id)} className={s.action} />
          </Tooltip>
        </Col>
      </Row>
    </>
  );
}

AppTableAction.propTypes = {
  id: propTypes.any,
  onEdit: propTypes.func,
  onDelete: propTypes.func,
};

export default AppTableAction;
