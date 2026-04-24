import { Moon, Sparkles, Ruler, Scissors } from "lucide-react";

const curtainTypes = [
  {
    icon: Moon,
    title: "Cortinas Blackout",
    description: "Bloqueio total de luz.",
    image: "https://images.unsplash.com/photo-1771039621945-c79535c6361c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  },
  {
    icon: Sparkles,
    title: "Cortinas Translúcidas",
    description: "Elegância e luminosidade.",
    image: "https://images.unsplash.com/photo-1763940018489-12e722c40bab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  },
  {
    icon: Ruler,
    title: "Cortinas Sob Medida",
    description: "Personalização total.",
    image: "https://images.unsplash.com/photo-1771039622237-2725bdf33edf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  },
  {
    icon: Scissors,
    title: "Cortinas Estampadas",
    description: "Personalidade e sofisticação.",
    image: "https://images.unsplash.com/photo-1767050387941-b97f0d5a3232?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  },
];

export function CurtainTypes() {
  return (
    <section id="cortinas" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nossos Tipos de <span className="text-primary">Cortinas</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Soluções personalizadas para cada ambiente e necessidade. Qualidade premium em cada detalhe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {curtainTypes.map((type, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-background border border-border hover:border-primary/50 transition-all duration-500 hover:scale-105"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={type.image}
                  alt={type.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent opacity-90"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <type.icon className="w-8 h-8 text-primary mb-3" />
                <h3 className="text-xl font-semibold mb-2">{type.title}</h3>
                <p className="text-sm text-muted-foreground">{type.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://wa.me/5581994785397?text=Olá! Gostaria de conhecer mais sobre os tipos de cortinas."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/50"
          >
            Consultar Especialista
          </a>
        </div>
      </div>
    </section>
  );
}
