
/* ============================================================
   BF2B TRADING — Header + Footer
   ============================================================ */

// ── Exchange Rate Bar ────────────────────────────────────────
function ExchangeRateBar() {
  const rates = [
    { from: 'USD', to: 'FCFA', rate: '598' },
    { from: 'CNY', to: 'FCFA', rate: '82.4' },
    { from: 'EUR', to: 'FCFA', rate: '655.96' },
  ];
  return (
    <div className="bg-[#070F22] border-b border-white/5 py-2 px-4 hidden sm:block">
      <div className="max-w-7xl mx-auto flex items-center justify-between text-xs">
        <div className="flex items-center gap-6">
          {rates.map(r => (
            <span key={r.from} className="flex items-center gap-1.5 text-white/40">
              <span className="font-mono font-bold text-[#F4C430]/70">1 {r.from}</span>
              <span>=</span>
              <span className="font-mono font-bold text-white/60">{r.rate} FCFA</span>
            </span>
          ))}
          <span className="text-white/20 italic">Taux indicatifs · Mise à jour quotidienne</span>
        </div>
        <div className="flex items-center gap-3 text-white/30">
          <span>NINEA : <span className="font-mono">011251965</span></span>
          <span>·</span>
          <span>Mbour, Sénégal</span>
        </div>
      </div>
    </div>
  );
}

// ── Cookie Banner ─────────────────────────────────────────────
function CookieBanner() {
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    if (!localStorage.getItem('bf2b_cookies_accepted')) setVisible(true);
  }, []);
  function accept() { localStorage.setItem('bf2b_cookies_accepted', '1'); setVisible(false); }
  function decline() { localStorage.setItem('bf2b_cookies_accepted', '0'); setVisible(false); }
  if (!visible) return null;
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#070F22] border-t border-white/10 px-4 py-4 shadow-2xl">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
        <div className="flex items-start gap-3">
          <span className="text-xl shrink-0">🍪</span>
          <p className="text-white/60 text-sm leading-relaxed max-w-2xl">
            Nous utilisons des cookies pour améliorer votre expérience et analyser le trafic (Google Analytics).
            Consultez notre <a href="#" className="text-[#F4C430] hover:underline">politique de confidentialité</a>.
          </p>
        </div>
        <div className="flex gap-3 shrink-0">
          <button onClick={decline} className="text-white/40 hover:text-white/60 text-sm px-4 py-2 rounded-xl border border-white/10 hover:border-white/20 transition-all">Refuser</button>
          <button onClick={accept} className="bg-[#F4C430] hover:bg-[#D4A017] text-[#0A1F44] font-bold text-sm px-6 py-2 rounded-xl transition-all">Accepter</button>
        </div>
      </div>
    </div>
  );
}

const NAV_LINKS = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'Services', href: '#services' },
  { label: 'Tarifs', href: '#tarifs' },
  { label: 'Comment ça marche', href: '#comment-ca-marche' },
  { label: 'Contact', href: '#contact' },
];

const WHATSAPP_NUM = '221752026577';
const WA_BASE = `https://wa.me/${WHATSAPP_NUM}`;
function waLink(msg) { return `${WA_BASE}?text=${encodeURIComponent(msg)}`; }

// ── Logo image ───────────────────────────────────────────────
function BF2BLogo({ size = 48 }) {
  return (
    <img
      src="logo.png"
      alt="BF2B TRADING TRANS — Logo"
      width={size}
      height={size}
      style={{ width: size, height: size, objectFit: 'contain', borderRadius: '12%' }}
    />
  );
}

