
/* ============================================================
   BF2B TRADING — WhatsApp Floating Widget
   ============================================================ */

const QUICK_MSGS = [
  { label: 'Devis aérien 30 kg', msg: 'Bonjour BF2B, combien coûte un envoi aérien de 30 kg depuis la Chine ?' },
  { label: 'Délai maritime', msg: 'Bonjour BF2B, quel est le délai de livraison maritime ?' },
  { label: 'Code DKR26072', msg: 'Bonjour BF2B, comment fonctionne le code colis DKR26072 ?' },
  { label: 'Devis personnalisé', msg: 'Bonjour BF2B, je voudrais un devis personnalisé pour mon expédition.' },
];

function WhatsAppWidget() {
  const [open, setOpen] = React.useState(false);
  const [typed, setTyped] = React.useState('');

  function sendCustom(e) {
    e.preventDefault();
    if (!typed.trim()) return;
    window.open(waLink(typed), '_blank');
    setTyped('');
    setOpen(false);
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Chat panel */}
      <div className={`transition-all duration-300 origin-bottom-right ${open ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4 pointer-events-none'}`}>
        <div className="bg-white rounded-3xl shadow-2xl w-80 overflow-hidden border border-[#0A1F44]/10">
          {/* Header */}
          <div className="bg-[#0A1F44] px-5 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#F4C430] rounded-full flex items-center justify-center font-black text-[#0A1F44] text-sm">BF</div>
              <div>
                <div className="text-white font-bold text-sm">BF2B TRADING</div>
                <div className="flex items-center gap-1.5 text-white/50 text-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse"></span>
                  En ligne · Répond en 2h
                </div>
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="text-white/40 hover:text-white transition-colors p-1">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>

          {/* Welcome bubble */}
          <div className="px-5 pt-4 pb-2">
            <div className="bg-[#f0f0f0] rounded-2xl rounded-tl-sm px-4 py-3 text-sm text-[#333] max-w-[85%]">
              Bonjour ! 👋 Je suis BF2B TRADING. Comment puis-je vous aider aujourd'hui ?
            </div>
          </div>

          {/* Quick questions */}
          <div className="px-5 py-3 space-y-2">
            <p className="text-[#999] text-[11px] font-medium tracking-wide uppercase">Questions rapides</p>
            {QUICK_MSGS.map((q, i) => (
              <a key={i} href={waLink(q.msg)} target="_blank" rel="noopener noreferrer"
                className="block bg-[#f8f8f8] hover:bg-[#F4C430]/10 border border-[#0A1F44]/8 hover:border-[#F4C430]/30 rounded-xl px-4 py-2.5 text-sm text-[#0A1F44] font-medium transition-all duration-150 cursor-pointer">
                {q.label} →
              </a>
            ))}
          </div>

          {/* Custom input */}
          <form onSubmit={sendCustom} className="px-5 pb-5 pt-2">
            <div className="flex gap-2">
              <input value={typed} onChange={e => setTyped(e.target.value)}
                placeholder="Votre question..."
                className="flex-1 bg-[#f8f8f8] border border-[#0A1F44]/10 rounded-xl px-4 py-2.5 text-sm text-[#0A1F44] focus:outline-none focus:border-[#F4C430]/50 placeholder-[#999]" />
              <button type="submit"
                className="bg-[#25D366] hover:bg-[#1eb855] text-white w-10 h-10 rounded-xl flex items-center justify-center transition-colors shrink-0">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Floating button */}
      <button onClick={() => setOpen(!open)}
        className="relative w-16 h-16 bg-[#25D366] hover:bg-[#1eb855] rounded-full shadow-2xl shadow-[#25D366]/40 flex items-center justify-center transition-all duration-300 hover:scale-110"
        aria-label="Ouvrir WhatsApp">
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></span>
        {open ? (
          <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        ) : (
          <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.523 5.851L.057 23.885l6.196-1.454A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.87 9.87 0 01-5.017-1.372l-.36-.214-3.677.864.927-3.584-.235-.369A9.86 9.86 0 012.118 12C2.118 6.54 6.54 2.118 12 2.118c5.46 0 9.882 4.422 9.882 9.882 0 5.46-4.422 9.882-9.882 9.882z"/>
          </svg>
        )}
      </button>
    </div>
  );
}

Object.assign(window, { WhatsAppWidget });
