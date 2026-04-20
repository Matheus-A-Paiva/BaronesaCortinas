import { ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col items-center gap-4">
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
            aria-label="Voltar ao topo"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
          <p className="text-sm text-muted-foreground text-center">
            © 2026 Baronesa Cortinas. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
