import CountUp from "react-countup";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function AboutSection() {
  return (
    <section id="about" className="bg-white section-pad">
      <div className="container-x grid lg:grid-cols-[45%_55%] gap-12 lg:gap-16 items-center">
        <RevealOnScroll direction="left">
          <span className="inline-block bg-[#FFE500] text-[#0D0D0D] text-[12px] font-medium px-3 py-1 rounded-full">
            Tentang Saya
          </span>
          <h2
            className="font-bold text-[#0D0D0D] mt-4 max-w-[420px] leading-[1.15]"
            style={{ fontSize: "clamp(28px,3vw,48px)", letterSpacing: "-0.02em" }}
          >
            Mengubah Tantangan Infrastruktur 
            menjadi Solusi Bangunan Air yang Berkelanjutan
          </h2>
        </RevealOnScroll>

        <RevealOnScroll direction="right">
          <div className="rounded-xl overflow-hidden bg-[#E0E0E0] max-h-[420px]">
            <img
              src="/img/profile_photo.png"
              alt="About Baskara"
              loading="lazy"
              className="w-full h-full object-cover max-h-[420px]"
            />
          </div>
          <p className="mt-6 text-[15px] text-[#555555] leading-[1.75]">
          Saya Ira Setyaningsih, mahasiswa aktif Diploma Teknik Infrastruktur Sipil dari Institut Teknologi Sepuluh Nopember (ITS) dengan fokus pada bidang Bangunan Air. Memiliki antusiasme tinggi terhadap inovasi di dunia ketekniksipilan, terutama dalam pengelolaan sumber daya air, pengendalian banjir, dan infrastruktur hidraulik.

          Dengan pengalaman magang di proyek pengendalian banjir skala nasional dan keterampilan teknis dalam perangkat lunak engineering seperti HEC-RAS, EPANET, AutoCAD Civil 3D, dan ArcGIS, saya siap berkontribusi dalam menciptakan solusi ketekniksipilan yang tepat guna, aman, dan berkelanjutan untuk Indonesia.
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
