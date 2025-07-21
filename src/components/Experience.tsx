import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import BrasilBanner from "./BrasilBanner";
import LogoGray from "/public/img/innova-gray-400.webp";

export default function Experience() {
  return (
    <section className="relative overflow-hidden bg-gray-100">
      <div className="container flex w-full">
        <div className="to-main-blue/25 w-[55%] origin-top-left skew-x-[-6deg] bg-gray-100 bg-gradient-to-t" />

        <div className="mx-auto flex-1 px-4 pt-32 pb-56 lg:px-6">
          <div className="space-y-5">
            <h2 className="mb-4 text-5xl font-bold text-gray-800 lg:text-5xl">
              15 anos de experiência
            </h2>
            <div className="space-y-4">
              <p className="max-w-3xl text-xl text-gray-600">
                Somos uma empresa especializada em eletrônica e automação
                industrial com mais de 15 anos de experiência no setor,
                oferecendo soluções tecnológicas inovadoras e personalizadas.
              </p>
              <p className="max-w-3xl text-xl text-gray-600">
                Nosso compromisso é desenvolver projetos personalizados,
                realizar manutenções precisas e implementar tecnologias que
                otimizam processos, reduzem custos e aumentam a produtividade.
              </p>
            </div>
            <Button
              size="lg"
              className="bg-main-blue h-12 rounded-lg px-8 py-3 text-white transition-all duration-300 hover:scale-105"
            >
              <p className="select-none">Solicitar Orçamento</p>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="mt-8 flex items-center gap-4 rounded-lg border-2 border-gray-300 bg-gray-200 px-6 py-4">
            <img
              className="size-20 select-none"
              src={LogoGray}
              alt="Innovatech Logo Image"
            />
            <p className="font-medium text-gray-400">
              Nosso compromisso é desenvolver projetos personalizados, realizar
              manutenções precisas e implementar tecnologias que otimizam
              processos, reduzem custos e aumentam a produtividade.
            </p>
          </div>
        </div>
      </div>
      <BrasilBanner />
    </section>
  );
}
