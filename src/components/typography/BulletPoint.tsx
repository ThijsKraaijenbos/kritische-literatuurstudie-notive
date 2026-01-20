import {forwardRef, type ReactNode} from "react";
import {cn} from "../../utils/cn.ts";

interface BulletPointProps {
  children?: ReactNode
  className?: string
}


export const BulletPoint = forwardRef<HTMLDivElement, BulletPointProps>((props, ref) => {
  return (
    <div
      className={cn("flex gap-4 items-start", props.className)}
      ref={ref}
    >
      <span className="mt-[0.8ex] w-3 h-3 bg-[var(--light-blue)] shrink-0" />
      <p className="leading-relaxed hyphens-auto">{props.children}</p>
    </div>
  )
})
