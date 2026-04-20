import { motion } from "framer-motion";
import { Mail, Instagram, MessageCircle } from "lucide-react";
import { StaggerContainer } from "@/components/ui/StaggerContainer";

const cards = [
  { icon: Mail, label: "Email", value: "ira210622@gmail.com", href: "mailto:ira210622@gmail.com" },
  { icon: Instagram, label: "Instagram", value: "@irstyn449", href: "https://www.instagram.com/irstyn449/" },
  { icon: MessageCircle, label: "WhatsApp", value: "+62 856 - 0898 - 7596", href: "https://wa.me/6285608987596" },
];

export function ContactSection() {
  const scrollAbout = () => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="contact" className="bg-[#FFE500] py-24">
      <div className="container-x text-center">
        <h2
          className="font-black text-[#0D0D0D] max-w-[640px] mx-auto leading-[1.05]"
          style={{ fontSize: "clamp(36px,5vw,64px)", letterSpacing: "-0.02em" }}
        >
          Ayo Wujudkan Proyek Impian Anda!
        </h2>

        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-12 text-left">
          {cards.map((c) => {
            const Icon = c.icon;
            return (
              <motion.a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                className="bg-white rounded-2xl p-5 flex items-center gap-4 transition-shadow duration-300 hover:shadow-[0_12px_32px_rgba(0,0,0,0.12)]"
              >
                <span className="w-10 h-10 rounded-full bg-[#FFE500] flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-[#0D0D0D]" />
                </span>
                <span className="min-w-0">
                  <span className="block text-[11px] font-medium uppercase text-[#A0A0A0] tracking-[0.1em]">
                    {c.label}
                  </span>
                  <span className="block font-bold text-[15px] text-[#0D0D0D] mt-1 truncate">
                    {c.value}
                  </span>
                </span>
              </motion.a>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
