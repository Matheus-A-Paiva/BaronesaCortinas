import { ArrowRight, Star } from "lucide-react";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(10, 10, 10, 0.7), rgba(10, 10, 10, 0.8)), url('https://images.unsplash.com/photo-1763939919676-97187d9f4db0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container mx-auto px-4 py-32 md:py-40 relative z-10">
        <div className="max-w-4xl mx-auto text-center">          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Transforme Seu Ambiente com
            <span className="block text-primary mt-2">Cortinas de Luxo</span>
          </h1>          

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://wa.me/5581994785397?text=Olá! Gostaria de um orçamento de cortinas sob medida."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground px-8 py-4 rounded-full flex items-center gap-2 hover:bg-primary/90 transition-all shadow-2xl hover:shadow-primary/50 hover:scale-105"
            >
              Solicitar Orçamento Grátis
              <ArrowRight className="w-5 h-5" />
            </a>
            <button
              onClick={() => {
                const element = document.getElementById("projetos");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              className="border border-border px-8 py-4 rounded-full hover:bg-card transition-all"
            >
              Ver Projetos
            </button>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">3+</div>
              <div className="text-sm text-muted-foreground">Anos de Experiência</div>
            </div>
            <div className="text-center border-l border-r border-border">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">100+</div>
              <div className="text-sm text-muted-foreground">Projetos Realizados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Satisfação</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
}
