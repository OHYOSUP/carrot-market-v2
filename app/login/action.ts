"use server";
import { z } from "zod";
import {
  PASSWORD_MIN,
  PASSWORD_REGEX,
  PASSWORD_REGEX_ERROR,
} from "../lib/constants";

const formSchema = z.object({
  email: z.string().email({
    message: '이메일을 확인해주세요'
  }).toLowerCase(),
  password: z
    .string({
      required_error: "비밀번호를 입력하세요",
    })
    .min(PASSWORD_MIN)
    .regex(PASSWORD_REGEX, PASSWORD_REGEX_ERROR),
});
// FormData : Next에서 제공하는 back에 접근할 수 있도록 하는 type
// form태그에 action 어트리뷰트에 handleSubmit을 넣고 함수 상단에
// 'use server'를 넣으면 fetch함수를 사용하지 않아도 Next가 알아서
// 사용자가 입력한 formData를 백에 전달해준다
export const login = async (prevState: any, formData: FormData) => {
  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };
  const result = formSchema.safeParse(data);
  if (!result.success) {
    console.log(result.error.flatten())
    return result.error.flatten();
  } else {
    console.log(result.data);
  }
};
