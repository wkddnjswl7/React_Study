import "./App.css";
import Bulb from "./components/Bulb";
import Counter from "./components/Counter";

//컴포넌트는 리렌더링이 발생하는 3가지
// 1. 자신이 관리하는state의 값이 변경될 때
// 2. 제공받는 props의 값이 변경될 때
// 3. 부모 컴포넌트가 리렌더링되면 자식 컴포넌트도 리렌더링

// 부모 컴퍼넌트로부터 props로 전구의 상태를 light로 받아온다.
//{light} = {props} 구조분해할당
//구조 분해 할당(Destructuring Assignment)은 객체나 배열에 있는 값을 쉽게 꺼내서 변수에 저장할 수 있도록 해주는 JavaScript 문법
// Bulb와 같은 자식 컴포넌트는 부모로부터 받는 Props의 값이 바뀌면 리렌덩이 발생


function App() {
  
  return (
    <>
      <Bulb />
      <Counter />
    </>
  );
}

export default App;
