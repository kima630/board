import axios from "axios";
import { LOGIN_USER } from "./types";

// logintUser에 들어오는 데이터 body를 dataToSubmit 파라미터로 받음
export function loginUser(dataToSubmit) {
  const request = axios
    .post("/account/auth/token", dataToSubmit)
    .then((response) => response.data);

  return {
    type: LOGIN_USER,
    payload: request,
  };
}
