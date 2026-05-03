
/* ============================================================
   BF2B TRADING — FAQ + CTA Final + Contact Form
   ============================================================ */

const FAQ_ITEMS = [
  { q: 'Combien de temps prend la livraison aérienne ?', a: '10 jours pour les marchandises générales, 12 jours pour les sensibles. Départ chaque mercredi depuis la Chine. Le cut-off est le mardi soir.' },
  { q: 'Combien de temps prend la livraison maritime ?', a: '70 à 80 jours. Départ tous les 2 jours depuis Foshan via notre partenaire Foshan Logistics. Idéal pour les grandes quantités non urgentes.' },
  { q: 'Quel est le minimum de charge ?', a: 'Aérien : 2 kg minimum. Maritime LCL : 0,5 CBM minimum. Règle de volume : 1 CBM = 500 kg.' },
  { q: 'Le dédouanement est-il inclus dans vos tarifs ?', a: 'Oui, le dédouanement est inclus dans nos frais. Cependant, les droits de douane et la TVA sénégalaise (environ 30–45% selon la marchandise) sont à votre charge et calculés séparément.' },
  { q: 'Comment se passe le paiement ?', a: 'Paiement complet à la livraison de votre marchandise au Sénégal (Dakar ou Mbour). Zéro avance, zéro risque. Nous acceptons Wave, Orange Money, virement bancaire et espèces.' },
  { q: 'Que se passe-t-il si j\'oublie le code colis DKR26072 ?', a: 'L\'entrepôt en Chine ne pourra pas identifier votre colis. Il sera refusé ou perdu. Ce code est absolument obligatoire — donnez-le à votre fournisseur AVANT l\'expédition.' },
  { q: 'Livrez-vous partout au Sénégal ?', a: 'Dakar et Mbour sont inclus dans nos tarifs standards. Les autres villes (Thiès, Saint-Louis, Ziguinchor, Kaolack, etc.) sont desservies sur devis selon la distance.' },
  { q: 'Comment démarrer une commande ?', a: 'Contactez-nous sur WhatsApp. Réponse sous 2h en jours ouvrés. Nous établissons un devis gratuit et sans engagement. Facile, rapide, transparent.' },
];

