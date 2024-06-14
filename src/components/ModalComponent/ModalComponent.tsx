import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

export default function ModalComponent() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <div className="App">
      <button onClick={openModal}>
        Abrir modal
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <h2>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
      </Modal>
    </div>
  );
}