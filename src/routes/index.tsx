import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/sections/HeroSection";
import { AboutSection } from "@/sections/AboutSection";
import { SkillsSection } from "@/sections/SkillsSection";
import { ProjectsSection } from "@/sections/ProjectsSection";
import { ContactSection } from "@/sections/ContactSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ira. — Civil Engineering Portfolio" },
      {
        name: "description",
        content:
          "Mengubah tantangan air menjadi solusi infrastruktur yang berkelanjutan untuk Indonesia yang lebih baik.",
      },
      { property: "og:title", content: "Ira. — Civil Engineering" },
      {
        property: "og:description",
        content: "Mengubah tantangan air menjadi solusi infrastruktur yang berkelanjutan untuk Indonesia yang lebih baik.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </motion.div>
  );
}
