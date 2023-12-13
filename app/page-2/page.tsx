"use client";

import Image from "next/image";
import Wrapper from "@/components/wrapper";
import { Button } from "@/components/ui/button";

import code3D from "@/public/images/code_4x.png";

export default function Home() {
  return (
    <section className="flex flex-col lg:flex-row">
      <section className="flex h-screen w-full flex-col justify-between p-9 lg:h-auto">
        <Wrapper>
          <div className="mx-auto flex max-w-sm flex-col justify-between">
            <span
              className={`-mt-14 inline-block text-[64px] font-bold text-black dark:text-white`}
            >
              02
            </span>
            <p className="pb-6 font-medium font-unbounded">
            Explore cutting-edge technologies like Unity and Unreal Engine, which bring immersive worlds to life. 
            Dive into the versatility of C# and .NET, essential for robust application development. Experience the 
            magic of JavaScript and WebXR for creating browser-based virtual realities. Discover A-Frame and React 
            VR for user-friendly VR design. Utilize Vuforia, ARCore, and ARKit for seamless augmented reality experiences.
             Master the Oculus SDK for groundbreaking VR innovations. This program is your gateway to mastering the art of 
             VR and MR, turning imagination into reality. Join us and shape the future!
            </p>

            <div className="">
              <Button size="xl" className="w-full font-bold font-unbounded" variant="brand">
                <a
                  href="https://github.com/lucky-chap/kaminari"
                  target="_blank"
                  rel="noreferrer"
                  className="pb-1 dark:text-zinc-800 text-zinc-100"
                >
                  Accept the challenge
                </a>{" "}
              </Button>
            </div>
          </div>
        </Wrapper>
      </section>

      {/* second half */}

      <section className="hidden lg:flex h-screen w-full flex-col justify-center items-center bg-[#FFFFFF] p-9">
        <Image src={code3D} alt="Man sitting in wheelchair" />
      </section>
    </section>
  );
}
