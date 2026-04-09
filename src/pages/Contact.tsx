import { useState, FormEvent } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import GlowCard from "@/components/GlowCard";
import NeonButton from "@/components/NeonButton";

const Contact = () => {
  const [form, setForm] = useState({ nom: "", email: "", telephone: "", message: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  const inputClass = "w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all text-sm";

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="text-gradient-neon">Contactez</span> <span className="text-foreground">-nous</span>
          </h1>
          <p className="text-muted-foreground text-center max-w-xl mx-auto mb-16">
            Une question, un devis ou un besoin urgent ? Notre équipe est disponible pour vous accompagner.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <AnimatedSection>
            <GlowCard>
              <h2 className="font-heading text-xl font-semibold mb-6 text-foreground">Nos coordonnées</h2>
              <ul className="space-y-5 mb-8">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-neon-purple mt-0.5" />
                  <div>
                    <p className="text-foreground text-sm font-medium">Adresse</p>
                    <p className="text-muted-foreground text-sm">123 Rue du Garage, 75000 Paris</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-neon-purple mt-0.5" />
                  <div>
                    <p className="text-foreground text-sm font-medium">Téléphone</p>
                    <a href="tel:+33618043075" className="text-muted-foreground text-sm hover:text-foreground transition-colors">06 18 04 30 75</a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-neon-purple mt-0.5" />
                  <div>
                    <p className="text-foreground text-sm font-medium">E-mail</p>
                    <a href="mailto:contact@bmatic.fr" className="text-muted-foreground text-sm hover:text-foreground transition-colors">contact@bmatic.fr</a>
                  </div>
                </li>
              </ul>

              {/* Google Maps placeholder */}
              <div className="w-full h-48 rounded-lg bg-muted border border-border flex items-center justify-center">
                <p className="text-muted-foreground text-sm">Google Maps — à intégrer</p>
              </div>
            </GlowCard>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <GlowCard>
              <h2 className="font-heading text-xl font-semibold mb-6 text-foreground">Envoyez-nous un message</h2>
              <form onSubmit={handleSubmit} action="" className="space-y-4">
                <input
                  type="text"
                  placeholder="Nom complet"
                  className={inputClass}
                  value={form.nom}
                  onChange={(e) => setForm({ ...form, nom: e.target.value })}
                  required
                />
                <input
                  type="email"
                  placeholder="Adresse e-mail"
                  className={inputClass}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                />
                <input
                  type="tel"
                  placeholder="Téléphone"
                  className={inputClass}
                  value={form.telephone}
                  onChange={(e) => setForm({ ...form, telephone: e.target.value })}
                />
                <textarea
                  placeholder="Votre message"
                  rows={5}
                  className={inputClass}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                />
                <NeonButton type="submit" className="w-full">
                  Envoyer le message
                </NeonButton>
              </form>
            </GlowCard>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default Contact;
