import { useState } from "react";
import Modal from './Modal';

const OpenCloseModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    return(
        <>
            <p>
                <button type="button"
                onClick={() => setIsOpen(true)}>Open Modal</button>
            </p>
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </>
    )
}

export default OpenCloseModal;