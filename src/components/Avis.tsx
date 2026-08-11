import { Reveal } from '@/components/Reveal';
import { Star, Quote } from 'lucide-react';

type Review = {
  name: string;
  text: string;
  source: string;
};

const reviews: Review[] = [
  {
    name: 'Marie L.',
    text: "Une boutique absolument charmante, on s'y sent comme à la maison. Les créations sont d'une grande qualité et l'accueil est exceptionnel. Mention spéciale pour le bijou personnalisé que j'ai commandé&nbsp;!",
    source: 'Google',
  },
  {
    name: 'Sophie D.',
    text: "Un véritable écrin au cœur de Strasbourg. J'adore l'idée de voir les créateurs travailler sur place&nbsp;: ça donne une âme aux pièces. Mes coups de cœur&nbsp;: les bougies et les illustrations.",
    source: 'Google',
  },
  {
    name: 'Thomas R.',
    text: "Le lieu idéal pour trouver un cadeau original et local. Les créateurs prennent le temps d'échanger, de raconter leur univers. Pièces uniques garanties, et un accueil chaleureux.",
    source: 'Google',
  },
  {
    name: 'Camille B.',
    text: "Ambiance cozy, créateurs passionnés et créations magnifiques. J'y suis retournée plusieurs fois et j'y trouve toujours quelque chose de nouveau. Une adresse à ne pas manquer à Strasbourg&nbsp;!",
    source: 'Google',
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5" aria-label="Note 5 sur 5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-[var(--color-gold)] text-[var(--color-gold)]" />
      ))}
    </div>
  );
}

export function Avis() {
  return (
    <section id="avis" className="py-24 sm:py-32 bg-[var(--color-sage)]/12 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[var(--color-sage)]/10 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-[var(--color-terracotta)]/8 blur-3xl" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative">
        {/* Heading + Google rating */}
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm uppercase tracking-[0.2em] text-[var(--color-terracotta)] mb-4 block">
            Ils en parlent
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-[var(--color-ink)] mb-6 text-balance">
            Une note de 5/5 sur Google
          </h2>
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-[var(--color-cream)] shadow-sm">
            <span className="font-serif text-2xl text-[var(--color-ink)]">5,0</span>
            <Stars />
            <span className="text-sm text-[var(--color-ink-soft)]">· une quinzaine d'avis</span>
          </div>
        </Reveal>

        {/* Reviews grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 90}>
              <figure className="relative h-full bg-[var(--color-cream)] rounded-3xl p-7 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-500">
                <Quote className="absolute top-6 right-6 w-8 h-8 text-[var(--color-terracotta)]/15" fill="currentColor" />
                <Stars />
                <blockquote
                  className="mt-4 text-[var(--color-ink)] text-base sm:text-lg leading-relaxed font-light italic"
                  dangerouslySetInnerHTML={{ __html: `« ${r.text} »` }}
                />
                <figcaption className="mt-5 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-sage)]/25 flex items-center justify-center font-serif text-lg text-[var(--color-sage-dark)]">
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-[var(--color-ink)]">{r.name}</div>
                    <div className="text-xs text-[var(--color-ink-soft)]">Avis {r.source}</div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 text-center">
          <p className="text-sm text-[var(--color-ink-soft)] font-light">
            Les témoignages seront remplacés par les avis Google définitifs fournis par la boutique.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
