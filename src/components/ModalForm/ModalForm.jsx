import { useEffect } from "react";
import { createPortal } from "react-dom";
import { FiXCircle } from "react-icons/fi";
import s from "./ModalForm.module.scss";

const modalRoot = document.querySelector("#modal-root");

export default function ModalForm({ onClose }) {
  useEffect(() => {
    window.addEventListener("keydown", handleKeydownClose);

    return window.removeEventListener("keydown", handleKeydownClose);
  });

  const handleKeydownClose = (e) => {
    if (e.code === "Escape") {
      onClose();
    }
  };

  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <div onClick={handleBackdropClick} className={s.modal__backdrop}>
      <div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className={s.modal}
      >
        <button onClick={onClose} className={s.modal__close} type="button">
          <FiXCircle size="20px" />
        </button>
        <h2 className={s.modal__text}>
          Your form has been submitted successfully 🥳
        </h2>
      </div>
    </div>,
    modalRoot
  );
}
