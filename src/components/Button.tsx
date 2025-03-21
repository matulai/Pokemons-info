import "@/styles/Button.css";

interface ButtonProps {
  title?: string;
  onClick?: () => void;
  children?: React.ReactNode;
  type: "onlyIconCoverAllBlue" | "smallCircle" | "onlyIcon";
}

const Button = ({ children, onClick, title, type }: ButtonProps) => {
  const styles = {
    onlyIcon: "button color-blue",
    smallCircle: "button circle",
    onlyIconCoverAllBlue: "button cover-all color-blue",
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
