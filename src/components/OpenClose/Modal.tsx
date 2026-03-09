type ModalProps = { 
    isOpen: boolean; 
    onClose: () => void; 
};

const Modal = ({isOpen, onClose}: ModalProps) => {
    if (!isOpen) return null;

    return (
        <>
            <h2>Modal Title</h2>
            <p>Modal body text...</p>
            <button type="button"
            onClick={onClose}>Close</button>
        </>
    )
}

export default Modal;