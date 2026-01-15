import type {ReactNode} from "react";

interface CardTitleProps {
  children?: ReactNode
}


export const CardTitle = (props: CardTitleProps) => {
  return (
    <span className={"flex flex-col gap-1"}>
      <h3 className="bg-gradient-to-r from-(--dark-blue) to-(--light-blue) inline-block !text-transparent bg-clip-text">{props.children}</h3>
      <div className={"w-full bg-gradient-to-r from-(--dark-blue) to-(--light-blue) p-0.25"}></div>
    </span>
  )
}
