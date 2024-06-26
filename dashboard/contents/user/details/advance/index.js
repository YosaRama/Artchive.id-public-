// Libs
import propTypes from "prop-types";
import { Button, Col, Row } from "antd";

// Components
import changeConfirmModal from "dashboard/components/utils/change-modal-confirm";

// Data Hook
import { useUser } from "dashboard/hooks/user";

function AppContentsUserDetailsAdvance(props) {
  const { status, id } = props;

  //? ============== Handle Change Status ============= ?//
  const { onEditStatus } = useUser({ singleId: id });
  const handleChangeStatus = () => {
    onEditStatus({ status: !status });
  };
  // * ====================================== * //
  return (
    <>
      <Row align="middle" gutter={[16, 0]}>
        <Col>
          <h1>Change User Status: </h1>
        </Col>
        <Col>
          <Button
            type={status ? "ghost" : "primary"}
            onClick={() =>
              changeConfirmModal({ title: "user status", onConfirm: handleChangeStatus })
            }
          >
            {status ? "Inactivated User" : "Activated User"}
          </Button>
        </Col>
      </Row>
    </>
  );
}

AppContentsUserDetailsAdvance.propTypes = {
  id: propTypes.number,
  status: propTypes.bool,
};

export default AppContentsUserDetailsAdvance;
