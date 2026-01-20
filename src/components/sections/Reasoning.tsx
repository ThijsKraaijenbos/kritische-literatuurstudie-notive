import {Card} from "../Card.tsx";
import {t} from "../../utils/t.ts";
import {Divider} from "../Divider.tsx";
import {forwardRef, type ReactNode, useEffect, useRef} from "react";
import {BulletPoint} from "../typography/BulletPoint.tsx";
import gsap from "gsap";

interface ArgumentProps {
  textKey: string
  children?: ReactNode
}

const Argument = forwardRef<HTMLDivElement, ArgumentProps>((props, ref) => {
  return (
    <div
      ref={ref}
      className="flex mx-auto w-[90%] gap-16 justify-center"
    >
      <Card
        background
        title={t(`onderbouwing.${props.textKey}.title`)}
        className="flex-1"
      >
        <div className="justify-self-start w-full">
          {props.children}
        </div>
      </Card>
    </div>
  );
});


export const Reasoning = () => {
  const card1Ref = useRef<HTMLDivElement | null>(null);
  const card2Ref = useRef<HTMLDivElement | null>(null);
  const card3Ref = useRef<HTMLDivElement | null>(null);

  const bulletRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!card1Ref.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: card1Ref.current,
        start: "top 50%",
        toggleActions: "play none none none",
        once: true,
      },
    });

    // Cards
    tl.fromTo(
      [card1Ref.current, card2Ref.current, card3Ref.current],
      { opacity: 0, y: -20 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.6,
        ease: "back.out(1.5)",
      }
    );

    // Bullet points
    tl.fromTo(
      bulletRefs.current,
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

  const setBulletRef = (index: number) => (el: HTMLDivElement | null) => {
    bulletRefs.current[index] = el;
  };

  return (
    <div className="flex flex-col mx-auto w-[80%] gap-8 justify-center items-center">
      <Argument ref={card1Ref} textKey="privacyBeleid">
        <span className="flex flex-col gap-4">
          <BulletPoint ref={setBulletRef(1)}>
            {t("onderbouwing.privacyBeleid.1.title")}
          </BulletPoint>

          <BulletPoint ref={setBulletRef(2)}>
            {t("onderbouwing.privacyBeleid.2.title")}
          </BulletPoint>

          <span className="flex flex-col gap-4 ml-12">
          <BulletPoint ref={setBulletRef(3)}>
              {t("onderbouwing.privacyBeleid.2.1.title")}
            </BulletPoint>
          <BulletPoint ref={setBulletRef(4)}>
              {t("onderbouwing.privacyBeleid.2.2.title")}
            </BulletPoint>
          </span>
        </span>
      </Argument>

      <Divider />

      <Argument ref={card2Ref} textKey="pbd">
        <span className="flex flex-col gap-4">
          <BulletPoint ref={setBulletRef(5)}>
            {t("onderbouwing.pbd.1.title")}
          </BulletPoint>

          <span className="flex flex-col gap-4 ml-12">
          <BulletPoint ref={setBulletRef(6)}>
              {t("onderbouwing.pbd.1.1.title")}
            </BulletPoint>
          </span>

          <BulletPoint ref={setBulletRef(7)}>
            {t("onderbouwing.pbd.2.title")}
          </BulletPoint>

          <BulletPoint ref={setBulletRef(8)}>
            {t("onderbouwing.pbd.3.title")}
          </BulletPoint>

          <span className="flex flex-col gap-4 ml-12">
          <BulletPoint ref={setBulletRef(9)}>
              {t("onderbouwing.pbd.3.1.title")}
            </BulletPoint>

            <span className="flex flex-col gap-4 ml-12">
          <BulletPoint ref={setBulletRef(10)}>
                {t("onderbouwing.pbd.3.1.1.title")}
              </BulletPoint>
          <BulletPoint ref={setBulletRef(11)}>
                {t("onderbouwing.pbd.3.1.2.title")}
              </BulletPoint>
            </span>

          <BulletPoint ref={setBulletRef(12)}>
              {t("onderbouwing.pbd.3.2.title")}
            </BulletPoint>

          <BulletPoint ref={setBulletRef(13)}>
              {t("onderbouwing.pbd.3.3.title")}
            </BulletPoint>
          </span>
        </span>
      </Argument>

      <Divider />

      <Argument ref={card3Ref} textKey="kennis">
        <span className="flex flex-col gap-4">
          <BulletPoint ref={setBulletRef(14)}>
            {t("onderbouwing.kennis.1.title")}
          </BulletPoint>

          <span className="flex flex-col gap-4 ml-12">
          <BulletPoint ref={setBulletRef(15)}>
              {t("onderbouwing.kennis.1.1.title")}
            </BulletPoint>

            <span className="flex flex-col gap-4 ml-12">
          <BulletPoint ref={setBulletRef(16)}>
                {t("onderbouwing.kennis.1.1.1.title")}
              </BulletPoint>
            </span>
          </span>

          <BulletPoint ref={setBulletRef(17)}>
            {t("onderbouwing.kennis.2.title")}
          </BulletPoint>
        </span>
      </Argument>

      <Divider />
    </div>
  );
};
