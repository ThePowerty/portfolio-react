import React, { ReactNode, useContext, useEffect, useRef, MouseEvent } from "react";
import { createPortal } from "react-dom";
import { ModalContext } from "./Context/ModalContext";
import "./Modal.css";

interface Props {
  children: ReactNode;
  modalId: string;
}

export const Modal = ({ children, modalId }: Props) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const { activeModal, closeModal } = useContext(ModalContext);

  const handleContentClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    if (activeModal === modalId) {
      document.addEventListener("keydown", handleEsc);
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [closeModal, activeModal, modalId]);

  if (activeModal !== modalId) return null;

  const modalRoot = document.getElementById("modal");
  if (!modalRoot) return null;

  return createPortal(
    <div className="overlay" onClick={closeModal}>
      <div className="modal" onClick={handleContentClick} ref={modalRef}>
        <button className="close-button" onClick={closeModal}>
          Cerrar
        </button>
        {children}
      </div>
    </div>,
    modalRoot
  );
};