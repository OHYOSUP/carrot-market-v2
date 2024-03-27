import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import FormInput from "../component/form-input";
import FormBtn from "../component/form-btn";
import SocialLogIn from "../component/social-login";

export default function SMSLogin() {
  return (
    <div className="flex flex-col gap-6 py-7 ">
      <div className="flex flex-col gap-3 font-semibold">
        <h2>Log in with SMS</h2>
        <h2>Veerift your Phone number</h2>
      </div>
      <form>
        <FormInput
          type="number"
          placeholder="Phone number"
          require={true}
          // errors={["이름을 확인해 주세요"]}
        />
        <FormInput
          type="email"
          placeholder="Verify"
          require={true}
          // errors={["이메일을 확인해 주세요"]}
        />

        <FormBtn loading={false} text="Verifys" />
      </form>
    </div>
  );
}
