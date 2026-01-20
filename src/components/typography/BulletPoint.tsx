import {forwardRef, type ReactNode} from "react";
import {cn} from "../../utils/cn.ts";

interface BulletPointProps {
  children?: ReactNode
  className?: string
}


export const BulletPoint = forwardRef<HTMLDivElement, BulletPointProps>((props, ref) => {
  return (
    <div
      className={cn("flex gap-2.5 items-start", props.className)}
      ref={ref}
    >
      <span className="mt-[0.8ex] w-3 h-3 rounded-sm bg-[var(--light-blue)] shrink-0" />
      <p className={cn("leading-relaxed hyphens-auto", props.className)}>{props.children}</p>
    </div>
  )
})
