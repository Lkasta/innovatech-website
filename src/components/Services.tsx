import { Code, Cog, Cpu, Wrench } from "lucide-react";

const services = [
  {
    titleHighlighted: "Manutenção",
    titleSecondary: "Em eletrônica",
    icon: Wrench,
  },
  {
    titleHighlighted: "Desenvolvimento PCB's",
    titleSecondary: "Em eletrônica",
    icon: Cpu,
  },
  {
    titleHighlighted: "Automação",
    titleSecondary: "Soluçoes Industriais",
    icon: Cog,
  },
  {
    titleHighlighted: "Programação",
    titleSecondary: "CLP, IHM, Drives e microcontroladores",
    icon: Code,
  },
];

export default function Services() {
  return (
    <div className="flex -translate-y-1/2 items-center justify-center">
      <div className="container flex justify-between rounded-3xl bg-white p-8 shadow-xs">
        {services.map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={`${item.titleHighlighted}-${i}`}
              className="mx-2 flex items-center justify-between gap-x-2"
            >
              <div className="bg-main-blue/10 mx-auto flex items-center justify-center rounded-lg">
                <Icon className="text-main-blue h-8 w-8 m-4" />
              </div>
              <div className="flex flex-col">
                <h1 className="text-xl font-bold text-gray-900">
                  {item.titleHighlighted}
                </h1>
                <p className="font-medium text-gray-700">
                  {item.titleSecondary}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
