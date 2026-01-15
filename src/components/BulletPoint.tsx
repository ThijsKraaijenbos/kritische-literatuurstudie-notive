import type {ReactNode} from "react";
import {CardTitle} from "./typography/CardTitle.tsx";

interface BulletPointProps {
  background?: boolean
  children?: ReactNode
}


export const BulletPoint = (props: BulletPointProps) => {
  return (
    <article className={props.background ? "bg-blue-200" : ""}>
      <CardTitle></CardTitle>
    </article>
  )
}
