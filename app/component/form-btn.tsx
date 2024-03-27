"use client";

import { useFormStatus } from "react-dom";

interface FormBtnProps {
  text: string;
}

export default function FormBtn({ text }: FormBtnProps) {
  // form의 상태(로딩중)에 접근할 수 있도록 해주는 reat hook
  // 이 hook은 form의 child 안에서만 불러올 수 있다.
  // 이 hook은 interactive component로 만들었다면 상단에 'use client'를 작성해줘야 함
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      className="primary-btn h-10 disabled:bg-neutral-500 disabled:text-neutral-300 disabled:cursor-not-pointer"
    >
      {pending ? "계정을 만들고 있어요" : text}
    </button>
  );
}
