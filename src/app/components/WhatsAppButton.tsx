import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5581994785397?text=Olá, vim pelo site e gostaria de um orçamento de cortinas."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 hover:shadow-primary/50 animate-float"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <WhatsAppIcon sx={{ fontSize: 34 }} />
    </a>
  );
}
