import React, { PropsWithChildren } from "react";

interface iModalProps {
    active: boolean;
    title: string;
    onSubmit: () => void;
    onClose: () => void;

}

const Modal = ({active, title, onSubmit, onClose, children}: PropsWithChildren<iModalProps>) => {
    return (
        <></>
    );
};

export default Modal;