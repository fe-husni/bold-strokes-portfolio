import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { StaggerContainer } from "@/components/ui/StaggerContainer";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export function ProjectsSection() {
  return (
    <section id="projects" className="bg-[#0D0D0D] section-pad">
      <div className="container-x">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-6">
          <RevealOnScroll>
            <h2
              className="font-black text-white uppercase leading-[0.95]"
              style={{ fontSize: "clamp(48px,8vw,96px)", letterSpacing: "-0.02em" }}
            >
              Proyek Saya
            </h2>
            <p className="text-[14px] text-[#A0A0A0] mt-4">
            Baik dalam merancang sistem pengendalian banjir, menganalisis drainase perkotaan, atau mendesain infrastruktur pengairan, saya selalu berkomitmen untuk memahami kebutuhan teknis dan memberikan hasil yang presisi, aman, dan berkelanjutan.
            </p>
          </RevealOnScroll>
        </div>

        <StaggerContainer
          staggerDelay={0.07}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12"
        >
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
