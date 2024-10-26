const Button = ({ text = "기본 텍스트", color = "black", children }) => {
  console.log(text, color);
  return (
    <button style={{ color: color }}>
      {text} - {color.toUpperCase()}
      {children}
    </button>
  );
};

export default Button;
