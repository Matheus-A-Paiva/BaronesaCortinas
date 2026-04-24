import { Award, Heart, Clock, Shield } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Qualidade Premium",
    description: "Tecidos selecionados e acabamentos impecáveis em todos os projetos.",
  },
  {
    icon: Heart,
    title: "Atendimento Personalizado",
    description: "Consultoria completa desde a escolha até a instalação.",
  },
  {
    icon: Clock,
    title: "Pontualidade",
    description: "Cumprimento rigoroso de prazos em todas as etapas do projeto.",
  },
  {
    icon: Shield,
    title: "Garantia Total",
    description: "Garantia em todos os produtos e serviços oferecidos.",
  },
];

export function About() {
  return (
    <section id="sobre" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Por que escolher a <span className="text-primary">Baronesa Cortinas</span>?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Com mais de 3 anos de experiência no mercado, a Baronesa Cortinas é referência em
              cortinas sob medida em Recife e região metropolitana. Nosso compromisso é transformar
              ambientes com elegância, funcionalidade e qualidade incomparável.
            </p>
            <p className="text-muted-foreground text-lg mb-8">
              Cada projeto é único e desenvolvido especialmente para atender às necessidades e
              estilo dos nossos clientes. Da consulta inicial à instalação final, oferecemos
              acompanhamento personalizado em todas as etapas.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1772112334845-86016056137b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                alt="Ambiente com cortinas Baronesa"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-8 rounded-2xl shadow-2xl max-w-xs">
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-sm">Clientes satisfeitos em Recife e região</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
