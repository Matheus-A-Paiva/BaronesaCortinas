import { MapPin, Phone, Clock, Instagram } from "lucide-react";

export function Contact() {
  return (
    <section id="contato" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Entre em <span className="text-primary">Contato</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Estamos prontos para transformar seu ambiente
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Telefone/WhatsApp */}
            <div className="bg-card border border-primary/20 rounded-2xl p-8 text-center hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">WhatsApp / Telefone</h3>
              <a
                href="https://wa.me/5581994785397?text=Olá! Gostaria de um orçamento de cortinas sob medida."
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors"
              >
                (81) 99478-5397
              </a>
              <p className="text-sm text-muted-foreground mt-3">Resposta rápida</p>
            </div>

            {/* Localização */}
            <div className="bg-card border border-primary/20 rounded-2xl p-8 text-center hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Localização</h3>
              <p className="text-lg font-medium text-primary mb-2">Recife - PE</p>
              <p className="text-sm text-muted-foreground">Atendemos toda região metropolitana</p>
            </div>

            {/* Horário */}
            <div className="bg-card border border-primary/20 rounded-2xl p-8 text-center hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Horário de Atendimento</h3>
              <p className="text-sm text-muted-foreground">
                <span className="block font-medium text-foreground">Seg-Sex: 9h às 18h</span>
                <span className="block">Sábado: 8h às 13h</span>
              </p>
            </div>

            {/* Instagram */}
            <div className="bg-card border border-primary/20 rounded-2xl p-8 text-center hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Instagram className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Siga-nos</h3>
              <a
                href="https://instagram.com/baronesacortinas"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-bold text-primary hover:text-primary/80 transition-colors"
              >
                @baronesacortinas
              </a>
              <p className="text-sm text-muted-foreground mt-3">Portfólio de projetos</p>
            </div>
          </div>

          <div className="text-center">
            <a
              href="https://wa.me/5581994785397?text=Olá! Gostaria de agendar uma visita técnica."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full md:w-auto bg-primary text-primary-foreground px-12 py-5 rounded-full text-lg font-semibold hover:bg-primary/90 transition-all shadow-2xl hover:shadow-primary/50 hover:scale-105"
            >
              Agendar Visita Técnica Grátis
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
