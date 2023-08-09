import { api } from "@/trpc/server";
import useTranslation from "next-translate/useTranslation";

export default async function Home() {
  const data = await api.character.getByGame.query({
    gameId: "cll0uj2bc0000iblwryjtriof",
  });

  // {data?.map((character) => {
  //   return (
  //     <div
  //       key={character.id}
  //       className=" mt-8 flex flex-col items-start gap-3 rounded-lg bg-gray-800 px-4 py-2 text-4xl shadow-lg"
  //     >
  //       <div>{character.name}</div>
  //       <div className="flex items-center justify-center gap-3">
  //         <img width={150} src={character.image} />
  //         <img width={100} src={character.element.image} />
  //         <div>
  //           <img width={100} src={character.weapon.image} />
  //           <img width={100} src={character.talents.image} />
  //         </div>
  //       </div>
  //     </div>
  //   );
  // })}
  const { t, lang } = useTranslation();
  return (
    <div className="">
      <nav className="mb-14 flex h-12 w-full items-center justify-center  border-b border-slate-800">
        <h1>XD</h1>
      </nav>
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-4xl font-bold">Next character in</h1>
        {t("home:title")}
      </div>
    </div>
  );
}
