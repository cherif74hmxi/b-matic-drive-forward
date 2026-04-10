import { useState, FormEvent } from "react";
import { Clock, CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import AnimatedSection from "@/components/AnimatedSection";
import GlowCard from "@/components/GlowCard";
import NeonButton from "@/components/NeonButton";
import mechanicBg from "@/assets/mechanic-bg.jpg";
import { vehiculesData, marques } from "@/data/vehicules";

const carburants = ["Essence", "Diesel", "Hybride", "Hybride Rechargeable", "Électrique", "Hydrogène", "GPL", "Gaz Naturel (GNV)", "Autre"];

const heures = Array.from({ length: 16 }, (_, i) => {
  const h = i + 7;
  return `${h.toString().padStart(2, "0")}:00`;
});

const Mecanique = () => {
  const [step, setStep] = useState(1);

  // Step 1
  const [marque, setMarque] = useState("");
  const [modele, setModele] = useState("");
  const [autreMarqueModele, setAutreMarqueModele] = useState("");
  const [annee, setAnnee] = useState("");

  const isAutre = marque === "Autre";
  const modelesDisponibles = marque && !isAutre ? vehiculesData[marque] || [] : [];
  const [carburant, setCarburant] = useState("");
  const [boite, setBoite] = useState("");
  const [typeDemande, setTypeDemande] = useState("");
  const [description, setDescription] = useState("");
  const [motorisation, setMotorisation] = useState("");

  // Step 2
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState("");

  const step1Valid = (isAutre ? autreMarqueModele.trim().length > 0 : marque && modele) && annee && carburant && boite && typeDemande && description;
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const phoneValid = /^\+\d{1,4}\s?\d+/.test(telephone);
  const step2Valid = nom && prenom && emailValid && phoneValid && consent;

  const [formState, setFormState] = useState<{ status: string; message: string }>({ status: "idle", message: "" });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormState({ status: "loading", message: "Envoi en cours..." });

    const data = {
      marque: isAutre ? "Autre" : marque,
      modele: isAutre ? autreMarqueModele : modele,
      annee,
      motorisation,
      carburant,
      boite,
      typeDemande,
      description,
      date: selectedDate ? format(selectedDate, "dd/MM/yyyy") : "",
      heure: selectedTime,
      nom,
      prenom,
      telephone,
      email,
    };

    try {
      const response = await fetch("https://formspree.io/f/xlgokywp", {
        method: "POST",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setFormState({ status: "success", message: "Merci ! Votre demande de rendez-vous a été envoyée avec succès." });
        setTimeout(() => setFormState({ status: "idle", message: "" }), 6000);
      } else {
        throw new Error("Erreur serveur");
      }
    } catch {
      setFormState({ status: "error", message: "Une erreur est survenue. Veuillez réessayer ou nous contacter directement." });
      setTimeout(() => setFormState({ status: "idle", message: "" }), 6000);
    }
  };

  const inputClass = "w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all text-sm";
  const selectClass = `${inputClass} appearance-none`;
  const labelClass = "block text-sm font-medium text-foreground mb-1.5";

  const StepIndicator = () => (
    <div className="flex items-center justify-center gap-2 mb-10">
      {[1, 2].map((s) => (
        <div key={s} className="flex items-center gap-2">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-heading text-sm font-bold transition-all ${s <= step ? "bg-gradient-neon text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
            {s}
          </div>
          {s < 2 && <div className={`w-12 h-0.5 ${s < step ? "bg-gradient-neon" : "bg-muted"}`} />}
        </div>
      ))}
    </div>
  );

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="text-gradient-neon">Mécanique</span>
          </h1>
          <p className="text-muted-foreground text-center max-w-xl mx-auto mb-6">
            Entretien & réparation automobile. Confiez votre véhicule à des experts passionnés.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="relative rounded-2xl overflow-hidden mb-12 max-w-4xl mx-auto border-glow">
            <img src={mechanicBg} alt="Garage mécanique B MATIC" className="w-full h-40 md:h-36 object-cover" width={1200} height={800} loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent flex items-end p-6 md:p-10">
              <div className="flex items-center gap-3">
                <Clock className="w-8 h-8 text-neon-cyan" />
                <div>
                  <p className="font-heading text-lg font-bold text-foreground">Ouvert 24h/24</p>
                  <p className="text-muted-foreground text-sm">Votre garage est disponible à tout moment pour vous assister.</p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto">
          <AnimatedSection delay={200}>
            <GlowCard>
              <h2 className="font-heading text-2xl font-semibold mb-2 text-center text-foreground">Prise de rendez-vous</h2>
              <p className="text-muted-foreground text-center text-sm mb-8">Remplissez le formulaire ci-dessous pour prendre rendez-vous.</p>

              <StepIndicator />

              <form onSubmit={handleSubmit} action="">
                {step === 1 && (
                  <div className="space-y-4 animate-fade-in">
                    <h3 className="font-heading text-lg font-semibold">
                      <span className="text-neon-purple">Étape 1 :</span> Véhicule & demande
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className={labelClass}>Marque *</label>
                        <select className={selectClass} value={marque} onChange={(e) => { setMarque(e.target.value); setModele(""); setAutreMarqueModele(""); }} required>
                          <option value="">Sélectionner une marque</option>
                          {marques.map((m) => <option key={m} value={m}>{m}</option>)}
                        </select>
                      </div>
                      {isAutre ? (
                        <div>
                          <label className={labelClass}>Précisez marque et modèle *</label>
                          <textarea className={inputClass} rows={2} placeholder="Ex : Fiat 500, Seat Leon..." value={autreMarqueModele} onChange={(e) => setAutreMarqueModele(e.target.value)} required />
                        </div>
                      ) : (
                        <div>
                          <label className={labelClass}>Modèle *</label>
                          <select className={selectClass} value={modele} onChange={(e) => setModele(e.target.value)} required disabled={!marque}>
                            <option value="">Sélectionner un modèle</option>
                            {modelesDisponibles.map((m) => <option key={m} value={m}>{m}</option>)}
                          </select>
                        </div>
                      )}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className={labelClass}>Année *</label>
                        <input type="number" className={inputClass} value={annee} onChange={(e) => setAnnee(e.target.value)} required />
                      </div>
                      <div>
                        <label className={labelClass}>Motorisation <span className="text-muted-foreground text-xs">(conseillé)</span></label>
                        <input type="text" className={inputClass} placeholder="Ex : 1.5 dCi, 2.0 TSI..." value={motorisation} onChange={(e) => setMotorisation(e.target.value)} />
                      </div>
                    </div>
                    <div>
                      <label className={labelClass}>Carburant *</label>
                      <select className={selectClass} value={carburant} onChange={(e) => setCarburant(e.target.value)} required>
                        <option value="">Sélectionner</option>
                        {carburants.map((c) => <option key={c} value={c}>{c}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className={labelClass}>Boîte de vitesse *</label>
                      <div className="flex gap-6">
                        {["Manuelle", "Automatique"].map((b) => (
                          <label key={b} className="flex items-center gap-2 cursor-pointer">
                            <input type="radio" name="boite_mec" value={b} checked={boite === b} onChange={() => setBoite(b)} className="w-4 h-4 accent-neon-purple" />
                            <span className="text-sm text-foreground">{b}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className={labelClass}>Type de demande *</label>
                      <div className="flex gap-6">
                        {["Entretien", "Réparation"].map((t) => (
                          <label key={t} className="flex items-center gap-2 cursor-pointer">
                            <input type="radio" name="type_demande" value={t} checked={typeDemande === t} onChange={() => setTypeDemande(t)} className="w-4 h-4 accent-neon-purple" />
                            <span className="text-sm text-foreground">{t}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className={labelClass}>Décrivez votre besoin *</label>
                      <textarea rows={4} className={inputClass} placeholder="Décrivez le problème ou l'entretien souhaité..." value={description} onChange={(e) => setDescription(e.target.value)} required />
                    </div>
                    <div className="pt-4">
                      <NeonButton onClick={() => setStep(2)} disabled={!step1Valid} className="w-full">
                        Étape suivante
                      </NeonButton>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-4 animate-fade-in">
                    <h3 className="font-heading text-lg font-semibold">
                      <span className="text-neon-purple">Étape 2 :</span> Coordonnées & créneau
                    </h3>

                    {/* Date & heure */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className={labelClass}>Date souhaitée</label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <button type="button" className={cn(inputClass, "flex items-center gap-2 text-left", !selectedDate && "text-muted-foreground")}>
                              <CalendarIcon className="w-4 h-4 shrink-0" />
                              {selectedDate ? format(selectedDate, "dd MMMM yyyy", { locale: fr }) : "Choisir une date"}
                            </button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={selectedDate}
                              onSelect={setSelectedDate}
                              disabled={(date) => date < new Date()}
                              initialFocus
                              className={cn("p-3 pointer-events-auto")}
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                      <div>
                        <label className={labelClass}>Heure souhaitée</label>
                        <select className={selectClass} value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)}>
                          <option value="">Choisir une heure</option>
                          {heures.map((h) => <option key={h} value={h}>{h}</option>)}
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className={labelClass}>Nom *</label>
                        <input type="text" className={inputClass} value={nom} onChange={(e) => setNom(e.target.value)} required />
                      </div>
                      <div>
                        <label className={labelClass}>Prénom *</label>
                        <input type="text" className={inputClass} value={prenom} onChange={(e) => setPrenom(e.target.value)} required />
                      </div>
                    </div>
                    <div>
                      <label className={labelClass}>Téléphone *</label>
                      <input type="tel" className={inputClass} placeholder="+33" value={telephone} onChange={(e) => setTelephone(e.target.value)} required />
                      {telephone && !phoneValid && <p className="text-destructive text-xs mt-1">Format : +33 6 12 34 56 78</p>}
                    </div>
                    <div>
                      <label className={labelClass}>E-mail *</label>
                      <input type="email" className={inputClass} value={email} onChange={(e) => setEmail(e.target.value)} required />
                      {email && !emailValid && <p className="text-destructive text-xs mt-1">Format d'e-mail invalide</p>}
                    </div>
                    <label className="flex items-start gap-2 cursor-pointer pt-2">
                      <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} className="w-4 h-4 accent-neon-purple mt-0.5" required />
                      <span className="text-xs text-muted-foreground leading-relaxed">
                        J'accepte que mes données soient traitées conformément à la politique de confidentialité et aux conditions d'utilisation.
                      </span>
                    </label>
                    <div className="flex gap-4 pt-4">
                      <button type="button" onClick={() => setStep(1)} className="flex-1 border border-border text-foreground rounded-full py-3 text-sm font-heading uppercase tracking-wider hover:bg-muted transition-colors">
                        Retour
                      </button>
                      <NeonButton type="submit" disabled={!step2Valid || formState.status === "loading"} className="flex-1">
                        {formState.status === "loading" ? "Envoi en cours..." : "Envoyer ma demande"}
                      </NeonButton>
                    </div>
                    {formState.message && (
                      <div className={`mt-4 p-4 rounded-lg text-sm text-center font-medium ${formState.status === "success" ? "bg-green-500/20 text-green-400 border border-green-500/30" : formState.status === "error" ? "bg-destructive/20 text-destructive border border-destructive/30" : "bg-muted text-muted-foreground"}`}>
                        {formState.message}
                      </div>
                    )}
                  </div>
                )}
              </form>
            </GlowCard>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default Mecanique;