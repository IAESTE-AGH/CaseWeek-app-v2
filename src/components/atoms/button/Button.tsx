interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
}

export function Button({ title, ...props }: ButtonProps) {
    return (
        <button style={buttonStyle} {...props}>
            {title}
        </button>
    );
}

const buttonStyle: React.CSSProperties = {
    backgroundColor: "#DAB88B",
    color: "black",
    padding: "1rem 2rem",
    borderRadius: "50px",
    fontSize: "1.25rem",
    fontWeight: "bold",
    fontFamily: "League Spartan, sans-serif",
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    border: "none",
    cursor: "pointer",
    transition: "background-color 0.3s ease, transform 0.2s ease",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
};

const hoverStyle: React.CSSProperties = {
    backgroundColor: "#C9A77A",
};

const disabledStyle: React.CSSProperties = {
    backgroundColor: "#999999",
    color: "#000",
    cursor: "not-allowed",
};