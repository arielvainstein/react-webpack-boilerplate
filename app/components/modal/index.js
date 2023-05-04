import { createPortal } from "react-dom";

import React from "react";

const Modal = () => {
  return (
    <>
      <p>This child is placed in the parent div.</p>
      {createPortal(
        <p>This child is placed in the document body.</p>,
        document.getElementById("react-modal")
      )}
    </>
  );
};

export default Modal;
