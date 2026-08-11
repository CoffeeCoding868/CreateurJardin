import { Flower2, Facebook, Instagram, MapPin, Clock } from 'lucide-react';

// ⚠️ Remplacer ces liens par les URLs définitifs des réseaux sociaux
const socialLinks = {
  facebook: 'https://www.facebook.com/people/Le-jardin-des-créateurs/100063595760464/',
  instagram: '#',
};

const navLinks = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'Univers', href: '#univers' },
  { label: 'Créateurs', href: '#createurs' },
  { label: 'Avis', href: '#avis' },
  { label: 'Nous trouver', href: '#nous-trouver' },
];

export function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[var(--color-ink)] text-[var(--color-cream)]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <Flower2 className="w-6 h-6 text-[var(--color-gold)]" strokeWidth={1.4} />
              <div className="font-serif text-xl">Le Jardin des Créateurs</div>
            </div>
            <p className="text-sm text-[var(--color-cream)]/70 font-light leading-relaxed max-w-xs">
              Concept-store artisanal au cœur de Strasbourg.
              Des créations 100&nbsp;% faites main, par des créateurs locaux qui travaillent sur place.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-serif text-lg text-[var(--color-gold)] mb-4">Navigation</h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                    className="text-sm text-[var(--color-cream)]/70 hover:text-[var(--color-cream)] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg text-[var(--color-gold)] mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-[var(--color-cream)]/70 font-light">
              <li className="flex gap-2.5">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5 text-[var(--color-gold)]/80" strokeWidth={1.5} />
                <span>18 Rue de la Division Leclerc<br />67000 Strasbourg</span>
              </li>
              <li className="flex gap-2.5">
                <Clock className="w-4 h-4 flex-shrink-0 mt-0.5 text-[var(--color-gold)]/80" strokeWidth={1.5} />
                <span>Mardi – Samedi · 11h00 – 18h30<br />Fermé dimanche et lundi</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-serif text-lg text-[var(--color-gold)] mb-4">Suivez-nous</h4>
            <div className="flex gap-3 mb-5">
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-[var(--color-cream)]/10 hover:bg-[var(--color-terracotta)] flex items-center justify-center transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" strokeWidth={1.6} />
              </a>
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-[var(--color-cream)]/10 hover:bg-[var(--color-terracotta)] flex items-center justify-center transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" strokeWidth={1.6} />
              </a>
            </div>
            <p className="text-xs text-[var(--color-cream)]/50 font-light">
              Communauté active de plus de 1&nbsp;100 abonnés sur Facebook.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-[var(--color-cream)]/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[var(--color-cream)]/50 font-light">
            © {year} Le Jardin des Créateurs — Strasbourg. Tous droits réservés.
          </p>
          <p className="text-xs text-[var(--color-cream)]/40 font-light">
            Site vitrine · Créations faites main · Créateurs locaux
          </p>
        </div>
      </div>
    </footer>
  );
}
