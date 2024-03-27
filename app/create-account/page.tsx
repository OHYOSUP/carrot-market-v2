import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import FormInput from "../component/form-input";
import FormBtn from "../component/form-btn";
import SocialLogIn from "../component/social-login";

export default function CreateAccount() {
  return (
    <div className="flex flex-col gap-6 py-7 ">
      <div className="flex flex-col gap-3 font-semibold">
        <h1>안녕하세요!</h1>
        <h2>Fill inthe form below to join!</h2>
      </div>
      <form>
        <FormInput
          type="text"
          placeholder="Username"
          require={true}
          // errors={["이름을 확인해 주세요"]}
        />
        <FormInput
          type="email"
          placeholder="Email"
          require={true}
          // errors={["이메일을 확인해 주세요"]}
        />
        <FormInput
          type="password"
          placeholder="Password"
          require={true}
          // errors={["비밀번호는 8자리 이상이어야 합니다"]}
        />
        <FormInput
          type="password"
          placeholder="Password confirm"
          require={true}
          // errors={["비밀번호가 다릅니다"]}
        />
        <FormBtn loading={false} text="Create Account" />
      </form>
      <div className="w-full h-px bg-neutral-500" />
      <div className="flex flex-col gap-4">
        <SocialLogIn />
      </div>
    </div>
  );
}
