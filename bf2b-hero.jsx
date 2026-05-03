
/* ============================================================
   BF2B TRADING — Hero + TrustBar + MarqueeBar
   ============================================================ */

// ── Marquee Bar ──────────────────────────────────────────────
function MarqueeBar() {
  const items = [
    '⚡ Réponse sous 2h','🛫 Départ aérien chaque mercredi','🚢 Maritime tous les 2 jours',
    '📦 Code colis DKR26072','🔒 Dédouanement inclus','✅ 100+ clients satisfaits',
    '🌍 Yiwu · Foshan · Guangzhou · Shenzhen','💰 Devis gratuit sans engagement',
  ];
  const repeated = [...items, ...items];
  return (
    <div className="bg-[#F4C430] py-3 overflow-hidden relative">
      <div className="marquee-track flex gap-12 whitespace-nowrap">
        {repeated.map((item, i) => (
          <span key={i} className="text-[#0A1F44] font-bold text-sm shrink-0 tracking-wide">{item}</span>
        ))}
      </div>
    </div>
  );
}

// ── Hero Route SVG ───────────────────────────────────────────
function RouteAnimation() {
  return (
    <svg viewBox="0 0 900 320" fill="none" xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 w-full h-full opacity-20 pointer-events-none">
      {/* Dotted route China → Senegal */}
      <path d="M 680 120 Q 500 60 220 200" stroke="#F4C430" strokeWidth="2"
        strokeDasharray="8 6" className="route-path" fill="none" />
      {/* China dot + flag */}
      <circle cx="680" cy="120" r="6" fill="#F4C430" opacity="0.8"/>
      <text x="695" y="120" fill="#F4C430" fontSize="14" fontFamily="sans-serif" opacity="0.9">🇨🇳</text>
      <text x="714" y="120" fill="#F4C430" fontSize="11" fontFamily="sans-serif" opacity="0.9">Chine</text>
      {/* Senegal dot + flag */}
      <circle cx="220" cy="200" r="6" fill="#F4C430" opacity="0.8"/>
      <text x="232" y="200" fill="#F4C430" fontSize="14" fontFamily="sans-serif" opacity="0.9">🇸🇳</text>
      <text x="251" y="200" fill="#F4C430" fontSize="11" fontFamily="sans-serif" opacity="0.9">Sénégal</text>
      {/* Plane along route */}
      <g className="plane-anim">
        <circle cx="450" cy="140" r="10" fill="#F4C430" opacity="0.6"/>
        <text x="443" y="145" fontSize="14">✈</text>
      </g>
      {/* Globe outline circles */}
      <ellipse cx="450" cy="160" rx="340" ry="140" stroke="#1E3A6F" strokeWidth="1" opacity="0.5"/>
      <ellipse cx="450" cy="160" rx="200" ry="140" stroke="#1E3A6F" strokeWidth="1" opacity="0.3"/>
      <line x1="110" y1="160" x2="790" y2="160" stroke="#1E3A6F" strokeWidth="1" opacity="0.4"/>
    </svg>
  );
}

// ── Stats Bar ────────────────────────────────────────────────
function HeroStats() {
  const stats = [
    { value: '100+', label: 'Clients servis' },
    { value: '5 000+', label: 'Kg expédiés' },
    { value: '98%', label: 'Livraisons à l\'heure' },
    { value: '24/7', label: 'Support WhatsApp' },
  ];
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden mt-14">
      {stats.map((s, i) => (
        <div key={i} className="bg-[#0A1F44]/80 backdrop-blur-sm px-6 py-5 text-center">
          <div className="font-display font-black text-2xl lg:text-3xl text-[#F4C430] leading-none">{s.value}</div>
          <div className="text-white/50 text-xs mt-1 tracking-wide">{s.label}</div>
        </div>
      ))}
    </div>
  );
}

