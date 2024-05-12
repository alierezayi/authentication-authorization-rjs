import { useModal } from "@/context/ModalContextProvider";

function Modal() {
  const { isOpen, modalContent, closeModal } = useModal();

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex justify-center items-center bg-black/20 backdrop-blur-sm z-10"
      onClick={closeModal}
    >
      <div
        className="p-10 bg-white rounded-md z-10"
        onClick={(e) => e.stopPropagation()}
      >
        {modalContent}
      </div>
    </div>
  );
}

export default Modal;
