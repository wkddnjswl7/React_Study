import "./App.css";
import { useState } from "react";

function App() {
  //const state = useState(0);
  //1. const [state, setState] = useState(0); // 구조 분해로 하여 state : 현재값, setState : 상태 변화 함수
  //console.log(state);
  // state 값은 { 0 : undefined, 1 : 함수 } 이렇게 배열로 되어 있다.
  // 첫 번재 요소는 새롭게 생성된 state 값 -> 현재 값
  // 두 번째 요소는 state 값을 변경, 변화 시키는 함수(상태 변화 함수)
  // 컴퍼넌트의 스테이트 값이 바뀌면 이 컴퍼넌트가 리턴을 한다 -> 리렌더링

  // 2.
  const [count, setCount] = useState(0);

  // 3.
  const [light, setLight] = useState("off");

  // state를 사용하지않고 일반 변수로 작성할 경우 컴퍼넌트가 리렌더링 되지않는다.
  return (
    <>
      <div>
        <h1>{light}</h1>
        <button
          onClick={() => {
            // if (light == "off") {
            //   setLight("on");
            // } else {
            //   setLight("off");
            // }

            //삼항 연산자 사용
            setLight(light === "on" ? "off" : "on");
          }}
        >
          Click
        </button>
      </div>

      <div>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Click
        </button>
        <h1>{count}</h1>
      </div>
    </>
  );
}

export default App;
