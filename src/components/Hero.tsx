import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="to-main-blue/25 bg-gradient-to-br from-gray-50 pt-10"
    >
      <div className="static container mx-auto px-4 lg:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl leading-tight font-bold text-gray-800 lg:text-6xl">
                Soluções
                <span className="text-main-blue"> inteligentes</span> em
                <span className="text-main-yellow"> eletrônica</span> e
                <span className="text-main-yellow flex-nowrap"> automação</span>
              </h1>
              <p className="text-xl leading-relaxed text-gray-600">
                Desenvolvemos tecnologias avançadas para otimizar seus processos
                industriais com qualidade, inovação e eficiência.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                className="bg-main-blue h-12 rounded-lg px-8 py-3 text-white transition-all duration-300 hover:scale-105"
              >
                <p className="select-none">Solicitar Orçamento</p>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 rounded-lg border-2 border-emerald-500 bg-transparent px-8 py-3 text-emerald-600 transition-all duration-300 hover:scale-105 hover:bg-emerald-100"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                <p className="select-none">Falar no WhatsApp</p>
              </Button>
            </div>
          </div>

          <div className="pointer-events-none ml-auto">
            <img
              className="w-[500px] select-none"
              src="/public/img/hero-innovatech.webp"
              alt="img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
