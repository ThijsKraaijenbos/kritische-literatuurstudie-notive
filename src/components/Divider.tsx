// import {cn} from "../utils/cn.ts";

import {cn} from "../utils/cn.ts";

interface DividerProps {
  className?: string
}

export const Divider = (props: DividerProps) => {
  return (
    <div className={cn("bg-(--gray) p-0.25 w-[80%] h-full", props.className)}/>
  )
}
