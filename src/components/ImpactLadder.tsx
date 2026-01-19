import {forwardRef, type ReactNode, useEffect, useRef, useState} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {cn} from "../utils/cn.ts";
import {t} from "../utils/t.ts";

gsap.registerPlugin(ScrollTrigger);

interface LadderStepProps {
  children?: ReactNode
  color: StepColor
}

interface LadderCardProps {
  children?: ReactNode
  col: number
  color: StepColor
}

type StepColor = "green" | "teal" | "sky" | "indigo" | "rose";

const stepColorClasses: Record<StepColor, {
  stepBg: string
  cardBg: string
}> = {
  green: {
    stepBg: "bg-green-100",
    cardBg: "bg-green-200",
  },
  teal: {
    stepBg: "bg-teal-100",
    cardBg: "bg-teal-200",
  },
  sky: {
    stepBg: "bg-sky-100",
    cardBg: "bg-sky-200",
  },
  indigo: {
    stepBg: "bg-indigo-100",
    cardBg: "bg-indigo-200",
  },
  rose: {
    stepBg: "bg-rose-100",
    cardBg: "bg-rose-200",
  },
};

const LadderStep = (props: LadderStepProps) => {
  return (
    <div
      className={cn(
        "ladder-step h-full grid grid-cols-4 gap-8 p-4 rounded-lg",
        stepColorClasses[props.color].stepBg
      )}
    >
      {props.children}
    </div>
  )
}

const LadderCard = forwardRef<HTMLDivElement, LadderCardProps>(
  ({ children, col, color }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          col === 1 && "col-start-1",
          col === 2 && "col-start-2",
          col === 3 && "col-start-3",
          col === 4 && "col-start-4",
          col === 5 && "col-start-5",
          "col-span-1 h-full w-full p-6 rounded-lg flex justify-center items-center text-center",
          col === 1 ? "text-4xl" : stepColorClasses[color].cardBg
        )}
        style={{ position: 'relative', zIndex: 20 }}
      >
        <p>{children}</p>
      </div>
    );
  }
);

const getConnectionPoint = (el: HTMLElement | null, anchor: 'top' | 'bottom') => {
  if (!el) return { x: 0, y: 0 };
  const rect = el.getBoundingClientRect();
  const container = el.closest('.ladder-container');
  const containerRect = container?.getBoundingClientRect();

  const x = rect.left + rect.width / 2 - (containerRect?.left || 0);
  const y = anchor === 'top'
    ? rect.top - (containerRect?.top || 0)
    : rect.bottom - (containerRect?.top || 0);

  return { x, y };
};

const createRoundedSteppedPath = (
  start: { x: number; y: number },
  end: { x: number; y: number },
  radius: number
) => {
  // If vertically aligned → straight line
  if (Math.abs(start.x - end.x) < 1) {
    return `M ${start.x} ${start.y} L ${end.x} ${end.y}`;
  }

  const midY = start.y + (end.y - start.y) * 0.5;
  const dir = end.x > start.x ? 1 : -1;

  // Clamp radius so it never overshoots
  const maxRadius = Math.min(
    radius,
    Math.abs(end.x - start.x) / 2,
    Math.abs(end.y - start.y) / 2
  );

  return `
    M ${start.x} ${start.y}
    L ${start.x} ${midY - maxRadius}

    Q ${start.x} ${midY} ${start.x + maxRadius * dir} ${midY}

    L ${end.x - maxRadius * dir} ${midY}

    Q ${end.x} ${midY} ${end.x} ${midY + maxRadius}

    L ${end.x} ${end.y}
  `;
};



