"use server";
import { z } from "zod";
import { PASSWORD_MIN, PASSWORD_REGEX, PASSWORD_REGEX_ERROR } from "../lib/constants";

// zod : 개발자가 정한 form의 유효성(validation)을 검사해주는 라이브러리
const checkPassword = ({
  password,
  passwordConfirm,
}: {
  password: string;
  passwordConfirm: string;
}) => password === passwordConfirm;
const passwordRegex = PASSWORD_REGEX;
const fonrSchema = z
  .object({
    username: z
      .string({
        invalid_type_error: "특수문자는 사용할 수 없어요",
        required_error: "사용자 이름을 입력하세요",
      })
      .min(5, "사용자 이름이 너무 짧아요")
      .max(20, "사용자 이름이 너무 길어요"),
    email: z
      .string({
        invalid_type_error: "이메일을 확인해주세요",
        required_error: "이메일을 입력해주세요",
      })
      .email(),
    password: z.string().min(PASSWORD_MIN).max(8).regex(passwordRegex, PASSWORD_REGEX_ERROR),
    passwordConfirm: z.string().min(PASSWORD_MIN).max(8),
  })
  .refine(checkPassword, {
    message: "비밀번호를 확인해주세요",
    path: ["passwordConfirm"],
  });

export async function createAccount(prevState: any, formData: FormData) {
  const data = {
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
    passwordConfirm: formData.get("passwordConfirm"),
  };
  const result = fonrSchema.safeParse(data);
  console.log(result);
  if (!result.success) {
    return result.error.flatten();
  }
}
