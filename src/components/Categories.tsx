import { Reveal } from '@/components/Reveal';
import { Gem, Palette, Flower, Sparkles, Flame, ShoppingBag } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type Category = {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
  highlight?: boolean;
};

const categories: Category[] = [
  {
    icon: Gem,
    title: 'Bijouterie artisanale',
    description: "Bijoux en argent et pierres naturelles, façonnés sur place. La plupart peuvent être personnalisés avec le créateur.",
    image: 'https://images.pexels.com/photos/7167020/pexels-photo-7167020.jpeg?auto=compress&cs=tinysrgb&w=800',
    highlight: true,
  },
  {
    icon: Palette,
    title: 'Illustrations',
    description: "Estampes, créations artistiques et œuvres originales, à suspendre ou à offrir.",
    image: 'https://images.pexels.com/photos/8843986/pexels-photo-8843986.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Sparkles,
    title: 'Bien-être & cosmétiques',
    description: "Mélanges d'huiles essentielles, soins naturels et cosmétiques faits main.",
    image: 'https://images.pexels.com/photos/672051/pexels-photo-672051.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Flame,
    title: 'Bougies',
    description: "Bougies artisanales aux senteurs naturelles, coulées avec soin.",
    image: 'https://images.pexels.com/photos/7233938/pexels-photo-7233938.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Flower,
    title: 'Fleurs & art floral',
    description: "Compositions florales fraîches et créations végétales de saison.",
    image: 'https://images.pexels.com/photos/29466616/pexels-photo-29466616.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: ShoppingBag,
    title: 'Accessoires & déco',
    description: "Sacs, tasses et objets déco uniques pour s'entourer de beau et de vrai.",
    image: 'https://images.pexels.com/photos/21326994/pexels-photo-21326994.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export function Categories() {
  return (
    <section className="py-24 sm:py-32 bg-[var(--color-sand-light)]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm uppercase tracking-[0.2em] text-[var(--color-terracotta)] mb-4 block">
            Ce que vous trouverez
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-[var(--color-ink)] mb-5 text-balance">
            Six univers de créations faites main
          </h2>
          <p className="text-[var(--color-ink-soft)] text-lg font-light">
            Chaque catégorie regroupe des pièces uniques, imaginées et façonnées
            par nos créateurs locaux — directement à la boutique.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <Reveal key={cat.title} delay={i * 80}>
              <article
                className={`group relative overflow-hidden rounded-3xl bg-[var(--color-cream)] shadow-sm hover:shadow-xl transition-all duration-500 ${
                  cat.highlight ? 'ring-1 ring-[var(--color-gold)]/40' : ''
                }`}
              >
                {/* Image */}
                <div className="relative aspect-[5/4] overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)]/55 to-transparent" />
                  {/* Icon badge */}
                  <div className="absolute top-4 left-4 w-11 h-11 rounded-full bg-[var(--color-cream)]/90 backdrop-blur-sm flex items-center justify-center shadow-sm">
                    <cat.icon className="w-5 h-5 text-[var(--color-terracotta)]" strokeWidth={1.5} />
                  </div>
                  {/* Title on image */}
                  <h3 className="absolute bottom-4 left-5 right-5 font-serif text-2xl text-[var(--color-cream)]">
                    {cat.title}
                  </h3>
                  {cat.highlight && (
                    <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[var(--color-gold)]/95 text-[var(--color-ink)] text-[10px] uppercase tracking-wider font-medium">
                      Personnalisable
                    </span>
                  )}
                </div>
                {/* Body */}
                <div className="p-5 sm:p-6">
                  <p className="text-[var(--color-ink-soft)] text-sm leading-relaxed font-light">
                    {cat.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 text-center">
          <p className="text-[var(--color-ink-soft)] font-light text-base">
            <span className="text-[var(--color-terracotta)]">✦</span>{' '}
            La sélection évolue au fil des saisons et des inspirations —
            chaque visite réserve son lot de surprises.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
