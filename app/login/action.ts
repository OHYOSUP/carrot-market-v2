"use server";

import { redirect } from "next/navigation";
// FormData : Next에서 제공하는 back에 접근할 수 있도록 하는 type
// form태그에 action 어트리뷰트에 handleSubmit을 넣고 함수 상단에
// 'use server'를 넣으면 fetch함수를 사용하지 않아도 Next가 알아서
// 사용자가 입력한 formData를 백에 전달해준다
export const handleSubmit = async (prevState: any, data: FormData) => {
  console.log(prevState);
  return {
    error: ["wrong password", "사용자가 없습니다"],
  };
};
