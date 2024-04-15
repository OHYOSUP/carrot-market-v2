"use server";
import { z } from "zod";
import validator from "validator";
import { redirect } from "next/navigation";

const phoneShcema = z
  .string()
  .min(7)
  .trim()
  .refine(
    (phone) => validator.isMobilePhone(phone, "ko-KR"),
    "잘못된 전화번호 입니다."
  );
const tokenShema = z.coerce.number().min(100000).max(999999);

interface ITokenState {
  token: boolean;
}

export async function smsLogin(prevState: ITokenState, formData: FormData) {
  const phone = formData.get("phone");
  const token = formData.get("token");

  if (!prevState.token) {
    const result = phoneShcema.safeParse(phone);
    if (!result.success) {
      console.log(result.error.flatten());
      return {
        token: false,
        error: result.error.flatten(),
      };
    } else {
      return {
        token: true,
      };
    }
  } else {
    const result = tokenShema.safeParse(token);
    if (!result.success) {
      console.log(result.error.flatten());
      return {
        token: true,
        error: result.error.flatten(),
      };
    } else {
      redirect("/");
    }
  }
}
