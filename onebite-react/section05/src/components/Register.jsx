import { useState, useRef } from "react";

// 간단한 회원가입 폼 만들기
// 1. 사용자의 이름 -> 사용자가 입력하는 이름을 State 로 보관
// 2. 생년월일
// 3. 국적
// 4. 자기소개

const Register = () =>{

    const [input, setInput] = useState({
        name:"",
        birth:"",
        country:"",
        bio:""
    })

    const counrRef = useRef(0);
    const inputRef = useRef();

    const onChange = (e) =>{
        counrRef.current++;
        console.log(counrRef.current);
        setInput({
            ...input,
            [e.target.name] : e.target.value,
        })
    }

    const onsubmit = () =>{
        // 이름을 정확히 입력했는지 확인
        if(input.name === ""){
            // 이름을 입력하는 DOM 요소에 포커스
            console.log(inputRef.current);
            inputRef.current.focus();
        }
    }

    return (
        <div>
            {/* 이름 */}
            <div>
                <input
                ref={inputRef}
                name="name"
                value={input.name} 
                onChange={onChange} 
                placeholder={"이름"}/>
            </div>
            
            {/* 생년월일 */}
            <div>
                <input 
                name="birth"
                type="date" 
                value={input.birth} 
                onChange={onChange}/> 
            </div>

            {/* 국적 */}
            <div>
                <select 
                name="country"
                value={input.country} 
                onChange={onChange}>
                    <option>-</option>
                    <option>한국</option>
                    <option>미국</option>
                    <option>영국</option>
                </select>
            </div>

            {/* 자기소개 */}
            <div>
                <textarea 
                name="bio"
                value={input.bio} 
                onChange={onChange}/>
            </div>

            <button onClick={onsubmit}>제출</button>
        </div>
    )
};

export default Register;