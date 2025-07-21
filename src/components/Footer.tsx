import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-12 text-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="mb-8 grid gap-8 md:grid-cols-4">
          <div>
            <span className="text-xl font-bold">Innovatech</span>

            <p className="mb-4 text-gray-400">
              Soluções inteligentes em eletrônica e automação industrial há mais
              de 15 anos.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Serviços</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="cursor-pointer transition-colors hover:text-white">
                Manutenção Eletrônica
              </li>
              <li className="cursor-pointer transition-colors hover:text-white">
                Desenvolvimento de PCBs
              </li>
              <li className="cursor-pointer transition-colors hover:text-white">
                Programação de CLPs
              </li>
              <li className="cursor-pointer transition-colors hover:text-white">
                Soluções de Automação
              </li>
              <li className="cursor-pointer transition-colors hover:text-white">
                Venda de Componentes
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Links Rápidos</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button className="transition-colors hover:text-white">
                  Início
                </button>
              </li>
              <li>
                <button className="transition-colors hover:text-white">
                  Quem Somos
                </button>
              </li>
              <li>
                <button className="transition-colors hover:text-white">
                  Serviços
                </button>
              </li>
              <li>
                <button className="transition-colors hover:text-white">
                  Metodologia
                </button>
              </li>
              <li>
                <button className="transition-colors hover:text-white">
                  Contato
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Contato</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+55 11 91698-8051</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+55 11 2580-3806</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>jsilva@innovatech24.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>
            &copy; 2025 Innovatech Eletrônica e Automação Ltda. Todos os
            direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
