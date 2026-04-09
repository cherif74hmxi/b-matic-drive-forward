import { useState, FormEvent } from "react";
import { AlertTriangle } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import GlowCard from "@/components/GlowCard";
import NeonButton from "@/components/NeonButton";

const carburants = ["Essence", "Diesel", "Hybride", "Hybride Rechargeable", "Électrique", "Hydrogène", "GPL", "Gaz Naturel (GNV)", "Autre"];
const historiqueOptions = [
  "Carnet d'entretien à jour et factures disponibles",
  "Quelques factures, carnet pas à jour ou manquant",
  "Aucun historique",
];

const mois = ["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"];

const Reprise = () => {
  const [step, setStep] = useState(1);

  // Step 1
  const [marque, setMarque] = useState("");
  const [modele, setModele] = useState("");
  const [moisVal, setMoisVal] = useState("");
  const [annee, setAnnee] = useState("");
  const [puissanceFiscale, setPuissanceFiscale] = useState("");
  const [puissanceDin, setPuissanceDin] = useState("");
  const [carburant, setCarburant] = useState("");
  const [boite, setBoite] = useState("");

  // Step 2
  const [km, setKm] = useState("");
  const [motorisation, setMotorisation] = useState("");
  const [finition, setFinition] = useState("");
  const [historique, setHistorique] = useState("");
  const [descEntretiens, setDescEntretiens] = useState("");

  // Step 3
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [consent, setConsent] = useState(false);

  const step1Valid = marque && modele && moisVal && annee && puissanceFiscale && puissanceDin && carburant && boite;
  const step2Valid = km.length > 0;
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const phoneValid = /^\+\d{1,4}\s?\d+/.test(telephone);
  const step3Valid = nom && prenom && emailValid && phoneValid && consent;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  const inputClass = "w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all text-sm";
  const selectClass = `${inputClass} appearance-none`;
  const labelClass = "block text-sm font-medium text-foreground mb-1.5";

  const StepIndicator = () => (
    <div className="flex items-center justify-center gap-2 mb-10">
      {[1, 2, 3].map((s) => (
        <div key={s} className="flex items-center gap-2">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-heading text-sm font-bold transition-all ${s <= step ? "bg-gradient-neon text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
            {s}
          </div>
          {s < 3 && <div className={`w-12 h-0.5 ${s < step ? "bg-gradient-neon" : "bg-muted"}`} />}
        </div>
      ))}
    </div>
  );

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <AnimatedSection>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="text-gradient-neon">Reprise</span> <span className="text-foreground">de véhicule</span>
          </h1>
          <p className="text-muted-foreground text-center max-w-xl mx-auto mb-8">
            Nous reprenons votre véhicule toutes marques à un bon prix. Remplissez ce formulaire pour recevoir une offre de rachat.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="flex items-start gap-3 bg-muted/50 border border-border rounded-xl p-4 mb-10">
            <AlertTriangle className="w-6 h-6 text-neon-purple flex-shrink-0 mt-0.5" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Nous vous conseillons de vous munir de votre <strong className="text-foreground">carte grise</strong> afin de remplir ce formulaire. Cela vous évitera de chercher les informations à renseigner.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <GlowCard>
            <StepIndicator />
            <form onSubmit={handleSubmit} action="">
              {/* Step 1 */}
              {step === 1 && (
                <div className="space-y-4 animate-fade-in">
                  <h2 className="font-heading text-xl font-semibold mb-4">
                    <span className="text-neon-purple">Étape 1 :</span> Identification du véhicule
                  </h2>
                  <div>
                    <label className={labelClass}>Marque</label>
                    <input type="text" className={inputClass} value={marque} onChange={(e) => setMarque(e.target.value)} required />
                  </div>
                  <div>
                    <label className={labelClass}>Modèle</label>
                    <input type="text" className={inputClass} value={modele} onChange={(e) => setModele(e.target.value)} required />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>Mois</label>
                      <select className={selectClass} value={moisVal} onChange={(e) => setMoisVal(e.target.value)} required>
                        <option value="">Mois</option>
                        {mois.map((m) => <option key={m} value={m}>{m}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className={labelClass}>Année</label>
                      <input type="number" className={inputClass} placeholder="Année" value={annee} onChange={(e) => setAnnee(e.target.value)} required />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>Puissance fiscale</label>
                      <input type="number" className={inputClass} value={puissanceFiscale} onChange={(e) => setPuissanceFiscale(e.target.value)} required />
                    </div>
                    <div>
                      <label className={labelClass}>Puissance DIN</label>
                      <input type="number" className={inputClass} value={puissanceDin} onChange={(e) => setPuissanceDin(e.target.value)} required />
                    </div>
                  </div>
                  <div>
                    <label className={labelClass}>Carburant</label>
                    <select className={selectClass} value={carburant} onChange={(e) => setCarburant(e.target.value)} required>
                      <option value="">Sélectionner</option>
                      {carburants.map((c) => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className={labelClass}>Boîte de vitesse</label>
                    <div className="flex gap-6">
                      {["Manuelle", "Automatique"].map((b) => (
                        <label key={b} className="flex items-center gap-2 cursor-pointer">
                          <input type="radio" name="boite" value={b} checked={boite === b} onChange={() => setBoite(b)}
                            className="w-4 h-4 accent-neon-purple" />
                          <span className="text-sm text-foreground">{b}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="pt-4">
                    <NeonButton onClick={() => setStep(2)} disabled={!step1Valid} className="w-full">
                      Étape suivante
                    </NeonButton>
                  </div>
                </div>
              )}

              {/* Step 2 */}
              {step === 2 && (
                <div className="space-y-4 animate-fade-in">
                  <h2 className="font-heading text-xl font-semibold mb-4">
                    <span className="text-neon-purple">Étape 2 :</span> Détails et état du véhicule
                  </h2>
                  <div>
                    <label className={labelClass}>Kilométrage *</label>
                    <input type="number" className={inputClass} value={km} onChange={(e) => setKm(e.target.value)} required />
                  </div>
                  <div>
                    <label className={labelClass}>Motorisation <span className="text-muted-foreground">(facultatif)</span></label>
                    <input type="text" className={inputClass} placeholder="Exemple : 1.5 dCi, 1.4 HDi, 1.2 PureTech..." value={motorisation} onChange={(e) => setMotorisation(e.target.value)} />
                  </div>
                  <div>
                    <label className={labelClass}>Finition <span className="text-muted-foreground">(facultatif)</span></label>
                    <input type="text" className={inputClass} placeholder="Exemple : Intens, Sport, Business..." value={finition} onChange={(e) => setFinition(e.target.value)} />
                  </div>
                  <div>
                    <label className={labelClass}>Photos du véhicule <span className="text-muted-foreground">(facultatif)</span></label>
                    <input type="file" multiple accept="image/*" className={inputClass} />
                  </div>

                  <div className="border-t border-border pt-4 mt-4">
                    <label className={labelClass}>Historique / Suivi</label>
                    <div className="space-y-2">
                      {historiqueOptions.map((h) => (
                        <label key={h} className="flex items-start gap-2 cursor-pointer">
                          <input type="radio" name="historique" value={h} checked={historique === h} onChange={() => setHistorique(h)}
                            className="w-4 h-4 accent-neon-purple mt-0.5" />
                          <span className="text-sm text-foreground">{h}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {historique === historiqueOptions[0] && (
                    <div className="animate-fade-in">
                      <label className={labelClass}>Photos du carnet d'entretien et factures <span className="text-muted-foreground">(facultatif)</span></label>
                      <input type="file" multiple accept="image/*,.pdf" className={inputClass} />
                    </div>
                  )}

                  {historique === historiqueOptions[1] && (
                    <div className="space-y-4 animate-fade-in">
                      <div>
                        <label className={labelClass}>Décrivez les entretiens réalisés</label>
                        <textarea rows={3} className={inputClass} value={descEntretiens} onChange={(e) => setDescEntretiens(e.target.value)} />
                      </div>
                      <div>
                        <label className={labelClass}>Factures disponibles <span className="text-muted-foreground">(facultatif)</span></label>
                        <input type="file" multiple accept="image/*,.pdf" className={inputClass} />
                      </div>
                    </div>
                  )}

                  <div className="flex gap-4 pt-4">
                    <button type="button" onClick={() => setStep(1)} className="flex-1 border border-border text-foreground rounded-full py-3 text-sm font-heading uppercase tracking-wider hover:bg-muted transition-colors">
                      Retour
                    </button>
                    <NeonButton onClick={() => setStep(3)} disabled={!step2Valid} className="flex-1">
                      Étape suivante
                    </NeonButton>
                  </div>
                </div>
              )}

              {/* Step 3 */}
              {step === 3 && (
                <div className="space-y-4 animate-fade-in">
                  <h2 className="font-heading text-xl font-semibold mb-4">
                    <span className="text-neon-purple">Étape 3 :</span> Coordonnées du propriétaire
                  </h2>
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
                    <label className={labelClass}>Adresse e-mail *</label>
                    <input type="email" className={inputClass} value={email} onChange={(e) => setEmail(e.target.value)} required />
                    {email && !emailValid && <p className="text-destructive text-xs mt-1">Format d'e-mail invalide</p>}
                  </div>
                  <div>
                    <label className={labelClass}>Téléphone * <span className="text-muted-foreground text-xs">(ex: +33 6 12 34 56 78)</span></label>
                    <input type="tel" className={inputClass} placeholder="+33" value={telephone} onChange={(e) => setTelephone(e.target.value)} required />
                    {telephone && !phoneValid && <p className="text-destructive text-xs mt-1">Le numéro doit commencer par + suivi de l'indicatif pays</p>}
                  </div>
                  <label className="flex items-start gap-2 cursor-pointer pt-2">
                    <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} className="w-4 h-4 accent-neon-purple mt-0.5" required />
                    <span className="text-xs text-muted-foreground leading-relaxed">
                      J'accepte que mes données soient traitées conformément à la politique de confidentialité et aux conditions d'utilisation.
                    </span>
                  </label>
                  <div className="flex gap-4 pt-4">
                    <button type="button" onClick={() => setStep(2)} className="flex-1 border border-border text-foreground rounded-full py-3 text-sm font-heading uppercase tracking-wider hover:bg-muted transition-colors">
                      Retour
                    </button>
                    <NeonButton type="submit" disabled={!step3Valid} className="flex-1">
                      Envoyer ma demande
                    </NeonButton>
                  </div>
                </div>
              )}
            </form>
          </GlowCard>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Reprise;
