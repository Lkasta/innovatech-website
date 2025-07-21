import { FaGlobeAmericas } from "react-icons/fa";

export default function AboutDivision() {
  return (
    <section className="bg-main-blue flex h-10 w-full items-center justify-center">
      <div className="flex items-center justify-center gap-3">
        <FaGlobeAmericas className="text-white" />
        <h1 className="font-medium text-white">
          Atendimento especializado e com excelência para todas as regiões do
          Brasil.
        </h1>
      </div>
    </section>
  );
}
