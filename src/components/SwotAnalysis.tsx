import {Card, TitleColor} from "./Card.tsx";
import {t} from "../utils/t.ts";
import {BulletPoint} from "./BulletPoint.tsx";
import {useEffect, useRef} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";


export const SwotAnalysis = () => {

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Create a timeline with scrollTrigger on the container
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 50%",
        toggleActions: "play none none none",
        once: true,
      }
    });

    tl.fromTo(
      containerRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.5 }
    );

      tl.fromTo(".animated-title h3",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.4,
        }
      )
      tl.fromTo(".animated-title div",
        {
          opacity: 0,
          width: 0,
        },
        {
          opacity: 1,
          width: "100%",
          duration: 0.8,
          ease: "power4.inOut"
        }
      )

    tl.fromTo(
      ".animated",
      { opacity: 0, x: -5 },
      {
        opacity: 1,
        x: 0,
        duration: 0.5,
        stagger: 0.2,
        ease: "back.out(0.5)"
      },
      "+=0"
    );

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      tl.kill();
    };
  }, []);


  return (
    <div className="grid grid-cols-2 grid-rows-2  mx-auto w-[70%] shadow-lg rounded-lg border-(--gray) border-3" ref={containerRef}>
      <Card title={t("swot.sterktes.title")} className={"border-(--gray) border-2 w-full h-full"} animatedTitle={true} titleColor={TitleColor.GREEN}>
        <span className="flex flex-col gap-4 w-full">
          <BulletPoint className={"animated"}>{t("swot.sterktes.1")}</BulletPoint>
          <BulletPoint className={"animated"}>{t("swot.sterktes.2")}</BulletPoint>
          <BulletPoint className={"animated"}>{t("swot.sterktes.3")}</BulletPoint>
        </span>
      </Card>
      <Card title={t("swot.zwaktes.title")} className={"border-(--gray) border-2 w-full h-full"} animatedTitle={true}  titleColor={TitleColor.ORANGE}>
        <span className="flex flex-col gap-4 w-full">
          <BulletPoint className={"animated"}>{t("swot.zwaktes.1")}</BulletPoint>
          <BulletPoint className={"animated"}>{t("swot.zwaktes.2")}</BulletPoint>
          <BulletPoint className={"animated"}>{t("swot.zwaktes.3")}</BulletPoint>
        </span>
      </Card>
      <Card title={t("swot.kansen.title")} className={"border-(--gray) border-2 w-full h-full"} animatedTitle={true} >
        <span className="flex flex-col gap-4 w-full">
          <BulletPoint className={"animated"}>{t("swot.kansen.1")}</BulletPoint>
          <BulletPoint className={"animated"}>{t("swot.kansen.2")}</BulletPoint>
          <BulletPoint className={"animated"}>{t("swot.kansen.3")}</BulletPoint>
        </span>
      </Card>
      <Card title={t("swot.bedreigingen.title")} className={"border-(--gray) border-2 w-full h-full "} animatedTitle={true}  titleColor={TitleColor.RED}>
        <span className="flex flex-col gap-4 w-full">
          <BulletPoint className={"animated"}>{t("swot.bedreigingen.1")}</BulletPoint>
          <BulletPoint className={"animated"}>{t("swot.bedreigingen.2")}</BulletPoint>
          <BulletPoint className={"animated"}>{t("swot.bedreigingen.3")}</BulletPoint>
        </span>
      </Card>
    </div>
  )
}
