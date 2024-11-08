const Button = ({ text = "기본 텍스트", color = "black", children }) => {
  console.log(text, color);

  //이벤트 객체 : 이벤트 핸들러 함수를 호출하면서 호출된 이벤트 핸들러 함수에 매개변수로 이벤트 객체라는 것을 제공
  const onClickButton = (e) => {
    console.log(e);
    console.log(text);
  };

  return (
    <button
      onClick={onClickButton}
      //onMouse={onClickButton}
      style={{ color: color }}
    >
      {text} - {color.toUpperCase()}
      {children}
    </button>
  );
};

export default Button;
