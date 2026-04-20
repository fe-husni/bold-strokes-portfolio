import { Dam, WavesArrowDown, Map, Building2, Laptop, Brain } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { StaggerContainer } from "@/components/ui/StaggerContainer";

const features = [
  { icon: Dam, title: "Perencanaan Bangunan Air", desc: "Dengan keahlian dalam analisis hidraulik menggunakan HEC-RAS dan perencanaan sistem pengelolaan air, saya merancang solusi bangunan air yang efisien, aman, dan sesuai dengan kondisi lapangan untuk mengoptimalkan sumber daya air." },
  { icon: WavesArrowDown, title: "Analisis Sistem Drainase", desc: "Menggunakan perangkat lunak modern seperti EPANET dan Delft3D, saya melakukan analisis komprehensif terhadap sistem jaringan pipa dan drainase perkotaan untuk memastikan distribusi air yang optimal." },
  { icon: Building2, title: "Desain Infrastruktur Sipil", desc: "Dengan penguasaan AutoCAD, Civil 3D, dan Revit, saya menghasilkan desain teknis infrastruktur sipil yang presisi, mulai dari detail bangunan pengairan hingga gambar kerja proyek konstruksi." },
  { icon: Map, title: "Survey & Pemetaan", desc: "Menggunakan ArcGIS dan Global Mapper, saya melakukan pengolahan data spasial, pemetaan topografi, dan analisis geografis untuk mendukung perencanaan proyek infrastruktur yang akurat." },
];

const hardSkills = ["ArcGIS", "AutoCAD", "Civil 3D", "Revit", "Global Mapper", "HEC-RAS", "EPANET", "GeoStudio", "Delft3D", "Figma", "Canva"];
const softSkills = ["Problem Solving", "Komunikasi Efektif", "Kerja Sama Tim", "Adaptabilitas", "Manajemen Waktu", "Berpikir Kritis", "Kreativitas",  "Kepemimpinan", "Attention to Detail"];

export function SkillsSection() {
  return (
    <section id="skills" className="bg-white section-pad border-t border-[#E0E0E0]">
      <div className="container-x">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-end">
          <RevealOnScroll>
            <p className="eyebrow">Layanan Kami</p>
            <h2
              className="font-bold text-[#0D0D0D] mt-3"
              style={{ fontSize: "clamp(28px,4vw,44px)", letterSpacing: "-0.02em" }}
            >
              Keahlian Teknis untuk Menyelesaikan Tantangan Bangunan Air & Infrastruktur
            </h2>
          </RevealOnScroll>
          <RevealOnScroll direction="right">
            <p className="text-[15px] text-[#555555] max-w-[380px]">
              Dengan fondasi kuat di bidang teknik sipil dan spesialisasi bangunan air, saya mampu menghadapi tantangan teknis kompleks mulai dari analisis hidraulik, perencanaan pengendalian banjir, hingga desain sistem drainase perkotaan. Keahlian saya menjadi aset berharga untuk setiap proyek infrastruktur.
            </p>
          </RevealOnScroll>
        </div>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="bg-white border border-[#E0E0E0] rounded-xl p-6 transition-shadow duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] h-full"
                style={{ transform: "translateZ(0)" }}
              >
                <div className="w-11 h-11 bg-[#FFE500] rounded-lg flex items-center justify-center">
                  <Icon size={20} className="text-[#0D0D0D]" />
                </div>
                <h3 className="font-bold text-base text-[#0D0D0D] mt-4">{f.title}</h3>
                <p className="text-[14px] text-[#555555] leading-[1.6] mt-2">{f.desc}</p>
              </div>
            );
          })}
        </StaggerContainer>

        <div className="grid lg:grid-cols-2 gap-5 mt-5">
          <div className="bg-[#0D0D0D] rounded-2xl p-8">
            <RevealOnScroll direction="left">
              <Laptop size={28} className="text-white" />
              <h3 className="font-bold text-[22px] text-white mt-4">Hard Skills</h3>
              <StaggerContainer staggerDelay={0.04} className="flex flex-wrap gap-2 mt-5">
                {hardSkills.map((s) => (
                  <span
                    key={s}
                    className="bg-[#2A2A2A] text-white rounded-full px-3 py-1.5 text-[13px] font-medium"
                  >
                    {s}
                  </span>
                ))}
              </StaggerContainer>
            </RevealOnScroll>
          </div>

          <div className="bg-[#FFE500] rounded-2xl p-8">
            <RevealOnScroll direction="right">
              <Brain size={28} className="text-[#0D0D0D]" />
              <h3 className="font-bold text-[22px] text-[#0D0D0D] mt-4">Soft Skills</h3>
              <StaggerContainer staggerDelay={0.04} className="flex flex-wrap gap-2 mt-5">
                {softSkills.map((s) => (
                  <span
                    key={s}
                    className="bg-[#0D0D0D] text-white rounded-full px-3 py-1.5 text-[13px] font-medium"
                  >
                    {s}
                  </span>
                ))}
              </StaggerContainer>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
