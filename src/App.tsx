import { BrowserRouter, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import CadastroPage from './pages/CadastroPage';
import CheckoutPage from './pages/CheckoutPage';
import PromocaoPage from './pages/PromocaoPage';
import AdminPage from './pages/AdminPage';
import ComoFuncionaPage from './pages/ComoFuncionaPage';

function Navigation() {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Minimalist conversion-focused navbar
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 md:px-16 h-20 bg-surface/90 backdrop-blur-md border-b border-outline-variant/20 transition-all">
      <div className="flex items-center justify-between max-w-[1400px] mx-auto w-full">
        <Link to="/" className="flex items-center gap-3 group">
          <img 
            alt="Cielo Logo" 
            className="h-[34px] w-auto object-contain transition-transform group-hover:scale-105 mix-blend-multiply" 
            src="/logo.png"
          />
        </Link>
        
        <div className="flex items-center gap-6">
          {location.pathname === '/' && (
            <button 
              onClick={() => navigate('/cadastro')}
              className="bg-gradient-to-r from-[#00658d] to-[#00a1e0] text-white px-6 md:px-8 py-2 md:py-3 rounded-full font-bold text-sm md:text-[15px] tracking-wide shadow-[0_4px_12px_rgba(0,101,141,0.3)] hover:shadow-[0_8px_20px_rgba(0,101,141,0.5)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 whitespace-nowrap"
            >
              Participar Agora
            </button>
          )}
          {location.pathname !== '/' && (
            <Link to="/" className="text-secondary hover:text-primary transition-colors text-label-md font-semibold tracking-wide">
              Voltar ao Início
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="bg-background text-on-surface min-h-screen flex flex-col font-['Montserrat']">
        <Navigation />

        {/* Content */}
        <div className="flex-1 mt-20 flex flex-col">
          <Routes>
            <Route path="/" element={<PromocaoPage />} />
            <Route path="/cadastro" element={<CadastroPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/como-funciona" element={<ComoFuncionaPage />} />
          </Routes>
        </div>

        {/* Footer Shell */}
        <footer className="w-full pt-20 pb-10 px-8 md:px-16 bg-[#0f172a] text-slate-300 mt-auto">
          <div className="max-w-[1400px] mx-auto w-full flex flex-col gap-16">
            <div className="flex flex-col md:flex-row justify-between items-center gap-12">
              <div className="flex flex-col items-center md:items-start gap-6">
                <img alt="Cielo" className="h-[32px] w-auto object-contain brightness-0 invert opacity-90" src="/logo.png"/>
                <p className="text-sm font-medium text-slate-400 max-w-sm text-center md:text-left leading-relaxed">
                  A Cielo é a empresa de tecnologia e serviços para o varejo que lidera o segmento de pagamentos eletrônicos no Brasil.
                </p>
              </div>
              
              <div className="flex items-center gap-6 flex-wrap justify-center bg-white/5 p-4 rounded-xl border border-white/10">
                <img src="/selo-site-protegido-ssl.webp" alt="Site Protegido SSL" className="h-12 object-contain hover:scale-105 transition-transform duration-300 drop-shadow-lg" />
                
                {/* Modern PCI DSS Seal */}
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 hover:bg-emerald-500/20 transition-all cursor-default group">
                  <span className="material-symbols-outlined text-emerald-400 group-hover:scale-110 transition-transform">verified_user</span>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-emerald-300 tracking-widest uppercase">PCI DSS</span>
                    <span className="text-[8px] text-emerald-400/80 uppercase font-semibold">100% Compliant</span>
                  </div>
                </div>
                
                {/* Reclame Aqui or similar Trust Badge */}
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500/10 border border-blue-500/20 hover:bg-blue-500/20 transition-all cursor-default group">
                  <span className="material-symbols-outlined text-blue-400 group-hover:scale-110 transition-transform">security</span>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-blue-300 tracking-wide uppercase">Google Safe</span>
                    <span className="text-[8px] text-blue-400/80 uppercase font-semibold">Browsing Verified</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/10">
              <div className="flex flex-col items-center md:items-start gap-2">
                <p className="text-xs font-medium text-slate-500">© 2026 Cielo. Todos os direitos reservados.</p>
                <a href="mailto:cielo.contato@cielosuporte.com" className="text-xs text-slate-400 hover:text-white transition-colors flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">mail</span> cielo.contato@cielosuporte.com
                </a>
              </div>
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                <a 
                  href="https://www.instagram.com/cielooficial" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-2 text-slate-400 hover:text-[#E1306C] transition-colors group"
                >
                  <div className="w-8 h-8 rounded-full bg-white/5 group-hover:bg-[#E1306C]/10 flex items-center justify-center transition-colors">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                    </svg>
                  </div>
                  <span className="text-xs font-semibold tracking-wide uppercase">Instagram</span>
                </a>
                <div className="flex gap-4">
                  <a className="text-xs text-slate-400 hover:text-white transition-colors tracking-wide uppercase font-semibold" href="#">Termos</a>
                  <a className="text-xs text-slate-400 hover:text-white transition-colors tracking-wide uppercase font-semibold" href="#">Privacidade</a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
