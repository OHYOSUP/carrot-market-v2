"use client";

import Button from "../component/button";
import SocialLogIn from "../component/social-login";
import { useFormState } from "react-dom";
import { createAccount } from "./actions";
import Input from "../component/input";
import { PASSWORD_MIN } from "../lib/constants";

export default function CreateAccount() {
  const [state, action] = useFormState(createAccount, null);

  return (
    <div className="flex flex-col gap-6 py-7 ">
      <div className="flex flex-col gap-3 font-semibold">
        <h1>안녕하세요!</h1>
        <h2>Fill inthe form below to join!</h2>
      </div>
      <form action={action} className="flex flex-col gap-4">
        <Input
          name="username"
          type="text"
          placeholder="Username"
          required={true}
          errors={state?.fieldErrors.username}
          minLength={PASSWORD_MIN}
        />
        <Input
          name="email"
          type="email"
          placeholder="Email"
          required={true}
          errors={state?.fieldErrors.password}
          minLength={PASSWORD_MIN}
        />
        <Input
          name="password"
          type="password"
          placeholder="Password"
          required={true}
          errors={state?.fieldErrors.password}
          minLength={PASSWORD_MIN}
        />
        <Input
          name="passwordConfirm"
          type="password"
          placeholder="Password confirm"
          required={true}
          errors={state?.fieldErrors.passwordConfirm}
          minLength={PASSWORD_MIN}
        />
        <Button text="Create Account" />
      </form>
      <div className="w-full h-px bg-neutral-500" />
      <div className="flex flex-col gap-4">
        <SocialLogIn />
      </div>
    </div>
  );
}
