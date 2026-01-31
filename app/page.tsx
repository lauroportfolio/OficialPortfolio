"use client"
import Approach from "@/components/Approach";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { useLanguage } from "@/context/LanguageContext";
import { navItems } from "@/data";
import { useTranslation } from "@/lib/i18n";

export default function Home() {
  const { language } = useLanguage();
  const t = useTranslation(language);

  // Mapeamos o navItems estático para usar os nomes traduzidos do JSON
  const translatedNavItems = navItems.map(item => ({
    ...item,
    name: t.nav[item.id as keyof typeof t.nav] || item.name
  }));

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        {/* Passamos a lista traduzida aqui */}
        <FloatingNav navItems={translatedNavItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}