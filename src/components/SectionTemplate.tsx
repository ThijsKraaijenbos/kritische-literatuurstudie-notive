import {SectionTitle} from "./typography/SectionTitle.tsx";
import {Divider} from "./Divider.tsx";
import {type ReactNode} from "react";

interface SectionTemplateProps {
  children?: ReactNode
  title: string
}

export const SectionTemplate = (props: SectionTemplateProps) => {
  return (
    <section className={"w-full h-full flex flex-col gap-8 justify-center items-center"}>
      <SectionTitle>{props.title}</SectionTitle>
      {props.children}
      <Divider/>
    </section>
  )
}
