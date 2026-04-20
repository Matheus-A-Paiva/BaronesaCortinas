import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react";

export function Contact() {
  return (
    <section id="contato" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Entre em <span className="text-primary">Contato</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Estamos prontos para transformar seu ambiente
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
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
                  <div>
                    <div className="font-semibold mb-1">E-mail</div>
                    <a
                      href="mailto:contato@baronesacortinas.com.br"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      contato@baronesacortinas.com.br
                    </a>
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
                      Segunda a Sexta: 8h às 18h<br />
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

          <div className="rounded-2xl overflow-hidden h-[500px] bg-muted">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126292.99082161745!2d-34.95399652861621!3d-8.047562033252514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab18a47a4558b5%3A0x15746c2872bbf82e!2sRecife%2C%20PE!5e0!3m2!1spt-BR!2sbr!4v1650000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Baronesa Cortinas"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
