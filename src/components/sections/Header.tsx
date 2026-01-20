import { Divider } from "../Divider.tsx";
import {t} from "../../utils/t.ts";
import {useEffect} from "react";
import gsap from "gsap";

export const Header = () => {
  useEffect(() => {
    const tl = gsap.timeline()
    tl.fromTo(
      ".anim-text",
      {
        opacity: 0,
        y: -20, },
      {
        duration: 0.8,
        opacity: 1,
        y: 0,
        stagger: 0.6,
        ease: "back.out(1.5)",
      }
    );
    tl.fromTo(
      ".anim-text-left",
      {
        opacity: 0,
        x: -5, },
      {
        duration: 0.5,
        opacity: 1,
        x: 0,
        stagger: 0.5,
        ease: "back.out(1.5)",
      }
    )
    return () => {
      tl.kill();
    };
  })

  return (
    <div className="relative">
      <header className="flex flex-col justify-center items-center gap-y-4 w-full -mt-4 h-80 relative z-0">
        <img
          src="./banner3.png"
          alt="Header banner"
          className="w-full h-full object-cover brightness-95"
        />
        <div className={"absolute top-20"}>
          <h1 className={"text-center anim-text"}>{t("mainTitle")}</h1>
          <h2 className={"text-center !text-2xl anim-text"}>{t("mainSubtitle")}</h2>
        </div>
        <div className={"absolute bottom-4"}>
          <p className={"text-center !text-white !font-bold !font-open-sans anim-text-left"}>{t("headerDetails")}</p>
          <p className={"text-center !text-white !font-bold !font-open-sans anim-text-left"}>{t("date")}</p>
        </div>
      </header>

      {/* Divider overlapping the header */}
      <Divider
        className="!w-full bg-gradient-to-r from-(--dark-blue) via-(--light-blue) to-(--dark-blue) relative z-20"
      />
    </div>
  );
};
