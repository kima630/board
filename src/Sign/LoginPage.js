import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./LoginPage.scss";
import { loginUser } from "../_actions/user_action";

const LoginPage = () => {
  const dispatch = useDispatch();

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  // currentTarget를 사용하면 이벤트가 바인딩 된 해당하는 요소를 반환하며,
  // 하위 구조가 복잡해질 때 사용하면 편리함.
  const onIdHandler = (e) => {
    setEmail(e.currentTarget.value);
  };

  const onPasswordHandler = (e) => {
    setPassword(e.currentTarget.value);
  };

  // preventDefault를 쓰지 않을 때는 login 버튼을 누를 때마다 페이지가 refresh 됨.
  // refresh 되면 event에 들어갈 것들이 행해지지 않음.
  const onSubmitHandler = (e) => {
    e.preventDefault();

    alert("Email", Email);
    alert("Password", Password);

    // let은 재할당 가능, 재선언 불가
    let body = {
      email: Email,
      password: Password,
    };

    dispatch(loginUser(body));
  };

  return (
    <div className="LoginPage">
      <form className="login" onSubmit={onSubmitHandler}>
        <label>Email:</label>
        <br />
        <input
          className="email"
          type="text"
          value={Email}
          onChange={onIdHandler}
        ></input>
        <br />
        <label>Password:</label>
        <br />
        <input
          className="pw"
          type="text"
          value={Password}
          onChange={onPasswordHandler}
        ></input>
        <div>
          <button type="submit">Log In</button>
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
