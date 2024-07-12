"use client";
import { TypewriterEffect } from "@/components/custom/typewriter";
import { ModeToggle } from "@/components/modeToggle";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();

  const onClick = () => {
    router.push("/about")
  }

  const words = [
    {
      text: "Suman's"
    },
    {
      text: "Profile",
      classname: "text-blue-500 dark:text-cyan-400"
    }
  ]

  return (
     <div className="flex flex-col space-y-4">
      <div className="flex p-4 items-end w-full">
      <ModeToggle />
      </div>
      <div className="flex flex-col p-40 space-y-4">
        <div className="flex flex-col gap-4 items-center justify-center">
          <h1 className="flex text-8xl text-black dark:text-white">
            Welcome to
          </h1>
          <div className="pt-2">
          <TypewriterEffect words={words} className="pt-4"/>
          </div>
          <div className="pt-4">
          <button onClick={onClick} className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              About me
            </span>
          </button>
          </div>
        </div>
      </div>
      
     </div>
  );
}
