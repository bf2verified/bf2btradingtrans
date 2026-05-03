
/* ============================================================
   BF2B TRADING — Services Grid + Price Calculator + Shipping Mark
   ============================================================ */

// ── Services Grid ────────────────────────────────────────────
const SERVICES = [
  {
    id: 'aerien',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <circle cx="24" cy="24" r="24" fill="#F4C430" opacity="0.15"/>
        <path d="M8 28l8-8 4 4 10-12 4 4-14 16-4-4z" fill="#F4C430" opacity="0.4"/>
        <path d="M6 26l6-6 20-4 4-8 4 2-6 10-4 1-8 8-4-4 2-2z" fill="#F4C430"/>
        <path d="M10 34l4-4 2 2-4 4-2-2z" fill="#F4C430" opacity="0.5"/>
      </svg>
    ),
    title: 'Fret Aérien Express',
    badge: 'Le plus rapide',
    price: 'À partir de 9 800 F/kg',
    delay: '10–12 jours',
    features: ['Départ chaque mercredi','Code: DKR26072 +Air','Cut-off mardi soir','Min. 2 kg'],
    href: '#services',
    cta: 'Devis aérien',
    msg: 'Bonjour BF2B, je souhaite un devis pour fret AÉRIEN depuis la Chine.',
  },
  {
    id: 'maritime',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <circle cx="24" cy="24" r="24" fill="#F4C430" opacity="0.15"/>
        <rect x="14" y="20" width="20" height="10" rx="1" fill="#F4C430"/>
        <rect x="10" y="30" width="28" height="4" rx="2" fill="#F4C430" opacity="0.6"/>
        <rect x="20" y="12" width="2" height="10" fill="#F4C430" opacity="0.7"/>
        <path d="M22 12 L30 20" stroke="#F4C430" strokeWidth="1.5" opacity="0.5"/>
        <path d="M6 36 Q12 32 18 36 Q24 40 30 36 Q36 32 42 36" stroke="#F4C430" strokeWidth="2" fill="none" opacity="0.5"/>
      </svg>
    ),
    title: 'Maritime LCL',
    badge: 'Meilleur prix',
    price: 'À partir de 250 000 F/CBM',
    delay: '70–80 jours',
    features: ['Départ tous les 2 jours','Code: DKR26072 +Sea','Foshan Logistics','Min. 0,5 CBM'],
    href: '#services',
    cta: 'Devis maritime',
    msg: 'Bonjour BF2B, je souhaite un devis pour fret MARITIME LCL depuis la Chine.',
  },
  {
    id: 'fcl',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <circle cx="24" cy="24" r="24" fill="#F4C430" opacity="0.15"/>
        <rect x="8" y="16" width="32" height="20" rx="2" fill="none" stroke="#F4C430" strokeWidth="2"/>
        <rect x="12" y="20" width="10" height="12" rx="1" fill="#F4C430" opacity="0.5"/>
        <rect x="26" y="20" width="10" height="12" rx="1" fill="#F4C430" opacity="0.5"/>
        <line x1="22" y1="16" x2="22" y2="36" stroke="#F4C430" strokeWidth="1.5"/>
        <circle cx="16" cy="38" r="3" fill="#F4C430" opacity="0.7"/>
        <circle cx="32" cy="38" r="3" fill="#F4C430" opacity="0.7"/>
      </svg>
    ),
    title: 'Conteneur FCL',
    badge: 'Grand volume',
    price: '20\' dès 2,7M FCFA',
    delay: '50–60 jours',
    features: ['20\' et 40\' HC','Devis personnalisé','40\' HC dès 3,8M FCFA','Sur demande'],
    href: '#contact',
    cta: 'Demander FCL',
    msg: 'Bonjour BF2B, je souhaite un devis pour un conteneur FCL.',
  },
  {
    id: 'sourcing',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <circle cx="24" cy="24" r="24" fill="#F4C430" opacity="0.15"/>
        <circle cx="20" cy="20" r="8" stroke="#F4C430" strokeWidth="2" fill="none"/>
        <line x1="26" y1="26" x2="36" y2="36" stroke="#F4C430" strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx="20" cy="20" r="3" fill="#F4C430" opacity="0.6"/>
      </svg>
    ),
    title: 'Sourcing Chine',
    badge: 'Clé en main',
    price: '5–10% commission',
    delay: 'Variable',
    features: ['Yiwu · Foshan · Guangzhou','Vérification fournisseur','Contrôle qualité','Dropshipping'],
    href: '#contact',
    cta: 'Sourcing WhatsApp',
    msg: 'Bonjour BF2B, je souhaite un service de SOURCING en Chine.',
  },
];

