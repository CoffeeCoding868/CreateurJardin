import { useState, type FormEvent } from 'react';
import { Reveal } from '@/components/Reveal';
import { supabase } from '@/lib/supabase';
import { MapPin, Clock, CreditCard, Navigation, Phone, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

type FormState = 'idle' | 'loading' | 'success' | 'error';

export function NousTrouver() {
  const [formState, setFormState] = useState<FormState>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormState('loading');

    try {
      const { error } = await supabase.from('contact_messages').insert({
        name: formData.name.trim(),
        email: formData.email.trim(),
        message: formData.message.trim(),
      });

      if (error) throw error;

      setFormState('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setFormState('idle'), 5000);
    } catch {
      setFormState('error');
      setTimeout(() => setFormState('idle'), 6000);
    }
  };

  const mapsEmbedSrc =
    'https://www.google.com/maps?q=18+Rue+de+la+Division+Leclerc,+67000+Strasbourg&output=embed';
  const directionsUrl =
    'https://www.google.com/maps/dir/?api=1&destination=18+Rue+de+la+Division+Leclerc,+67000+Strasbourg';
  const callHref = 'tel:+33390000000';

  return (
    <section id="nous-trouver" className="py-24 sm:py-32 bg-[var(--color-sand-light)]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm uppercase tracking-[0.2em] text-[var(--color-terracotta)] mb-4 block">
            Nous trouver
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-[var(--color-ink)] mb-5 text-balance">
            Poussez la porte, on vous attend
          </h2>
          <p className="text-[var(--color-ink-soft)] text-lg font-light">
            Au centre de Strasbourg, à deux pas de l'hypercentre. Venez rencontrer
            les créateurs et repartir avec une pièce qui vous ressemble.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left: info + map */}
          <div className="space-y-6">
            {/* Practical info card */}
            <Reveal>
              <div className="bg-[var(--color-cream)] rounded-3xl p-7 sm:p-8 shadow-sm">
                <h3 className="font-serif text-2xl text-[var(--color-ink)] mb-6">
                  Informations pratiques
                </h3>

                <ul className="space-y-5">
                  <li className="flex gap-4">
                    <MapPin className="w-5 h-5 text-[var(--color-terracotta)] flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                    <div>
                      <div className="text-sm font-medium text-[var(--color-ink)] mb-0.5">Adresse</div>
                      <p className="text-sm text-[var(--color-ink-soft)] font-light">
                        18 Rue de la Division Leclerc<br />67000 Strasbourg
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <Clock className="w-5 h-5 text-[var(--color-terracotta)] flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                    <div>
                      <div className="text-sm font-medium text-[var(--color-ink)] mb-0.5">Horaires</div>
                      <p className="text-sm text-[var(--color-ink-soft)] font-light">
                        Mardi à Samedi · 11h00 – 18h30<br />
                        <span className="text-[var(--color-terracotta)]/80">Fermé dimanche et lundi</span>
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <CreditCard className="w-5 h-5 text-[var(--color-terracotta)] flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                    <div>
                      <div className="text-sm font-medium text-[var(--color-ink)] mb-0.5">Paiement</div>
                      <p className="text-sm text-[var(--color-ink-soft)] font-light">
                        Carte bancaire · Paiement mobile NFC
                      </p>
                    </div>
                  </li>
                </ul>

                <div className="flex flex-wrap gap-3 mt-7">
                  <a
                    href={directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--color-terracotta)] text-[var(--color-cream)] text-sm hover:bg-[var(--color-terracotta-dark)] transition-colors duration-300"
                  >
                    <Navigation className="w-4 h-4" strokeWidth={1.6} />
                    Itinéraire
                  </a>
                  <a
                    href={callHref}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[var(--color-ink)]/15 text-[var(--color-ink)] text-sm hover:bg-[var(--color-sand)]/40 transition-colors duration-300"
                  >
                    <Phone className="w-4 h-4" strokeWidth={1.6} />
                    Appeler
                  </a>
                </div>
              </div>
            </Reveal>

            {/* Map embed */}
            <Reveal delay={120}>
              <div className="rounded-3xl overflow-hidden shadow-sm h-72 sm:h-80 border border-[var(--color-ink)]/8">
                <iframe
                  title="Carte — Le Jardin des Créateurs, Strasbourg"
                  src={mapsEmbedSrc}
                  className="w-full h-full"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </Reveal>
          </div>

          {/* Right: contact form */}
          <Reveal delay={100}>
            <div className="bg-[var(--color-cream)] rounded-3xl p-7 sm:p-8 shadow-sm">
              <h3 className="font-serif text-2xl text-[var(--color-ink)] mb-2">
                Écrivez-nous
              </h3>
              <p className="text-sm text-[var(--color-ink-soft)] font-light mb-6">
                Une question, une demande de personnalisation, une envie de cadeau&nbsp;?
                Laissez-nous un mot, nous vous répondrons avec plaisir.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="cf-name" className="block text-sm text-[var(--color-ink)] mb-1.5">
                    Votre nom
                  </label>
                  <input
                    id="cf-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData((d) => ({ ...d, name: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl bg-[var(--color-sand-light)] border border-[var(--color-ink)]/10 text-[var(--color-ink)] text-sm focus:outline-none focus:border-[var(--color-terracotta)] focus:ring-2 focus:ring-[var(--color-terracotta)]/15 transition-all"
                    placeholder="Comment vous appelez-vous&nbsp;?"
                  />
                </div>

                <div>
                  <label htmlFor="cf-email" className="block text-sm text-[var(--color-ink)] mb-1.5">
                    Votre email
                  </label>
                  <input
                    id="cf-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData((d) => ({ ...d, email: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl bg-[var(--color-sand-light)] border border-[var(--color-ink)]/10 text-[var(--color-ink)] text-sm focus:outline-none focus:border-[var(--color-terracotta)] focus:ring-2 focus:ring-[var(--color-terracotta)]/15 transition-all"
                    placeholder="pour pouvoir vous répondre"
                  />
                </div>

                <div>
                  <label htmlFor="cf-message" className="block text-sm text-[var(--color-ink)] mb-1.5">
                    Votre message
                  </label>
                  <textarea
                    id="cf-message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData((d) => ({ ...d, message: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl bg-[var(--color-sand-light)] border border-[var(--color-ink)]/10 text-[var(--color-ink)] text-sm focus:outline-none focus:border-[var(--color-terracotta)] focus:ring-2 focus:ring-[var(--color-terracotta)]/15 transition-all resize-none"
                    placeholder="Racontez-nous votre projet, votre question, votre envie…"
                  />
                </div>

                <button
                  type="submit"
                  disabled={formState === 'loading'}
                  className="w-full py-3.5 rounded-full bg-[var(--color-terracotta)] text-[var(--color-cream)] text-sm tracking-wide hover:bg-[var(--color-terracotta-dark)] transition-colors duration-300 disabled:opacity-60 flex items-center justify-center gap-2"
                >
                  {formState === 'loading' && (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Envoi en cours…
                    </>
                  )}
                  {formState !== 'loading' && 'Envoyer le message'}
                </button>

                {/* Feedback */}
                {formState === 'success' && (
                  <div className="flex items-center gap-2.5 text-sm text-[var(--color-sage-dark)] bg-[var(--color-sage)]/15 rounded-xl px-4 py-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                    Merci&nbsp;! Votre message a bien été envoyé. Nous vous répondrons bientôt.
                  </div>
                )}
                {formState === 'error' && (
                  <div className="flex items-center gap-2.5 text-sm text-red-700 bg-red-50 rounded-xl px-4 py-3">
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    Une erreur est survenue. Réessayez ou appelez-nous directement.
                  </div>
                )}
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
