import type {ReactNode} from "react";
import {CardTitle} from "./typography/CardTitle.tsx";
import {cn} from "../utils/cn";


interface CardProps {
  background?: boolean
  children: ReactNode
  title: string
  className?: string
}


export const Card = (props: CardProps) => {
  return (
    <article
      className={
      cn(props.className,
        "border-2 p-6 flex flex-col gap-4 items-center",
        props.background
          ? "bg-white border-(--gray) rounded-lg shadow-sm"
          : "border-transparent")}
    >
      <CardTitle>{props.title}</CardTitle>
      <p>{props.children}</p>
    </article>
  )
}
