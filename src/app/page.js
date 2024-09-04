"use client";

import React, { useRef } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { TimelineDemo } from "@/components/Timeline";
import Gemini from "@/components/ui/gemini";
import logo from "../../public/assets/logo_exodia.png";
import Header from "@/components/layout/Header";
import { TypewriterEffectSmooth as Title } from "@/components/ui/title";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";

// Importazione dinamica dei BackgroundBeams
const BackgroundBeams = dynamic(
  () => import("@/components/ui/bg").then((mod) => mod.BackgroundBeams),
  {
    ssr: false,
    loading: () => <div>Loading...</div>,
  }
);

export default function Home() {
  const ref = useRef(null);
  const { t } = useTranslation();

  const words = [
    {
      text: t("parola1"),
      className: "text-slate-200 dark:text-blue-500",
    },
    {
      text: t("parola2"),
      className: "text-slate-200 dark:text-blue-500",
    },
    {
      text: t("parola3"),
      className: "text-slate-200 dark:text-blue-500",
    },
    {
      text: t("parola4"),
      className: "text-slate-200 dark:text-blue-500",
    },
    {
      text: t("parola5"),
      className: "text-[#e6bf6e] dark:text-blue-500",
    },
  ];

  return (
    <main className="bg-neutral-800">
      {/* <Header text="Exodia" ref={ref} /> */}
      <div className="flex min-h-screen items-center justify-center flex-col ">
        <Image src={logo} alt="logo" className="max-w-[80vw]" priority />
        <Title words={words} />
      </div>
      <BackgroundBeams />
      <Gemini className={` my-0 md:my-60`} />
      <TimelineDemo />
    </main>
  );
}
