// Libs
import { Row, Col, Tooltip } from "antd";
import propTypes from "prop-types";

// Styles
import s from "./index.module.scss";

// Icons
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

function AppTableAction(props) {
  const { id, onEdit, onDelete, activeDelete = true, activeEdit = true } = props;

  return (
    <>
      <Row gutter={[16, 0]}>
        {activeEdit && (
          <Col>
            <Tooltip title="Edit">
              <EditOutlined onClick={() => onEdit(id)} className={s.action} />
            </Tooltip>
          </Col>
        )}
        {activeDelete && (
          <Col>
            <Tooltip title="Delete">
              <DeleteOutlined onClick={() => onDelete(id)} className={s.action} />
            </Tooltip>
          </Col>
        )}
      </Row>
    </>
  );
}

AppTableAction.propTypes = {
  id: propTypes.any,
  onEdit: propTypes.func,
  onDelete: propTypes.func,
  activeDelete: propTypes.bool,
  activeEdit: propTypes.bool,
};

export default AppTableAction;
