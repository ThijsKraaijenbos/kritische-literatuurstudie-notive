import {t} from "../../utils/t.ts";
import {Card} from "../Card.tsx";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useEffect, useRef} from "react";

gsap.registerPlugin(ScrollTrigger);
export const Conclusion = () => {

  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);

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
      [card1Ref.current, card2Ref.current],
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
        title={t("conclusie.summary.title")}
        className="basis-1/2 animated-card"
        ref={card1Ref}
      >
        <p>{t("conclusie.summary.text")}</p>
      </Card>

      <Card
        background={true}
        title={t("conclusie.recommendation.title")}
        className="basis-1/2 animated-card"
        ref={card2Ref}
      >
        <p>{t("conclusie.recommendation.text")}</p>
      </Card>
    </div>
  );
}
