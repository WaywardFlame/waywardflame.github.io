interface ButtonProps {
    children: string;
    color?: "primary" | "secondary" | "danger"; // can only set color to these string values, also color is optional
    onClick: () => void;
}

const Button = ({ children, color = "primary", onClick }: ButtonProps) => {
    return (
        <button className={"btn btn-" + color} onClick={onClick}>{children}</button>
    );
}

export default Button;