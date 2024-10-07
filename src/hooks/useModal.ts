import { useState } from "react";

export const useModal = (initialValue: boolean = false): [boolean, () => void, () => void] => {
  const [showModal, setShowModal] = useState(initialValue);
  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return [showModal, handleOpen, handleClose];
};