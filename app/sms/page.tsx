"use client";
import { useFormState } from "react-dom";
import Button from "../component/button";
import Input from "../component/input";
import { smsLogin } from "./action";

const token = {
  token: false,
  error: undefined,
};

export default function SMSLogin() {
  const [state, action] = useFormState(smsLogin, token);
  return (
    <div className="flex flex-col gap-6 py-7 ">
      <div className="flex flex-col gap-3 font-semibold">
        <h2>Log in with SMS</h2>

        {state.token ? (
          <h2>인증번호를 입력하세요</h2>
        ) : (
          <h2>전화번호를 입력하세요</h2>
        )}
      </div>
      <form action={action} className="flex flex-col gap-4">
        {state?.token ? (
          <Input
            key={state.token ? "tokenInput" : "phoneInput"}
            type="text"
            placeholder="Verify"
            name="token"
            // errors={["이메일을 확인해 주세요"]}
          />
        ) : (
          <Input
            key={state.token ? "tokenInput" : "phoneInput"}
            type="text"
            placeholder="Phone number"
            name="phone"
            errors={state.error && [state.error.formErrors[1]]}
          />
        )}
        <Button text={state.token ? "인증번호 확인" : "인증번호 받기"} />
      </form>
    </div>
  );
}
