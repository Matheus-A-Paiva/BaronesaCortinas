import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import logoImage from "../../imports/image.png";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={logoImage}
              alt="Logo da Baronesa Cortinas"
              width="48"
              height="48"
              fetchPriority="high"
              decoding="async"
              className="h-12 w-12 object-contain"
            />
            <div>
              <div className="text-xl font-semibold tracking-tight">Baronesa Cortinas</div>
              <div className="text-xs text-muted-foreground">Sob Medida</div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("inicio")} className="text-sm hover:text-primary transition-colors">
              Início
            </button>
            <button onClick={() => scrollToSection("cortinas")} className="text-sm hover:text-primary transition-colors">
              Cortinas
            </button>
            <button onClick={() => scrollToSection("projetos")} className="text-sm hover:text-primary transition-colors">
              Projetos
            </button>
            <button onClick={() => scrollToSection("sobre")} className="text-sm hover:text-primary transition-colors">
              Sobre
            </button>
            <button onClick={() => scrollToSection("contato")} className="text-sm hover:text-primary transition-colors">
              Contato
            </button>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+5581994785397"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              (81) 99478-5397
            </a>
            <a
              href="https://wa.me/5581994785397?text=Olá, vim pelo site e gostaria de um orçamento de cortinas."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 rounded-full hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/50"
            >
              <WhatsAppIcon sx={{ fontSize: 18 }} />
              Orçamento Grátis
            </a>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-foreground"
            aria-label="Menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 border-t border-border pt-4">
            <button
              onClick={() => scrollToSection("inicio")}
              className="block w-full text-left py-2 hover:text-primary transition-colors"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("cortinas")}
              className="block w-full text-left py-2 hover:text-primary transition-colors"
            >
              Cortinas
            </button>
            <button
              onClick={() => scrollToSection("projetos")}
              className="block w-full text-left py-2 hover:text-primary transition-colors"
            >
              Projetos
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="block w-full text-left py-2 hover:text-primary transition-colors"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="block w-full text-left py-2 hover:text-primary transition-colors"
            >
              Contato
            </button>
            <a
              href="https://wa.me/5581994785397?text=Olá, vim pelo site e gostaria de um orçamento de cortinas."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full text-center hover:bg-primary/90 transition-all"
            >
              <WhatsAppIcon sx={{ fontSize: 18 }} />
              Orçamento Grátis
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
