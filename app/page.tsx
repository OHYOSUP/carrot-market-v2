import Link from "next/link";
import "@/app/lib/db";
export default function Home() {
  return (
    <div className="flex flex-col justify-between items-center h-screen p-4">
      <div className="my-auto flex flex-col items-center gap-4 font-bold">
        <span className="text-9xl">🥕</span>
        <h1 className="text-4xl">당근</h1>
        <h2 className="text-3xl">Welcome to Carrot Market</h2>
      </div>
      <div className="w-full flex flex-col items-center gap-4">
        <Link className="primary-btn h-12" href="/create-account">
          시작하기
        </Link>
        <div className="flex gap-3">
          <span className="">이미 계정이 있나요?</span>
          <Link href="/login">로그인</Link>
        </div>
      </div>
    </div>
  );
}
