import "@/styles/Button.css";

interface ButtonProps {
  children?: React.ReactNode;
  type: "simpleButton";
  onClick?: () => void;
  title?: string;
}

const Button = ({ children, onClick, title, type }: ButtonProps) => {
  const styles = {
    simpleButton: "cover-all color-blue",
  };

  const className = styles[type] || "";

  return (
    <button className={className} onClick={onClick}>
      {title}
      {children}
    </button>
  );
};

export default Button;
