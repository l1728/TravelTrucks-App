import css from './Button.module.css';

const Button = ({ children, onClick, className }) => {
  return (
    <button onClick={onClick} className={`${css.generalButton} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
