"use client";

import FormInput from "../component/form-input";
import FormBtn from "../component/form-btn";
import SocialLogIn from "../component/social-login";
import { useFormState } from "react-dom";
import { handleSubmit } from "./action";

export default function Login() {
  //* form submit 결과를 반환해주는 react hook
  //* 이 훅을 사용하면 interactive component라는 뜻이므로 'use client'가 필요
  //* useFormState는 useState처럼 초기값이 필요. 보통 null
  // useformState의 action이 호출되면 '이전 state와 formData를 인자로 받게된다
  // 고로 handleSubmit의 첫번째 인자에 prevState 인자를 넣어주고 타입 설정까지 해줘야 함
  const [state, action] = useFormState(handleSubmit, null);

  return (
    <div className="flex flex-col gap-5 py-7 ">
      <div className="flex flex-col gap-3 font-semibold">
        <h1>안녕하세요!</h1>
        <h2>Log in with Email</h2>
      </div>
      <form className="flex flex-col gap-3" action={action}>
        <FormInput
          name="email"
          type="text"
          placeholder="Email"
          require={true}
          errors={[]}
        />
        <FormInput
          name="password"
          type="password"
          placeholder="Password"
          require={true}
          errors={state?.error ?? []}
        />
        <FormBtn text="Log In" />
      </form>
      <div className="w-full h-px bg-neutral-500" />
      <div className="flex flex-col gap-4">
        <SocialLogIn />
      </div>
    </div>
  );
}
