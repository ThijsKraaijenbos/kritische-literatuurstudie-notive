import {t} from "../utils/t.ts";
import {Card} from "./Card.tsx";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useEffect} from "react";

gsap.registerPlugin(ScrollTrigger);
export default function ProblemAndContext() {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".animated-card",
        start: "top 50%",
        toggleActions: "play none none none",
        once: true,
      }
    })
    tl.fromTo(
      ".animated-card",
      {
        opacity: 0,
        y: -20, },
      {
        duration: 1.2,
        opacity: 1,
        y: 0,
        stagger: 0.6,
        ease: "back.out(1.5)",
      }
    );
  }, []);

  return (
    <div className="gap-x-8 flex flex-row justify-center">
      <Card
        background={true}
        title={t("probleemEnContext.context.title")}
        className="basis-1/3 animated-card"
      >
        <p>{t("probleemEnContext.context.description")}</p>
      </Card>

      <Card
        background={true}
        title={t("probleemEnContext.onderzoeksvraag.title")}
        className="basis-1/3 animated-card"
      >
        <p>{t("probleemEnContext.onderzoeksvraag.description")}</p>
      </Card>

      <Card
        background={true}
        title={t("probleemEnContext.standpunt.title")}
        className="basis-1/3 animated-card"
      >
        <p>{t("probleemEnContext.standpunt.description")}</p>
      </Card>
    </div>
  );
}
