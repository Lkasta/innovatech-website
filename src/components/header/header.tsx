import { Menu, X, Zap } from "lucide-react";
import { useState } from "react";

const navigationItems = [
  { name: "Início", href: "#" },
  { name: "Quem Somos", href: "#" },
  { name: "Serviços", href: "#" },
  { name: "Metodologia", href: "#" },
  { name: "Contato", href: "#" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-green-600 to-green-800">
              <Zap className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Innovatech</span>
          </div>

          <nav className="hidden items-center space-x-8 md:flex">
            {navigationItems.map((item, i) => {
              return (
                <a key={`${item.name}-${i}`} href={item.href}>
                  <button className="text-gray-700 transition-colors hover:text-green-600">
                    {item.name}
                  </button>
                </a>
              );
            })}
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="border-t border-gray-200 py-4 md:hidden">
            <nav className="flex flex-col space-y-4">
              {navigationItems.map((item, i) => {
                return (
                  <a key={`${item.name}-${i}`} href={item.href}>
                    <button className="text-gray-700 transition-colors hover:text-green-600">
                      {item.name}
                    </button>
                  </a>
                );
              })}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
