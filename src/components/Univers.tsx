import { Reveal } from '@/components/Reveal';

const universImage =
  'https://images.pexels.com/photos/6265333/pexels-photo-6265333.jpeg?auto=compress&cs=tinysrgb&w=1000';

export function Univers() {
  return (
    <section id="univers" className="py-24 sm:py-32 bg-[var(--color-cream)]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image side */}
          <Reveal className="relative">
            <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] shadow-xl">
              <img
                src={universImage}
                alt="L'atelier-boutique chaleureux où les créateurs travaillent sur place"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-5 -right-3 sm:-right-5 w-28 h-28 rounded-full bg-[var(--color-sage)]/20 -z-0" />
            <div className="absolute -top-4 -left-3 sm:-left-4 w-20 h-20 rounded-full border-2 border-[var(--color-gold)]/40" />
          </Reveal>

          {/* Text side */}
          <Reveal delay={150}>
            <span className="text-sm uppercase tracking-[0.2em] text-[var(--color-terracotta)] mb-5 block">
              Notre univers
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-[var(--color-ink)] mb-7 text-balance">
              Une boutique-atelier où l'artisanat prend vie
            </h2>
            <div className="space-y-5 text-[var(--color-ink-soft)] text-lg leading-relaxed font-light">
              <p>
                Au cœur de Strasbourg, <em className="text-[var(--color-terracotta)] not-italic">Le Jardin des Créateurs</em> réunit
                plusieurs artisans locaux dans un même écrin chaleureux. Ici, pas de vitrine froide&nbsp;:
                les créateurs façonnent leurs pièces <em className="not-italic font-normal text-[var(--color-ink)]">sous vos yeux</em>,
                au sein même de la boutique.
              </p>
              <p>
                Chaque objet raconte une histoire — celle d'un geste, d'un savoir-faire, d'une rencontre
                entre la main et la matière. Bijoux en argent, illustrations, cosmétiques naturels,
                bougies, fleurs&nbsp;: autant d'univers à explorer, de pièces uniques à offrir ou à s'offrir.
              </p>
              <p>
                Et parce que rien ne remplace la proximité, échangez directement avec celles et ceux
                qui créent. Certaines pièces peuvent être <em className="not-italic font-normal text-[var(--color-ink)]">personnalisées</em>
                sur place, pour un cadeau véritablement unique.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
