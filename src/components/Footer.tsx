import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/bmatic-logo.jpeg";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="B MATIC" className="h-10 rounded" />
              <span className="font-heading font-bold text-lg tracking-wider">B MATIC</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Achat · Mécanique · Dépannage<br />
              Votre garage automobile de confiance, ouvert 24h/24.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-sm uppercase tracking-wider mb-4 text-foreground">Liens rapides</h4>
            <ul className="space-y-2">
              {[
                { label: "Accueil", path: "/" },
                { label: "À propos", path: "/a-propos" },
                { label: "Contact", path: "/contact" },
                { label: "Reprise de véhicule", path: "/reprise" },
                { label: "Mécanique", path: "/mecanique" },
              ].map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm uppercase tracking-wider mb-4 text-foreground">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-neon-purple" />
                <span>123 Rue du Garage, 75000 Paris</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-neon-purple" />
                <a href="tel:+32470853551" className="hover:text-foreground transition-colors">+32 4 70 85 35 51</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-neon-purple" />
                <a href="mailto:contact@bmatic.fr" className="hover:text-foreground transition-colors">contact@bmatic.fr</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="neon-line mt-10 mb-6" />
        <p className="text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} B MATIC — Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
