import { useEffect, useState } from 'react';
import { Menu, X, Flower2 } from 'lucide-react';

const navLinks = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'Univers', href: '#univers' },
  { label: 'Créateurs', href: '#createurs' },
  { label: 'Avis', href: '#avis' },
  { label: 'Nous trouver', href: '#nous-trouver' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[var(--color-cream)]/95 backdrop-blur-md shadow-[0_1px_0_rgba(61,51,38,0.08)] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#accueil"
          onClick={(e) => { e.preventDefault(); handleNavClick('#accueil'); }}
          className="flex items-center gap-2.5 group"
        >
          <Flower2
            className="w-7 h-7 text-[var(--color-terracotta)] transition-transform duration-700 group-hover:rotate-12"
            strokeWidth={1.4}
          />
          <div className="leading-tight">
            <div className="font-serif text-xl text-[var(--color-ink)] tracking-wide">
              Le Jardin des Créateurs
            </div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-[var(--color-ink-soft)]">
              Strasbourg
            </div>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className="text-sm text-[var(--color-ink)] hover:text-[var(--color-terracotta)] transition-colors duration-300 relative after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:w-0 after:h-px after:bg-[var(--color-terracotta)] after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={() => handleNavClick('#nous-trouver')}
            className="hidden sm:inline-flex items-center px-5 py-2.5 rounded-full bg-[var(--color-terracotta)] text-[var(--color-cream)] text-sm hover:bg-[var(--color-terracotta-dark)] transition-colors duration-300 shadow-sm"
          >
            Nous rendre visite
          </button>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden p-2 -mr-2 text-[var(--color-ink)]"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="px-5 sm:px-8 py-4 bg-[var(--color-cream)]/98 backdrop-blur-md flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className="py-3 px-2 text-[var(--color-ink)] hover:text-[var(--color-terracotta)] border-b border-[var(--color-ink)]/8 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => handleNavClick('#nous-trouver')}
            className="mt-3 py-3 rounded-full bg-[var(--color-terracotta)] text-[var(--color-cream)] text-sm"
          >
            Nous rendre visite
          </button>
        </nav>
      </div>
    </header>
  );
}
