import "./Main.css";

const Main = () => {
  const user = {
    // 현재 사이트에 접속한 유저의 상태르 저장
    name: "이정환",
    isLogin: true,
  };

  // return <>{user.isLogin ? <div>로그아웃</div> : <div>로그인</div>}</>;

  if (user.isLogin) {
    return <div className="logout">로그아웃</div>;
  } else {
    return <div>로그인</div>;
  }
};

export default Main;