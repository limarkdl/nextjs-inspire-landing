"use client";

import Image from "next/image";
import Wrapper from "@/components/wrapper";
import { Button } from "@/components/ui/button";

import boyAndGirl from "@/public/images/win_cup_bg.png";

export default function Home() {
  return (
    <section className="flex flex-col lg:flex-row">
      <section className="flex h-screen w-full flex-col justify-between p-9 lg:h-auto">
        <Wrapper>
          <div className="mx-auto flex max-w-sm flex-col justify-between">
            <span
              className={`-mt-14 inline-block text-[64px] font-bold text-black dark:text-white`}
            >
              03
            </span>
            <p className="pb-6 font-medium font-unbounded">
            Being a skilled VR/MR developer opens a world of opportunities. 
            You'll be at the forefront of tech innovation, creating immersive experiences 
            that redefine reality. This field offers lucrative career prospects in gaming, 
            education, and healthcare. Your expertise in VR/MR can lead to roles in top tech 
            companies, where you can influence the future of entertainment and learning. With 
            the ability to blend creativity and technology, you'll develop solutions that transform 
            how people interact with the digital world. This rapidly growing industry not only promises
             professional growth but also the chance to make a significant impact on various sectors 
             through cutting-edge virtual and mixed reality technologies.
            </p>

            <div className="">
              <Button size="xl" className="w-full font-bold font-unbounded" variant="brand">
                <a
                  href="https://github.com/lucky-chap/kaminari"
                  target="_blank"
                  rel="noreferrer"
                  className="pb-1 dark:text-zinc-800 text-zinc-100"
                >
                  Be a winner
                </a>{" "}
              </Button>
            </div>
          </div>
        </Wrapper>
      </section>

      {/* second half */}

      <section className="hidden lg:flex h-screen w-full flex-col justify-center items-center bg-[#fff] p-9">
        <Image src={boyAndGirl} alt="Boy and girl playing with robot" />
      </section>
    </section>
  );
}