// ── Header ───────────────────────────────────────────────────
function Header() {
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const headerClass = scrolled
    ? 'bg-[#0A1F44]/97 backdrop-blur-md shadow-lg shadow-black/30'
    : 'bg-transparent';

  function scrollTo(href) {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${headerClass}`}>
      <ExchangeRateBar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#accueil" onClick={e => { e.preventDefault(); scrollTo('#accueil'); }} className="flex items-center gap-3 group">
            <div className="transition-transform duration-300 group-hover:scale-105">
              <BF2BLogo size={44} />
            </div>
            <div className="hidden sm:block">
              <div className="font-display font-black text-white text-lg leading-none tracking-wide">
                BF<span className="text-[#F4C430]">2</span>B
              </div>
              <div className="text-[#F4C430]/80 text-[10px] tracking-[0.25em] font-medium uppercase">Trading Trans</div>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map(l => (
              <a key={l.href} href={l.href} onClick={e => { e.preventDefault(); scrollTo(l.href); }}
                className="text-white/80 hover:text-[#F4C430] text-sm font-medium tracking-wide transition-colors duration-200 relative group">
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#F4C430] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:+221752026577" className="flex items-center gap-1.5 text-white/50 hover:text-white text-sm transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              +221 75 202 65 77
            </a>
            <a href={waLink('Bonjour BF2B, je voudrais un devis.')}
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#F4C430] hover:bg-[#D4A017] text-[#0A1F44] font-bold text-sm px-4 py-2 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg shadow-[#F4C430]/30">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.523 5.851L.057 23.885l6.196-1.454A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.87 9.87 0 01-5.017-1.372l-.36-.214-3.677.864.927-3.584-.235-.369A9.86 9.86 0 012.118 12C2.118 6.54 6.54 2.118 12 2.118c5.46 0 9.882 4.422 9.882 9.882 0 5.46-4.422 9.882-9.882 9.882z"/></svg>
              Devis WhatsApp
            </a>
          </div>

          {/* Mobile Burger */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden p-2 text-white" aria-label="Menu">
            <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-white mt-1.5 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-white mt-1.5 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-[#0A1F44] border-t border-white/10 px-4 py-4 space-y-1">
          {NAV_LINKS.map(l => (
            <a key={l.href} href={l.href} onClick={e => { e.preventDefault(); scrollTo(l.href); }}
              className="block py-3 text-white/80 hover:text-[#F4C430] font-medium border-b border-white/5 transition-colors">
              {l.label}
            </a>
          ))}
          <a href={waLink('Bonjour BF2B, je voudrais un devis.')} target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 mt-4 bg-[#F4C430] text-[#0A1F44] font-bold py-3 rounded-xl">
            Devis WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}

// ── Footer ───────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="bg-[#070F22] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <BF2BLogo size={48} />
              <div>
                <div className="font-display font-black text-xl text-white">BF2B TRADING</div>
                <div className="text-[#F4C430] text-xs tracking-widest">TRANS • SUARL</div>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-4">
              Votre transitaire de confiance entre la Chine et le Sénégal. Fret aérien, maritime LCL, conteneurs FCL et sourcing depuis Yiwu, Foshan, Guangzhou.
            </p>
            <div className="text-white/30 text-xs space-y-1">
              <div>NINEA : <span className="font-mono text-white/50">011251965</span></div>
              <div>RCCM : <span className="font-mono text-white/50">SN.MBR.2024.A.1532</span></div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-[#F4C430] mb-5 text-sm tracking-widest uppercase">Services</h4>
            <ul className="space-y-3 text-sm text-white/60">
              {['Fret Aérien Express','Maritime LCL','Conteneur FCL','Sourcing Chine','Dropshipping'].map(s => (
                <li key={s}><a href="#services" className="hover:text-[#F4C430] transition-colors">{s}</a></li>
              ))}
            </ul>
          </div>

          {/* Informations */}
          <div>
            <h4 className="font-display font-bold text-[#F4C430] mb-5 text-sm tracking-widest uppercase">Informations</h4>
            <ul className="space-y-3 text-sm text-white/60">
              {['Tarifs','Code Colis DKR26072','Comment ça marche','FAQ','À propos'].map(s => (
                <li key={s}><a href="#" className="hover:text-[#F4C430] transition-colors">{s}</a></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-[#F4C430] mb-5 text-sm tracking-widest uppercase">Contact</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 text-[#F4C430] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span>Mbour, Sénégal</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 text-[#F4C430] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <a href="tel:+221752026577" className="hover:text-[#F4C430] transition-colors">+221 75 202 65 77</a>
              </li>
              <li>
                <a href={waLink('Bonjour BF2B Trading !')} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/40 text-[#25D366] px-4 py-2.5 rounded-xl transition-all text-sm font-medium">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.523 5.851L.057 23.885l6.196-1.454A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.87 9.87 0 01-5.017-1.372l-.36-.214-3.677.864.927-3.584-.235-.369A9.86 9.86 0 012.118 12C2.118 6.54 6.54 2.118 12 2.118c5.46 0 9.882 4.422 9.882 9.882 0 5.46-4.422 9.882-9.882 9.882z"/></svg>
                  WhatsApp direct
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/30">
          <div>© 2026 BF2B TRADING SUARL — Tous droits réservés</div>
          <div className="flex gap-4">
            <button onClick={() => window.__openLegal && window.__openLegal('mentions')} className="hover:text-white/60 transition-colors">Mentions légales</button>
            <button onClick={() => window.__openLegal && window.__openLegal('cgv')} className="hover:text-white/60 transition-colors">CGV</button>
            <button onClick={() => window.__openLegal && window.__openLegal('confidentialite')} className="hover:text-white/60 transition-colors">Confidentialité</button>
          </div>

        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Header, Footer, BF2BLogo, waLink, WHATSAPP_NUM, CookieBanner });
