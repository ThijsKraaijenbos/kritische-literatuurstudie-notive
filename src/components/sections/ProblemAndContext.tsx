import {t} from "../../utils/t.ts";
import {Card} from "../Card.tsx";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useEffect, useRef} from "react";

gsap.registerPlugin(ScrollTrigger);
export default function ProblemAndContext() {

  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: card1Ref.current,
        start: "top 50%",
        toggleActions: "play none none none",
        once: true,
      }
    })
    tl.fromTo(
      [card1Ref.current, card2Ref.current, card3Ref.current],
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
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="gap-x-8 flex flex-row justify-center w-[80%] problemAndContext">
      <Card
        background={true}
        title={t("probleemEnContext.context.title")}
        className="basis-1/3 animated-card"
        ref={card1Ref}
      >
        <p>{t("probleemEnContext.context.description")}</p>
      </Card>

      <Card
        background={true}
        title={t("probleemEnContext.onderzoeksvraag.title")}
        className="basis-1/3 animated-card"
        ref={card2Ref}
      >
        <p>{t("probleemEnContext.onderzoeksvraag.description")}</p>
      </Card>

      <Card
        background={true}
        title={t("probleemEnContext.standpunt.title")}
        className="basis-1/3 animated-card"
        ref={card3Ref}
      >
        <p>{t("probleemEnContext.standpunt.description")}</p>
      </Card>
    </div>
  );
}
