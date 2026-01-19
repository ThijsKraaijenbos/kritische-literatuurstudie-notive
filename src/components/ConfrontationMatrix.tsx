import {t} from "../utils/t.ts";
import {cn} from "../utils/cn.ts";
import type {ReactNode} from "react";
import {CardTitle} from "./typography/CardTitle.tsx";
import {TitleColor} from "./Card.tsx";

interface CellProps {
    value: string | number
    direction?: "horizontal" | "vertical"
    start?: number
    end?: number
    className?: string
    children?: ReactNode
    type?: "label" | "total"
    titleColor?: typeof TitleColor[keyof typeof TitleColor]
}

const Cell = (props: CellProps) => {
    let additionalClasses: string;

    if (props.direction === "horizontal") {
        additionalClasses = `col-start-${props.start} col-end-${props.end}`;
    } else if (props.direction === "vertical") {
        additionalClasses = `row-start-${props.start} row-end-${props.end}`;
    } else {
        additionalClasses = "";
    }

    if (props.type !== "total") {
        if (props.value == 1) {
            additionalClasses += " bg-green-100";
        } else if (props.value == 2) {
            additionalClasses += " bg-green-200";
        } else if (props.value == -1) {
            additionalClasses += " bg-red-100";
        } else if (props.value == -2) {
            additionalClasses += " bg-red-200";
        }
    }

    return (
        <div className={cn(additionalClasses, 'justify-center items-center flex w-full h-full text-center border-(--gray) border-3', props.className)}>
            {props.type === "label" && (
                <CardTitle className={cn(props.titleColor, "!text-base")}>{t(props.value.toString())}</CardTitle>
            ) || !props.children &&
				<p className={"hyphens-auto"}>{t(props.value.toString())}</p>
            }
        </div>
    );
}

export default function ConfrontatieMatrix() {

    const scores = [
        +1, +2, +1,  0,  0,  0,
         0, +2, +2, +1,  0, +1,
         0, +2,  0, +1,  0,  0,
         0, -2, +1, -2, -2, -2,
        -1, -1,  0, -1, -2, -1,
         0, -1,  0, -1, -1, -1
    ];

    const totals = [
        [4, 6, 3, -7, -6, -4],
        [1, 2, 4, -2, -5, -3]
    ]



    return (
        <div className="grid grid-cols-9 grid-rows-9 border-(--gray) border-3 mx-auto w-[100%] 3xl:w-[90%] 2xl:w-[95%] xl:w-[100%] rounded-lg">
            {/*swot labels*/}
            <Cell value={"confrontatiematrix.kansen.title"} type={"label"} direction={"horizontal"} start={3} end={6}/>
            <Cell value={"confrontatiematrix.bedreigingen.title"} type={"label"} direction={"horizontal"} start={6} end={9} titleColor={TitleColor.RED}/>
            <Cell value={"confrontatiematrix.sterktes.title"} type={"label"} direction={"vertical"} start={3} end={6} titleColor={TitleColor.GREEN}/>
            <Cell value={"confrontatiematrix.zwaktes.title"} type={"label"} direction={"vertical"} start={6} end={9} titleColor={TitleColor.ORANGE}/>

            {/*kansen & bedreigingen*/}
            <div className={"col-start-3 col-end-9 row-start-2 grid grid-cols-6"}>
                <Cell value={"confrontatiematrix.kansen.1"}/>
                <Cell value={"confrontatiematrix.kansen.2"}/>
                <Cell value={"confrontatiematrix.kansen.3"}/>
                <Cell value={"confrontatiematrix.bedreigingen.1"}/>
                <Cell value={"confrontatiematrix.bedreigingen.2"}/>
                <Cell value={"confrontatiematrix.bedreigingen.3"}/>
            </div>

            {/*sterktes & zwaktes*/}
            <div className={"row-start-3 row-end-9 grid grid-rows-6"}>
                <Cell value={"confrontatiematrix.sterktes.1"}/>
                <Cell value={"confrontatiematrix.sterktes.2"}/>
                <Cell value={"confrontatiematrix.sterktes.3"}/>
                <Cell value={"confrontatiematrix.zwaktes.1"}/>
                <Cell value={"confrontatiematrix.zwaktes.2"}/>
                <Cell value={"confrontatiematrix.zwaktes.3"}/>
            </div>

            {/*scores*/}
            <div className={"col-start-3 col-end-9 row-start-3 row-end-9 grid grid-rows-6 grid-cols-6"}>
                {scores.map((score, index) =>
                    <Cell key={index} value={score}/>
                )}
            </div>

            {/*totals vertical*/}
            <div className={"col-start-9 row-start-3 row-end-9 grid grid-rows-6"}>
                {totals[0].map((score, index) =>
                    <Cell key={index} value={score} type={"total"}/>
                )}
            </div>

            {/*totals horizontal*/}
            <div className={"crow-start-9 col-start-3 col-end-9 grid grid-cols-6"}>
                {totals[1].map((score, index) =>
                    <Cell key={index} value={score} type={"total"}/>
                )}
            </div>

        </div>
    );
}
