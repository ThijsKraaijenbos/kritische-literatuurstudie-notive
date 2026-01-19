// import {forwardRef, type ReactNode, useEffect, useRef, useState} from "react";
// import {t} from "../utils/t.ts";
// import {cn} from "../utils/cn.ts";
// import gsap from "gsap";
// import {ScrollTrigger} from "gsap/ScrollTrigger";
// import Xarrow from "react-xarrows";
//
// gsap.registerPlugin(ScrollTrigger);
//
// interface LadderStepProps {
//   children?: ReactNode
//   color: StepColor
// }
//
// interface LadderCardProps {
//   children?: ReactNode
//   col: number
//   color: StepColor
// }
//
// type StepColor = "green" | "teal" | "sky" | "indigo" | "rose";
//
// const stepColorClasses: Record<StepColor, {
//   stepBg: string
//   cardBg: string
// }> = {
//   green: {
//     stepBg: "bg-green-100",
//     cardBg: "bg-green-200",
//   },
//   teal: {
//     stepBg: "bg-teal-100",
//     cardBg: "bg-teal-200",
//   },
//   sky: {
//     stepBg: "bg-sky-100",
//     cardBg: "bg-sky-200",
//   },
//   indigo: {
//     stepBg: "bg-indigo-100",
//     cardBg: "bg-indigo-200",
//   },
//   rose: {
//     stepBg: "bg-rose-100",
//     cardBg: "bg-rose-200",
//   },
// };
//
//
// const LadderStep = (props: LadderStepProps) => {
//   return (
//     <div
//       className={cn(
//         "ladder-step h-full grid grid-cols-4 gap-8 p-4 rounded-lg",
//         stepColorClasses[props.color].stepBg
//       )}
//     >
//       {props.children}
//     </div>
//   )
// }
//
// const LadderCard = forwardRef<HTMLDivElement, LadderCardProps>(
//   ({ children, col, color }, ref) => {
//     return (
//       <div
//         ref={ref}
//         className={cn(
//           col === 1 && "col-start-1",
//           col === 2 && "col-start-2",
//           col === 3 && "col-start-3",
//           col === 4 && "col-start-4",
//           col === 5 && "col-start-5",
//           "col-span-1 h-full w-full p-6 rounded-lg flex justify-center items-center text-center z-20",
//           col === 1 ? "text-4xl" : stepColorClasses[color].cardBg
//         )}
//       >
//
//       <p>{children}</p>
//       </div>
//     );
//   }
// );
//
// export const ImpactLadderBkup = () => {
//   const [showConnections, setShowConnections] = useState(false);
//   const containerRef = useRef<HTMLDivElement>(null);
//   const card1Ref = useRef(null);
//   const card2Ref = useRef(null);
//   const card3Ref = useRef(null);
//   const card4Ref = useRef(null);
//   const card5Ref = useRef(null);
//   const card6Ref = useRef(null);
//   const card7Ref = useRef(null);
//   const card8Ref = useRef(null);
//
//   const arrowsContainerRef = useRef<HTMLDivElement>(null);
//
//   // Animate ladder steps
//   useEffect(() => {
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: containerRef.current,
//         start: "top 50%",
//         toggleActions: "play none none none",
//         once: true,
//       },
//       onComplete: () => setShowConnections(true),
//     });
//
//     tl.fromTo(
//       ".ladder-step",
//       { opacity: 0, y: -10 },
//       { opacity: 1, y: 0, duration: 0.5, stagger: 0.2 }
//     );
//   }, []);
//
//   useEffect(() => {
//     if (!showConnections) return;
//
//     const paths = arrowsContainerRef.current?.querySelectorAll("path");
//     if (!paths) return;
//
//     paths.forEach((path) => {
//       const length = (path as SVGPathElement).getTotalLength();
//       (path as SVGPathElement).style.strokeDasharray = `${length}`;
//       (path as SVGPathElement).style.strokeDashoffset = `${length}`;
//     });
//
//     gsap.to(paths, {
//       strokeDashoffset: 0,
//       duration: 1,
//       stagger: 0.2,
//       ease: "power1.inOut",
//     });
//   }, [showConnections]);
//
//
//   return (
//     <div className="grid grid-rows-5 gap-8 h-full w-[80%]" ref={containerRef}>
//       {/* --- Ladder Steps --- */}
//       <LadderStep color="green">
//         <LadderCard col={1} color="green">
//           {t("impactladder.steps.1.title")}
//         </LadderCard>
//         <LadderCard col={3} color="green" ref={card1Ref}>
//           {t("impactladder.steps.1.card1")}
//         </LadderCard>
//       </LadderStep>
//
//       <LadderStep color="teal">
//         <LadderCard col={1} color="teal">
//           {t("impactladder.steps.2.title")}
//         </LadderCard>
//         <LadderCard col={2} color="teal" ref={card2Ref}>
//           {t("impactladder.steps.2.card1")}
//         </LadderCard>
//         <LadderCard col={3} color="teal" ref={card3Ref}>
//           {t("impactladder.steps.2.card2")}
//         </LadderCard>
//       </LadderStep>
//
//       <LadderStep color="sky">
//         <LadderCard col={1} color="sky">
//           {t("impactladder.steps.3.title")}
//         </LadderCard>
//         <LadderCard col={3} color="sky" ref={card4Ref}>
//           {t("impactladder.steps.3.card1")}
//         </LadderCard>
//         <LadderCard col={4} color="sky" ref={card5Ref}>
//           {t("impactladder.steps.3.card2")}
//         </LadderCard>
//       </LadderStep>
//
//       <LadderStep color="indigo">
//         <LadderCard col={1} color="indigo">
//           {t("impactladder.steps.4.title")}
//         </LadderCard>
//         <LadderCard col={4} color="indigo" ref={card6Ref}>
//           {t("impactladder.steps.4.card1")}
//         </LadderCard>
//       </LadderStep>
//
//       <LadderStep color="rose">
//         <LadderCard col={1} color="rose">
//           {t("impactladder.steps.5.title")}
//         </LadderCard>
//         <LadderCard col={3} color="rose" ref={card7Ref}>
//           {t("impactladder.steps.5.card1")}
//         </LadderCard>
//         <LadderCard col={4} color="rose" ref={card8Ref}>
//           {t("impactladder.steps.5.card2")}
//         </LadderCard>
//       </LadderStep>
//
//       {showConnections && (
//         <div ref={arrowsContainerRef}>
//           <Xarrow
//             start={card1Ref}
//             end={card2Ref}
//             curveness={1}
//             showHead={false}
//             startAnchor="bottom"
//             endAnchor="top"
//             color="var(--dark-gray)"
//             animateDrawing={2}
//           />
//           <Xarrow
//             start={card1Ref}
//             end={card3Ref}
//             showHead={false}
//             curveness={1}
//             startAnchor="bottom"
//             endAnchor="top"
//             color="var(--dark-gray)"
//           />
//           <Xarrow
//             start={card2Ref}
//             end={card4Ref}
//             curveness={1}
//             showHead={false}
//             startAnchor="bottom"
//             endAnchor="top"
//             color="var(--dark-gray)"
//           />
//           <Xarrow
//             start={card3Ref}
//             end={card4Ref}
//             showHead={false}
//             curveness={1}
//             startAnchor="bottom"
//             endAnchor="top"
//             color="var(--dark-gray)"
//           />
//           <Xarrow
//             start={card3Ref}
//             end={card5Ref}
//             curveness={1}
//             showHead={false}
//             startAnchor="bottom"
//             endAnchor="top"
//             color="var(--dark-gray)"
//           />
//           <Xarrow
//             start={card4Ref}
//             end={card6Ref}
//             showHead={false}
//             curveness={1}
//             startAnchor="bottom"
//             endAnchor="top"
//             color="var(--dark-gray)"
//           />
//           <Xarrow
//             start={card5Ref}
//             end={card6Ref}
//             curveness={1}
//             showHead={false}
//             startAnchor="bottom"
//             endAnchor="top"
//             color="var(--dark-gray)"
//           />
//           <Xarrow
//             start={card4Ref}
//             end={card7Ref}
//             showHead={false}
//             curveness={0}
//             startAnchor="bottom"
//             endAnchor="top"
//             color="var(--dark-gray)"
//           />
//           <Xarrow
//             start={card6Ref}
//             end={card8Ref}
//             showHead={false}
//             curveness={0}
//             startAnchor="bottom"
//             endAnchor="top"
//             color="var(--dark-gray)"
//           />
//         </div>
//       )}
//     </div>
//   );
// };
//
