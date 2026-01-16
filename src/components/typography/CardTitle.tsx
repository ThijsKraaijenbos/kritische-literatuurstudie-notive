import type {ReactNode} from "react";
import {cn} from "../../utils/cn.ts";

interface CardTitleProps {
  children?: ReactNode
  className?: string
}


export const CardTitle = (props: CardTitleProps) => {
  return (
    <span className={"flex flex-col gap-1"}>
      <h3 className={cn("bg-gradient-to-r from-(--dark-blue) to-(--light-blue) !text-transparent bg-clip-text", props.className)}>{props.children}</h3>
      <div className={cn("w-full bg-gradient-to-r from-(--dark-blue) to-(--light-blue) p-0.25", props.className )}></div>
    </span>
  )
}
