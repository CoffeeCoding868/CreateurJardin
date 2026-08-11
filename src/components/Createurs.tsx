import { Reveal } from '@/components/Reveal';
import { Sparkles, Heart, HandHeart } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type Feature = { icon: LucideIcon; title: string; text: string };

const features: Feature[] = [
  {
    icon: Heart,
    title: 'Le geste et la matière',
    text: "Nos créateurs façonnent chaque pièce à la main, devant vous. Observez le geste, posez vos questions, comprenez le savoir-faire derrière chaque création.",
  },
  {
    icon: Sparkles,
    title: 'La personnalisation',
    text: "Bijoux, illustrations, objets déco&nbsp;: de nombreuses pièces peuvent être adaptées à vos envies. Échangez directement avec le créateur pour un objet qui n'appartient qu'à vous.",
  },
  {
    icon: HandHeart,
    title: 'La convivialité',
    text: "La boutique est un lieu de rencontre. On y entre curieux, on en ressort avec une pièce unique et, souvent, une histoire à raconter.",
  },
];

const creatorImages = [
  'https://images.pexels.com/photos/6768447/pexels-photo-6768447.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/10474333/pexels-photo-10474333.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/5409690/pexels-photo-5409690.jpeg?auto=compress&cs=tinysrgb&w=800',
];

export function Createurs() {
  return (
    <section id="createurs" className="py-24 sm:py-32 bg-[var(--color-cream)]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Heading */}
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm uppercase tracking-[0.2em] text-[var(--color-terracotta)] mb-4 block">
            Les créateurs
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-[var(--color-ink)] mb-5 text-balance">
            Des artisans, des rencontres, des pièces uniques
          </h2>
          <p className="text-[var(--color-ink-soft)] text-lg font-light">
            La boutique n'existe que par celles et ceux qui y créent.
            Bijoutiers, illustratrices, fleuristes, parfumeuses&nbsp;: autant de
            talents réunis sous un même toit.
          </p>
        </Reveal>

        {/* Image collage */}
        <div className="grid grid-cols-12 gap-4 sm:gap-5 mb-20">
          <Reveal className="col-span-7 sm:col-span-8 row-span-2">
            <div className="rounded-3xl overflow-hidden aspect-[4/3] sm:aspect-[16/10] shadow-md h-full">
              <img
                src={creatorImages[0]}
                alt="Créatrice artisanale au travail dans la boutique"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>
          <Reveal className="col-span-5 sm:col-span-4" delay={120}>
            <div className="rounded-3xl overflow-hidden aspect-square shadow-md h-full">
              <img
                src={creatorImages[1]}
                alt="Mains façonnant un bijou artisanal"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>
          <Reveal className="col-span-5 sm:col-span-4" delay={220}>
            <div className="rounded-3xl overflow-hidden aspect-square shadow-md h-full">
              <img
                src={creatorImages[2]}
                alt="Fleuriste composant un bouquet"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 100}>
              <div className="text-center px-4 py-8 rounded-3xl bg-[var(--color-sand-light)] hover:bg-[var(--color-sand)]/50 transition-colors duration-500 h-full">
                <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-[var(--color-sage)]/15 flex items-center justify-center">
                  <f.icon className="w-6 h-6 text-[var(--color-sage-dark)]" strokeWidth={1.4} />
                </div>
                <h3 className="font-serif text-2xl text-[var(--color-ink)] mb-3">{f.title}</h3>
                <p
                  className="text-[var(--color-ink-soft)] text-sm leading-relaxed font-light"
                  dangerouslySetInnerHTML={{ __html: f.text }}
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
