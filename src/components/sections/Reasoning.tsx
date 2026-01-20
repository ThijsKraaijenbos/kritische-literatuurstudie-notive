import { Card } from "../Card.tsx";
import { t } from "../../utils/t.ts";
import { forwardRef, type ReactNode, useEffect, useRef } from "react";
import { BulletPoint } from "../typography/BulletPoint.tsx";
import gsap from "gsap";

interface ArgumentProps {
  textKey: string;
  children?: ReactNode;
}

const Argument = forwardRef<HTMLDivElement, ArgumentProps>((props, ref) => {
  return (
    <div ref={ref} className="flex mx-auto w-[90%] gap-16 justify-center">
      <Card
        background
        title={t(`onderbouwing.${props.textKey}.title`)}
        className="flex-1"
      >
        <div className="justify-self-start w-full">{props.children}</div>
      </Card>
    </div>
  );
});

interface BulletItemProps {
  bulletRef?: (el: HTMLDivElement | null) => void;
  titleKey: string;
  textKey: string;
}

const BulletItem = ({ bulletRef, titleKey, textKey }: BulletItemProps) => (
  <span ref={bulletRef} className="flex flex-col gap-1">
    <BulletPoint className={"!font-bold"}>{t(titleKey)}</BulletPoint>
    <p>{t(textKey)}</p>
  </span>
);

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

    tl.fromTo(
      [card1Ref.current, card2Ref.current, card3Ref.current],
      { opacity: 0, y: -20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.3,
        ease: "back.out(1.5)",
      }
    );

    tl.fromTo(
      bulletRefs.current,
      { opacity: 0, x: -5 },
      {
        opacity: 1,
        x: 0,
        duration: 0.25,
        stagger: 0.25,
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
      {/* Card 1 */}
      <Argument ref={card1Ref} textKey="privacyBeleid">
        <span className="flex flex-col gap-8">
          <BulletItem
            bulletRef={setBulletRef(1)}
            titleKey="onderbouwing.privacyBeleid.1.title"
            textKey="onderbouwing.privacyBeleid.1.text"
          />

          <BulletItem
            bulletRef={setBulletRef(2)}
            titleKey="onderbouwing.privacyBeleid.2.title"
            textKey="onderbouwing.privacyBeleid.2.text"
          />

          <span className="flex flex-col gap-2 ml-12 -mt-6">
            <BulletItem
              bulletRef={setBulletRef(3)}
              titleKey="onderbouwing.privacyBeleid.2.1.title"
              textKey="onderbouwing.privacyBeleid.2.1.text"
            />

            <BulletItem
              bulletRef={setBulletRef(4)}
              titleKey="onderbouwing.privacyBeleid.2.2.title"
              textKey="onderbouwing.privacyBeleid.2.2.text"
            />
          </span>
        </span>
      </Argument>

      {/* Card 2 */}
      <Argument ref={card2Ref} textKey="pbd">
        <span className="flex flex-col gap-8">
          <BulletItem
            bulletRef={setBulletRef(5)}
            titleKey="onderbouwing.pbd.1.title"
            textKey="onderbouwing.pbd.1.text"
          />

          <span className="flex flex-col gap-2 ml-12 -mt-6">
            <BulletItem
              bulletRef={setBulletRef(6)}
              titleKey="onderbouwing.pbd.1.1.title"
              textKey="onderbouwing.pbd.1.1.text"
            />
          </span>

          <BulletItem
            bulletRef={setBulletRef(7)}
            titleKey="onderbouwing.pbd.2.title"
            textKey="onderbouwing.pbd.2.text"
          />

          <BulletItem
            bulletRef={setBulletRef(8)}
            titleKey="onderbouwing.pbd.3.title"
            textKey="onderbouwing.pbd.3.text"
          />

          <span className="flex flex-col gap-2 ml-12 -mt-6">
            <BulletItem
              bulletRef={setBulletRef(9)}
              titleKey="onderbouwing.pbd.3.1.title"
              textKey="onderbouwing.pbd.3.1.text"
            />

            <span className="flex flex-col gap-2 ml-12">
              <BulletItem
                bulletRef={setBulletRef(10)}
                titleKey="onderbouwing.pbd.3.1.1.title"
                textKey="onderbouwing.pbd.3.1.1.text"
              />

              <BulletItem
                bulletRef={setBulletRef(11)}
                titleKey="onderbouwing.pbd.3.1.2.title"
                textKey="onderbouwing.pbd.3.1.2.text"
              />
            </span>

            <BulletItem
              bulletRef={setBulletRef(12)}
              titleKey="onderbouwing.pbd.3.2.title"
              textKey="onderbouwing.pbd.3.2.text"
            />

            <BulletItem
              bulletRef={setBulletRef(13)}
              titleKey="onderbouwing.pbd.3.3.title"
              textKey="onderbouwing.pbd.3.3.text"
            />
          </span>
        </span>
      </Argument>

      {/* Card 3 */}
      <Argument ref={card3Ref} textKey="kennis">
        <span className="flex flex-col gap-8">
          <BulletItem
            bulletRef={setBulletRef(14)}
            titleKey="onderbouwing.kennis.1.title"
            textKey="onderbouwing.kennis.1.text"
          />

          <span className="flex flex-col gap-2 ml-12 -mt-6">
            <BulletItem
              bulletRef={setBulletRef(15)}
              titleKey="onderbouwing.kennis.1.1.title"
              textKey="onderbouwing.kennis.1.1.text"
            />
          </span>

          <BulletItem
            bulletRef={setBulletRef(17)}
            titleKey="onderbouwing.kennis.2.title"
            textKey="onderbouwing.kennis.2.text"
          />
        </span>
      </Argument>
    </div>
  );
};