export const ImpactLadder = () => {
  const [showConnections, setShowConnections] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);
  const card4Ref = useRef<HTMLDivElement>(null);
  const card5Ref = useRef<HTMLDivElement>(null);
  const card6Ref = useRef<HTMLDivElement>(null);
  const card7Ref = useRef<HTMLDivElement>(null);
  const card8Ref = useRef<HTMLDivElement>(null);

  // Animate ladder steps
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 40%",
        toggleActions: "play none none none",
        once: true,
      },
      onComplete: () => setShowConnections(true),
    });

    tl.fromTo(
      ".ladder-step",
      { opacity: 0, y: -10 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.2 }
    );
  }, []);

  // Draw connections with GSAP
  useEffect(() => {
    if (!showConnections || !svgRef.current) return;

    const drawPaths = (instant?: boolean) => {
      // Remove any existing paths
      svgRef.current!.innerHTML = "";

      const connections = [
        { start: card1Ref, end: card2Ref },
        { start: card1Ref, end: card3Ref },
        { start: card2Ref, end: card4Ref },
        { start: card3Ref, end: card4Ref },
        { start: card3Ref, end: card5Ref },
        { start: card4Ref, end: card6Ref },
        { start: card5Ref, end: card6Ref },
        { start: card4Ref, end: card7Ref },
        { start: card6Ref, end: card8Ref },
      ];

      const paths: SVGPathElement[] = [];

      connections.forEach(({ start, end }) => {
        const startPos = getConnectionPoint(start.current, 'bottom');
        const endPos = getConnectionPoint(end.current, 'top');
        const radius = 16;

        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        const d = createRoundedSteppedPath(startPos, endPos, radius);

        path.setAttribute("d", d);
        path.setAttribute("stroke", "#4a5568");
        path.setAttribute("stroke-width", "2");
        path.setAttribute("fill", "none");
        path.setAttribute("stroke-linecap", "round");
        path.setAttribute("stroke-linejoin", "round");

        svgRef.current!.appendChild(path);
        paths.push(path);
      });

      // Animate paths
      paths.forEach((path) => {
        const length = path.getTotalLength();
        path.style.strokeDasharray = `${length}`;
        path.style.strokeDashoffset = `${length}`;
      });

      gsap.to(paths, {
        strokeDashoffset: 0,
        duration: instant ? 0 : 0.8,
        stagger: instant ? 0 : 0.25,
        ease: "power1.inOut",
      });
    };

    drawPaths(); // initial draw

    const handleResize = () => {
      drawPaths(true);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      svgRef.current!.innerHTML = ""; // cleanup
    };
  }, [showConnections]);

  return (
    <div className="ladder-container relative grid grid-rows-5 gap-8 h-full w-[100%] 4xl:w-[80%]" ref={containerRef}>
      <svg
        ref={svgRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 1 }}
      />

      <LadderStep color="green">
        <LadderCard col={1} color="green">
          {t("impactladder.steps.1.title")}
        </LadderCard>
        <LadderCard col={3} color="green" ref={card1Ref}>
          {t("impactladder.steps.1.card1")}
        </LadderCard>
      </LadderStep>

      <LadderStep color="teal">
        <LadderCard col={1} color="teal">
          {t("impactladder.steps.2.title")}
        </LadderCard>
        <LadderCard col={2} color="teal" ref={card2Ref}>
          {t("impactladder.steps.2.card1")}
        </LadderCard>
        <LadderCard col={3} color="teal" ref={card3Ref}>
          {t("impactladder.steps.2.card2")}
        </LadderCard>
      </LadderStep>

      <LadderStep color="sky">
        <LadderCard col={1} color="sky">
          {t("impactladder.steps.3.title")}
        </LadderCard>
        <LadderCard col={3} color="sky" ref={card4Ref}>
          {t("impactladder.steps.3.card1")}
        </LadderCard>
        <LadderCard col={4} color="sky" ref={card5Ref}>
          {t("impactladder.steps.3.card2")}
        </LadderCard>
      </LadderStep>

      <LadderStep color="indigo">
        <LadderCard col={1} color="indigo">
          {t("impactladder.steps.4.title")}
        </LadderCard>
        <LadderCard col={4} color="indigo" ref={card6Ref}>
          {t("impactladder.steps.4.card1")}
        </LadderCard>
      </LadderStep>

      <LadderStep color="rose">
        <LadderCard col={1} color="rose">
          {t("impactladder.steps.5.title")}
        </LadderCard>
        <LadderCard col={3} color="rose" ref={card7Ref}>
          {t("impactladder.steps.5.card1")}
        </LadderCard>
        <LadderCard col={4} color="rose" ref={card8Ref}>
          {t("impactladder.steps.5.card2")}
        </LadderCard>
      </LadderStep>
    </div>
  );
};