function FAQ() {
  const [open, setOpen] = React.useState(null);

  return (
    <section id="faq" className="bg-[#0A1F44] py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 fade-up">
          <div className="inline-block bg-[#F4C430]/10 text-[#F4C430] text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">FAQ</div>
          <h2 className="font-display font-black text-4xl lg:text-5xl text-white">Questions fréquentes</h2>
        </div>

        <div className="space-y-3 fade-up">
          {FAQ_ITEMS.map((item, i) => (
            <div key={i} className={`border rounded-2xl overflow-hidden transition-all duration-300 ${open === i ? 'border-[#F4C430]/40 bg-[#152A5C]' : 'border-white/10 bg-white/3 hover:border-white/20'}`}>
              <button onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left gap-4">
                <span className={`font-bold text-base transition-colors ${open === i ? 'text-[#F4C430]' : 'text-white/80'}`}>
                  {item.q}
                </span>
                <svg className={`w-5 h-5 shrink-0 transition-transform duration-300 ${open === i ? 'rotate-180 text-[#F4C430]' : 'text-white/30'}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${open === i ? 'max-h-48' : 'max-h-0'}`}>
                <p className="px-6 pb-5 text-white/60 text-sm leading-relaxed">{item.a}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 fade-up">
          <p className="text-white/40 text-sm mb-4">Vous n'avez pas trouvé votre réponse ?</p>
          <a href={waLink('Bonjour BF2B, j\'ai une question à vous poser.')}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#F4C430] hover:text-white border border-[#F4C430]/30 hover:border-white/30 font-bold text-sm px-6 py-3 rounded-xl transition-all">
            Posez-la directement sur WhatsApp →
          </a>
        </div>
      </div>
    </section>
  );
}

// ── CTA Final ─────────────────────────────────────────────────
function CTAFinal() {
  return (
    <section className="bg-[#070F22] py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 dots-pattern opacity-20"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F4C430]/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="fade-up">
          <div className="inline-flex items-center gap-2 bg-[#F4C430]/10 border border-[#F4C430]/20 rounded-full px-4 py-1.5 text-[#F4C430] text-xs font-bold tracking-widest uppercase mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse"></span>
            Disponible maintenant
          </div>

          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white mb-4 leading-tight">
            Prêt à expédier vos<br/>
            <span className="text-[#F4C430]">marchandises depuis la Chine ?</span>
          </h2>
          <p className="text-white/50 text-lg mb-12 max-w-xl mx-auto">
            Devis gratuit, réponse en moins de 2h. BF2B TRADING prend en charge tout le processus de A à Z.
          </p>

          {/* Big WhatsApp button */}
          <a href={waLink('Bonjour BF2B TRADING ! Je souhaite expédier des marchandises depuis la Chine vers le Sénégal. Pouvez-vous m\'aider ?')}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-4 bg-[#25D366] hover:bg-[#1eb855] text-white font-black text-lg sm:text-xl px-12 py-5 rounded-2xl transition-all duration-300 hover:scale-105 shadow-2xl shadow-[#25D366]/30 mb-12">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.523 5.851L.057 23.885l6.196-1.454A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.87 9.87 0 01-5.017-1.372l-.36-.214-3.677.864.927-3.584-.235-.369A9.86 9.86 0 012.118 12C2.118 6.54 6.54 2.118 12 2.118c5.46 0 9.882 4.422 9.882 9.882 0 5.46-4.422 9.882-9.882 9.882z"/></svg>
            Contacter BF2B sur WhatsApp
          </a>

          {/* 3 guarantees */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            {[
              { icon: '⚡', title: 'Réponse en 2h', desc: 'En jours ouvrés' },
              { icon: '🎁', title: 'Devis gratuit', desc: 'Sans engagement' },
              { icon: '📍', title: 'Mbour, Sénégal', desc: 'NINEA 011251965' },
            ].map((g, i) => (
              <div key={i} className="flex flex-col items-center gap-2 bg-white/5 border border-white/10 rounded-2xl px-6 py-5">
                <span className="text-3xl">{g.icon}</span>
                <div className="font-bold text-white text-sm">{g.title}</div>
                <div className="text-white/40 text-xs">{g.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Contact Form ──────────────────────────────────────────────
function ContactForm() {
  const [form, setForm] = React.useState({ name: '', email: '', whatsapp: '', service: '', message: '' });
  const [sent, setSent] = React.useState(false);

  function handleChange(e) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const msg = `Bonjour BF2B TRADING !\n\nNom : ${form.name}\nEmail : ${form.email}\nWhatsApp : ${form.whatsapp}\nService : ${form.service}\n\nMessage : ${form.message}\n\nMerci !`;
    window.open(waLink(msg), '_blank');
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  }

  return (
    <section id="contact" className="bg-[#f8f6f0] py-20 lg:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 fade-up">
          <div className="inline-block bg-[#0A1F44]/8 text-[#0A1F44] text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">Contact</div>
          <h2 className="font-display font-black text-4xl lg:text-5xl text-[#0A1F44]">
            Demandez votre <span className="text-[#D4A017]">devis gratuit</span>
          </h2>
          <p className="text-[#666] mt-3 text-base">Remplissez le formulaire ou contactez-nous directement sur WhatsApp.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Form */}
          <div className="fade-up bg-white rounded-3xl p-8 shadow-xl border border-[#0A1F44]/8">
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="font-display font-bold text-2xl text-[#0A1F44] mb-2">Message envoyé !</h3>
                <p className="text-[#666] text-sm">Votre demande a été transmise sur WhatsApp. Nous vous répondons sous 2h.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#0A1F44] text-xs font-bold tracking-widest uppercase mb-2">Nom complet</label>
                    <input name="name" value={form.name} onChange={handleChange} required
                      placeholder="Votre nom"
                      className="w-full border border-[#0A1F44]/15 focus:border-[#F4C430] rounded-xl px-4 py-3 text-sm text-[#0A1F44] focus:outline-none focus:ring-2 focus:ring-[#F4C430]/20 transition-all placeholder-[#666]/40" />
                  </div>
                  <div>
                    <label className="block text-[#0A1F44] text-xs font-bold tracking-widest uppercase mb-2">WhatsApp</label>
                    <input name="whatsapp" value={form.whatsapp} onChange={handleChange}
                      placeholder="+221 XX XXX XX XX"
                      className="w-full border border-[#0A1F44]/15 focus:border-[#F4C430] rounded-xl px-4 py-3 text-sm text-[#0A1F44] focus:outline-none focus:ring-2 focus:ring-[#F4C430]/20 transition-all placeholder-[#666]/40" />
                  </div>
                </div>
                <div>
                  <label className="block text-[#0A1F44] text-xs font-bold tracking-widest uppercase mb-2">Email</label>
                  <input name="email" type="email" value={form.email} onChange={handleChange}
                    placeholder="votre@email.com"
                    className="w-full border border-[#0A1F44]/15 focus:border-[#F4C430] rounded-xl px-4 py-3 text-sm text-[#0A1F44] focus:outline-none focus:ring-2 focus:ring-[#F4C430]/20 transition-all placeholder-[#666]/40" />
                </div>
                <div>
                  <label className="block text-[#0A1F44] text-xs font-bold tracking-widest uppercase mb-2">Service souhaité</label>
                  <select name="service" value={form.service} onChange={handleChange}
                    className="w-full border border-[#0A1F44]/15 focus:border-[#F4C430] rounded-xl px-4 py-3 text-sm text-[#0A1F44] focus:outline-none focus:ring-2 focus:ring-[#F4C430]/20 transition-all bg-white">
                    <option value="">Sélectionnez un service</option>
                    <option value="Aérien Express">Aérien Express</option>
                    <option value="Maritime LCL">Maritime LCL</option>
                    <option value="Conteneur FCL">Conteneur FCL</option>
                    <option value="Sourcing Chine">Sourcing Chine</option>
                    <option value="Autre">Autre / Je ne sais pas encore</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[#0A1F44] text-xs font-bold tracking-widest uppercase mb-2">Votre message</label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={4}
                    placeholder="Décrivez vos marchandises, quantités, délais souhaités..."
                    className="w-full border border-[#0A1F44]/15 focus:border-[#F4C430] rounded-xl px-4 py-3 text-sm text-[#0A1F44] focus:outline-none focus:ring-2 focus:ring-[#F4C430]/20 transition-all placeholder-[#666]/40 resize-none">
                  </textarea>
                </div>
                <button type="submit"
                  className="w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1eb855] text-white font-black py-4 rounded-xl transition-all hover:scale-[1.02] shadow-lg shadow-[#25D366]/20">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.523 5.851L.057 23.885l6.196-1.454A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.87 9.87 0 01-5.017-1.372l-.36-.214-3.677.864.927-3.584-.235-.369A9.86 9.86 0 012.118 12C2.118 6.54 6.54 2.118 12 2.118c5.46 0 9.882 4.422 9.882 9.882 0 5.46-4.422 9.882-9.882 9.882z"/></svg>
                  Envoyer via WhatsApp
                </button>
              </form>
            )}
          </div>

          {/* Info side */}
          <div className="fade-up delay-1 space-y-6">
            <div className="bg-[#0A1F44] rounded-3xl p-8 text-white">
              <h3 className="font-display font-bold text-xl mb-6 text-[#F4C430]">Informations de contact</h3>
              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#F4C430]/10 rounded-xl flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-[#F4C430]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div>
                    <div className="font-bold text-sm">Localisation</div>
                    <div className="text-white/50 text-sm">Mbour, Sénégal</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#F4C430]/10 rounded-xl flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-[#F4C430]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div>
                    <div className="font-bold text-sm">Email</div>
                    <a href="mailto:bf2btrading@gmail.com" className="text-white/50 text-sm hover:text-[#F4C430] transition-colors">bf2btrading@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Horaires */}
            <div className="bg-white rounded-3xl p-8 border border-[#0A1F44]/8 shadow-lg">
              <h3 className="font-display font-bold text-lg text-[#0A1F44] mb-4">Horaires & disponibilité</h3>
              <div className="space-y-3 text-sm">
                {[
                  ['Lundi – Vendredi', '08h00 – 20h00', true],
                  ['Samedi', '09h00 – 18h00', true],
                  ['Dimanche', 'WhatsApp uniquement', false],
                ].map(([day, hours, active]) => (
                  <div key={day} className="flex items-center justify-between py-2 border-b border-[#0A1F44]/5 last:border-0">
                    <span className="text-[#444] font-medium">{day}</span>
                    <span className={`font-bold text-xs px-2.5 py-1 rounded-full ${active ? 'bg-[#16A34A]/10 text-[#16A34A]' : 'bg-[#F4C430]/10 text-[#D4A017]'}`}>{hours}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-2 text-xs text-[#666] bg-[#25D366]/5 border border-[#25D366]/20 rounded-xl px-4 py-3">
                <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></span>
                WhatsApp disponible 24h/24, 7j/7
              </div>
            </div>

            {/* Google Maps */}
            <div className="bg-white rounded-3xl overflow-hidden border border-[#0A1F44]/8 shadow-lg">
              <div className="bg-[#0A1F44] px-5 py-3 flex items-center gap-2">
                <svg className="w-4 h-4 text-[#F4C430]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span className="text-white text-xs font-bold tracking-wide">BF2B TRADING — Mbour, Sénégal</span>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61707.82476564!2d-16.97665!3d14.41722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec172b5d3c2e0e5%3A0x9b2e44f4e3c8f97d!2sMbour%2C%20S%C3%A9n%C3%A9gal!5e0!3m2!1sfr!2sfr!4v1714000000000!5m2!1sfr!2sfr"
                width="100%" height="200" style={{border:0}} allowFullScreen="" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade" title="BF2B TRADING Mbour Sénégal">
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { FAQ, CTAFinal, ContactForm });
