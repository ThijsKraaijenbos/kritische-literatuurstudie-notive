import {SectionTemplate} from "./components/SectionTemplate.tsx";
import {t} from "./utils/t.ts";
import {SwotAnalysis} from "./components/sections/SwotAnalysis.tsx";
import ConfrontationMatrix from "./components/sections/ConfrontationMatrix.tsx";
import ProblemAndContext from "./components/sections/ProblemAndContext.tsx";
import {ImpactLadder} from "./components/sections/ImpactLadder.tsx";
import {Header} from "./components/sections/Header.tsx";
import {Reasoning} from "./components/sections/Reasoning.tsx";
import {Sources} from "./components/sections/Sources.tsx";
import {Conclusion} from "./components/sections/Conclusion.tsx";

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
            <p className="w-[60%] text-lg">
              {t("swot.description")}
            </p>

            <SwotAnalysis/>
          </SectionTemplate>

          {/* Confrontatiematrix */}
          <SectionTemplate
            title={t("confrontatiematrix.title")}>
            <p className="w-[60%] text-lg">
              {t("confrontatiematrix.description")}
            </p>
              <ConfrontationMatrix/>
          </SectionTemplate>

          {/* Impactladder */}
          <SectionTemplate
            title={t("impactladder.title")}>
            <p className="w-[60%] text-lg">
              {t("impactladder.description")}
            </p>
            <ImpactLadder/>
          </SectionTemplate>

          {/* Onderbouwing */}
          <SectionTemplate
            title={t("onderbouwing.title")}>
            <p className="w-[60%] text-lg">
              {t("onderbouwing.description")}
            </p>
            <Reasoning/>
          </SectionTemplate>

          {/* Conclusie */}
          <SectionTemplate
            title={t("conclusie.title")}>
            <Conclusion/>
          </SectionTemplate>

          {/*Bronnen*/}
          <SectionTemplate
            title={t("bronnenlijst.title")}>
            <Sources/>
          </SectionTemplate>
        </main>
      </div>
  );
}

export default App;
