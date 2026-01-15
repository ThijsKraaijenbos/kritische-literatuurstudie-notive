import type {ReactNode} from "react";

interface CardTitleProps {
  children?: ReactNode
}


export const CardTitle = (props: CardTitleProps) => {
  return (
    <>
      <p>{props.children}</p>
      <div className={"w-full bg-blue-300"}></div>
    </>
  )
}
