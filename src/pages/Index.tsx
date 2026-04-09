import { Link } from "react-router-dom";
import { Car, Wrench, Truck } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import GlowCard from "@/components/GlowCard";
import NeonButton from "@/components/NeonButton";
import heroBg from "@/assets/hero-bg.jpg";

const services = [
  {
    icon: Car,
    title: "Achat",
    desc: "Nous reprenons votre véhicule toutes marques à un prix juste et transparent. Estimation rapide et paiement immédiat.",
    btn: "Vendre mon véhicule",
    to: "/reprise",
  },
  {
    icon: Wrench,
    title: "Mécanique",
    desc: "Entretien complet, réparation et diagnostic de votre véhicule par des professionnels expérimentés. Garage ouvert 24h/24.",
    btn: "Prendre rendez-vous",
    to: "/mecanique",
  },
  {
    icon: Truck,
    title: "Dépannage",
    desc: "Assistance rapide et remorquage 24h/24, 7j/7. Nous intervenons partout pour vous dépanner dans les plus brefs délais.",
    btn: "Nous contacter",
    to: "/contact",
  },
];

const Index = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Garage automobile futuriste" className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10 pt-24">
          <AnimatedSection>
            <div className="max-w-2xl">
              <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                <span className="text-gradient-neon">Mecanique, entretien</span>
                <br />
                <span className="text-foreground">& services</span>
                <br />
                <span className="text-foreground">automobiles</span>
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl mb-8 leading-relaxed max-w-lg">
                B MATIC, votre garage automobile de confiance. Reprise de véhicules, entretien mécanique et dépannage 24h/24.
              </p>
              <NeonButton to="/#services">
                Découvrir nos services
              </NeonButton>
            </div>
          </AnimatedSection>
        </div>

        {/* Neon bottom line */}
        <div className="absolute bottom-0 left-0 right-0 neon-line" />
      </section>

      {/* Services */}
      <section id="services" className="py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4">
              <span className="text-gradient-neon">Nos services</span>
            </h2>
            <p className="text-muted-foreground text-center mb-16 max-w-xl mx-auto">
              Un garage complet pour tous vos besoins automobiles.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <AnimatedSection key={s.title} delay={i * 150}>
                <GlowCard className="flex flex-col items-center text-center h-full">
                  <div className="w-16 h-16 rounded-full bg-gradient-neon flex items-center justify-center mb-5">
                    <s.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-3 text-foreground">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">{s.desc}</p>
                  <NeonButton to={s.to}>{s.btn}</NeonButton>
                </GlowCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
