import { motion } from "framer-motion";

export function HeroSection() {
  const scrollDown = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative bg-white min-h-[100vh] overflow-hidden flex items-center">
      <div className="container-x w-full relative pt-10 pb-24">
        {/* Photo on top of name */}
        <div className="relative flex justify-center items-center min-h-[60vh]">
        <motion.h1
            initial={{ opacity: 0, y: 48 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="absolute inset-x-0 text-center font-black uppercase text-[#3D2F2F] leading-[0.9] z-10 select-none -top-8 sm:-top-12 md:-top-16 lg:-top-20"
            style={{ 
              fontSize: "clamp(72px, 7vw, 180px)", 
              letterSpacing: "-0.03em",
              // ⬇️ GESER KE ATAS: Gunakan top negatif yang responsif
              top: "clamp(48px, -5vw, -80px)", 
              // Alternatif: transform translateY
              // transform: "translateY(clamp(-30px, -4vw, -60px))"
            }}
          >
            IRA SETYANINGSIH
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
            className="relative z-20 w-[220px] sm:w-[280px] lg:w-[320px] aspect-[3/4] rounded-lg overflow-hidden"
          >
            <img
              src="/img/profile_photo.png"
              alt="Portrait"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65, ease: "easeOut" }}
          className="flex flex-wrap justify-center gap-3 mt-12 relative z-20"
        >
          <a href="https://drive.google.com/file/d/1vc_M3twOyEjNHWuhd0YM8dDvIHIyo5Tb/view?usp=sharing" className="btn btn-outline-dark">
            Download CV
          </a>
          <button onClick={scrollContact} className="btn btn-primary">
            Kontak Saya
          </button>
        </motion.div>
        <button
          onClick={scrollDown}
          className="hidden sm:block absolute bottom-4 right-6 lg:right-20 text-[13px] text-[#A0A0A0] hover:text-[#0D0D0D] transition-colors"
        >
          Scroll Down ↓
        </button>
      </div>
    </section>
  );
}
