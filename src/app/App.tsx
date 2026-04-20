import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { CurtainTypes } from "./components/CurtainTypes";
import { ProjectGallery } from "./components/ProjectGallery";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <CurtainTypes />
        <ProjectGallery />
        <About />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}