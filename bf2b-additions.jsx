/* ============================================================
   BF2B TRADING — Additions: Entrepôt + Countdown + Paiement
                             + Dropshipping + Comparatif + FAQ+
                             + Mentions Légales + CGV
   ============================================================ */

// ── Countdown to next Wednesday departure ────────────────────
function NextDepartureCountdown() {
  function getNext(dayOfWeek) { // 0=Sun,3=Wed
    const now = new Date();
    const day = now.getDay();
    let diff = dayOfWeek - day;
    if (diff <= 0) diff += 7;
    const next = new Date(now);
    next.setDate(now.getDate() + diff);
    next.setHours(23, 59, 0, 0); // cut-off mardi soir = mercredi 00:00
    return next;
  }

  function calcRemaining(target) {
    const diff = target - new Date();
    if (diff <= 0) return { d:0, h:0, m:0, s:0 };
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    return { d, h, m, s };
  }

  const [time, setTime] = React.useState(calcRemaining(getNext(3)));
  const [seaTime, setSeaTime] = React.useState(calcRemaining(new Date(Date.now() + 172800000)));

  React.useEffect(() => {
    const target = getNext(3); // Wednesday
    const seaTarget = new Date(Date.now() + 172800000); // next 2-day sea
    const id = setInterval(() => {
      setTime(calcRemaining(target));
      setSeaTime(calcRemaining(seaTarget));
    }, 1000);
    return () => clearInterval(id);
  }, []);

  function pad(n) { return String(n).padStart(2, '0'); }

  return (
    <section className="bg-[#070F22] py-12 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Air */}
          <div className="bg-[#0A1F44] border border-[#F4C430]/20 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-6">
            <div className="text-5xl">✈️</div>
            <div className="flex-1 text-center sm:text-left">
              <div className="text-[#F4C430] text-xs font-bold tracking-widest uppercase mb-1">Prochain départ Aérien</div>
              <div className="text-white/50 text-xs mb-3">Cut-off : mardi soir · Départ : mercredi</div>
              <div className="flex gap-3 justify-center sm:justify-start">
                {[['J', time.d], ['H', time.h], ['M', time.m], ['S', time.s]].map(([label, val]) => (
                  <div key={label} className="text-center">
                    <div className="bg-[#F4C430] text-[#0A1F44] font-mono font-black text-2xl w-14 h-14 rounded-xl flex items-center justify-center">{pad(val)}</div>
                    <div className="text-white/30 text-[10px] mt-1 tracking-widest">{label}</div>
                  </div>
                ))}
              </div>
            </div>
            <a href={waLink('Bonjour BF2B, je veux réserver le prochain départ aérien !')} target="_blank" rel="noopener noreferrer"
              className="bg-[#F4C430] hover:bg-[#D4A017] text-[#0A1F44] font-black text-xs px-5 py-2.5 rounded-xl transition-all hover:scale-105 whitespace-nowrap shrink-0">
              Réserver →
            </a>
          </div>
          {/* Sea */}
          <div className="bg-[#0A1F44] border border-white/10 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-6">
            <div className="text-5xl">🚢</div>
            <div className="flex-1 text-center sm:text-left">
              <div className="text-white/60 text-xs font-bold tracking-widest uppercase mb-1">Prochain départ Maritime</div>
              <div className="text-white/30 text-xs mb-3">Départs tous les 2 jours depuis Foshan</div>
              <div className="flex gap-3 justify-center sm:justify-start">
                {[['J', seaTime.d], ['H', seaTime.h], ['M', seaTime.m], ['S', seaTime.s]].map(([label, val]) => (
                  <div key={label} className="text-center">
                    <div className="bg-white/10 text-white font-mono font-black text-2xl w-14 h-14 rounded-xl flex items-center justify-center">{pad(val)}</div>
                    <div className="text-white/30 text-[10px] mt-1 tracking-widest">{label}</div>
                  </div>
                ))}
              </div>
            </div>
            <a href={waLink('Bonjour BF2B, je veux réserver le prochain départ maritime !')} target="_blank" rel="noopener noreferrer"
              className="border border-white/20 hover:border-[#F4C430]/50 text-white/60 hover:text-[#F4C430] font-black text-xs px-5 py-2.5 rounded-xl transition-all whitespace-nowrap shrink-0">
              Réserver →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Entrepôt Chine ────────────────────────────────────────────
function EntrepotChine() {
  const [copied, setCopied] = React.useState(null);

  function copy(text, key) {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(key);
      setTimeout(() => setCopied(null), 2000);
    });
  }

  const figaroAddress = '收件人 (Destinataire) : 费加罗SN\n电话 (Tél.) : 13650752599 / 19128924682\n地址 : 广东省佛山市南海区里水镇海南州工业区44号费加罗仓储\n(Figaro Warehouse, No.44 Hainan Industrial Zone, Lishui Town, Nanhai District, Foshan, Guangdong, China)';

  const addresses = [
    {
      key: 'figaro-sea',
      partner: 'Guangzhou Figaro Supply Chain Co., Ltd. 广州市费加罗物流供应链有限公司',
      service: '🚢 Maritime LCL',
      code: 'DKR26072 +Sea',
      address: figaroAddress,
      contact: 'Contact via BF2B TRADING',
      note: 'Pour vos expéditions maritimes. Départ tous les 2 jours.',
    },
    {
      key: 'figaro-air',
      partner: 'Guangzhou Figaro Supply Chain Co., Ltd. 广州市费加罗物流供应链有限公司',
      service: '✈️ Fret Aérien',
      code: 'DKR26072 +Air',
      address: figaroAddress,
      contact: 'Contact via BF2B TRADING',
      note: 'Pour vos expéditions aériennes. Départ chaque mercredi.',
    },
  ];

  return (
    <section id="entrepot" className="bg-[#f8f6f0] py-20 lg:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 fade-up">
          <div className="inline-block bg-[#0A1F44]/8 text-[#0A1F44] text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">Adresses Entrepôt</div>
          <h2 className="font-display font-black text-4xl lg:text-5xl text-[#0A1F44]">
            Où envoyer vos<br/><span className="text-[#D4A017]">marchandises en Chine ?</span>
          </h2>
          <p className="text-[#666] mt-3 text-base max-w-xl mx-auto">Donnez ces adresses à votre fournisseur avec votre code colis. <strong className="text-[#DC2626]">N'oubliez jamais le code DKR26072 !</strong></p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {addresses.map((addr, i) => (
            <div key={addr.key} className={`fade-up delay-${i+1} bg-white border-2 ${i===0 ? 'border-[#0A1F44]/10' : 'border-[#F4C430]/30'} rounded-3xl overflow-hidden shadow-lg`}>
              <div className={`px-6 py-4 flex items-center justify-between ${i===0 ? 'bg-[#0A1F44]' : 'bg-[#F4C430]'}`}>
                <div>
                  <div className={`font-black text-sm ${i===0 ? 'text-white' : 'text-[#0A1F44]'}`}>{addr.partner}</div>
                  <div className={`text-xs mt-0.5 ${i===0 ? 'text-white/50' : 'text-[#0A1F44]/60'}`}>{addr.service}</div>
                </div>
                <div className={`font-mono font-black text-xs px-3 py-1.5 rounded-full ${i===0 ? 'bg-[#F4C430] text-[#0A1F44]' : 'bg-[#0A1F44] text-[#F4C430]'}`}>{addr.code}</div>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <div className="text-[#666] text-[10px] font-bold tracking-widest uppercase mb-2">Adresse entrepôt</div>
                  <div className="bg-[#f8f6f0] rounded-xl px-4 py-3 font-mono text-sm text-[#0A1F44] leading-relaxed whitespace-pre-line">{addr.address}</div>
                  <button onClick={() => copy(addr.address, addr.key)}
                    className={`mt-2 flex items-center gap-1.5 text-xs font-bold transition-colors ${copied === addr.key ? 'text-[#16A34A]' : 'text-[#666] hover:text-[#0A1F44]'}`}>
                    {copied === addr.key ? '✓ Copié !' : '📋 Copier l\'adresse'}
                  </button>
                </div>
                <div className="bg-[#F4C430]/10 border border-[#F4C430]/30 rounded-xl px-4 py-3">
                  <div className="text-[#0A1F44]/60 text-xs font-bold tracking-widest uppercase mb-1">Instructions</div>
                  <p className="text-[#444] text-sm">{addr.note} Mentionnez obligatoirement votre code <span className="font-mono font-black text-[#D4A017]">{addr.code}</span> sur le colis.</p>
                </div>
                <a href={waLink(`Bonjour BF2B, j'ai besoin de l'adresse complète de l'entrepôt ${addr.partner} pour mon fournisseur.`)} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 border border-[#0A1F44]/15 hover:border-[#F4C430] text-[#0A1F44] hover:text-[#D4A017] font-bold text-xs py-3 rounded-xl transition-all">
                  Obtenir l'adresse complète sur WhatsApp →
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-[#DC2626]/5 border border-[#DC2626]/20 rounded-2xl px-6 py-4 flex items-start gap-3 fade-up">
          <span className="text-[#DC2626] text-xl shrink-0">⚠️</span>
          <p className="text-[#DC2626]/80 text-sm leading-relaxed">
            <strong className="text-[#DC2626]">Rappel obligatoire :</strong> Votre fournisseur doit inscrire votre code <span className="font-mono font-black">DKR26072 +Sea</span> (maritime) ou <span className="font-mono font-black">DKR26072 +Air</span> (aérien) sur CHAQUE colis. Sans ce code, la marchandise ne sera pas identifiée et sera refusée à l'entrepôt.
          </p>
        </div>
      </div>
    </section>
  );
}

// ── Paiement Section ──────────────────────────────────────────
function PaiementSection() {
  const methods = [
    {
      icon: (
        <div className="w-12 h-12 rounded-xl overflow-hidden flex items-center justify-center">
          <img src="wave-logo.png" alt="Wave" className="w-12 h-12 object-contain" />
        </div>
      ),
      name: 'Wave', desc: 'Paiement mobile instantané', badge: 'Recommandé', color: 'bg-blue-500/10 border-blue-400/20', badgeColor: 'bg-blue-500 text-white'
    },
    {
      icon: (
        <div className="w-12 h-12 rounded-xl overflow-hidden flex items-center justify-center">
          <img src="orange-money.png" alt="Orange Money" className="w-12 h-12 object-contain" />
        </div>
      ),
      name: 'Orange Money', desc: 'Paiement mobile Orange', badge: 'Populaire', color: 'bg-orange-500/10 border-orange-400/20', badgeColor: 'bg-orange-500 text-white'
    },
    {
      icon: <span className="text-4xl">🏦</span>,
      name: 'Virement bancaire', desc: 'Virement SEPA/local', badge: 'Entreprises', color: 'bg-[#0A1F44]/5 border-[#0A1F44]/10', badgeColor: 'bg-[#0A1F44] text-white'
    },
    {
      icon: <span className="text-4xl">💵</span>,
      name: 'Espèces', desc: 'En agence à Mbour', badge: 'Sur place', color: 'bg-[#F4C430]/10 border-[#F4C430]/20', badgeColor: 'bg-[#F4C430] text-[#0A1F44]'
    },
  ];

  return (
    <section id="paiement" className="bg-[#0A1F44] py-20 lg:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 fade-up">
          <div className="inline-block bg-[#F4C430]/10 text-[#F4C430] text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">Paiement</div>
          <h2 className="font-display font-black text-4xl lg:text-5xl text-white">
            Comment <span className="text-[#F4C430]">payer ?</span>
          </h2>
          <p className="text-white/50 mt-3 text-base">Modes de paiement acceptés et conditions claires.</p>
        </div>

        {/* Paiement complet */}
        <div className="bg-[#F4C430] rounded-3xl p-8 mb-10 fade-up">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="text-[#0A1F44]/60 text-xs font-bold tracking-widest uppercase mb-3">Règle de paiement BF2B</div>
              <h3 className="font-display font-black text-3xl text-[#0A1F44] mb-4">Paiement <span className="text-[#8B6914]">100% à la livraison</span></h3>
              <p className="text-[#0A1F44]/70 text-base leading-relaxed">Vous payez la totalité uniquement à la réception de votre marchandise au Sénégal. Zéro avance, zéro risque.</p>
            </div>
            <div className="flex flex-col items-center justify-center bg-[#0A1F44] rounded-2xl p-8 text-center">
              <div className="font-display font-black text-7xl text-[#F4C430] mb-3">100%</div>
              <div className="text-white font-bold text-lg mb-1">À la livraison au Sénégal</div>
              <div className="text-white/50 text-sm">Paiement complet à la réception de votre marchandise à Dakar ou Mbour</div>
            </div>
          </div>
        </div>

        {/* Payment methods */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 fade-up">
          {methods.map((m, i) => (
            <div key={m.name} className={`bg-[#152A5C] border ${m.color} rounded-2xl p-5 text-center hover:scale-105 transition-all duration-200`}>
              <div className="flex justify-center mb-3">{m.icon}</div>
              <div className={`inline-block text-[10px] font-black px-2 py-0.5 rounded-full mb-2 ${m.badgeColor}`}>{m.badge}</div>
              <div className="font-bold text-white text-sm">{m.name}</div>
              <div className="text-white/40 text-xs mt-1">{m.desc}</div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-center fade-up">
          <p className="text-white/50 text-sm">
            💡 <strong className="text-white/70">Note :</strong> Pour les commandes supérieures à 1M FCFA, un accord de paiement personnalisé est possible. Contactez-nous.
          </p>
        </div>
      </div>
    </section>
  );
}

// ── Dropshipping Section ──────────────────────────────────────
function DropshippingSection() {
  const steps = [
    { num: '01', title: 'Vous vendez en ligne', desc: 'Sur votre boutique Facebook, Instagram, WhatsApp ou site web. Pas besoin de stock.' },
    { num: '02', title: 'Client passe commande', desc: 'Votre client vous paie. Vous transmettez la commande à BF2B avec les détails.' },
    { num: '03', title: 'BF2B source & expédie', desc: 'On trouve le produit chez nos fournisseurs en Chine, on expédie directement chez votre client.' },
    { num: '04', title: 'Livraison & profit', desc: 'Votre client reçoit sa commande. Vous encaissez votre marge sans jamais toucher la marchandise.' },
  ];

  return (
    <section id="dropshipping" className="bg-[#f8f6f0] py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="fade-up">
            <div className="inline-block bg-[#0A1F44]/8 text-[#0A1F44] text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5">Nouveau</div>
            <h2 className="font-display font-black text-4xl lg:text-5xl text-[#0A1F44] leading-tight mb-6">
              Lancez votre business<br/><span className="text-[#D4A017]">sans stock</span> avec<br/>BF2B Dropshipping
            </h2>
            <p className="text-[#444] text-base leading-relaxed mb-6">
              Vous êtes e-commerçant, revendeur, ou vous voulez démarrer un business en ligne ? Notre service dropshipping vous permet de vendre des produits importés de Chine <strong className="text-[#0A1F44]">sans investir dans un stock</strong>.
            </p>
            <ul className="space-y-3 mb-8">
              {['Zéro stock à gérer','Catalogue de 500+ produits disponibles','Livraison directe chez votre client','Commission BF2B : 5-10% seulement','Support WhatsApp dédié dropshippers'].map(item => (
                <li key={item} className="flex items-center gap-3 text-sm text-[#444]">
                  <span className="w-5 h-5 rounded-full bg-[#16A34A] flex items-center justify-center text-white text-[10px] font-bold shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <a href={waLink('Bonjour BF2B, je suis intéressé par votre service de dropshipping. Pouvez-vous m\'expliquer comment ça marche ?')} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#0A1F44] hover:bg-[#152A5C] text-white font-black px-8 py-4 rounded-2xl transition-all hover:scale-105 shadow-xl">
              Démarrer le Dropshipping →
            </a>
          </div>

          <div className="fade-up delay-1 space-y-4">
            {steps.map((s, i) => (
              <div key={i} className="flex gap-5 bg-white border border-[#0A1F44]/8 rounded-2xl p-5 hover:border-[#F4C430]/40 hover:shadow-lg transition-all duration-200">
                <div className="w-12 h-12 rounded-xl bg-[#F4C430] flex items-center justify-center font-mono font-black text-[#0A1F44] text-sm shrink-0">{s.num}</div>
                <div>
                  <div className="font-bold text-[#0A1F44] mb-1">{s.title}</div>
                  <div className="text-[#666] text-sm leading-relaxed">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Comparatif BF2B vs Marché + Preuves fiabilité ─────────────
function ComparatifSection() {
  const prixComparatif = [
    { service: 'Aérien 5 kg', marche: 13500, bf2b: 10800, unit: 'F/kg' },
    { service: 'Aérien 30 kg', marche: 12800, bf2b: 10200, unit: 'F/kg' },
    { service: 'Aérien 100 kg', marche: 12000, bf2b: 10000, unit: 'F/kg' },
    { service: 'Maritime 1 CBM', marche: 295000, bf2b: 255000, unit: 'F/CBM' },
    { service: 'Maritime 5 CBM', marche: 280000, bf2b: 255000, unit: 'F/CBM' },
    { service: 'Maritime 15 CBM', marche: 270000, bf2b: 255000, unit: 'F/CBM' },
  ];

  const preuves = [
    { icon: '📅', title: 'Départ garanti chaque mercredi', desc: 'Aérien : départ fixe chaque mercredi. Pas d\'annulation de dernière minute. Maritime : tous les 2 jours depuis Foshan.', badge: 'Ponctualité' },
    { icon: '🔢', title: 'Code colis DKR26072 unique', desc: 'Votre colis est identifiable à tout moment grâce à votre code personnel. Aucun risque de confusion ou de perte dans l\'entrepôt.', badge: 'Traçabilité' },
    { icon: '✅', title: 'Dédouanement inclus dans le prix', desc: 'Contrairement à beaucoup de transitaires qui facturent le dédouanement en supplément, BF2B l\'inclut dans le tarif affiché.', badge: 'Transparence' },
    { icon: '💬', title: 'WhatsApp 24h/24 — réponse en 2h', desc: 'Accès direct à l\'équipe BF2B en jours ouvrés. Pas de standard téléphonique, pas de robot. Une vraie personne répond.', badge: 'Proximité' },
    { icon: '💳', title: 'Paiement 100% à la livraison', desc: 'Vous payez uniquement à la réception de votre marchandise au Sénégal. Wave, Orange Money, virement, espèces acceptés. Zéro avance.', badge: 'Flexibilité' },
    { icon: '🌍', title: 'Sourcing direct en Chine', desc: 'Nous pouvons trouver vos produits sur 1688 et Alibaba, vérifier la qualité et négocier les prix pour vous. Service clé en main.', badge: 'Valeur ajoutée' },
  ];

  function fmt(n) { return new Intl.NumberFormat('fr-FR').format(n); }
  function pct(marche, bf2b) { return Math.round(((marche - bf2b) / marche) * 100); }

  return (
    <section id="comparatif" className="bg-[#070F22] py-20 lg:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 fade-up">
          <div className="inline-block bg-[#F4C430]/10 text-[#F4C430] text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">Comparatif & Fiabilité</div>
          <h2 className="font-display font-black text-4xl lg:text-5xl text-white leading-tight">
            Pourquoi BF2B est<br/><span className="text-[#F4C430]">moins cher et plus fiable ?</span>
          </h2>
          <p className="text-white/40 mt-4 text-base max-w-xl mx-auto">Comparaison avec les tarifs moyens pratiqués sur le marché sénégalais du fret Chine → Sénégal.</p>
        </div>

        {/* Prix comparison table */}
        <div className="bg-[#0A1F44] border border-white/10 rounded-3xl overflow-hidden mb-14 fade-up">
          <div className="bg-[#152A5C] px-6 py-4 flex items-center justify-between border-b border-white/10">
            <span className="text-white/60 text-xs font-bold tracking-widest uppercase">Comparatif de prix — Marché Dakar 2026</span>
            <span className="text-white/30 text-xs italic">* Tarifs moyens du marché, à titre indicatif</span>
          </div>

          {/* Table header */}
          <div className="grid grid-cols-4 px-6 py-3 border-b border-white/5 text-xs font-bold tracking-widest uppercase">
            <div className="text-white/30">Service</div>
            <div className="text-white/30 text-right">Marché*</div>
            <div className="text-[#F4C430] text-right">BF2B</div>
            <div className="text-[#16A34A] text-right">Économie</div>
          </div>

          {prixComparatif.map((row, i) => (
            <div key={i} className={`grid grid-cols-4 px-6 py-4 border-b border-white/5 last:border-0 items-center ${i % 2 === 0 ? '' : 'bg-white/2'} hover:bg-[#F4C430]/3 transition-colors`}>
              <div className="text-white/70 text-sm font-medium">{row.service}</div>
              <div className="text-right">
                <span className="text-white/30 font-mono text-sm line-through">{fmt(row.marche)}</span>
                <span className="text-white/20 text-xs ml-1">{row.unit}</span>
              </div>
              <div className="text-right">
                <span className="text-[#F4C430] font-mono font-black text-sm">{fmt(row.bf2b)}</span>
                <span className="text-[#F4C430]/40 text-xs ml-1">{row.unit}</span>
              </div>
              <div className="text-right">
                <span className="inline-block bg-[#16A34A]/20 text-[#16A34A] font-black text-xs px-2.5 py-1 rounded-full">
                  -{pct(row.marche, row.bf2b)}%
                </span>
              </div>
            </div>
          ))}

          <div className="px-6 py-4 bg-[#F4C430]/5 border-t border-[#F4C430]/10 flex items-center justify-between">
            <p className="text-white/30 text-xs">Économie moyenne sur le marché</p>
            <div className="font-display font-black text-2xl text-[#F4C430]">-10 à -18%</div>
          </div>
        </div>

        {/* Preuves de fiabilité */}
        <div className="text-center mb-10 fade-up">
          <h3 className="font-display font-black text-3xl text-white mb-2">Ce qui nous rend <span className="text-[#F4C430]">uniques</span></h3>
          <p className="text-white/40 text-base">Au-delà du prix — voici pourquoi nos clients restent fidèles.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {preuves.map((p, i) => (
            <div key={i} className={`fade-up delay-${(i % 3) + 1} group bg-[#0A1F44] border border-white/10 hover:border-[#F4C430]/30 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#F4C430]/5`}>
              <div className="flex items-start justify-between mb-4">
                <span className="text-3xl">{p.icon}</span>
                <span className="bg-[#F4C430]/10 text-[#F4C430] text-[10px] font-black px-2.5 py-1 rounded-full tracking-widest">{p.badge}</span>
              </div>
              <h4 className="font-bold text-white text-sm mb-2 leading-snug group-hover:text-[#F4C430] transition-colors">{p.title}</h4>
              <p className="text-white/40 text-xs leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="text-center mt-14 fade-up">
          <p className="text-white/30 text-sm mb-6">Convaincu ? Obtenez votre devis gratuit en moins de 2 minutes.</p>
          <a href={waLink('Bonjour BF2B, j\'ai comparé vos prix et je voudrais un devis pour mon expédition.')}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#F4C430] hover:bg-[#D4A017] text-[#0A1F44] font-black text-base px-10 py-4 rounded-2xl transition-all hover:scale-105 shadow-2xl shadow-[#F4C430]/20">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.523 5.851L.057 23.885l6.196-1.454A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.87 9.87 0 01-5.017-1.372l-.36-.214-3.677.864.927-3.584-.235-.369A9.86 9.86 0 012.118 12C2.118 6.54 6.54 2.118 12 2.118c5.46 0 9.882 4.422 9.882 9.882 0 5.46-4.422 9.882-9.882 9.882z"/></svg>
            Choisir BF2B TRADING
          </a>
        </div>
      </div>
    </section>
  );
}

// ── FAQ Étendue ───────────────────────────────────────────────
const FAQ_EXTRA = [
  { q: 'Comment vérifier un fournisseur chinois ?', a: 'Demandez le business license, vérifiez les avis Alibaba Trade Assurance, faites un échantillon d\'abord. BF2B peut aussi vérifier votre fournisseur pour vous.' },
  { q: 'Puis-je importer des médicaments ou produits pharmaceutiques ?', a: 'Non. Ces produits sont strictement réglementés et nécessitent des autorisations spéciales. Nous ne pouvons pas les traiter.' },
  { q: 'Que se passe-t-il si ma marchandise est endommagée à l\'arrivée ?', a: 'Nous documentons l\'état des colis à la réception en Chine et à l\'arrivée à Dakar. En cas de dommage pendant le transit, une déclaration est faite auprès de l\'assurance.' },
  { q: 'Y a-t-il un minimum pour le sourcing ?', a: 'Non, il n\'y a pas de minimum strict. Cependant, pour que la commission de 5-10% soit rentable, nous recommandons des commandes d\'au moins 200 000 FCFA de marchandise.' },
  { q: 'Combien de temps prend le sourcing ?', a: '5 à 15 jours selon la complexité : trouver le fournisseur, négocier, vérifier la qualité, puis expédier selon le mode choisi (aérien ou maritime).' },
  { q: 'Puis-je faire du dropshipping avec BF2B ?', a: 'Oui ! C\'est l\'un de nos services phares. Vous vendez, on expédie directement chez votre client. Commission BF2B : 5-10% de la valeur produit.' },
  { q: 'Les droits de douane sont-ils vraiment à ma charge ?', a: 'Oui. Les droits de douane et la TVA sénégalaise sont légalement à la charge de l\'importateur (vous). Ils sont calculés sur la valeur CAF de votre marchandise. Utilisez notre calculateur DDP pour estimer.' },
  { q: 'Quand dois-je payer ?', a: 'Le paiement est intégral à la livraison de votre marchandise au Sénégal (Dakar ou Mbour). Vous ne payez rien avant de recevoir vos produits. Wave, Orange Money, virement et espèces acceptés.' },
  { q: 'Quelles marchandises sont considérées "sensibles" ?', a: 'Batteries au lithium, liquides, cosmétiques, parfums, médicaments OTC, produits alimentaires, téléphones reconditionnés, articles de grande valeur. Le tarif sensible s\'applique à ces catégories.' },
  { q: 'Livrez-vous à Saint-Louis, Ziguinchor, Kaolack ?', a: 'Oui, nous livrons partout au Sénégal. Dakar et Mbour sont inclus dans nos tarifs standards. Pour les autres villes, nous établissons un devis selon la distance avec nos partenaires transporteurs locaux.' },
  { q: 'Comment fonctionne 1688 par rapport à Alibaba ?', a: '1688 est le marché B2B chinois interne — prix usine, en chinois uniquement, minimum de commande plus élevé. Alibaba est international, en anglais, mais plus cher. BF2B peut acheter sur 1688 pour vous.' },
  { q: 'Y a-t-il des articles interdits à l\'importation ?', a: 'Oui : armes et munitions, substances illicites, marchandises contrefaites, matières radioactives, monnaie contrefaite. Tout article interdit par la douane sénégalaise est refusé.' },
];

function FAQExtra() {
  const [open, setOpen] = React.useState(null);

  return (
    <section id="faq-complete" className="bg-[#f8f6f0] py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 fade-up">
          <div className="inline-block bg-[#0A1F44]/8 text-[#0A1F44] text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">FAQ Complète</div>
          <h2 className="font-display font-black text-4xl lg:text-5xl text-[#0A1F44]">Toutes vos questions,<br/><span className="text-[#D4A017]">répondues</span></h2>
        </div>
        <div className="space-y-3 fade-up">
          {FAQ_EXTRA.map((item, i) => (
            <div key={i} className={`border rounded-2xl overflow-hidden transition-all duration-300 ${open === i ? 'border-[#D4A017]/40 bg-white shadow-lg' : 'border-[#0A1F44]/8 bg-white hover:border-[#0A1F44]/20'}`}>
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between px-6 py-4 text-left gap-4">
                <span className={`font-bold text-sm transition-colors ${open === i ? 'text-[#D4A017]' : 'text-[#0A1F44]/80'}`}>{item.q}</span>
                <svg className={`w-4 h-4 shrink-0 transition-transform duration-300 ${open === i ? 'rotate-180 text-[#D4A017]' : 'text-[#0A1F44]/30'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${open === i ? 'max-h-48' : 'max-h-0'}`}>
                <p className="px-6 pb-4 text-[#444] text-sm leading-relaxed">{item.a}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <a href={waLink('Bonjour BF2B, j\'ai une question spécifique.')} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#0A1F44] hover:bg-[#152A5C] text-white font-bold px-8 py-3 rounded-xl transition-all hover:scale-105 text-sm">
            Posez votre question sur WhatsApp →
          </a>
        </div>
      </div>
    </section>
  );
}

// ── Mentions Légales + CGV (Modals) ───────────────────────────
function LegalModals() {
  const [modal, setModal] = React.useState(null);

  React.useEffect(() => {
    window.__openLegal = (type) => setModal(type);
  }, []);

  if (!modal) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={() => setModal(null)}>
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
      <div className="relative bg-white rounded-3xl w-full max-w-2xl max-h-[80vh] overflow-y-auto shadow-2xl" onClick={e => e.stopPropagation()}>
        <div className="sticky top-0 bg-white border-b border-[#0A1F44]/8 px-8 py-5 flex items-center justify-between rounded-t-3xl">
          <h3 className="font-display font-bold text-xl text-[#0A1F44]">
            {modal === 'mentions' ? 'Mentions Légales' : modal === 'cgv' ? 'Conditions Générales de Vente' : 'Politique de Confidentialité'}
          </h3>
          <button onClick={() => setModal(null)} className="w-8 h-8 rounded-full bg-[#0A1F44]/8 flex items-center justify-center text-[#0A1F44]/60 hover:bg-[#0A1F44]/15 transition-colors">✕</button>
        </div>
        <div className="px-8 py-6 prose prose-sm text-[#444] max-w-none space-y-4">
          {modal === 'mentions' && (
            <>
              <p><strong>Dénomination sociale :</strong> BF2B TRADING SUARL</p>
              <p><strong>Nom commercial :</strong> BF2BTRADING_TRANS</p>
              <p><strong>Gérante :</strong> Khady BA</p>
              <p><strong>Siège social :</strong> Mbour, Sénégal</p>
              <p><strong>NINEA :</strong> 011251965</p>
              <p><strong>RCCM :</strong> SN.MBR.2024.A.1532</p>
              <p><strong>Email :</strong> bf2btrading@gmail.com</p>
              <p><strong>WhatsApp :</strong> +221 75 202 65 77</p>
              <p><strong>Activité :</strong> Transitaire / Freight Forwarder Chine → Sénégal</p>
              <p><strong>Services :</strong> Fret aérien, fret maritime LCL, conteneurs FCL, sourcing Chine, dropshipping.</p>
              <p><strong>Partenaires :</strong> Guangzhou Figaro Supply Chain Co., Ltd. (广州市费加罗物流供应链有限公司) — entrepôt Foshan, fret aérien & maritime LCL.</p>
              <p><strong>Hébergement :</strong> Vercel Inc., San Francisco, CA, États-Unis.</p>
              <hr/>
              <p className="text-xs text-[#666]">BF2B TRADING SUARL est une société à responsabilité limitée unipersonnelle de droit sénégalais, immatriculée au Registre du Commerce et du Crédit Mobilier de Mbour sous le numéro SN.MBR.2024.A.1532. NINEA : 011251965.</p>
            </>
          )}
          {modal === 'cgv' && (
            <>
              <h4 className="font-bold text-[#0A1F44]">1. Objet</h4>
              <p>Les présentes conditions régissent les relations entre BF2B TRADING SUARL et ses clients pour les services de fret et de transit Chine → Sénégal.</p>
              <h4 className="font-bold text-[#0A1F44]">2. Modalités de paiement</h4>
              <p>Le paiement est intégral à la livraison de la marchandise au Sénégal (Dakar ou Mbour). Aucun acompte n'est exigé avant réception. Modes acceptés : Wave, Orange Money, virement bancaire, espèces.</p>
              <h4 className="font-bold text-[#0A1F44]">3. Délais</h4>
              <p>Les délais indiqués (aérien : 10-12 jours, maritime : 70-80 jours) sont des estimations à compter de la date d'expédition. BF2B TRADING ne peut être tenu responsable des retards liés aux douanes ou à des événements de force majeure.</p>
              <h4 className="font-bold text-[#0A1F44]">4. Code colis obligatoire</h4>
              <p>Le client est tenu de communiquer le code colis DKR26072 à son fournisseur. BF2B TRADING décline toute responsabilité pour les colis non identifiés.</p>
              <h4 className="font-bold text-[#0A1F44]">5. Droits de douane</h4>
              <p>Les droits de douane, la TVA et les frais para-douaniers sénégalais sont à la charge exclusive du client importateur. BF2B TRADING fournit une estimation non contractuelle.</p>
              <h4 className="font-bold text-[#0A1F44]">6. Responsabilité</h4>
              <p>BF2B TRADING s'engage à traiter les marchandises avec soin. En cas de perte ou dommage constatés lors de la prise en charge, une déclaration est établie. La responsabilité est limitée à la valeur de fret déclarée.</p>
              <h4 className="font-bold text-[#0A1F44]">7. Litiges</h4>
              <p>Tout litige sera soumis à la juridiction compétente de Mbour, Sénégal. La langue applicable est le français.</p>
            </>
          )}
          {modal === 'confidentialite' && (
            <>
              <h4 className="font-bold text-[#0A1F44]">Données collectées</h4>
              <p>Nous collectons : nom, email, numéro WhatsApp, informations de commande. Ces données sont nécessaires à l'exécution de nos services.</p>
              <h4 className="font-bold text-[#0A1F44]">Utilisation</h4>
              <p>Vos données sont utilisées uniquement pour traiter vos commandes, vous contacter et améliorer nos services. Elles ne sont jamais vendues à des tiers.</p>
              <h4 className="font-bold text-[#0A1F44]">Conservation</h4>
              <p>Vos données sont conservées pendant 3 ans après votre dernière interaction, conformément aux obligations comptables sénégalaises.</p>
              <h4 className="font-bold text-[#0A1F44]">Vos droits</h4>
              <p>Vous pouvez demander l'accès, la rectification ou la suppression de vos données en contactant bf2btrading@gmail.com.</p>
              <h4 className="font-bold text-[#0A1F44]">Cookies</h4>
              <p>Nous utilisons Google Analytics pour analyser le trafic. Vous pouvez refuser les cookies via le bandeau d'acceptation.</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { NextDepartureCountdown, EntrepotChine, PaiementSection, DropshippingSection, ComparatifSection, FAQExtra, LegalModals });
