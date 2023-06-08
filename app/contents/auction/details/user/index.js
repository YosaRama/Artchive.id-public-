// Libs
import propTypes from "prop-types";
import { v4 as uuid } from "uuid";
import { useState } from "react";
import { Table, Empty } from "antd";

// Components
import AppAddButton from "app/components/libs/add-button";
import AuctionUserColumn from "./utils";
import deleteConfirmModal from "app/components/utils/delete-modal-confirm";
import AppFormAuctionUser from "app/components/libs/form-auction-user";

function AppContentsAuctionDetailsUser(props) {
  const { userData, onEdit, onDeleteUser } = props;

  //? ============== Handle Delete ============= ?//
  const handleDelete = (id) => {
    deleteConfirmModal({ title: "user", onDelete: () => onDelete(id) });
  };
  // * ====================================== * //

  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState(null);

  const handleAddUser = () => {
    setModalVisible(true);
  };

  const handleEdit = (id) => {
    setModalVisible(true);
    setData(userData[id]); //TODO : Confused on how to show the initial data for one user//
  };

  const handleModalCancel = () => {
    setModalVisible(false);
  };

  const handleFormSubmit = (values) => {
    // Handle form submission
    handleModalCancel();
  };

  //? ============== Handle Column ============= ?//
  const columns = AuctionUserColumn({
    onDelete: handleDelete,
    handleEdit,
  });
  // * ====================================== * //

  return (
    <>
      <AppAddButton onCreate={handleAddUser}>Add User</AppAddButton>
      {userData && (
        <>
          <Table
            columns={columns}
            rowKey={() => uuid()}
            dataSource={userData}
            // loading={loading}
            // pagination={{ pageSize: pageSize, total: total }}
            // onChange={handlePagination}
          />

          <AppFormAuctionUser
            initialData={data}
            onSubmit={handleFormSubmit}
            visible={modalVisible}
            onCancel={handleModalCancel}
          />
        </>
      )}
      {!userData && <Empty />}
    </>
  );
}

AppContentsAuctionDetailsUser.propTypes = {
  userData: propTypes.any,
  onEdit: propTypes.func,
  onDeleteUser: propTypes.func,
};

export default AppContentsAuctionDetailsUser;
