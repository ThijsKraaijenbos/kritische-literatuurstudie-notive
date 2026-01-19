import {Card, TitleColor} from "./Card.tsx";
import {t} from "../utils/t.ts";
import {BulletPoint} from "./BulletPoint.tsx";

export const SwotAnalysis = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-2 border-(--gray) border-3 mx-auto w-[70%] shadow-lg rounded-lg">
      <Card title={t("swot.sterktes.title")} className={"border-(--gray) border-2 w-full h-full"} titleColor={TitleColor.GREEN}>
        <span className="flex flex-col gap-4">
          <BulletPoint>{t("swot.sterktes.1")}</BulletPoint>
          <BulletPoint>{t("swot.sterktes.2")}</BulletPoint>
          <BulletPoint>{t("swot.sterktes.3")}</BulletPoint>
        </span>
      </Card>
      <Card title={t("swot.zwaktes.title")} className={"border-(--gray) border-2 w-full h-full"} titleColor={TitleColor.ORANGE}>
        <span className="flex flex-col gap-4">
          <BulletPoint>{t("swot.zwaktes.1")}</BulletPoint>
          <BulletPoint>{t("swot.zwaktes.2")}</BulletPoint>
          <BulletPoint>{t("swot.zwaktes.3")}</BulletPoint>
        </span>
      </Card>
      <Card title={t("swot.kansen.title")} className={"border-(--gray) border-2 w-full h-full"}>
        <span className="flex flex-col gap-4">
          <BulletPoint>{t("swot.kansen.1")}</BulletPoint>
          <BulletPoint>{t("swot.kansen.2")}</BulletPoint>
          <BulletPoint>{t("swot.kansen.3")}</BulletPoint>
        </span>
      </Card>
      <Card title={t("swot.bedreigingen.title")} className={"border-(--gray) border-2 w-full h-full"} titleColor={TitleColor.RED}>
        <span className="flex flex-col gap-4">
          <BulletPoint>{t("swot.bedreigingen.1")}</BulletPoint>
          <BulletPoint>{t("swot.bedreigingen.2")}</BulletPoint>
          <BulletPoint>{t("swot.bedreigingen.3")}</BulletPoint>
        </span>
      </Card>
    </div>
  )
}
