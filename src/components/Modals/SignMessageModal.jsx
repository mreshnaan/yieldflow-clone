/* eslint-disable react/prop-types */
import { Modal } from "antd";
import React from "react";
import { useState } from "react";
import { useSignMessage } from "wagmi";

function SignMessageModal({ isConnected }) {
  const [isModalOpen, setIsModalOpen] = useState(isConnected);




  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Modal
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        width={1000}
      >
        Sign message
      </Modal>
    </>
  );
}

export default SignMessageModal;
