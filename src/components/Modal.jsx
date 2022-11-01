import { Button, Modal } from "antd";
import React, { useContext } from "react";
import { GlobalHelperContext, UserContext } from "../App";
import UserForm from "./Form";

const UserModal = () => {
  const glabalHelperContext = useContext(GlobalHelperContext);

  return (
    <Modal
      title="Edit User"
      open={glabalHelperContext.isModalOpen}
      footer={[
        <Button type="tertiary" onClick={glabalHelperContext.hideModal}>
          Cancel
        </Button>,

        <Button form="edit-form" key="submit" type="primary" htmlType="submit">
          Ok
        </Button>,
      ]}
    >
      <UserForm />
    </Modal>
  );
};
export default UserModal;
