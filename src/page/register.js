import { Link, useNavigate } from "react-router-dom";
import Button from "../components/button.js";
import Input from "../components/input.js";
import { useState } from "react";
import axios from "axios";
function Register() {
  const [Email, setEmail] = useState("");
  const [Name, setName] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };
  const onNameHandler = (event) => {
    setName(event.currentTarget.value);
  };
  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };
  const onConfirmPasswordHandler = (event) => {
    setConfirmPassword(event.currentTarget.value);
  };
  const onRegister = (e) => {
    e.preventDefault();
    if (!Email || !Name || !Password || !ConfirmPassword) {
      return alert("모든 항목을 입력해주세요.");
    }
    if (Password !== ConfirmPassword) {
      return alert("비밀번호가 일치하지 않습니다.");
    }
    confirmEmail();
  };

  const registerSend = async () => {
    const response = await axios.post(
      "http://localhost:8000/accounts/dj-rest-auth/registration/",
      {
        username: Name,
        email: Email,
        password1: Password,
        password2: ConfirmPassword,
      }
    );

    console.log(response);
  };
  const confirmEmail = () => {
    if (window.confirm(`${Email}로 가서 이메일 인증을 하세요~`)) {
      registerSend();
      navigate("/login");
    }
  };
  return (
    <form
      className="max-w-[400px] w-[400px] mx-auto bg-white p-4 "
      onSubmit={onRegister}
    >
      <h2 className="text-5xl font-bold text-center py-3 ">
        ~오볼추~
      </h2>
      <div className="flex flex-col py-2">
        <label>Email</label>
        <Input
          type="text"
          value={Email}
          onChange={onEmailHandler}
          placeholder="example@xxx.com"
        />
      </div>
      <div className="flex flex-col py-2">
        <label>Password</label>
        <Input type="password" value={Password} onChange={onPasswordHandler} />
      </div>
      <div className="flex flex-col py-2">
        <label>Password 확인</label>
        <Input
          type="password"
          value={ConfirmPassword}
          onChange={onConfirmPasswordHandler}
        />
      </div>
      <div className="flex flex-col pt-2">
        <label>Username</label>
        <Input type="text" value={Name} onChange={onNameHandler} />
      </div>
      <div className="flex justify-between">
        <Link to="/login">
          <Button label={"아이디가 있음"} />
        </Link>
        <Button label={"회원가입"} />
      </div>
    </form>
  );
}

export default Register;
