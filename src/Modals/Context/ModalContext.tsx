import React, { createContext, ReactNode, useState } from "react";

interface ModalContextType {
  activeModal: string | null;
  openModal: (modalId: string) => void;
  closeModal: () => void;
}

export const ModalContext = createContext<ModalContextType>({
  activeModal: null,
  openModal: () => {},
  closeModal: () => {}
});

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const openModal = (modalId: string) => {
    setActiveModal(modalId);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <ModalContext.Provider value={{ activeModal, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};