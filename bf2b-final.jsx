/* ============================================================
   BF2B TRADING — Final additions:
   SplashScreen + ScrollToTop + ZonesLivraison + MiniQuiz
   + GaleriePhotos + SourcingVilles + DarkModeToggle
   ============================================================ */

// ── Splash Screen ─────────────────────────────────────────────
function SplashScreen() {
  const [visible, setVisible] = React.useState(true);
  React.useEffect(() => {
    const t = setTimeout(() => setVisible(false), 2200);
    return () => clearTimeout(t);
  }, []);
  if (!visible) return null;
  return (
    <div className={`fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#0A1F44] transition-opacity duration-500 ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className="absolute inset-0 dots-pattern opacity-20"></div>
      <div className="relative flex flex-col items-center gap-6">
        <div className="float-anim">
          <img src="logo.png" alt="BF2B TRADING" className="w-32 h-32 object-contain" style={{filter:'drop-shadow(0 0 30px rgba(244,196,48,0.4))'}} />
        </div>
        <div className="text-center">
          <div className="font-display font-black text-4xl text-white tracking-tight">
            BF<span className="text-[#F4C430]">2</span>B TRADING
          </div>
          <div className="text-[#F4C430]/60 text-xs tracking-[0.4em] uppercase mt-2">TRANS · CHINA → SENEGAL</div>
        </div>
        <div className="flex gap-2 mt-4">
          {[0,1,2].map(i => (
            <div key={i} className="w-2 h-2 rounded-full bg-[#F4C430]"
              style={{animation:`pulse 1s ease-in-out ${i*0.2}s infinite`}}></div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Scroll To Top ─────────────────────────────────────────────
function ScrollToTop() {
  const [show, setShow] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  if (!show) return null;
  return (
    <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-28 right-6 z-40 w-12 h-12 bg-[#0A1F44] hover:bg-[#F4C430] border border-[#F4C430]/30 hover:border-[#F4C430] text-[#F4C430] hover:text-[#0A1F44] rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
      aria-label="Retour en haut">
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 15l7-7 7 7" /></svg>
    </button>
  );
}

// ── Zones de Livraison ────────────────────────────────────────
const ZONES = [
  { ville: 'Dakar', region: 'Dakar', inclus: true, delai: 'J+1', prix: 'Inclus' },
  { ville: 'Mbour', region: 'Thiès', inclus: true, delai: 'J+1', prix: 'Inclus' },
  { ville: 'Thiès', region: 'Thiès', inclus: false, delai: 'J+2', prix: '5 000 – 8 000 F' },
  { ville: 'Kaolack', region: 'Kaolack', inclus: false, delai: 'J+2', prix: '10 000 – 15 000 F' },
  { ville: 'Saint-Louis', region: 'Saint-Louis', inclus: false, delai: 'J+3', prix: '15 000 – 20 000 F' },
  { ville: 'Touba / Mbacké', region: 'Diourbel', inclus: false, delai: 'J+2', prix: '8 000 – 12 000 F' },
  { ville: 'Ziguinchor', region: 'Ziguinchor', inclus: false, delai: 'J+4', prix: 'Sur devis' },
  { ville: 'Tambacounda', region: 'Tambacounda', inclus: false, delai: 'J+3', prix: 'Sur devis' },
  { ville: 'Kolda', region: 'Kolda', inclus: false, delai: 'J+4', prix: 'Sur devis' },
  { ville: 'Louga', region: 'Louga', inclus: false, delai: 'J+2', prix: '12 000 – 18 000 F' },
];

function ZonesLivraison() {
  return (
    <section id="zones" className="bg-[#f8f6f0] py-20 lg:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 fade-up">
          <div className="inline-block bg-[#0A1F44]/8 text-[#0A1F44] text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">Couverture nationale</div>
          <h2 className="font-display font-black text-4xl lg:text-5xl text-[#0A1F44]">
            Livraison <span className="text-[#D4A017]">partout au Sénégal</span>
          </h2>
          <p className="text-[#666] mt-3 text-base max-w-xl mx-auto">Dakar et Mbour inclus. Toutes les autres villes sur devis selon distance et volume.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Real map */}
          <div className="fade-up lg:col-span-1">
            <div className="bg-[#0A1F44] rounded-3xl overflow-hidden border border-[#F4C430]/20 shadow-xl">
              <div className="bg-[#152A5C] px-4 py-3 flex items-center gap-2">
                <svg className="w-4 h-4 text-[#F4C430]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>
                <span className="text-white/70 text-xs font-bold tracking-wide">Sénégal — Zones desservies</span>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1958855.8!2d-15.5!3d14.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec172b5d3c2e0e5%3A0x9b2e44f4e3c8f97d!2sS%C3%A9n%C3%A9gal!5e0!3m2!1sfr!2sfr!4v1714000000000!5m2!1sfr!2sfr"
                width="100%" height="320" style={{border:0}} allowFullScreen="" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade" title="Sénégal zones de livraison">
              </iframe>
              <div className="px-4 py-3 flex items-center gap-4 text-xs">
                <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-[#16A34A] inline-block"></span><span className="text-white/50">Inclus (Dakar, Mbour)</span></span>
                <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-[#F4C430] inline-block"></span><span className="text-white/50">Sur devis</span></span>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="fade-up delay-1 lg:col-span-2 bg-white rounded-3xl overflow-hidden shadow-xl border border-[#0A1F44]/8">
            <div className="bg-[#0A1F44] px-6 py-4 grid grid-cols-4 text-xs font-bold tracking-widest uppercase text-white/40">
              <div>Ville</div>
              <div>Région</div>
              <div className="text-center">Délai</div>
              <div className="text-right">Livraison</div>
            </div>
            {ZONES.map((z, i) => (
              <div key={i} className={`grid grid-cols-4 px-6 py-3.5 border-b border-[#0A1F44]/5 last:border-0 items-center ${i % 2 === 0 ? '' : 'bg-[#f8f6f0]/50'} hover:bg-[#F4C430]/5 transition-colors`}>
                <div className="flex items-center gap-2 font-bold text-[#0A1F44] text-sm">
                  {z.inclus && <span className="w-2 h-2 rounded-full bg-[#16A34A] shrink-0"></span>}
                  {!z.inclus && <span className="w-2 h-2 rounded-full bg-[#F4C430] shrink-0"></span>}
                  {z.ville}
                </div>
                <div className="text-[#666] text-xs">{z.region}</div>
                <div className="text-center">
                  <span className="bg-[#0A1F44]/8 text-[#0A1F44] text-xs font-bold px-2 py-0.5 rounded-full">{z.delai}</span>
                </div>
                <div className="text-right">
                  <span className={`text-xs font-bold ${z.inclus ? 'text-[#16A34A]' : 'text-[#D4A017]'}`}>{z.prix}</span>
                </div>
              </div>
            ))}
            <div className="px-6 py-4 bg-[#F4C430]/5 border-t border-[#F4C430]/20 flex items-center justify-between">
              <p className="text-[#666] text-xs">* Prix livraison locale estimatifs selon poids et volume</p>
              <a href={waLink('Bonjour BF2B, je voudrais connaître le prix de livraison pour ma ville.')} target="_blank" rel="noopener noreferrer"
                className="text-[#D4A017] font-bold text-xs hover:underline whitespace-nowrap ml-4">Devis ma ville →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Mini Quiz Recommandation ──────────────────────────────────
function MiniQuiz() {
  const [step, setStep] = React.useState(0);
  const [answers, setAnswers] = React.useState({});
  const [result, setResult] = React.useState(null);

  function answer(key, val) {
    const newAnswers = { ...answers, [key]: val };
    setAnswers(newAnswers);
    if (step < 2) { setStep(step + 1); }
    else { computeResult(newAnswers); }
  }

  function computeResult(a) {
    const isUrgent = a.delai === 'urgent';
    const isHeavy = a.poids === 'lourd';
    const isSensible = a.type === 'sensible';
    if (isUrgent) {
      setResult({ mode: 'Aérien Express', icon: '✈️', price: isSensible ? '10 200 – 10 800 FCFA/kg' : '9 800 – 10 800 FCFA/kg', delai: '10–12 jours', msg: 'Bonjour BF2B, le quiz m\'a recommandé le fret AÉRIEN. Je voudrais un devis.', color: 'bg-[#0A1F44]', accent: 'text-[#F4C430]' });
    } else if (isHeavy) {
      setResult({ mode: 'Maritime LCL', icon: '🚢', price: isSensible ? '265 000 – 275 000 FCFA/CBM' : '250 000 – 265 000 FCFA/CBM', delai: '70–80 jours', msg: 'Bonjour BF2B, le quiz m\'a recommandé le MARITIME LCL. Je voudrais un devis.', color: 'bg-[#152A5C]', accent: 'text-[#F4C430]' });
    } else {
      setResult({ mode: 'Maritime LCL', icon: '🚢', price: '250 000 FCFA/CBM', delai: '70–80 jours', msg: 'Bonjour BF2B, le quiz m\'a recommandé le MARITIME LCL. Je voudrais un devis.', color: 'bg-[#152A5C]', accent: 'text-[#F4C430]' });
    }
  }

  function reset() { setStep(0); setAnswers({}); setResult(null); }

  const questions = [
    { key: 'delai', title: 'Quel est votre délai ?', options: [{ val: 'urgent', label: '⚡ Urgent (< 2 semaines)' }, { val: 'normal', label: '⏳ Je peux attendre (> 1 mois)' }] },
    { key: 'poids', title: 'Quelle quantité expédiez-vous ?', options: [{ val: 'leger', label: '📦 Moins de 50 kg' }, { val: 'lourd', label: '🏗 Plus de 50 kg / plusieurs CBM' }] },
    { key: 'type', title: 'Type de marchandise ?', options: [{ val: 'general', label: '📦 Général (textile, jouets, accessoires...)' }, { val: 'sensible', label: '⚡ Sensible (électronique, batterie, cosmétique...)' }] },
  ];

  return (
    <section id="quiz" className="bg-[#0A1F44] py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 dots-pattern opacity-15"></div>
      <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 fade-up">
          <div className="inline-block bg-[#F4C430]/10 text-[#F4C430] text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">Quiz</div>
          <h2 className="font-display font-black text-4xl text-white">Aérien ou Maritime ?<br/><span className="text-[#F4C430]">Je vous conseille en 3 clics</span></h2>
        </div>

        <div className="bg-[#152A5C] border border-white/10 rounded-3xl p-8 fade-up delay-1">
          {!result ? (
            <>
              {/* Progress */}
              <div className="flex gap-2 mb-8">
                {[0,1,2].map(i => (
                  <div key={i} className={`flex-1 h-1.5 rounded-full transition-all duration-300 ${i <= step ? 'bg-[#F4C430]' : 'bg-white/10'}`}></div>
                ))}
              </div>
              <div className="text-white/40 text-xs font-bold tracking-widest uppercase mb-3">Question {step + 1} / 3</div>
              <h3 className="font-display font-bold text-2xl text-white mb-6">{questions[step].title}</h3>
              <div className="space-y-3">
                {questions[step].options.map(opt => (
                  <button key={opt.val} onClick={() => answer(questions[step].key, opt.val)}
                    className="w-full text-left bg-white/5 hover:bg-[#F4C430]/10 border border-white/10 hover:border-[#F4C430]/40 text-white/80 hover:text-white font-medium px-6 py-4 rounded-2xl transition-all duration-200 text-base">
                    {opt.label}
                  </button>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center">
              <div className="text-6xl mb-4">{result.icon}</div>
              <div className="text-[#F4C430] text-xs font-bold tracking-widest uppercase mb-2">Notre recommandation</div>
              <h3 className="font-display font-black text-3xl text-white mb-4">{result.mode}</h3>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/5 rounded-2xl p-4">
                  <div className="text-white/40 text-xs uppercase tracking-widest mb-1">Tarif estimé</div>
                  <div className="text-[#F4C430] font-black text-sm">{result.price}</div>
                </div>
                <div className="bg-white/5 rounded-2xl p-4">
                  <div className="text-white/40 text-xs uppercase tracking-widest mb-1">Délai</div>
                  <div className="text-white font-black text-sm">{result.delai}</div>
                </div>
              </div>
              <a href={waLink(result.msg)} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#1eb855] text-white font-black py-4 rounded-2xl transition-all mb-3">
                Demander ce devis sur WhatsApp
              </a>
              <button onClick={reset} className="text-white/30 hover:text-white/60 text-sm transition-colors">
                Recommencer le quiz →
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// ── Galerie Photos (SVG Placeholders) ─────────────────────────
function GalerieSection() {
  const items = [
    { title: 'Conteneur en mer', sub: 'Transport maritime international', grad: 'from-[#0A1F44] to-[#1E3A6F]', img: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600&q=80' },
    { title: 'Entrepôt logistique', sub: 'Préparation marchandises Chine', grad: 'from-[#8B6914] to-[#D4A017]', img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80' },
    { title: 'Port de Dakar', sub: 'Arrivée Sénégal · DKR', grad: 'from-[#152A5C] to-[#0A1F44]', img: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=600&q=80' },
    { title: 'Livraison colis', sub: 'Remise client finale', grad: 'from-[#16A34A]/40 to-[#0A1F44]', img: 'https://images.unsplash.com/photo-1601628828688-632f38a5a7d0?w=600&q=80' },
    { title: 'Fret aérien', sub: 'Chargement avion cargo', grad: 'from-[#DC2626]/30 to-[#0A1F44]', img: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=80' },
    { title: 'Marché Yiwu', sub: 'Sourcing Chine — Yiwu', grad: 'from-[#F4C430]/30 to-[#0A1F44]', img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80' },
  ];
  return (
    <section id="galerie" className="bg-[#070F22] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 fade-up">
          <div className="inline-block bg-[#F4C430]/10 text-[#F4C430] text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">Galerie</div>
          <h2 className="font-display font-black text-4xl lg:text-5xl text-white">BF2B en <span className="text-[#F4C430]">images</span></h2>
          <p className="text-white/40 mt-3 text-sm">Photos réelles à venir — contactez-nous pour les envoyer</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {items.map((item, i) => (
            <div key={i} className={`fade-up delay-${(i%3)+1} group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer hover:scale-[1.02] transition-transform duration-300`}>
              <img src={item.img} alt={item.title} className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="text-white font-bold text-sm">{item.title}</div>
                <div className="text-white/60 text-xs mt-0.5">{item.sub}</div>
              </div>
              <div className="absolute inset-0 bg-[#F4C430]/0 group-hover:bg-[#F4C430]/10 transition-colors duration-300 border-2 border-transparent group-hover:border-[#F4C430]/40 rounded-2xl"></div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8 fade-up">
          <a href={waLink('Bonjour BF2B, je voudrais voir des photos réelles de vos entrepôts et livraisons.')} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#F4C430] border border-[#F4C430]/30 hover:border-[#F4C430] font-bold text-sm px-6 py-3 rounded-xl transition-all">
            Voir nos photos sur WhatsApp →
          </a>
        </div>
      </div>
    </section>
  );
}

// ── Sourcing Villes ───────────────────────────────────────────
function SourcingVilles() {
  const villes = [
    { name: 'Yiwu', emoji: '👗', spec: 'Textile, accessoires, jouets, articles ménagers', why: 'Plus grand marché de gros au monde. Prix usine imbattables.', ideal: 'Commerçants mode & accessoires' },
    { name: 'Shenzhen', emoji: '📱', spec: 'Électronique, smartphones, gadgets, LED, batteries', why: 'Capitale mondiale de l\'électronique. Tous les composants disponibles.', ideal: 'Revendeurs électronique' },
    { name: 'Guangzhou', emoji: '💄', spec: 'Cosmétiques, vêtements, chaussures, maroquinerie', why: 'Capital de la mode et des cosmétiques en Chine.', ideal: 'Boutiques beauté & mode' },
    { name: 'Foshan', emoji: '🪑', spec: 'Mobilier, électroménager, céramique, matériaux', why: 'Leader mondial du mobilier et de la céramique.', ideal: 'Décoration & ameublement' },
  ];
  const [active, setActive] = React.useState(0);
  return (
    <section id="sourcing-villes" className="bg-[#f8f6f0] py-20 lg:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 fade-up">
          <div className="inline-block bg-[#0A1F44]/8 text-[#0A1F44] text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">Sourcing — Nos villes</div>
          <h2 className="font-display font-black text-4xl lg:text-5xl text-[#0A1F44]">
            Les meilleures villes<br/><span className="text-[#D4A017]">pour votre sourcing en Chine</span>
          </h2>
          <p className="text-[#666] mt-3 text-base">BF2B connaît ces marchés. Nous sourçons pour vous au meilleur prix.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* City tabs */}
          <div className="space-y-3 fade-up">
            {villes.map((v, i) => (
              <button key={i} onClick={() => setActive(i)}
                className={`w-full text-left p-5 rounded-2xl border-2 transition-all duration-200 ${active === i ? 'border-[#F4C430] bg-[#0A1F44] text-white' : 'border-[#0A1F44]/8 bg-white text-[#0A1F44] hover:border-[#F4C430]/30'}`}>
                <div className="flex items-center gap-4">
                  <span className="text-3xl">{v.emoji}</span>
                  <div>
                    <div className={`font-display font-bold text-lg ${active === i ? 'text-[#F4C430]' : 'text-[#0A1F44]'}`}>{v.name}</div>
                    <div className={`text-xs mt-0.5 ${active === i ? 'text-white/50' : 'text-[#666]'}`}>{v.ideal}</div>
                  </div>
                </div>
              </button>
            ))}
          </div>
          {/* Detail */}
          <div className="fade-up delay-1 bg-[#0A1F44] rounded-3xl p-8 text-white sticky top-24">
            <div className="text-5xl mb-4">{villes[active].emoji}</div>
            <h3 className="font-display font-black text-3xl text-[#F4C430] mb-2">{villes[active].name}</h3>
            <div className="text-white/40 text-xs tracking-widest uppercase mb-4">{villes[active].ideal}</div>
            <div className="space-y-4">
              <div>
                <div className="text-white/40 text-[10px] font-bold tracking-widest uppercase mb-2">Spécialités</div>
                <p className="text-white/70 text-sm leading-relaxed">{villes[active].spec}</p>
              </div>
              <div>
                <div className="text-white/40 text-[10px] font-bold tracking-widest uppercase mb-2">Pourquoi cette ville ?</div>
                <p className="text-white/70 text-sm leading-relaxed">{villes[active].why}</p>
              </div>
            </div>
            <a href={waLink(`Bonjour BF2B, je veux du sourcing à ${villes[active].name} en Chine. Pouvez-vous m'aider ?`)}
              target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 mt-6 bg-[#F4C430] hover:bg-[#D4A017] text-[#0A1F44] font-black py-3 rounded-xl transition-all hover:scale-105 text-sm">
              Sourcing à {villes[active].name} →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Compteur clients semaine ──────────────────────────────────
function LiveCounter() {
  const [count, setCount] = React.useState(12);
  React.useEffect(() => {
    const id = setInterval(() => {
      setCount(c => {
        const base = 12;
        const rand = Math.floor(Math.random() * 3);
        return base + rand;
      });
    }, 8000);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="bg-[#16A34A]/10 border border-[#16A34A]/30 rounded-2xl px-6 py-3 flex items-center gap-3 w-fit mx-auto mt-6">
      <span className="w-2.5 h-2.5 rounded-full bg-[#16A34A] animate-pulse shrink-0"></span>
      <span className="text-[#16A34A] font-bold text-sm">
        <span className="font-black text-lg">{count}</span> clients servis cette semaine
      </span>
    </div>
  );
}

Object.assign(window, { SplashScreen, ScrollToTop, ZonesLivraison, MiniQuiz, GalerieSection, SourcingVilles, LiveCounter });
