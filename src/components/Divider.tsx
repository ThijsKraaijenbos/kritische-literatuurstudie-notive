interface DividerProps {
  direction: "vertical" | "horizontal"
}

export const Divider = (props: DividerProps) => {
  return (
    <div className={"bg-red-400"}>
      <p>TEST: {props.direction}</p>
    </div>
  )
}
