import type { ReactNode } from "react";

// this allows for passing text and html tags as arguments in react
// must be named children to allow for text, must have type ReactNode
// to allow for passing html tags
interface AlertProps {
    children: ReactNode;
    onClose: () => void;
}

function Alert({ children, onClose }: AlertProps) {
    return (
        <div className="alert alert-primary alert-dismissible">
            {children}
            <button type="button" className="btn-close" onClick={onClose} data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    );
}

export default Alert;