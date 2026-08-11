import { MapPin, ChevronDown } from 'lucide-react';

const heroImage =
  'https://images.pexels.com/photos/1827130/pexels-photo-1827130.jpeg?auto=compress&cs=tinysrgb&w=1600';

export function Hero() {
  const scrollToFind = () => {
    document.querySelector('#nous-trouver')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="accueil" className="relative min-h-[100svh] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Intérieur chaleureux de la boutique Le Jardin des Créateurs à Strasbourg"
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-ink)]/45 via-[var(--color-ink)]/30 to-[var(--color-ink)]/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 w-full pt-20">
        <div className="max-w-2xl">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--color-cream)]/15 backdrop-blur-sm border border-[var(--color-cream)]/25 mb-7"
            style={{ opacity: 0, animation: 'fadeIn 1s ease 0.3s forwards' }}
          >
            <MapPin className="w-3.5 h-3.5 text-[var(--color-gold)]" strokeWidth={1.6} />
            <span className="text-[var(--color-cream)] text-xs tracking-[0.12em] uppercase">
              Centre-ville · Strasbourg
            </span>
          </div>

          <h1
            className="font-serif text-[var(--color-cream)] text-5xl sm:text-6xl lg:text-7xl leading-[1.05] mb-6 text-balance"
            style={{ opacity: 0, animation: 'fadeIn 1.1s ease 0.5s forwards' }}
          >
            Le Jardin<br />des Créateurs
          </h1>

          <p
            className="text-[var(--color-cream)]/90 text-lg sm:text-xl font-light max-w-xl mb-10 leading-relaxed"
            style={{ opacity: 0, animation: 'fadeIn 1.1s ease 0.8s forwards' }}
          >
            Des créations 100&nbsp;% faites main, au cœur de Strasbourg.
            Une boutique intimiste où les créateurs travaillent sous vos yeux.
          </p>

          <div
            className="flex flex-wrap gap-4"
            style={{ opacity: 0, animation: 'fadeIn 1.1s ease 1s forwards' }}
          >
            <button
              onClick={scrollToFind}
              className="px-7 py-3.5 rounded-full bg-[var(--color-terracotta)] text-[var(--color-cream)] text-sm tracking-wide hover:bg-[var(--color-terracotta-dark)] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Nous rendre visite
            </button>
            <button
              onClick={() => document.querySelector('#univers')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-7 py-3.5 rounded-full border border-[var(--color-cream)]/40 text-[var(--color-cream)] text-sm tracking-wide hover:bg-[var(--color-cream)]/10 transition-all duration-300"
            >
              Découvrir l'univers
            </button>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <button
        onClick={() => document.querySelector('#univers')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-[var(--color-cream)]/60 hover:text-[var(--color-cream)] transition-colors"
        aria-label="Défiler vers le bas"
      >
        <ChevronDown className="w-6 h-6 animate-bounce" strokeWidth={1.3} />
      </button>

      <style>{`@keyframes fadeIn { to { opacity: 1; } }`}</style>
    </section>
  );
}
