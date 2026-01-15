import type {ReactNode} from "react";

interface SectionTitleProps {
  children?: ReactNode
}


export const SectionTitle = (props: SectionTitleProps) => {
  return (
    <>
      <p>{props.children}</p>
    </>
  )
}
