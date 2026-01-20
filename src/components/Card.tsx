import { forwardRef, type ReactNode } from "react";
import { CardTitle } from "./typography/CardTitle.tsx";
import { cn } from "../utils/cn";

export const TitleColor = {
  GREEN: "from-(--dark-green) to-(--light-green)",
  ORANGE: "from-(--dark-orange) to-(--light-orange)",
  RED: "from-(--dark-red) to-(--light-red)",
} as const;

type TitleColorValue = typeof TitleColor[keyof typeof TitleColor];

import type { Ref } from "react";

interface CardProps {
  background?: boolean;
  children: ReactNode;
  title: string;
  className?: string;
  titleColor?: TitleColorValue;
  animatedTitle?: boolean;
  titleRef?: Ref<HTMLHeadingElement>;
  titleLineRef?: Ref<HTMLDivElement>;
}


export const Card = forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  return (
    <article
      ref={ref}
      className={cn(
        "border-2 p-6 flex flex-col gap-4 items-center",
        props.background
          ? "bg-white border-(--gray) rounded-lg shadow-sm"
          : "border-transparent",
        props.className
      )}
    >
      <CardTitle
        className={cn(props.titleColor)} animatedTitle={props.animatedTitle}
        titleRef={props.titleRef}
        titleLineRef={props.titleLineRef}
      >
        {props.title}
      </CardTitle>
      {props.children}
    </article>
  );
});
