import { Mail, MapPin } from "lucide-react";
import { UserCircle } from "@phosphor-icons/react";
import { MessageCircle } from "lucide-react";
import BrasilVetor from "/public/img/brasil-sp-highlight.svg";
import { Button } from "./ui/button";

export default function BrasilBanner() {
  return (
    <section className="flex w-full -translate-y-52 items-center justify-center pt-20">
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
        <img
          className="w-[450px] select-none"
          src={BrasilVetor}
          alt="Brasil vetor focus in São Paulo"
        />
        <div className="text-main-blue space-y-6">
          <div className="flex flex-col space-y-1">
            <h1 className="text-main-blue text-3xl font-bold">
              Itupeva - São Paulo
            </h1>
            <a
              href="https://maps.app.goo.gl/nnc5tczNXQhgreSS7"
              target="_blank"
              className="hover:text-main-blue flex gap-1 text-gray-400 underline transition-all"
            >
              <MapPin width={16} />
              <p>Localização no mapa</p>
            </a>
          </div>
          <div className="flex w-min items-center gap-2 rounded-lg bg-gray-200 p-2">
            <UserCircle size={40} weight="fill" className="text-gray-500" />
            <div className="">
              <h2 className="font-bold text-nowrap text-gray-500">
                Innovatech - Itupeva
              </h2>
              <p className="text-xs text-nowrap text-gray-500">
                (11) 95344-7434 - jsilva@innovatech24.com
              </p>
            </div>
            <div className="flex gap-3 ml-2">
              <Button className="bg-main-blue">
                <MessageCircle className="text-white" />
              </Button>
              <Button className="bg-main-blue">
                <Mail className="text-white" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
