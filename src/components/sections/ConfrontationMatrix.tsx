import {t} from "../../utils/t.ts";
import {cn} from "../../utils/cn.ts";
import {type ReactNode, useEffect, useRef} from "react";
import {CardTitle} from "../typography/CardTitle.tsx";
import {TitleColor} from "../Card.tsx";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface CellProps {
  value: string | number
  className?: string
  children?: ReactNode
  type?: "label" | "score" | "total"
  titleColor?: typeof TitleColor[keyof typeof TitleColor]
}

const Cell = (props: CellProps) => {
  let additionalClasses = "";

  if (props.type === "score") {
    additionalClasses += " border-(--gray) border-2 animated-cell";
    if (props.value == 1) {
      additionalClasses += " bg-green-100";
    } else if (props.value == 2) {
      additionalClasses += " bg-green-200";
    } else if (props.value == -1) {
      additionalClasses += " bg-red-100";
    } else if (props.value == -2) {
      additionalClasses += " bg-red-200";
    }
  }

  return (
    <div
      className={cn(additionalClasses, 'justify-center items-center flex w-full h-full text-center', props.className)}>
      {props.type === "label" && (
          <CardTitle className={cn(props.titleColor, "!text-base")}>{t(props.value.toString())}</CardTitle>
        ) || !props.children &&
        <p className={cn('hyphens-auto w-[90%]', props.type === "total" && "!font-bold")}>{t(props.value.toString())}</p>
      }
    </div>
  );
}

export default function ConfrontatieMatrix() {

  const scores = [
    +1, +2, +1, 0, 0, 0,
    0, +2, +2, +1, 0, +1,
    0, +2, 0, +1, 0, 0,
    0, -2, +1, -2, -2, -2,
    -1, -1, 0, -1, -2, -1,
    0, -1, 0, -1, -1, -1
  ];

  const totals = [
    [4, 6, 3, -7, -6, -4],
    [1, 2, 4, -2, -5, -3]
  ]


  const scoreContainerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 50%",
        toggleActions: "play none none none",
        once: true
      }
    });

    tl.fromTo(
      containerRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.5 }
    );

    if (scoreContainerRef.current) {
      const cells = scoreContainerRef.current.querySelectorAll(".animated-cell");

      tl.fromTo(
        cells,
        {
          opacity: 0,
          scale: 0.5,
          y: -20
        },
        {
          duration: 0.4,
          opacity: 1,
          scale: 1,
          y: 0,
          stagger: {
            grid: [6, 6],
            from: "start",
            amount: 1.2
          },
          ease: "back.out(1.2)"
        },
        "+=0"
      );
    }

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="grid grid-cols-9 grid-rows-9 mx-auto w-[100%] 4xl:w-[80%] 3xl:w-[85%] shadow-lg rounded-lg border-(--gray) border-3" ref={containerRef}>
      {/*swot labels - top row: kansen & bedreigingen*/}
      <div className="col-start-3 col-end-6 row-start-1 border-(--gray) border-r-2">
        <Cell value={"confrontatiematrix.kansen.title"} type={"label"}/>
      </div>
      <div className="col-start-6 col-end-9 row-start-1 border-(--gray) border-l-2">
        <Cell value={"confrontatiematrix.bedreigingen.title"} type={"label"} titleColor={TitleColor.RED}/>
      </div>

      {/*swot labels - first column: sterktes & zwaktes*/}
      <div className="col-start-1 row-start-3 row-end-6 border-(--gray) border-b-2">
        <Cell value={"confrontatiematrix.sterktes.title"} type={"label"} titleColor={TitleColor.GREEN}/>
      </div>
      <div className="col-start-1 row-start-6 row-end-9 border-(--gray) border-t-2">
        <Cell value={"confrontatiematrix.zwaktes.title"} type={"label"} titleColor={TitleColor.ORANGE}/>
      </div>

      {/*kansen & bedreigingen*/}
      <div className={"col-start-3 col-end-9 row-start-2 grid grid-cols-6"}>
        <Cell value={"confrontatiematrix.kansen.1"}/>
        <Cell value={"confrontatiematrix.kansen.2"}/>
        <Cell value={"confrontatiematrix.kansen.3"} className={"border-(--gray) border-r-2"}/>
        <Cell value={"confrontatiematrix.bedreigingen.1"} className={"border-(--gray) border-l-2"}/>
        <Cell value={"confrontatiematrix.bedreigingen.2"}/>
        <Cell value={"confrontatiematrix.bedreigingen.3"}/>
      </div>

      {/*sterktes & zwaktes*/}
      <div className={"row-start-3 row-end-9 grid grid-rows-6"}>
        <Cell value={"confrontatiematrix.sterktes.1"}/>
        <Cell value={"confrontatiematrix.sterktes.2"}/>
        <Cell value={"confrontatiematrix.sterktes.3"} className={"border-(--gray) border-b-2"}/>
        <Cell value={"confrontatiematrix.zwaktes.1"} className={"border-(--gray) border-t-2"}/>
        <Cell value={"confrontatiematrix.zwaktes.2"}/>
        <Cell value={"confrontatiematrix.zwaktes.3"}/>
      </div>

      {/*scores*/}
      <div
        ref={scoreContainerRef}
        className="col-start-3 col-end-9 row-start-3 row-end-9 grid grid-rows-6 grid-cols-6 border-(--gray) border-2"
      >
        {scores.map((score, index) => (
          <div key={index}>
            <Cell value={score} type="score"/>
          </div>
        ))}
      </div>


      {/*totals vertical*/}
      <div className={"col-start-9 row-start-2 row-end-9 grid grid-rows-7"}>
        <Cell value={"confrontatiematrix.total"} type={"total"}/>
        {totals[0].map((score, index) =>
          <Cell key={index} value={score} type={"total"}/>
        )}
      </div>

      {/*totals horizontal*/}
      <div className={"row-start-9 col-start-2 col-end-9 grid grid-cols-7"}>
        <Cell value={"confrontatiematrix.total"} type={"total"}/>
        {totals[1].map((score, index) =>
          <Cell key={index} value={score} type={"total"}/>
        )}
      </div>

    </div>
  );
}
