"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import ThemeToggle from "./theme-toggle";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

import inSPIRELOGOSVG from '@/public/images/inSPIRELOGOSVG.svg'

const SECTION_DATA = [
  { label: 1, href: "/", isFirst: true, isLast: false },
  { label: 2, href: "/page-2", isFirst: true, isLast: false },
  { label: 3, href: "/page-3", isFirst: false, isLast: true },
];

export default function Wrapper({ children }: { children: React.ReactNode }) {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [nextPage, setNextPage] = useState<undefined | string>("/");
  const [previousPage, setPreviousPage] = useState<undefined | string>("/");
  const pathname = usePathname();
  const activeSection = SECTION_DATA.find(
    (section) => section.href === pathname
  );

  useEffect(() => {
    if (activeSection?.isFirst || activeSection?.isLast == false) {
      setNextPage(`page-${currentIndex + activeSection.label}`);
    } else {
      setPreviousPage(`page-${Math.abs(currentIndex - activeSection?.label!)}`);
    }
  }, [
    activeSection?.isFirst,
    activeSection?.isLast,
    activeSection?.label,
    currentIndex,
  ]);

  return (
    <>
      <div className="flex w-full items-center justify-between">
        <Link
          href="/"
          className={`flex flex-col justify-center items-center font-bold font-unbounded`}
        >
          <div className="flex flex-col justify-center pb-1 px-3 items-center bg-white rounded-md">

            <Image src={inSPIRELOGOSVG} height={45} alt="inSPIRE logo" />
            <p className="w-fit text-black text-md mt-[-2px] leading-none ">inspire</p>
          </div>
        </Link>

        <ThemeToggle />
      </div>
      {children}
      <div className="flex w-full items-center justify-between">
        <Link href={previousPage as string} passHref>
          <Button
            disabled
            className="text-sm font-bold rounded-3xl bg-[#e0dede] text-black dark:bg-zinc-800 dark:text-zinc-400 px-7 py-2 opacity-50 hover:bg-[#d1d0d0] dark:hover:bg-zinc-900"
          >
            <span className="font-unbounded">Back</span>
          </Button>
        </Link>
        <div className={`text-xs font-bold py-2  group-hover:bg-[#e1ffe1c5]`}>
          <p className="text-xs">
            <span className="inline-block dark:text-white">
              {pathname === activeSection?.href ? activeSection.label : null}
            </span>
            <span className="inline-block px-3 opacity-50">/</span>
            <span className="inline-block dark:text-white opacity-50">
              {SECTION_DATA.length}
            </span>
          </p>
        </div>

        <Link href={nextPage as string} passHref>
          <Button
            className={`text-sm font-bold rounded-3xl bg-zinc-900 text-white dark:bg-white px-7 py-2 dark:text-black`}
          >
            <span className="font-unbounded">Next</span>
          </Button>
        </Link>
      </div>
    </>
  );
}
