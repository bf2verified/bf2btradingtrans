
/* ============================================================
   BF2B TRADING — How It Works + Price Tables + Stats + Testimonials
   ============================================================ */

// ── How It Works ─────────────────────────────────────────────
const STEPS = [
  { num: '01', icon: '🛒', title: 'Vous commandez en Chine', desc: 'Sur Alibaba, 1688, Taobao ou via notre service sourcing. Choisissez vos produits.' },
  { num: '02', icon: '📋', title: 'Vous donnez notre code', desc: 'Transmettez à votre fournisseur le code DKR26072 +Sea ou +Air et l\'adresse de notre entrepôt.' },
  { num: '03', icon: '🏭', title: 'Réception en Chine', desc: 'Le fournisseur expédie à notre entrepôt partenaire en Chine. Nous réceptionnons et vérifions la marchandise.' },
  { num: '04', icon: '✈', title: 'Expédition vers Dakar', desc: 'Départ par avion (chaque mercredi) ou navire (tous les 2 jours). Nous vous notifions en temps réel.' },
  { num: '05', icon: '📍', title: 'Livraison Dakar / Mbour', desc: 'Dédouanement géré par BF2B. Livraison à Dakar et Mbour incluse. Autres villes sur devis.' },
];

function HowItWorks() {
  return (
    <section id="comment-ca-marche" className="bg-[#0A1F44] py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 dots-pattern opacity-15"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 fade-up">
          <div className="inline-block bg-[#F4C430]/10 text-[#F4C430] text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">Process</div>
          <h2 className="font-display font-black text-4xl lg:text-5xl text-white">
            Comment ça marche ?
          </h2>
          <p className="text-white/50 mt-3 text-lg max-w-xl mx-auto">5 étapes simples pour recevoir vos marchandises de Chine.</p>
        </div>

        <div className="relative">
          {/* Connecting line desktop */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-[#F4C430]/30 to-transparent"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {STEPS.map((step, i) => (
              <div key={i} className={`fade-up delay-${i + 1} relative flex flex-col items-center text-center lg:items-center`}>
                {/* Number circle */}
                <div className="relative mb-4">
                  <div className="w-20 h-20 rounded-full bg-[#152A5C] border-2 border-[#F4C430]/40 flex items-center justify-center text-3xl z-10 relative">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-[#F4C430] flex items-center justify-center">
                    <span className="font-mono font-black text-[#0A1F44] text-xs">{step.num}</span>
                  </div>
                </div>
                <h3 className="font-display font-bold text-white text-base mb-2 leading-tight">{step.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-14 fade-up">
          <a href={waLink('Bonjour BF2B, je suis prêt à commencer ! Comment procéder ?')}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#F4C430] hover:bg-[#D4A017] text-[#0A1F44] font-black text-base px-10 py-4 rounded-2xl transition-all duration-300 hover:scale-105 shadow-2xl shadow-[#F4C430]/20">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.523 5.851L.057 23.885l6.196-1.454A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.87 9.87 0 01-5.017-1.372l-.36-.214-3.677.864.927-3.584-.235-.369A9.86 9.86 0 012.118 12C2.118 6.54 6.54 2.118 12 2.118c5.46 0 9.882 4.422 9.882 9.882 0 5.46-4.422 9.882-9.882 9.882z"/></svg>
            Je démarre maintenant sur WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

// ── Price Tables ─────────────────────────────────────────────
function PriceTables() {
  const [activeTab, setActiveTab] = React.useState('air');

  const airRows = [
    { tranche: '2 – 10 kg',   prix: '10 800 FCFA/kg', general: '10 jours', sensible: '12 jours' },
    { tranche: '10 – 50 kg',  prix: '10 200 FCFA/kg', general: '10 jours', sensible: '12 jours' },
    { tranche: '50 – 200 kg', prix: '10 000 FCFA/kg', general: '10 jours', sensible: '12 jours' },
    { tranche: '+200 kg ★',   prix: '9 800 FCFA/kg',  general: '10 jours', sensible: '12 jours', best: true },
  ];

  const seaRows = [
    { tranche: '0,5 – 1 CBM', general: '265 000 FCFA/CBM', sensible: '275 000 FCFA/CBM' },
    { tranche: '1 – 20 CBM',  general: '255 000 FCFA/CBM', sensible: '265 000 FCFA/CBM' },
    { tranche: '+20 CBM ★',   general: '250 000 FCFA/CBM', sensible: '260 000 FCFA/CBM', best: true },
  ];

  return (
    <section id="tarifs" className="bg-[#f8f6f0] py-20 lg:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 fade-up">
          <div className="inline-block bg-[#0A1F44]/8 text-[#0A1F44] text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">Grille tarifaire 2026</div>
          <h2 className="font-display font-black text-4xl lg:text-5xl text-[#0A1F44]">
            Tarifs <span className="text-[#D4A017]">transparents</span>
          </h2>
          <p className="text-[#666] mt-3 text-base">Prix fixes, pas de mauvaises surprises. Dédouanement inclus.</p>
        </div>

        {/* Tabs */}
        <div className="flex gap-3 mb-8 p-1.5 bg-[#0A1F44]/8 rounded-2xl max-w-sm mx-auto fade-up">
          {[['air', '✈ Aérien'], ['maritime', '🚢 Maritime']].map(([tab, lbl]) => (
            <button key={tab} onClick={() => setActiveTab(tab)}
              className={`flex-1 py-2.5 px-6 rounded-xl font-bold text-sm transition-all duration-200 ${activeTab === tab ? 'bg-[#0A1F44] text-white shadow-lg' : 'text-[#0A1F44]/60 hover:text-[#0A1F44]'}`}>
              {lbl}
            </button>
          ))}
        </div>

        {activeTab === 'air' && (
          <div className="fade-up bg-white rounded-3xl overflow-hidden shadow-xl border border-[#0A1F44]/8">
            {/* Header info */}
            <div className="bg-[#0A1F44] px-6 py-4 flex flex-wrap gap-4 items-center justify-between">
              <div className="text-white font-bold text-sm">Fret Aérien — BF2B TRADING</div>
              <div className="flex gap-4 text-xs text-white/50">
                <span>⏰ Départ : chaque mercredi</span>
                <span>✂️ Cut-off : mardi soir</span>
                <span>📦 Min. : 2 kg</span>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#0A1F44]/8">
                    <th className="text-left px-6 py-4 text-xs font-bold tracking-widest uppercase text-[#666]">Tranche</th>
                    <th className="text-right px-6 py-4 text-xs font-bold tracking-widest uppercase text-[#666]">Prix BF2B</th>
                    <th className="text-right px-6 py-4 text-xs font-bold tracking-widest uppercase text-[#666]">Général</th>
                    <th className="text-right px-6 py-4 text-xs font-bold tracking-widest uppercase text-[#666]">Sensible</th>
                  </tr>
                </thead>
                <tbody>
                  {airRows.map((r, i) => (
                    <tr key={i} className={`border-b border-[#0A1F44]/5 transition-colors hover:bg-[#F4C430]/5 ${r.best ? 'bg-[#F4C430]/5' : ''}`}>
                      <td className="px-6 py-4">
                        <span className="font-bold text-[#0A1F44]">{r.tranche}</span>
                        {r.best && <span className="ml-2 bg-[#F4C430] text-[#0A1F44] text-[10px] font-black px-2 py-0.5 rounded-full">MEILLEUR PRIX</span>}
                      </td>
                      <td className="px-6 py-4 text-right font-black text-[#D4A017] font-mono">{r.prix}</td>
                      <td className="px-6 py-4 text-right text-[#444] text-sm">{r.general}</td>
                      <td className="px-6 py-4 text-right text-[#444] text-sm">{r.sensible}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-6 py-4 bg-[#F4C430]/5 border-t border-[#F4C430]/20">
              <p className="text-[#666] text-xs">★ Marchandises sensibles : batteries, produits liquides, cosmétiques, électronique de grande valeur. Code : <span className="font-mono font-bold text-[#0A1F44]">DKR26072 +Air</span></p>
            </div>
          </div>
        )}

        {activeTab === 'maritime' && (
          <div className="fade-up bg-white rounded-3xl overflow-hidden shadow-xl border border-[#0A1F44]/8">
            <div className="bg-[#0A1F44] px-6 py-4 flex flex-wrap gap-4 items-center justify-between">
              <div className="text-white font-bold text-sm">Maritime LCL — Foshan Logistics</div>
              <div className="flex gap-4 text-xs text-white/50">
                <span>🚢 Départ : tous les 2 jours</span>
                <span>⏱ Délai : 70–80 jours</span>
                <span>📦 Min. : 0,5 CBM</span>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#0A1F44]/8">
                    <th className="text-left px-6 py-4 text-xs font-bold tracking-widest uppercase text-[#666]">Volume</th>
                    <th className="text-right px-6 py-4 text-xs font-bold tracking-widest uppercase text-[#666]">Général</th>
                    <th className="text-right px-6 py-4 text-xs font-bold tracking-widest uppercase text-[#666]">Sensible / Lourd</th>
                  </tr>
                </thead>
                <tbody>
                  {seaRows.map((r, i) => (
                    <tr key={i} className={`border-b border-[#0A1F44]/5 transition-colors hover:bg-[#F4C430]/5 ${r.best ? 'bg-[#F4C430]/5' : ''}`}>
                      <td className="px-6 py-4">
                        <span className="font-bold text-[#0A1F44]">{r.tranche}</span>
                        {r.best && <span className="ml-2 bg-[#F4C430] text-[#0A1F44] text-[10px] font-black px-2 py-0.5 rounded-full">MEILLEUR PRIX</span>}
                      </td>
                      <td className="px-6 py-4 text-right font-black text-[#D4A017] font-mono text-sm">{r.general}</td>
                      <td className="px-6 py-4 text-right font-black text-[#D4A017] font-mono text-sm">{r.sensible}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-6 py-4 bg-[#F4C430]/5 border-t border-[#F4C430]/20">
              <p className="text-[#666] text-xs">Règle volume : 1 CBM = 500 kg. Code : <span className="font-mono font-bold text-[#0A1F44]">DKR26072 +Sea</span> — Conteneur FCL 20' à partir de 2,7M FCFA (sur devis)</p>
            </div>
          </div>
        )}

        <div className="mt-8 text-center fade-up">
          <a href={waLink('Bonjour BF2B, je voudrais un devis personnalisé.')}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#0A1F44] hover:bg-[#152A5C] text-white font-bold px-8 py-3 rounded-xl transition-all hover:scale-105 text-sm">
            Demander un devis personnalisé →
          </a>
        </div>
      </div>
    </section>
  );
}

// ── Stats Counter ─────────────────────────────────────────────
function StatsCounter() {
  const stats = [
    { end: 100, suffix: '+', label: 'Clients satisfaits', icon: '😊' },
    { end: 5000, suffix: '+', label: 'Kg expédiés', icon: '📦' },
    { end: 98, suffix: '%', label: 'Livraisons à l\'heure', icon: '⏱' },
    { end: 24, suffix: '/7', label: 'Support WhatsApp', icon: '💬' },
  ];

  function CounterItem({ end, suffix, label, icon }) {
    const [count, setCount] = React.useState(0);
    const ref = React.useRef(null);
    const started = React.useRef(false);

    React.useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const start = performance.now();
          function animate(now) {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));
            if (progress < 1) requestAnimationFrame(animate);
            else setCount(end);
          }
          requestAnimationFrame(animate);
        }
      }, { threshold: 0.3 });
      if (ref.current) observer.observe(ref.current);
      return () => observer.disconnect();
    }, [end]);

    return (
      <div ref={ref} className="text-center p-8">
        <div className="text-4xl mb-3">{icon}</div>
        <div className="font-display font-black text-5xl lg:text-6xl text-[#F4C430] leading-none">
          {count.toLocaleString('fr-FR')}{suffix}
        </div>
        <div className="text-white/50 text-sm mt-2 tracking-wide">{label}</div>
      </div>
    );
  }

  return (
    <section className="bg-[#070F22] py-16 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
          {stats.map((s, i) => <CounterItem key={i} {...s} />)}
        </div>
      </div>
    </section>
  );
}

// ── Testimonials ─────────────────────────────────────────────
const TESTIMONIALS = [
  { name: 'Mamadou D.', city: 'Dakar', product: 'Électronique (smartphones)', stars: 5, text: 'Service impeccable ! J\'ai importé 200 smartphones depuis Foshan. Livraison en 10 jours comme promis, dédouanement zéro stress. BF2B connaît leur métier.' },
  { name: 'Aïssatou N.', city: 'Thiès', product: 'Textile & accessoires', stars: 5, text: 'Le code DKR26072 change tout. Mon fournisseur l\'a collé sur les colis et j\'ai pu suivre mes marchandises en temps réel. Merci Khady pour la réactivité !' },
  { name: 'Ibrahima S.', city: 'Mbour', product: 'Articles ménagers', stars: 5, text: 'J\'utilise BF2B depuis l\'ouverture. Maritime LCL, 3 CBM, livré à Mbour sans problème. Prix compétitifs et équipe disponible 24h/24 sur WhatsApp.' },
];

function Testimonials() {
  const [active, setActive] = React.useState(0);

  return (
    <section className="bg-[#f8f6f0] py-20 lg:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 fade-up">
          <div className="inline-block bg-[#0A1F44]/8 text-[#0A1F44] text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">Témoignages</div>
          <h2 className="font-display font-black text-4xl lg:text-5xl text-[#0A1F44]">Ils nous font confiance</h2>
        </div>

        <div className="relative fade-up">
          <div className="bg-white border border-[#0A1F44]/8 rounded-3xl p-8 lg:p-12 shadow-xl min-h-[240px]">
            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {Array(TESTIMONIALS[active].stars).fill(0).map((_, i) => (
                <svg key={i} className="w-5 h-5 text-[#F4C430]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
              ))}
            </div>

            <blockquote className="font-display text-xl lg:text-2xl text-[#0A1F44] italic leading-relaxed mb-8">
              "{TESTIMONIALS[active].text}"
            </blockquote>

            <div className="flex items-center justify-between">
              <div>
                <div className="font-bold text-[#0A1F44]">{TESTIMONIALS[active].name}</div>
                <div className="text-[#666] text-sm">{TESTIMONIALS[active].product} · {TESTIMONIALS[active].city}</div>
              </div>
              {/* Nav dots */}
              <div className="flex gap-2">
                {TESTIMONIALS.map((_, i) => (
                  <button key={i} onClick={() => setActive(i)}
                    className={`rounded-full transition-all duration-300 ${i === active ? 'w-8 h-3 bg-[#F4C430]' : 'w-3 h-3 bg-[#0A1F44]/20 hover:bg-[#0A1F44]/40'}`}>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { HowItWorks, PriceTables, StatsCounter, Testimonials });
