import { Award, Lightbulb, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const details = [
  {
    title: "Equipe Multidisciplinar",
    icon: Users,
    description:
      "Profissionais especializados em diversas áreas, permitindo uma abordagem abrangente e eficaz nos projetos.",
  },
  {
    title: "Inovação Contínua",
    icon: Lightbulb,
    description:
      "Prospecção ativa de tecnologias e implementação de projetos incrementais e de transformação.",
  },
  {
    title: "Qualidade em cada projeto",
    icon: Award,
    description:
      "Fornecimento de componentes de alto padrão, garantindo a excelência dos serviços prestados.",
  },
];

export default function About() {
  return (
    <section id="quem-somos" className="overflow-hidden bg-gray-50 py-24">
      <div className="container mx-auto px-4 pt-20 lg:px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-800 lg:text-4xl">
            Quem Somos
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            Somos uma empresa especializada em eletrônica e automação industrial
            com mais de 15 anos de experiência no setor, oferecendo soluções
            tecnológicas inovadoras e personalizadas.
          </p>
        </div>

        <div className="mb-16 grid gap-8 md:grid-cols-3">
          {details.map((item, i) => {
            const Icon = item.icon;
            return (
              <Card
                key={`${item.title}-${i}`}
                className="group cursor-pointer border-0 p-0 shadow-none"
              >
                <CardHeader className="pb-4 text-center">
                  <div className="border-main-blue group-hover:bg-main-blue mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 bg-blue-100 transition-all">
                    <Icon className="text-main-blue h-8 w-8 transition-all group-hover:text-white" />
                  </div>
                  <CardTitle className="text-xl text-gray-800">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-600">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
