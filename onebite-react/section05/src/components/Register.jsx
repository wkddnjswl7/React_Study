import { useState } from "react";

// 간단한 회원가입 폼 만들기
// 1. 사용자의 이름 -> 사용자가 입력하는 이름을 State 로 보관
// 2. 생년월일
// 3. 국적
// 4. 자기소개

const Register = () =>{
    const [name, setName] = useState("이름");
    const [birth, setBirth] = useState("");
    const [country, setCountry] = useState("");
    const [bio, setBio] = useState("");

    const [input, setInput] = useState({
        name:"",
        birth:"",
        country:"",
        bio:""
    })

    const onChange = (e) =>{
        console.log(e.target.name, e.target.value);
        setInput({
            ...input,
            [e.target.name] : e.target.value,
        })
    }

    return (
        <div>
            {/* 이름 */}
            <div>
                <input 
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
        </div>
    )
};

export default Register;