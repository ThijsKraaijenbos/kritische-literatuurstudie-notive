import {SectionTemplate} from "./components/SectionTemplate.tsx";
import {t} from "./utils/t.ts";
import {SwotAnalysis} from "./components/SwotAnalysis.tsx";
import ConfrontationMatrix from "./components/ConfrontationMatrix.tsx";
import ProblemAndContext from "./components/ProblemAndContext.tsx";
import {ImpactLadder} from "./components/ImpactLadder.tsx";
import {Header} from "./components/Header.tsx";

function App() {
  return (
    <div className={"gap-y-24 flex flex-col"}>
      <Header></Header>
      <main className="flex flex-col justify-center items-center gap-x-8 gap-y-24 mx-auto max-w-[75%] 2xl:max-w-[70%] xl:max-w-[80%]">
        {/* Probleem En Context */}
        <SectionTemplate
          title={t('probleemEnContext.title')}>
          <ProblemAndContext/>
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
            <ConfrontationMatrix/>
        </SectionTemplate>

        {/* Impactladder */}
        <SectionTemplate
          title={t("impactladder.title")}>
          <p className="w-[60%]">
            {t("impactladder.description")}
          </p>
          <ImpactLadder/>
        </SectionTemplate>

        {/* Onderbouwing */}
        <SectionTemplate
          title={t("onderbouwing.title")}>
          <p className="w-[60%]">
            {t("impactladder.description")}
          </p>
        </SectionTemplate>

        {/* Conclusie */}
        <SectionTemplate
          title={t("conclusie.title")}>
          <p className="w-[60%]">
            {t("impactladder.description")}
          </p>
        </SectionTemplate>

        <SectionTemplate
          title={t("bronnenlijst.title")}>
          <p className="w-[60%]">
            {t("impactladder.description")}
          </p>
        </SectionTemplate>
      </main>
    </div>
  );
}

export default App;
