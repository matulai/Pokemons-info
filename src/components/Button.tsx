interface ButtonProps {
  children?: React.ReactNode,
  // type: 'primary';
  onClick?: () => void;
  title?: string;
}

const Button = ({ children, onClick, title }: ButtonProps) => {
  // const styles = {
  //   primary: 'button-rectangle color-yellow small',
  //   secondary: 'button-circle color-white small',
  // };

  // const className = styles[type] || '';

  return (
    <button onClick={onClick}>
      {title}
      {children}
    </button>
  )
}

export default Button;