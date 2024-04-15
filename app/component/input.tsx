import { InputHTMLAttributes } from "react";

interface formInputProps {
  errors?: string[];
  name: string;
}

export default function Input({
  errors = [],
  name,
  ...rest
}: formInputProps & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="flex flex-col">
      <input
        name={name}
        className="w-full rounded-lg bg-transparent ring-1 focus:ring-2 focus:ring-orange-400 border-none ring-neutral-200 placeholder:text-neutral-400"
        {...rest}
      />
      {errors?.map((error, index) => (
        <span key={index} className="text-orange-800 font-semibold mt-3">
          {error}
        </span>
      ))}
      <div />
    </div>
  );
}