function ServicesGrid() {
  return (
    <section id="services" className="bg-[#f8f6f0] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 fade-up">
          <div className="inline-block bg-[#0A1F44]/8 text-[#0A1F44] text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">Nos Services</div>
          <h2 className="font-display font-black text-4xl lg:text-5xl text-[#0A1F44] leading-tight">
            Expédition <span className="text-[#D4A017]">Chine → Sénégal</span><br/>dans les meilleures conditions
          </h2>
          <p className="text-[#666] mt-4 text-lg max-w-xl mx-auto">Aérien, maritime, conteneur ou sourcing — nous gérons tout de bout en bout.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((s, i) => (
            <div key={s.id} className={`fade-up delay-${i + 1} group relative bg-white border border-[#0A1F44]/8 rounded-2xl p-6 hover:border-[#F4C430]/50 hover:shadow-2xl hover:shadow-[#F4C430]/10 transition-all duration-300 hover:-translate-y-1 flex flex-col`}>
              {/* Badge */}
              <div className="absolute -top-3 right-4 bg-[#0A1F44] text-[#F4C430] text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full">
                {s.badge}
              </div>

              {/* Icon */}
              <div className="mb-5">{s.icon}</div>

              {/* Title */}
              <h3 className="font-display font-bold text-xl text-[#0A1F44] mb-1">{s.title}</h3>

              {/* Price */}
              <div className="text-[#D4A017] font-black text-base mb-1">{s.price}</div>
              <div className="flex items-center gap-1.5 text-[#666] text-sm mb-4">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                {s.delay}
              </div>

              {/* Features */}
              <ul className="space-y-2 mb-6 flex-1">
                {s.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-[#444]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F4C430] shrink-0"></span>
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a href={waLink(s.msg)} target="_blank" rel="noopener noreferrer"
                className="block text-center bg-[#0A1F44] hover:bg-[#F4C430] text-white hover:text-[#0A1F44] font-bold text-sm py-3 rounded-xl transition-all duration-300 group-hover:bg-[#F4C430] group-hover:text-[#0A1F44]">
                {s.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Price Calculator ─────────────────────────────────────────
const AIR_RATES = [
  { min: 2,   max: 10,       rate: 10800 },
  { min: 10,  max: 50,       rate: 10200 },
  { min: 50,  max: 200,      rate: 10000 },
  { min: 200, max: Infinity, rate: 9800  },
];
const SEA_GENERAL = [
  { min: 0.5, max: 1,        rate: 265000 },
  { min: 1,   max: 20,       rate: 255000 },
  { min: 20,  max: Infinity, rate: 250000 },
];
const SEA_SENSITIVE = [
  { min: 0.5, max: 1,        rate: 275000 },
  { min: 1,   max: 20,       rate: 265000 },
  { min: 20,  max: Infinity, rate: 260000 },
];

function getRate(table, qty) {
  const row = table.find(r => qty >= r.min && qty < r.max) || table[table.length - 1];
  return row ? row.rate : 0;
}

function calcPrice(service, type, qty) {
  if (!qty || qty <= 0) return null;
  if (service === 'air') {
    if (qty < 2) return { error: 'Minimum 2 kg pour l\'aérien.' };
    const rate = getRate(AIR_RATES, qty);
    return { total: rate * qty, rate, unit: 'kg', delay: type === 'sensible' ? '12 jours' : '10 jours' };
  } else {
    if (qty < 0.5) return { error: 'Minimum 0,5 CBM pour le maritime.' };
    const table = type === 'sensible' ? SEA_SENSITIVE : SEA_GENERAL;
    const rate = getRate(table, qty);
    return { total: rate * qty, rate, unit: 'CBM', delay: '70–80 jours' };
  }
}

function fmt(n) { return new Intl.NumberFormat('fr-FR').format(Math.round(n)); }

function PriceCalculator() {
  const [service, setService] = React.useState('air');
  const [type, setType] = React.useState('general');
  const [qty, setQty] = React.useState('');
  const result = qty ? calcPrice(service, type, parseFloat(qty)) : null;

  const waMsg = result && !result.error
    ? `Bonjour BF2B ! Je souhaite un devis pour :\n- Service : ${service === 'air' ? 'Aérien' : 'Maritime LCL'}\n- Type : ${type === 'general' ? 'Général' : 'Sensible/Lourd'}\n- Quantité : ${qty} ${service === 'air' ? 'kg' : 'CBM'}\n- Estimation : ${fmt(result.total)} FCFA\n\nMerci !`
    : 'Bonjour BF2B, je voudrais un devis personnalisé.';

  return (
    <section id="calculateur" className="bg-[#0A1F44] py-20 lg:py-28 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 dots-pattern opacity-20"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F4C430]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 fade-up">
          <div className="inline-block bg-[#F4C430]/10 text-[#F4C430] text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">Calculateur</div>
          <h2 className="font-display font-black text-4xl lg:text-5xl text-white leading-tight">
            Calculez votre prix<br/><span className="text-[#F4C430]">en 30 secondes</span>
          </h2>
          <p className="text-white/50 mt-3 text-base">Estimation instantanée, devis officiel sur WhatsApp.</p>
        </div>

        <div className="bg-[#152A5C] border border-white/10 rounded-3xl p-6 lg:p-10 fade-up delay-1">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">

            {/* Service */}
            <div>
              <label className="block text-white/60 text-xs font-bold tracking-widest uppercase mb-3">Service</label>
              <div className="grid grid-cols-2 gap-2">
                {[['air', '✈ Aérien'], ['maritime', '🚢 Maritime']].map(([val, lbl]) => (
                  <button key={val} onClick={() => setService(val)}
                    className={`py-3 px-4 rounded-xl font-bold text-sm transition-all duration-200 ${service === val ? 'bg-[#F4C430] text-[#0A1F44]' : 'bg-white/5 text-white/60 hover:bg-white/10'}`}>
                    {lbl}
                  </button>
                ))}
              </div>
            </div>

            {/* Type */}
            <div>
              <label className="block text-white/60 text-xs font-bold tracking-widest uppercase mb-3">Type de marchandise</label>
              <div className="grid grid-cols-2 gap-2">
                {[['general', '📦 Général'], ['sensible', '⚡ Sensible']].map(([val, lbl]) => (
                  <button key={val} onClick={() => setType(val)}
                    className={`py-3 px-4 rounded-xl font-bold text-sm transition-all duration-200 ${type === val ? 'bg-[#F4C430] text-[#0A1F44]' : 'bg-white/5 text-white/60 hover:bg-white/10'}`}>
                    {lbl}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <label className="block text-white/60 text-xs font-bold tracking-widest uppercase mb-3">
                {service === 'air' ? 'Poids (kg)' : 'Volume (CBM)'}
              </label>
              <div className="relative">
                <input type="number" value={qty} onChange={e => setQty(e.target.value)}
                  placeholder={service === 'air' ? 'ex: 30' : 'ex: 2.5'}
                  min={service === 'air' ? 2 : 0.5} step={service === 'air' ? 1 : 0.1}
                  className="w-full bg-white/5 border border-white/10 focus:border-[#F4C430]/50 text-white rounded-xl px-4 py-3 text-base font-bold focus:outline-none focus:ring-2 focus:ring-[#F4C430]/20 transition-all placeholder-white/20"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 text-sm font-medium">
                  {service === 'air' ? 'kg' : 'CBM'}
                </span>
              </div>
              <div className="text-white/30 text-xs mt-1.5">
                {service === 'air' ? 'Minimum 2 kg' : 'Minimum 0,5 CBM'}
              </div>
            </div>
          </div>

          {/* Result */}
          {result && (
            <div className={`rounded-2xl p-6 mb-6 transition-all duration-300 ${result.error ? 'bg-red-500/20 border border-red-400/30' : 'bg-[#F4C430]/10 border border-[#F4C430]/30'}`}>
              {result.error ? (
                <p className="text-red-300 font-medium">{result.error}</p>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-white/50 text-xs tracking-widest uppercase mb-1">Estimation totale</div>
                    <div className="font-display font-black text-3xl text-[#F4C430]">{fmt(result.total)}</div>
                    <div className="text-white/50 text-sm font-medium">FCFA</div>
                  </div>
                  <div className="text-center">
                    <div className="text-white/50 text-xs tracking-widest uppercase mb-1">Tarif unitaire</div>
                    <div className="font-display font-black text-3xl text-white">{fmt(result.rate)}</div>
                    <div className="text-white/50 text-sm font-medium">FCFA/{result.unit}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-white/50 text-xs tracking-widest uppercase mb-1">Délai estimé</div>
                    <div className="font-display font-black text-3xl text-white">{result.delay}</div>
                    <div className="text-white/50 text-sm font-medium">à compter du départ</div>
                  </div>
                </div>
              )}
            </div>
          )}

          {!result && (
            <div className="rounded-2xl p-6 mb-6 bg-white/3 border border-white/5 text-center text-white/20 text-sm">
              Entrez votre poids ou volume pour voir l'estimation
            </div>
          )}

          {/* WhatsApp CTA */}
          <a href={waLink(waMsg)} target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full bg-[#25D366] hover:bg-[#1eb855] text-white font-black text-base py-4 rounded-2xl transition-all duration-300 hover:scale-[1.02] shadow-xl shadow-[#25D366]/30">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.523 5.851L.057 23.885l6.196-1.454A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.87 9.87 0 01-5.017-1.372l-.36-.214-3.677.864.927-3.584-.235-.369A9.86 9.86 0 012.118 12C2.118 6.54 6.54 2.118 12 2.118c5.46 0 9.882 4.422 9.882 9.882 0 5.46-4.422 9.882-9.882 9.882z"/></svg>
            {result && !result.error ? 'Demander ce devis sur WhatsApp' : 'Contacter BF2B sur WhatsApp'}
          </a>

          <p className="text-center text-white/20 text-xs mt-3">* Estimation indicative. Les droits de douane Sénégal sont en sus.</p>
        </div>
      </div>
    </section>
  );
}

// ── Copy Code Button ──────────────────────────────────────────
function CopyCodeButton() {
  const [copied, setCopied] = React.useState(false);
  function copy() {
    navigator.clipboard.writeText('DKR26072').then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  }
  return (
    <button onClick={copy}
      className={`mt-4 w-full flex items-center justify-center gap-2 font-bold text-xs py-2.5 rounded-xl transition-all duration-300 ${copied ? 'bg-[#16A34A] text-white' : 'bg-[#F4C430]/10 hover:bg-[#F4C430]/20 text-[#F4C430] border border-[#F4C430]/30'}`}>
      {copied
        ? <><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>Copié !</>
        : <><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>📋 Copier DKR26072</>
      }
    </button>
  );
}

// ── Shipping Mark Alert ───────────────────────────────────────
function ShippingMarkAlert() {
  return (
    <section className="bg-[#f8f6f0] py-16 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fade-up">
          {/* Alert box */}
          <div className="relative bg-[#0A1F44] border-4 border-[#DC2626] rounded-3xl overflow-hidden shadow-2xl">
            {/* Top red stripe */}
            <div className="bg-[#DC2626] px-6 py-3 flex items-center gap-3">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-2.194-.833-2.964 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" /></svg>
              <span className="text-white font-black text-sm tracking-[0.2em] uppercase">Information Obligatoire — À Lire Absolument</span>
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-2.194-.833-2.964 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" /></svg>
            </div>

            <div className="px-6 py-8 lg:px-12 lg:py-10">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                {/* Left: explanation */}
                <div className="flex-1">
                  <h3 className="font-display font-black text-3xl lg:text-4xl text-white mb-3 leading-tight">
                    Votre Shipping Mark :<br/>
                    <span className="text-[#DC2626]">obligatoire</span> sur chaque colis
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-6">
                    Sans ce code, l'entrepôt en Chine ne pourra <strong className="text-white">pas identifier votre colis</strong>. 
                    Vos marchandises risquent d'être perdues ou retournées. 
                    Donnez-le <strong className="text-white">obligatoirement</strong> à votre fournisseur.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {/* Maritime code */}
                    <div className="bg-black/40 border border-[#F4C430]/30 rounded-2xl p-4 text-center">
                      <div className="text-white/40 text-[10px] tracking-widest uppercase mb-2">Maritime</div>
                      <div className="font-mono font-black text-[#F4C430] text-sm sm:text-base tracking-wider">DKR26072</div>
                      <div className="font-mono text-[#F4C430]/60 text-xs mt-1">+Sea</div>
                    </div>
                    {/* Air code */}
                    <div className="bg-black/40 border border-[#F4C430]/30 rounded-2xl p-4 text-center">
                      <div className="text-white/40 text-[10px] tracking-widest uppercase mb-2">Aérien</div>
                      <div className="font-mono font-black text-[#F4C430] text-sm sm:text-base tracking-wider">DKR26072</div>
                      <div className="font-mono text-[#F4C430]/60 text-xs mt-1">+Air</div>
                    </div>
                  </div>
                </div>

                {/* Right: BIG code */}
                <div className="shrink-0 text-center">
                  <div className="bg-black/50 border-2 border-[#F4C430]/50 rounded-3xl px-8 py-8 inline-block">
                    <div className="text-white/30 text-[10px] tracking-widest uppercase mb-3">Votre code colis</div>
                    <div className="font-mono font-black text-[#F4C430] text-4xl lg:text-5xl tracking-[0.08em] leading-none glow-gold">
                      DKR26072
                    </div>
                    <div className="flex gap-3 mt-4 justify-center">
                      <div className="font-mono text-[#F4C430]/70 bg-[#F4C430]/10 border border-[#F4C430]/20 rounded-lg px-3 py-1.5 text-xs">+Sea</div>
                      <div className="font-mono text-[#F4C430]/70 bg-[#F4C430]/10 border border-[#F4C430]/20 rounded-lg px-3 py-1.5 text-xs">+Air</div>
                    </div>
                    <CopyCodeButton /></div>
                  <p className="text-white/30 text-[10px] mt-3 max-w-[160px] mx-auto">Copiez et envoyez à votre fournisseur</p>
                </div>
              </div>

              {/* Warning */}
              <div className="mt-8 bg-[#DC2626]/10 border border-[#DC2626]/30 rounded-xl p-4 flex items-start gap-3">
                <svg className="w-5 h-5 text-[#DC2626] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
                <p className="text-[#DC2626]/80 text-sm">
                  <strong className="text-[#DC2626]">Attention :</strong> Un colis sans code DKR26072 sera <strong>refusé ou perdu</strong> à notre entrepôt en Chine. Ce code est votre identifiant unique chez BF2B TRADING. Il ne faut jamais l'oublier.
                </p>
              </div>

              {/* Download CTA */}
              <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
                <a href={waLink('Bonjour BF2B, pouvez-vous m\'envoyer l\'affiche avec le code DKR26072 à transmettre à mon fournisseur ?')}
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#F4C430] hover:bg-[#D4A017] text-[#0A1F44] font-black px-6 py-3 rounded-xl transition-all hover:scale-105">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                  Télécharger l'affiche (PDF)
                </a>
                <a href={waLink('Mon code colis BF2B est DKR26072. Je l\'ai transmis à mon fournisseur.')}
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 text-white/70 hover:text-white font-bold px-6 py-3 rounded-xl transition-all text-sm">
                  J'ai transmis le code, et maintenant ?
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { ServicesGrid, PriceCalculator, ShippingMarkAlert });
