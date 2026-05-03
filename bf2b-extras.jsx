/* ============================================================
   BF2B TRADING — About + Blog + Catalogue
   ============================================================ */

// ── About Section ────────────────────────────────────────────
function AboutSection() {
  return (
    <section id="a-propos" className="bg-[#f8f6f0] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Visual side */}
          <div className="fade-up relative">
            <div className="relative bg-[#0A1F44] rounded-3xl p-10 overflow-hidden">
              <div className="absolute inset-0 dots-pattern opacity-20"></div>
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-28 h-28 rounded-full bg-[#F4C430]/20 border-2 border-[#F4C430]/40 flex items-center justify-center mb-6 float-anim">
                  <img src="logo.png" alt="BF2B" className="w-20 h-20 object-contain" />
                </div>
                <div className="font-display font-black text-3xl text-white mb-1">Khady <span className="text-[#F4C430]">BA</span></div>
                <div className="text-[#F4C430]/70 text-sm tracking-widest uppercase mt-2 mb-6">Gérante & Fondatrice</div>
                <div className="grid grid-cols-2 gap-4 w-full">
                  {[
                    { label: 'Fondée', val: '2015' },
                    { label: 'Ville', val: 'Mbour' },
                    { label: 'NINEA', val: '011251965' },
                    { label: 'RCCM', val: '2024.A.1532' },
                  ].map(item => (
                    <div key={item.label} className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-center">
                      <div className="text-white/40 text-[10px] tracking-widest uppercase">{item.label}</div>
                      <div className="font-mono font-bold text-[#F4C430] text-sm mt-1">{item.val}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Decorative tag */}
            <div className="absolute -bottom-4 -right-4 bg-[#F4C430] text-[#0A1F44] font-black text-xs px-4 py-2 rounded-xl shadow-lg tracking-wide">
              ✈ CHINA → SENEGAL
            </div>
          </div>

          {/* Text side */}
          <div className="fade-up delay-1">
            <div className="inline-block bg-[#0A1F44]/8 text-[#0A1F44] text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5">Notre histoire</div>
            <h2 className="font-display font-black text-4xl lg:text-5xl text-[#0A1F44] leading-tight mb-6">
              Né du besoin.<br/>Construit pour <span className="text-[#D4A017]">les commerçants sénégalais.</span>
            </h2>
            <div className="space-y-4 text-[#444] text-base leading-relaxed">
              <p>BF2B TRADING SUARL est née d'un constat simple : importer depuis la Chine au Sénégal était trop compliqué, trop opaque, et trop risqué pour les petits et moyens commerçants.</p>
              <p>Fondée en 2015 à Mbour par Khady BA, BF2B TRADING TRANS s'est fixé une mission claire : rendre le commerce Chine-Sénégal <strong className="text-[#0A1F44]">accessible, transparent et fiable</strong> pour tous.</p>
              <p>Grâce à notre réseau d'entrepôts partenaires en Chine (Guangzhou et Foshan), nous offrons des solutions adaptées à chaque profil : du commerçant individuel jusqu'à la PME.</p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              {[
                { icon: '🔒', title: 'Confiance', desc: 'Transparence totale sur les prix et les délais.' },
                { icon: '⚡', title: 'Réactivité', desc: 'Réponse WhatsApp en moins de 2 heures.' },
                { icon: '🤝', title: 'Proximité', desc: 'Mbour, Sénégal — nous sommes là pour vous.' },
              ].map(v => (
                <div key={v.title} className="bg-white border border-[#0A1F44]/8 rounded-2xl p-5 hover:border-[#F4C430]/40 transition-all hover:shadow-lg">
                  <div className="text-2xl mb-2">{v.icon}</div>
                  <div className="font-bold text-[#0A1F44] text-sm mb-1">{v.title}</div>
                  <div className="text-[#666] text-xs leading-relaxed">{v.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Blog Teaser ───────────────────────────────────────────────
const BLOG_POSTS = [
  {
    slug: 'importer-chine-senegal-2026',
    cat: 'Guide',
    title: 'Comment importer de Chine au Sénégal en 2026',
    excerpt: 'Fournisseurs, logistique, douanes, paiement... Le guide complet pour les commerçants sénégalais qui veulent se lancer.',
    date: '15 avril 2026',
    read: '8 min',
    grad: 'from-[#0A1F44] to-[#1E3A6F]',
  },
  {
    slug: 'aerien-vs-maritime',
    cat: 'Conseils',
    title: 'Aérien vs Maritime : que choisir pour votre business ?',
    excerpt: 'Délais, coûts, types de marchandises — tout ce qu\'il faut savoir pour choisir le bon mode d\'expédition.',
    date: '8 avril 2026',
    read: '5 min',
    grad: 'from-[#8B6914] to-[#D4A017]',
  },
  {
    slug: 'erreurs-alibaba',
    cat: 'Éviter les pièges',
    title: 'Les 10 erreurs à éviter quand on importe d\'Alibaba',
    excerpt: 'Arnaques, mauvaise qualité, retards... Nos experts partagent les erreurs les plus fréquentes et comment les éviter.',
    date: '1 avril 2026',
    read: '6 min',
    grad: 'from-[#1a1a2e] to-[#16213e]',
  },
];

function BlogTeaser() {
  return (
    <section id="blog" className="bg-[#070F22] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4 fade-up">
          <div>
            <div className="inline-block bg-[#F4C430]/10 text-[#F4C430] text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">Blog & Conseils</div>
            <h2 className="font-display font-black text-4xl lg:text-5xl text-white">Ressources gratuites</h2>
            <p className="text-white/40 mt-2 text-base">Guides pratiques pour importer depuis la Chine.</p>
          </div>
          <a href="#contact" className="text-[#F4C430] hover:text-white border border-[#F4C430]/30 hover:border-white/30 font-bold text-sm px-5 py-2.5 rounded-xl transition-all shrink-0">
            Tous les articles →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post, i) => (
            <article key={post.slug} className={`fade-up delay-${i + 1} group bg-[#0D1B35] border border-white/10 rounded-3xl overflow-hidden hover:border-[#F4C430]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#F4C430]/5 flex flex-col`}>
              {/* Gradient image placeholder */}
              <div className={`h-44 bg-gradient-to-br ${post.grad} relative flex items-center justify-center overflow-hidden`}>
                <div className="absolute inset-0 dots-pattern opacity-30"></div>
                <div className="relative z-10 text-center">
                  <img src="logo.png" alt="" className="w-12 h-12 object-contain opacity-40 mx-auto" />
                </div>
                <div className="absolute top-4 left-4 bg-[#F4C430] text-[#0A1F44] text-[10px] font-black px-3 py-1 rounded-full tracking-widest uppercase">{post.cat}</div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-display font-bold text-lg text-white leading-snug mb-3 group-hover:text-[#F4C430] transition-colors">{post.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed flex-1 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <div className="text-white/30 text-xs">{post.date} · {post.read} de lecture</div>
                  <a href={waLink(`Bonjour BF2B, je veux lire l'article "${post.title}"`)} target="_blank" rel="noopener noreferrer"
                    className="text-[#F4C430] text-xs font-bold hover:underline">Lire →</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Catalogue Produits ───────────────────────────────────────
const PRODUCTS = [
  { name: 'Pack 50 Montres Connectées', cat: 'Électronique', price: '185 000', unit: 'le lot', origin: 'Shenzhen', stock: true, img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80' },
  { name: 'Lot 100 Sacs à Main Femme', cat: 'Mode & Accessoires', price: '220 000', unit: 'le lot', origin: 'Guangzhou', stock: true, img: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&q=80' },
  { name: 'Box 200 Chargeurs USB-C 65W', cat: 'Électronique', price: '95 000', unit: 'le lot', origin: 'Shenzhen', stock: true, img: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&q=80' },
  { name: 'Lot 50 Robots Aspirateurs', cat: 'Électroménager', price: '1 250 000', unit: 'le lot', origin: 'Foshan', stock: false, img: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?w=400&q=80' },
  { name: 'Kit 100 Batteries 10 000 mAh', cat: 'Électronique', price: '180 000', unit: 'le lot', origin: 'Shenzhen', stock: true, img: 'https://images.unsplash.com/photo-1585338107529-13afc5f02586?w=400&q=80' },
];

function CatalogueSection() {
  const [filter, setFilter] = React.useState('Tous');
  const cats = ['Tous', 'Électronique', 'Mode & Accessoires', 'Électroménager'];
  const filtered = filter === 'Tous' ? PRODUCTS : PRODUCTS.filter(p => p.cat === filter);

  return (
    <section id="catalogue" className="bg-[#f8f6f0] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 fade-up">
          <div className="inline-block bg-[#0A1F44]/8 text-[#0A1F44] text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">Catalogue BF2B</div>
          <h2 className="font-display font-black text-4xl lg:text-5xl text-[#0A1F44]">
            Produits disponibles <span className="text-[#D4A017]">en stock</span>
          </h2>
          <p className="text-[#666] mt-3 text-base max-w-xl mx-auto">Commandez directement nos lots importés de Chine. Prix grossiste, livraison incluse à Dakar/Mbour.</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 justify-center mb-10 fade-up">
          {cats.map(c => (
            <button key={c} onClick={() => setFilter(c)}
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-200 ${filter === c ? 'bg-[#0A1F44] text-white shadow-lg' : 'bg-white border border-[#0A1F44]/10 text-[#0A1F44]/60 hover:border-[#0A1F44]/30'}`}>
              {c}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {filtered.map((p, i) => (
            <div key={p.name} className={`fade-up delay-${(i % 4) + 1} group bg-white border border-[#0A1F44]/8 rounded-2xl overflow-hidden hover:border-[#F4C430]/40 hover:shadow-xl hover:shadow-[#F4C430]/10 transition-all duration-300 hover:-translate-y-1 flex flex-col`}>
              {/* Product image */}
              <div className="h-36 relative overflow-hidden">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover" loading="lazy"
                  onError={e => { e.target.style.display='none'; e.target.parentNode.style.background='linear-gradient(135deg,#0A1F44,#152A5C)'; }} />
                <div className={`absolute top-3 right-3 text-[10px] font-black px-2 py-1 rounded-full ${p.stock ? 'bg-[#16A34A]/90 text-white' : 'bg-red-500/80 text-white'}`}>
                  {p.stock ? '✓ En stock' : '⏳ Sur commande'}
                </div>
              </div>
              <div className="p-4 flex flex-col flex-1">
                <div className="text-[#F4C430] text-[10px] font-bold tracking-widest uppercase mb-1">{p.cat}</div>
                <h3 className="font-bold text-[#0A1F44] text-sm leading-snug mb-2 flex-1">{p.name}</h3>
                <div className="text-[#666] text-xs mb-3">📍 Origine : {p.origin}</div>
                <div className="font-display font-black text-lg text-[#D4A017] mb-3">{p.price} <span className="text-xs font-normal text-[#666]">FCFA</span></div>
                <div className="text-[#666] text-xs mb-4">{p.unit}</div>
                <a href={waLink(`Bonjour BF2B, je suis intéressé par le produit : ${p.name}. Prix : ${p.price} FCFA ${p.unit}. Pouvez-vous me donner plus de détails ?`)}
                  target="_blank" rel="noopener noreferrer"
                  className="block text-center bg-[#0A1F44] group-hover:bg-[#F4C430] text-white group-hover:text-[#0A1F44] font-bold text-xs py-2.5 rounded-xl transition-all duration-300">
                  Commander →
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 fade-up">
          <a href={waLink('Bonjour BF2B, je souhaite voir votre catalogue complet de produits.')} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-[#0A1F44] text-[#0A1F44] hover:bg-[#0A1F44] hover:text-white font-bold px-8 py-3 rounded-xl transition-all text-sm">
            Voir tout le catalogue sur WhatsApp →
          </a>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { AboutSection, CatalogueSection });
