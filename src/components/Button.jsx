const Button = ({ onlick, children }) => {
  return (
    <button type="button" onClick={onlick}>
      {children}
    </button>
  );
};

export default Button;