// ── Hero Section ─────────────────────────────────────────────
function HeroSection() {
  function scrollTo(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <section id="accueil" className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#0A1F44]">
      {/* Background gradient + pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A1F44] via-[#152A5C] to-[#0A1F44]"></div>
      <div className="absolute inset-0 dots-pattern opacity-30"></div>

      {/* Route animation */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full max-w-4xl h-80 relative">
          <RouteAnimation />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
        <div className="max-w-3xl mx-auto text-center">

          {/* Logo emblem float */}
          <div className="flex justify-center mb-8 float-anim">
            <div className="relative">
              <div className="absolute inset-0 bg-[#F4C430]/20 rounded-full blur-2xl scale-150"></div>
              <BF2BLogo size={96} />
            </div>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#F4C430]/10 border border-[#F4C430]/30 rounded-full px-4 py-1.5 text-[#F4C430] text-xs font-medium tracking-widest uppercase mb-6 fade-up">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F4C430] animate-pulse"></span>
            Transitaire Chine → Sénégal depuis 2015
          </div>

          {/* Main title */}
          <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl text-white leading-none tracking-tight mb-4 fade-up delay-1">
            BF<span className="text-[#F4C430]">2</span>B
            <span className="block text-4xl sm:text-5xl lg:text-6xl mt-1">TRADING</span>
          </h1>

          <div className="text-[#F4C430]/80 text-sm sm:text-base tracking-[0.3em] font-medium uppercase mb-6 fade-up delay-2">
            TRANS · CHINA → SENEGAL
          </div>

          <p className="text-white/60 text-base sm:text-lg italic leading-relaxed max-w-xl mx-auto mb-8 fade-up delay-3">
            Votre marchandise en Chine, livrée à Dakar — aérien en 10 jours, maritime en 70 jours.
            Dédouanement inclus. Devis gratuit en 2h.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 fade-up delay-4">
            <a href={waLink('Bonjour BF2B, je souhaite un devis pour expédier depuis la Chine vers le Sénégal.')}
              target="_blank" rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 bg-[#F4C430] hover:bg-[#D4A017] text-[#0A1F44] font-black text-base px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105 shadow-2xl shadow-[#F4C430]/30 hover:shadow-[#F4C430]/50">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.523 5.851L.057 23.885l6.196-1.454A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.87 9.87 0 01-5.017-1.372l-.36-.214-3.677.864.927-3.584-.235-.369A9.86 9.86 0 012.118 12C2.118 6.54 6.54 2.118 12 2.118c5.46 0 9.882 4.422 9.882 9.882 0 5.46-4.422 9.882-9.882 9.882z"/></svg>
              Demander un devis WhatsApp
            </a>
            <button onClick={() => scrollTo('calculateur')}
              className="flex items-center justify-center gap-2 border-2 border-white/30 hover:border-[#F4C430] text-white hover:text-[#F4C430] font-bold text-base px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M12 11h.01M15 11h.01M4 19h16a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              Calculer mon prix
            </button>
          </div>

          <HeroStats />
        </div>
      </div>

      {/* Scroll hint */}
      <div className="relative z-10 flex justify-center pb-8">
        <button onClick={() => scrollTo('confiance')} className="text-white/30 hover:text-white/60 transition-colors flex flex-col items-center gap-2 text-xs tracking-widest">
          <span>DÉFILER</span>
          <svg className="w-5 h-5 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
        </button>
      </div>
    </section>
  );
}

// ── Trust Bar ─────────────────────────────────────────────────
function TrustBar() {
  const partners = [
    { name: 'Fohang Logistics', sub: 'Maritime LCL', logo: 'fohang-logo.png' },
    { name: 'Wave', sub: 'Paiement mobile', logo: 'wave-logo.png' },
    { name: 'Orange Money', sub: 'Paiement mobile', logo: 'orange-money.png' },
    { name: 'DHL Express', sub: 'Logistique', logo: 'dhl-logo.png' },
    { name: 'Douanes SN', sub: 'Sénégal Customs', logo: 'douanes-logo.png' },
    { name: 'Alibaba', sub: 'Sourcing Chine', logo: 'alibaba-logo.png' },
  ];
  return (
    <section id="confiance" className="bg-[#070F22] py-10 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-white/30 text-xs tracking-widest uppercase mb-8">Partenaires de confiance</p>
        <div className="grid grid-cols-3 lg:grid-cols-6 gap-4">
          {partners.map((p, i) => (
            <div key={i} className="flex flex-col items-center justify-center bg-white/5 hover:bg-white/8 border border-white/10 rounded-xl px-3 py-4 text-center transition-all duration-200 hover:border-[#F4C430]/30">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-2 overflow-hidden bg-white">
                {p.logo
                  ? <img src={p.logo} alt={p.name} className="w-8 h-8 object-contain"
                      onError={e => { e.target.style.display='none'; e.target.parentNode.innerHTML=`<svg class="w-5 h-5 text-[#F4C430]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>`; }} />
                  : <svg className="w-5 h-5 text-[#F4C430]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                }
              </div>
              <div className="text-white/80 font-bold text-xs">{p.name}</div>
              <div className="text-white/30 text-[10px] mt-0.5">{p.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { HeroSection, TrustBar, MarqueeBar });
