import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react";

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

        <div className="grid grid-cols-1 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Informações de Contato</h3>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Telefone / WhatsApp</div>
                    <a
                      href="tel:+5581994785397"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      (81) 99478-5397
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                  </div>                  
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Endereço</div>
                    <p className="text-muted-foreground">
                      Recife - PE<br />
                      Atendemos toda região metropolitana
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Horário de Atendimento</div>
                    <p className="text-muted-foreground">
                      Segunda a Sexta: 9h às 18h<br />
                      Sábado: 8h às 13h
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Instagram className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Instagram</div>
                    <a
                      href="https://instagram.com/baronesacortinas"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      @baronesacortinas
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-border">
              <a
                href="https://wa.me/5581994785397?text=Olá! Gostaria de agendar uma visita técnica."
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-primary text-primary-foreground px-8 py-4 rounded-full text-center hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/50"
              >
                Agendar Visita Técnica Grátis
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
