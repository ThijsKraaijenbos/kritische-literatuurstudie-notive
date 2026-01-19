import {SectionTemplate} from "./components/SectionTemplate.tsx";
import {t} from "./utils/t.ts";
import {SwotAnalysis} from "./components/SwotAnalysis.tsx";
import ConfrontationMatrix from "./components/ConfrontationMatrix.tsx";
import ProblemAndContext from "./components/ProblemAndContext.tsx";

function App() {
  return (
    <>
      <header/>
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
        </SectionTemplate>
      </main>
    </>
  );
}

export default App;
