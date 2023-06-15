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
import { useRouter } from "next/router";
import { useAuctionUser, useAuctionUsers } from "app/hooks/auction/user";

function AppContentsAuctionDetailsUser(props) {
  const { userData, onEdit, onDeleteUser } = props;
  const router = useRouter();
  const { id } = router.query;
  const [modalVisible, setModalVisible] = useState(false);
  const [modalEditVisible, setModalEditVisible] = useState(false);

  //#region User Auction Hook
  const {
    data: userList,
    loading: userListLoading,
    onAdd: addUser,
    onEdit: editUser,
    onDelete: deleteUser,
  } = useAuctionUsers({
    queryString: "",
    auctionId: id,
  });
  //#endregion

  //#region Handle create user auction
  const handleAddUser = () => {
    setModalVisible(true);
  };
  const handleFormSubmit = (values) => {
    addUser(values);
  };
  //#endregion

  //#region Handle edit user auction
  const [selectedId, setSelectedId] = useState(null);
  const handleEdit = (id) => {
    setModalEditVisible(true);
    setSelectedId(id);
  };
  const handleEditSubmit = (values) => {
    editUser({ payload: values, singleId: selectedId });
  };
  //#endregion

  //#region Handle delete user auction
  const handleDelete = (id) => {
    deleteConfirmModal({ title: "user", onDelete: () => deleteUser(id) });
  };
  //#endregion

  //#region Handle form modal
  const handleModalCancel = () => {
    setModalVisible(false);
  };
  const handleModalEditCancel = () => {
    setModalEditVisible(false);
  };
  //#endregion

  const columns = AuctionUserColumn({
    onDelete: handleDelete,
    handleEdit,
  });

  return (
    <>
      <AppAddButton onCreate={handleAddUser}>Add User</AppAddButton>
      {userList && (
        <>
          <Table
            columns={columns}
            rowKey={() => uuid()}
            dataSource={userList}
            loading={userListLoading}
          />

          <AppFormAuctionUser
            onSubmit={handleFormSubmit}
            visible={modalVisible}
            onCancel={handleModalCancel}
          />

          <AppFormAuctionUser
            onSubmit={handleEditSubmit}
            visible={modalEditVisible}
            onCancel={handleModalEditCancel}
            userId={selectedId}
          />
        </>
      )}
      {!userList && <Empty />}
    </>
  );
}

AppContentsAuctionDetailsUser.propTypes = {
  userData: propTypes.any,
  onEdit: propTypes.func,
  onDeleteUser: propTypes.func,
};

export default AppContentsAuctionDetailsUser;
