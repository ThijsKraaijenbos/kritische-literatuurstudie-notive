import {SectionTemplate} from "./components/SectionTemplate.tsx";
import {Card} from "./components/Card.tsx";
import {t} from "./utils/t.ts";
import {SwotAnalysis} from "./components/SwotAnalysis.tsx";

function App() {
  return (
    <>
      <header/>
      <main className="flex flex-col justify-center items-center gap-x-8 gap-y-24 mx-auto max-w-[70%] 2xl:max-w-[60%] xl:max-w-[80%]">
        {/* Probleem En Context */}
        <SectionTemplate title={t('probleemEnContext.title')}>
          <div className="gap-x-8 flex flex-row justify-center">
            <Card
              background={true}
              title={t("probleemEnContext.context.title")}
              className="basis-1/3"
            >
              <p>{t("probleemEnContext.context.description")}</p>
            </Card>

            <Card
              background={true}
              title={t("probleemEnContext.onderzoeksvraag.title")}
              className="basis-1/3"
            >
              <p>{t("probleemEnContext.onderzoeksvraag.description")}</p>
            </Card>

            <Card
              background={true}
              title={t("probleemEnContext.standpunt.title")}
              className="basis-1/3"
            >
              <p>{t("probleemEnContext.standpunt.description")}</p>
            </Card>
          </div>
        </SectionTemplate>

        {/* SWOT analyse */}
        <SectionTemplate
          title={t("swot.title")}>
          <p className="w-[60%]">
            {t("swot.description")}
          </p>

          <SwotAnalysis/>
        </SectionTemplate>

        {/* Confrontatiematrix */}
        <SectionTemplate
          title={t("confrontatiematrix.title")}>
          <p className="w-[60%]">
            {t("confrontatiematrix.description")}
          </p>
        </SectionTemplate>

        {/* Impactladder */}
        <SectionTemplate
          title={t("impactladder.title")}>
          <p className="w-[60%]">
            {t("impactladder.description")}
          </p>
        </SectionTemplate>
      </main>
    </>
  );
}

export default App;
