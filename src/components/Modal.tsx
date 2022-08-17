import React from "react";
interface ModalProps {
    children: React.ReactNode
    title: string
    onClose: () => void
}

export const Modal = ({ children, title, onClose }: ModalProps) => {
    return (
        <>
            <div className="fixed bg-black/50 top-0 left-0 right-0 bottom-0 z-50" onClick={onClose}
            />
            <div className="w-[500px] p-5 rounded bg-white fixed top-10 left-1/2 -translate-x-1/2 z-50">
                <h1 className="font-bold text-center">{title}</h1>
                {children}
            </div>
        </>
    )
}