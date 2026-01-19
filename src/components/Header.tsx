import { Divider } from "./Divider.tsx";
import {t} from "../utils/t.ts";

export const Header = () => {
  return (
    <div className="relative">
      <header className="flex flex-col justify-center items-center gap-y-4 w-full -mt-4 h-80 relative z-0">
        <img
          src="./banner3.png"
          alt="Header banner"
          className="w-full h-full object-cover brightness-95"
        />
        <div className={"absolute"}>
          <h1 className={"text-center"}>{t("mainTitle")}</h1>
          <h2 className={"text-center !text-2xl"}>{t("mainSubtitle")}</h2>
        </div>
      </header>

      {/* Divider overlapping the header */}
      <Divider
        className="!w-full bg-gradient-to-r from-(--dark-blue) via-(--light-blue) to-(--dark-blue) relative z-20"
      />
    </div>
  );
};
