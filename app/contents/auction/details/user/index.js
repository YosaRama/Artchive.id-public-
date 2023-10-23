// Libs
import { v4 as uuid } from "uuid";
import { useState } from "react";
import { Table, Empty, Row, Col } from "antd";

// Components
import AppAddButton from "app/components/libs/add-button";
import AuctionUserColumn from "./utils";
import deleteConfirmModal from "app/components/utils/delete-modal-confirm";
import AppFormAuctionUser from "app/components/libs/form-auction-user";
import { useRouter } from "next/router";
import { useAuctionUsers } from "app/hooks/auction/user";
import AppSearchBox from "app/components/libs/search-box";

function AppContentsAuctionDetailsUser() {
  const router = useRouter();
  const { id } = router.query;
  const [modalVisible, setModalVisible] = useState(false);
  const [modalEditVisible, setModalEditVisible] = useState(false);
  const [searchValue, setSearchValue] = useState();

  //#region User Auction Hook
  const {
    data: userList,
    loading: userListLoading,
    onAdd: addUser,
    onEdit: editUser,
    onDelete: deleteUser,
  } = useAuctionUsers({
    queryString: `searchBy=name&search=${searchValue || ""}`,
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
      <Row gutter={[16, 0]} justify="space-between">
        <Col>
          <AppSearchBox searchValue={searchValue} setSearchValue={setSearchValue} searchBy="name" />
        </Col>
        <Col>
          <AppAddButton onCreate={handleAddUser}>Add User</AppAddButton>
        </Col>
      </Row>
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

export default AppContentsAuctionDetailsUser;
