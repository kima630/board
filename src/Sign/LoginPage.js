import React, { useState } from "react";

const LoginPage = () => {
  const [Id, setId] = useState("");
  const [Password, setPassword] = useState("");

  // currentTarget를 사용하면 이벤트가 바인딩 된 해당하는 요소를 반환하며,
  // 하위 구조가 복잡해질 때 사용하면 편리함.
  const onIdHandler = (e) => {
    setId(e.currentTarget.value);
  };

  const onPasswordHandler = (e) => {
    setPassword(e.currentTarget.value);
  };

  // preventDefault를 쓰지 않을 때는 login 버튼을 누를 때마다 페이지가 refresh 됨.
  // refresh 되면 event에 들어갈 것들이 행해지지 않음.
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="LoginPage">
      <form>
        <label>ID</label>
        <br />
        <input
          className="id"
          type="text"
          value={Id}
          onChange={onIdHandler}
        ></input>
        <br />
        <label>PASSWORD</label>
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
