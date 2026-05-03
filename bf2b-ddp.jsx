/* ============================================================
   BF2B TRADING — DDP Calculator + Tracking + Newsletter
   ============================================================ */

// ── DDP Calculator ────────────────────────────────────────────
const DUTY_RATES = {
  textile:       { min: 0.30, max: 0.45, label: 'Textile & Habillement' },
  electronique:  { min: 0.20, max: 0.35, label: 'Électronique' },
  cosmetique:    { min: 0.35, max: 0.50, label: 'Cosmétique & Beauté' },
  alimentaire:   { min: 0.25, max: 0.40, label: 'Alimentaire' },
  electromenager:{ min: 0.30, max: 0.45, label: 'Électroménager' },
  autre:         { min: 0.30, max: 0.45, label: 'Autre / Divers' },
};
const USD_FCFA = 598;

function fmtN(n) { return new Intl.NumberFormat('fr-FR').format(Math.round(n)); }

function DDPCalculator() {
  const [form, setForm] = React.useState({
    service: 'air', type: 'general', category: 'textile',
    fob_usd: '', weight_kg: '', volume_cbm: '', internal_china: '',
  });
  const [result, setResult] = React.useState(null);

  function set(k, v) { setForm(f => ({ ...f, [k]: v })); setResult(null); }

  function calculate() {
    const fob_usd = parseFloat(form.fob_usd) || 0;
    const fob_fcfa = fob_usd * USD_FCFA;
    const wt = parseFloat(form.weight_kg) || 0;
    const vol = parseFloat(form.volume_cbm) || 0;
    const internalFcfa = (parseFloat(form.internal_china) || 0) * USD_FCFA;

    if (!fob_usd) { setResult({ error: 'Veuillez entrer la valeur FOB.' }); return; }

    // ── 1. Frais de transport BF2B ──────────────────────────
    let fret_fcfa = 0;
    if (form.service === 'air') {
      if (wt < 2) { setResult({ error: 'Poids minimum aérien : 2 kg.' }); return; }
      const rates = [{min:2,max:10,r:10800},{min:10,max:50,r:10200},{min:50,max:200,r:10000},{min:200,max:Infinity,r:9800}];
      const row = rates.find(r => wt >= r.min && wt < r.max) || rates[rates.length-1];
      const baseRate = form.type === 'sensible' ? row.r + 200 : row.r;
      fret_fcfa = baseRate * wt;
    } else {
      if (vol < 0.5) { setResult({ error: 'Volume minimum maritime : 0,5 CBM.' }); return; }
      const gen = [{min:0.5,max:1,r:265000},{min:1,max:20,r:255000},{min:20,max:Infinity,r:250000}];
      const sen = [{min:0.5,max:1,r:275000},{min:1,max:20,r:265000},{min:20,max:Infinity,r:260000}];
      const tbl = form.type === 'sensible' ? sen : gen;
      const row = tbl.find(r => vol >= r.min && vol < r.max) || tbl[tbl.length-1];
      fret_fcfa = row.r * vol;
    }

    // ── 2. Assurance (1.1% FOB) ───────────────────────────
    const assurance = fob_fcfa * 0.011;

    // ── 3. Valeur CAF ──────────────────────────────────────
    const caf_fcfa = fob_fcfa + fret_fcfa + assurance + internalFcfa;

    // ── 4. Droits de douane ────────────────────────────────
    const dutyInfo = DUTY_RATES[form.category];
    const dutyMid = (dutyInfo.min + dutyInfo.max) / 2;
    const droits = caf_fcfa * dutyMid;

    // ── 5. TVA 18% ────────────────────────────────────────
    const tva = (caf_fcfa + droits) * 0.18;

    // ── 6. Frais obligatoires ──────────────────────────────
    const cosec = 5000;
    const dpi = fob_fcfa >= 300000 ? 25000 : 0;
    const cotecna = fob_fcfa >= 1794000 ? fob_fcfa * 0.0075 : 0; // 3M FCFA ≈ FOB 5000 USD

    const totalFcfa = fob_fcfa + fret_fcfa + assurance + droits + tva + cosec + dpi + cotecna + internalFcfa;
    const totalUsd = totalFcfa / USD_FCFA;

    setResult({
      fob_fcfa, fob_usd,
      fret_fcfa, assurance, caf_fcfa,
      droits, tva, cosec, dpi, cotecna,
      internalFcfa,
      totalFcfa, totalUsd,
      dutyPct: Math.round(dutyMid * 100),
      dutyMin: Math.round(dutyInfo.min * 100),
      dutyMax: Math.round(dutyInfo.max * 100),
    });
  }

  const waMsg = result && !result.error
    ? `Bonjour BF2B ! Voici mon estimation DDP :\n- Valeur FOB : ${form.fob_usd} USD\n- Service : ${form.service === 'air' ? 'Aérien' : 'Maritime'}\n- Catégorie : ${DUTY_RATES[form.category].label}\n- Coût total estimé DDP : ${fmtN(result.totalFcfa)} FCFA\n\nPouvez-vous me faire un devis officiel ?`
    : 'Bonjour BF2B, je souhaite calculer le coût total DDP de mon importation.';

  return (
    <section id="ddp" className="bg-[#0A1F44] py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 dots-pattern opacity-10"></div>
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 fade-up">
          <div className="inline-block bg-[#F4C430]/10 text-[#F4C430] text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">Calculateur Avancé</div>
          <h2 className="font-display font-black text-4xl lg:text-5xl text-white">
            Calculateur DDP<br/><span className="text-[#F4C430]">Coût total d'importation</span>
          </h2>
          <p className="text-white/50 mt-3 text-base max-w-xl mx-auto">Inclut fret BF2B + droits de douane + TVA + frais obligatoires. Estimation complète en FCFA.</p>
        </div>

        <div className="bg-[#152A5C] border border-white/10 rounded-3xl p-6 lg:p-10 fade-up delay-1">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Left inputs */}
            <div className="space-y-5">
              <h3 className="text-white/60 text-xs font-bold tracking-widest uppercase pb-2 border-b border-white/10">Votre marchandise</h3>

              {/* Valeur FOB */}
              <div>
                <label className="block text-white/60 text-xs font-bold tracking-widest uppercase mb-2">Valeur FOB Chine (USD)</label>
                <div className="relative">
                  <input type="number" value={form.fob_usd} onChange={e => set('fob_usd', e.target.value)}
                    placeholder="ex: 500" min="0"
                    className="w-full bg-white/5 border border-white/10 focus:border-[#F4C430]/50 text-white rounded-xl px-4 py-3 font-bold focus:outline-none placeholder-white/20" />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 text-sm">USD</span>
                </div>
              </div>

              {/* Catégorie */}
              <div>
                <label className="block text-white/60 text-xs font-bold tracking-widest uppercase mb-2">Catégorie de produit</label>
                <select value={form.category} onChange={e => set('category', e.target.value)}
                  className="w-full bg-white/5 border border-white/10 focus:border-[#F4C430]/50 text-white rounded-xl px-4 py-3 focus:outline-none">
                  {Object.entries(DUTY_RATES).map(([k,v]) => (
                    <option key={k} value={k} className="bg-[#152A5C]">{v.label}</option>
                  ))}
                </select>
              </div>

              {/* Service */}
              <div>
                <label className="block text-white/60 text-xs font-bold tracking-widest uppercase mb-2">Service d'expédition</label>
                <div className="grid grid-cols-2 gap-2">
                  {[['air','✈ Aérien'],['maritime','🚢 Maritime']].map(([v,l]) => (
                    <button key={v} onClick={() => set('service', v)}
                      className={`py-3 rounded-xl font-bold text-sm transition-all ${form.service === v ? 'bg-[#F4C430] text-[#0A1F44]' : 'bg-white/5 text-white/60 hover:bg-white/10'}`}>{l}</button>
                  ))}
                </div>
              </div>

              {/* Poids / Volume */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/60 text-xs font-bold tracking-widest uppercase mb-2">Poids (kg)</label>
                  <input type="number" value={form.weight_kg} onChange={e => set('weight_kg', e.target.value)}
                    placeholder="ex: 30" className="w-full bg-white/5 border border-white/10 focus:border-[#F4C430]/50 text-white rounded-xl px-4 py-3 font-bold focus:outline-none placeholder-white/20" />
                </div>
                <div>
                  <label className="block text-white/60 text-xs font-bold tracking-widest uppercase mb-2">Volume (CBM)</label>
                  <input type="number" value={form.volume_cbm} onChange={e => set('volume_cbm', e.target.value)}
                    placeholder="ex: 0.5" step="0.1" className="w-full bg-white/5 border border-white/10 focus:border-[#F4C430]/50 text-white rounded-xl px-4 py-3 font-bold focus:outline-none placeholder-white/20" />
                </div>
              </div>

              {/* Transport interne Chine */}
              <div>
                <label className="block text-white/60 text-xs font-bold tracking-widest uppercase mb-2">Transport interne Chine (USD, optionnel)</label>
                <input type="number" value={form.internal_china} onChange={e => set('internal_china', e.target.value)}
                  placeholder="ex: 50" className="w-full bg-white/5 border border-white/10 focus:border-[#F4C430]/50 text-white rounded-xl px-4 py-3 font-bold focus:outline-none placeholder-white/20" />
              </div>

              <button onClick={calculate}
                className="w-full bg-[#F4C430] hover:bg-[#D4A017] text-[#0A1F44] font-black py-4 rounded-xl transition-all hover:scale-[1.02] shadow-xl shadow-[#F4C430]/20">
                Calculer le coût total DDP →
              </button>
            </div>

            {/* Right: Results */}
            <div>
              {!result && (
                <div className="h-full flex flex-col items-center justify-center text-center py-12 border-2 border-dashed border-white/10 rounded-2xl">
                  <div className="text-5xl mb-4">🧮</div>
                  <p className="text-white/30 text-sm">Remplissez le formulaire et cliquez sur<br/>"Calculer" pour voir le détail complet.</p>
                </div>
              )}

              {result && result.error && (
                <div className="bg-red-500/10 border border-red-400/30 rounded-2xl p-6 text-red-300">{result.error}</div>
              )}

              {result && !result.error && (
                <div className="space-y-3">
                  <h3 className="text-white/60 text-xs font-bold tracking-widest uppercase pb-2 border-b border-white/10">Détail des coûts</h3>

                  {[
                    { label: 'Valeur FOB Chine', val: result.fob_fcfa, sub: `${result.fob_usd} USD`, highlight: false },
                    { label: 'Fret BF2B', val: result.fret_fcfa, highlight: false },
                    { label: 'Assurance (1,1%)', val: result.assurance, highlight: false },
                    result.internalFcfa > 0 && { label: 'Transport interne Chine', val: result.internalFcfa, highlight: false },
                    { label: `Valeur CAF`, val: result.caf_fcfa, highlight: 'gold', bold: true },
                    { label: `Droits de douane (~${result.dutyPct}%)`, val: result.droits, sub: `Estimation ${result.dutyMin}–${result.dutyMax}%`, highlight: false },
                    { label: 'TVA Sénégal (18%)', val: result.tva, highlight: false },
                    { label: 'Frais COSEC/BESC', val: result.cosec, highlight: false },
                    result.dpi > 0 && { label: 'DPI obligatoire', val: result.dpi, highlight: false },
                    result.cotecna > 0 && { label: 'AV COTECNA (0,75%)', val: result.cotecna, highlight: false },
                  ].filter(Boolean).map((row, i) => (
                    <div key={i} className={`flex items-center justify-between px-4 py-2.5 rounded-xl ${row.highlight === 'gold' ? 'bg-[#F4C430]/10 border border-[#F4C430]/20' : 'bg-white/3'}`}>
                      <div>
                        <div className={`text-sm ${row.bold ? 'font-bold text-white' : 'text-white/60'}`}>{row.label}</div>
                        {row.sub && <div className="text-white/30 text-xs">{row.sub}</div>}
                      </div>
                      <div className={`font-mono font-bold text-sm ${row.highlight === 'gold' ? 'text-[#F4C430]' : 'text-white/80'}`}>
                        {fmtN(row.val)} F
                      </div>
                    </div>
                  ))}

                  {/* Total */}
                  <div className="bg-[#F4C430] rounded-2xl p-5 text-center mt-2">
                    <div className="text-[#0A1F44]/60 text-xs font-bold tracking-widest uppercase mb-1">COÛT TOTAL DDP ESTIMÉ</div>
                    <div className="font-display font-black text-3xl text-[#0A1F44]">{fmtN(result.totalFcfa)} FCFA</div>
                    <div className="text-[#0A1F44]/60 text-sm mt-1">≈ {fmtN(result.totalUsd)} USD</div>
                  </div>

                  <a href={waLink(waMsg)} target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#1eb855] text-white font-black py-3 rounded-xl transition-all text-sm">
                    Demander un devis officiel sur WhatsApp
                  </a>
                  <p className="text-white/20 text-xs text-center">* Estimation indicative. Taux USD/FCFA : {USD_FCFA}. Les droits peuvent varier selon la classification douanière exacte.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Tracking Section ─────────────────────────────────────────
const DEMO_STATUSES = [
  { step: 1, label: 'Commande créée', done: true, date: '10 jan 2026' },
  { step: 2, label: 'Marchandise réceptionnée en Chine', done: true, date: '14 jan 2026' },
  { step: 3, label: 'Expédiée vers Dakar', done: true, date: '18 jan 2026' },
  { step: 4, label: 'En transit', done: true, date: '20 jan 2026' },
  { step: 5, label: 'Arrivée Dakar — Dédouanement', done: false, date: 'En cours...' },
  { step: 6, label: 'Livraison effectuée', done: false, date: '—' },
];

function TrackingSection() {
  const [ref, setRef] = React.useState('');
  const [shown, setShown] = React.useState(false);

  function handleSearch(e) {
    e.preventDefault();
    if (ref.trim()) setShown(true);
  }

  return (
    <section id="tracking" className="bg-[#f8f6f0] py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 fade-up">
          <div className="inline-block bg-[#0A1F44]/8 text-[#0A1F44] text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">Suivi de colis</div>
          <h2 className="font-display font-black text-4xl lg:text-5xl text-[#0A1F44]">
            Suivez votre <span className="text-[#D4A017]">expédition</span>
          </h2>
          <p className="text-[#666] mt-3 text-base">Entrez votre référence BF2B pour voir le statut en temps réel.</p>
        </div>

        {/* Search */}
        <form onSubmit={handleSearch} className="fade-up flex gap-3 mb-10">
          <input value={ref} onChange={e => setRef(e.target.value)} placeholder="ex: BF2B-2026-0042"
            className="flex-1 border-2 border-[#0A1F44]/15 focus:border-[#F4C430] rounded-2xl px-5 py-4 text-[#0A1F44] font-mono font-bold text-sm focus:outline-none focus:ring-2 focus:ring-[#F4C430]/20 transition-all placeholder-[#666]/40" />
          <button type="submit"
            className="bg-[#0A1F44] hover:bg-[#152A5C] text-white font-bold px-6 py-4 rounded-2xl transition-all hover:scale-105 text-sm shrink-0">
            Rechercher
          </button>
        </form>

        {/* Demo result */}
        {shown && (
          <div className="fade-up bg-white border border-[#0A1F44]/8 rounded-3xl p-8 shadow-xl">
            <div className="flex items-center justify-between mb-6 pb-6 border-b border-[#0A1F44]/8">
              <div>
                <div className="text-[#666] text-xs tracking-widest uppercase">Référence</div>
                <div className="font-mono font-black text-xl text-[#0A1F44] mt-1">{ref || 'BF2B-2026-0042'}</div>
              </div>
              <div className="bg-[#F4C430]/10 border border-[#F4C430]/30 text-[#D4A017] font-bold text-sm px-4 py-2 rounded-xl">
                En transit · Étape 5/6
              </div>
            </div>

            {/* Timeline */}
            <div className="space-y-4">
              {DEMO_STATUSES.map((s, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="flex flex-col items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 font-bold text-xs transition-all ${s.done ? 'bg-[#16A34A] text-white' : i === 4 ? 'bg-[#F4C430] text-[#0A1F44] animate-pulse' : 'bg-[#0A1F44]/10 text-[#0A1F44]/40'}`}>
                      {s.done ? '✓' : s.step}
                    </div>
                    {i < DEMO_STATUSES.length - 1 && <div className={`w-px flex-1 mt-1 mb-1 min-h-[16px] ${s.done ? 'bg-[#16A34A]/30' : 'bg-[#0A1F44]/10'}`}></div>}
                  </div>
                  <div className="flex-1 pb-2">
                    <div className={`font-bold text-sm ${s.done ? 'text-[#0A1F44]' : i === 4 ? 'text-[#D4A017]' : 'text-[#0A1F44]/30'}`}>{s.label}</div>
                    <div className={`text-xs mt-0.5 ${s.done ? 'text-[#666]' : 'text-[#0A1F44]/20'}`}>{s.date}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-[#0A1F44]/8 flex gap-3">
              <a href={waLink(`Bonjour BF2B, je souhaite des nouvelles de ma commande ${ref || 'BF2B-2026-0042'}`)}
                target="_blank" rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 text-[#16A34A] font-bold text-sm py-3 rounded-xl transition-all">
                Contacter BF2B sur WhatsApp
              </a>
            </div>
          </div>
        )}

        {/* 17TRACK Widget */}
        <div className="fade-up mt-8 bg-white border border-[#0A1F44]/8 rounded-3xl overflow-hidden shadow-xl">
          <div className="bg-[#0A1F44] px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#F4C430] rounded-lg flex items-center justify-center font-black text-[#0A1F44] text-sm">17</div>
              <div>
                <div className="text-white font-bold text-sm">Suivi 17TRACK</div>
                <div className="text-white/40 text-xs">1 300+ transporteurs · Chine → Sénégal</div>
              </div>
            </div>
            <a href="https://www.17track.net" target="_blank" rel="noopener noreferrer"
              className="text-[#F4C430] text-xs hover:underline">Ouvrir 17TRACK →</a>
          </div>
          <div className="p-4">
            <iframe
              src="https://t.17track.net/en#nums="
              width="100%" height="180" style={{border:0,borderRadius:'12px'}}
              title="17TRACK Suivi colis" loading="lazy">
            </iframe>
          </div>
          <div className="px-6 pb-5 text-center">
            <p className="text-[#666] text-xs mb-3">Entrez votre numéro de suivi BF2B sur <strong>17TRACK.net</strong> pour un tracking en temps réel.</p>
            <a href="https://www.17track.net" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#0A1F44] hover:bg-[#152A5C] text-white font-bold text-sm px-6 py-2.5 rounded-xl transition-all hover:scale-105">
              Suivre mon colis sur 17TRACK →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Newsletter Section ────────────────────────────────────────
function NewsletterSection() {
  const [email, setEmail] = React.useState('');
  const [done, setDone] = React.useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!email) return;
    window.open(waLink(`Bonjour BF2B, je souhaite m'inscrire à votre newsletter. Mon email : ${email}`), '_blank');
    setDone(true);
  }

  return (
    <section className="bg-[#F4C430] py-14">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {done ? (
          <div className="py-4">
            <div className="text-4xl mb-3">🎉</div>
            <h3 className="font-display font-black text-2xl text-[#0A1F44]">Merci pour votre inscription !</h3>
            <p className="text-[#0A1F44]/60 mt-2">Vous recevrez nos conseils, tarifs et offres exclusives.</p>
          </div>
        ) : (
          <>
            <div className="text-[#0A1F44]/60 text-xs font-bold tracking-widest uppercase mb-3">Newsletter</div>
            <h3 className="font-display font-black text-3xl text-[#0A1F44] mb-2">Restez informé des meilleurs tarifs</h3>
            <p className="text-[#0A1F44]/60 text-base mb-8">Conseils import, alertes tarifs, nouveaux articles — 1 email par semaine max.</p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} required
                placeholder="votre@email.com"
                className="flex-1 bg-white/60 backdrop-blur border-2 border-[#0A1F44]/15 focus:border-[#0A1F44] rounded-xl px-5 py-3.5 text-[#0A1F44] font-medium focus:outline-none placeholder-[#0A1F44]/30 text-sm" />
              <button type="submit"
                className="bg-[#0A1F44] hover:bg-[#152A5C] text-white font-black px-7 py-3.5 rounded-xl transition-all hover:scale-105 text-sm shrink-0">
                S'inscrire →
              </button>
            </form>
            <p className="text-[#0A1F44]/40 text-xs mt-4">Désabonnement en 1 clic. Aucun spam.</p>
          </>
        )}
      </div>
    </section>
  );
}

Object.assign(window, { DDPCalculator, TrackingSection, NewsletterSection });
