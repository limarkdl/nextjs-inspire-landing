"use client";

import Image from "next/image";
import Wrapper from "@/components/wrapper";
import { Button } from "@/components/ui/button";

import robot from "@/public/images/hololens_enhanced-removebg.png";

export default function Home() {
  return (
    <section className="flex flex-col lg:flex-row">
      <section className="flex h-screen w-full flex-col justify-between p-9 lg:h-auto">
        <Wrapper>
          <div className="mx-auto flex max-w-sm flex-col justify-between">
            <span
              className={`-mt-14 inline-block text-[64px] font-bold text-black dark:text-white`}
            >
              01
            </span>
            <p className="pb-6 font-medium font-unbounded">
              Embark on a transformative journey with our inSPIRE Mixed Reality / Augmented Reality Development Course. 
              Unleash your creativity and step into the future of technology. Dive into hands-on projects, 
              guided by industry experts, and master the art of crafting immersive experiences. Whether you&apos;re a budding 
              developer or a visionary artist, our course empowers you to reshape the digital world. Join us and ignite your 
              passion for innovation. Your path to becoming an AR/MR maestro starts here. Turn your dreams into dynamic realities with inSPIRE.
            </p>

            <div className="">
              <Button size="xl" className="w-full font-bold" variant="brand">
                <a
                  href="https://github.com/lucky-chap/kaminari"
                  target="_blank"
                  rel="noreferrer"
                  className="pb-1 dark:text-zinc-800 text-zinc-100 font-unbounded"
                >
                  Let&apos;s start
                </a>{" "}
              </Button>
            </div>
          </div>
        </Wrapper>
      </section>

      {/* second half */}

      <section className="hidden lg:flex h-screen w-full flex-col justify-center items-center bg-[#FFFFFF] p-9">
        <Image src={robot} alt="3D Hololens image" />
      </section>
    </section>
  );
}
