import type {ReactNode} from "react";

interface BulletPointProps {
  children?: ReactNode
}


export const BulletPoint = (props: BulletPointProps) => {
  return (
    <div className="flex gap-4 items-start">
      <span className="mt-[0.8ex] w-3 h-3 bg-[var(--light-blue)] shrink-0" />
      <p className="leading-relaxed">{props.children}</p>
    </div>
  )
}

