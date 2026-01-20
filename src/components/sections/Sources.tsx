import { BulletPoint } from "../typography/BulletPoint.tsx";
import { t } from "../../utils/t.ts";
import { useRef, useEffect } from "react";
import gsap from "gsap";

export const Sources = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const sourceRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 60%",
        toggleActions: "play none none none",
        once: true,
      },
    });

    // Bullet points
    tl.fromTo(
      sourceRefs.current,
      { opacity: 0, x: -5 },
      {
        opacity: 1,
        x: 0,
        duration: 0.1,
        stagger: 0.1,
        ease: "back.out(0.2)",
      }
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col mx-auto w-[80%] gap-8 mb-24">
      {Array.from({ length: 12 }, (_, index) => (
        <BulletPoint
          key={index}
          className="!text-sm"
          ref={(el) => {
            sourceRefs.current[index] = el;
          }}
        >
          {t(`bronnenlijst.${index + 1}`)}
        </BulletPoint>
      ))}
    </div>
  );
};
