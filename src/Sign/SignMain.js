import React from "react";

const SignIn = () => {
  return (
    <div>
      <form style={{ display: "flex" }}>
        <input type="text" placeholder="아이디"></input>
        <input type="text" placeholder="비밀번호"></input>
        <div>
          <button type="submit">로그인</button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
