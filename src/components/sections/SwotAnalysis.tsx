import { Card, TitleColor } from "../Card.tsx";
import { t } from "../../utils/t.ts";
import { BulletPoint } from "../typography/BulletPoint.tsx";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const SwotAnalysis = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const titleRefs = useRef<(HTMLHeadingElement | null)[]>([]);
  const titleLineRefs = useRef<(HTMLDivElement | null)[]>([]);
  const bulletRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 50%",
        toggleActions: "play none none none",
        once: true,
      },
    });

    // Container fade-in
    tl.fromTo(
      containerRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.5 }
    );

    // Titles
    tl.fromTo(
      titleRefs.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.4, stagger: 0.1 }
    );

    // Title underline / divider
    tl.fromTo(
      titleLineRefs.current,
      { opacity: 0, width: 0 },
      {
        opacity: 1,
        width: "100%",
        duration: 0.8,
        ease: "power4.inOut",
        stagger: 0.1,
      }
    );

    // Bullet points
    tl.fromTo(
      bulletRefs.current,
      { opacity: 0, x: -5 },
      {
        opacity: 1,
        x: 0,
        duration: 0.5,
        stagger: 0.2,
        ease: "back.out(0.5)",
      }
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="grid grid-cols-2 grid-rows-2 mx-auto w-[70%] shadow-lg rounded-lg border-(--gray) border-3"
    >
      {[
        {
          title: "swot.sterktes.title",
          color: TitleColor.GREEN,
          items: ["1", "2", "3"],
          key: "sterktes",
        },
        {
          title: "swot.zwaktes.title",
          color: TitleColor.ORANGE,
          items: ["1", "2", "3"],
          key: "zwaktes",
        },
        {
          title: "swot.kansen.title",
          color: undefined,
          items: ["1", "2", "3"],
          key: "kansen",
        },
        {
          title: "swot.bedreigingen.title",
          color: TitleColor.RED,
          items: ["1", "2", "3"],
          key: "bedreigingen",
        },
      ].map((section, sectionIndex) => (
        <Card
          key={section.key}
          title={t(section.title)}
          animatedTitle
          titleColor={section.color}
          className="border-(--gray) border-2 w-full h-full"
          titleRef={(el) => {
            titleRefs.current[sectionIndex] = el;
          }}
          titleLineRef={(el) => {
            titleLineRefs.current[sectionIndex] = el;
          }}
        >
          <span className="flex flex-col gap-4 w-full">
            {section.items.map((i, itemIndex) => (
              <BulletPoint
                key={i}
                ref={(el) => {
                  bulletRefs.current[sectionIndex * 10 + itemIndex] = el;
                }}
              >
                {t(`swot.${section.key}.${i}`)}
              </BulletPoint>
            ))}
          </span>
        </Card>
      ))}
    </div>
  );
};
