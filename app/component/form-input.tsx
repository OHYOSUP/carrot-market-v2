interface formInputProps {
  type: string;
  placeholder: string;
  require: boolean;
  errors?: string[];
  name: string;
}

export default function FormInput({
  type,
  placeholder,
  require,
  errors,
  name,
}: formInputProps) {
  return (
    <div className="flex flex-col ">
      <input
        name={name}
        className="w-full rounded-lg bg-transparent ring-1 focus:ring-2 focus:ring-orange-400 border-none ring-neutral-200 placeholder:text-neutral-400"
        type={type}
        placeholder={placeholder}
        required={require}
      />
      {errors?.map((error, index) => (
        <span key={index} className="text-orange-800 font-semibold">
          {error}
        </span>
      ))}
      <div />
    </div>
  );
}
