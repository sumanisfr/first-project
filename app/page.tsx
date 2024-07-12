"use client";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();

  const onClick = () => {
    router.push("/about")
  }

  return (
     <div>
      <div className="flex flex-col items-center justify-center text-8xl text-white">
      Suman
     </div>
      <button onClick={onClick}>
        go to about
      </button>
     </div>
  );
}
