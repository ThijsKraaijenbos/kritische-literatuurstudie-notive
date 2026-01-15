import type {ReactNode} from "react";

interface SectionTitleProps {
  children?: ReactNode
}


export const SectionTitle = (props: SectionTitleProps) => {
  return (
    <div className="h-full w-[70%] mx-auto px-8 py-2 bg-gradient-to-r from-(--dark-blue) to-(--light-blue) rounded-sm shadow-lg">
      <h2>{props.children}</h2>
    </div>
  )
}
