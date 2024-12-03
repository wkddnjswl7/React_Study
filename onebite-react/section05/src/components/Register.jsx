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

    const onChangeName = (e) => {
        setName(e.target.value);
    }

    const onChangeBirth = (e) => {
        setBirth(e.target.value);
    }

    const onChangeCountry = (e) => {
        setCountry(e.target.value);
    }

    const onChangeBio= (e) => {
        setBio(e.target.value);
    }

    return (
        <div>
            {/* 이름 */}
            <div>
                <input value={name} 
                onChange={onChangeName} 
                placeholder={"이름"}/>
            </div>
            
            {/* 생년월일 */}
            <div>
                <input type="date" value={birth} onChange={onChangeBirth}/> 
            </div>

            {/* 국적 */}
            <div>
                <select value={country} onChange={onChangeCountry}>
                    <option>-</option>
                    <option>한국</option>
                    <option>미국</option>
                    <option>영국</option>
                </select>
            </div>

            {/* 자기소개 */}
            <div>
                <textarea value={bio} onChange={onChangeBio}/>
                {bio}
            </div>
        </div>
    )
};

export default Register;