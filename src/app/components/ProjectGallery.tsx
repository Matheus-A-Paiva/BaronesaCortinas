import { useState } from "react";

const projects = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1754611362309-71297e9f42fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    title: "Sala de Estar Moderna",
    category: "Residencial",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1772537507935-065b8aba4df5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    title: "Quarto Clássico",
    category: "Residencial",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1758298030677-93e545d69a64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    title: "Living Elegante",
    category: "Residencial",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1766928210443-0be92ed5884a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    title: "Quarto Minimalista",
    category: "Residencial",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1761725406659-088c97a81fc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    title: "Sala Contemporânea",
    category: "Residencial",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1775144657351-1708d0ea060d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    title: "Ambiente Sofisticado",
    category: "Residencial",
  },
];

export function ProjectGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="projetos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nossos <span className="text-primary">Projetos</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Veja alguns dos nossos trabalhos realizados. Cada projeto é único e personalizado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-2xl cursor-pointer"
              onClick={() => setSelectedImage(project.image)}
            >
              <div className="aspect-[4/3] overflow-hidden bg-card">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <div className="text-xs text-primary mb-1">{project.category}</div>
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://instagram.com/baronesacortinas"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-border px-8 py-4 rounded-full hover:bg-card transition-all"
          >
            Ver Mais no Instagram
          </a>
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-background/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-5xl w-full">
            <img
              src={selectedImage}
              alt="Projeto de cortina sob medida"
              decoding="async"
              className="w-full h-auto rounded-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}
