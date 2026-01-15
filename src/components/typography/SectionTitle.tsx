import type {ReactNode} from "react";

interface CardProps {
  background?: boolean
  children?: ReactNode
}


export const Title = (props: CardProps) => {
  return (
    <>
      <p>{props.children}</p>
      <p>{props.background && "background is true"}</p>
    </>
  )
}
