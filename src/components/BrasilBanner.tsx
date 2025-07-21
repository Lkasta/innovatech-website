import { CircleUserRound } from "lucide-react";
import { Button } from "./ui/button";
import BrasilVetor from "/public/img/brasil-sp-highlight.svg";

export default function BrasilBanner() {
  return (
    <section className="flex w-full -translate-y-52 items-center justify-center py-20">
      <div className="container grid grid-cols-3 items-center rounded-lg bg-white p-10">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-gray-800 md:text-4xl">
            Entre em contato com a nossa equipe
          </h1>
          <p className="text-lg text-gray-600">
            Estamos sempre prontos para oferecer o suporte que você precisa.
            Conte com a nossa equipe para esclarecer suas dúvidas e encontrar as
            melhores soluções.
          </p>
        </div>
        <img className="w-[450px] select-none" src={BrasilVetor} alt="Brasil vetor focus in São Paulo" />
        <div className="text-main-blue">
          <div className="flex gap-3">
            <h1 className="text-main-blue text-3xl font-bold">São Paulo</h1>
            <Button className="border-2 border-gray-400 bg-gray-200 text-gray-400">
              Localização no mapa
            </Button>
          </div>
          <div className="w-min rounded-lg bg-gray-200 p-2">
            <CircleUserRound width={25} height={25} className="" />
            <div className="">
              <h2>Innovatech - Itupeva</h2>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
