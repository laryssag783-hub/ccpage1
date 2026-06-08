import { useNavigate } from 'react-router-dom';

export default function ComoFuncionaPage() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen flex flex-col items-center bg-[#f8f9fa] pt-12 md:pt-24 pb-16 px-6">
      <div className="max-w-[800px] w-full bg-white p-8 md:p-12 rounded-[2rem] shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] border border-slate-50">
        <h1 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-8 text-center tracking-tight">
          Promoção Exclusiva para Clientes Cielo
        </h1>
        
        <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
          <p>
            Preparamos uma super promoção para beneficiar tanto novos quanto antigos clientes da Cielo!
          </p>
          
          <p>
            Ao realizar seu cadastro, você estará participando de sorteios com diversos prêmios incríveis. Para garantir a segurança da promoção e evitar inscrições duplicadas, é cobrada uma taxa simbólica de <strong className="text-slate-800">R$ 11,30</strong> por ticket.
          </p>
          
          <p>
            Após a confirmação, você receberá seu número de participação (ticket). Guarde esse número com atenção, pois ele será o seu comprovante oficial caso seja contemplado em algum dos sorteios.
          </p>
          
          <div className="bg-[#f8f9fa] p-8 rounded-2xl border border-slate-100 my-10">
            <h2 className="text-xl font-bold text-slate-900 mb-6">Entre os prêmios disponíveis estão:</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-medium text-slate-700">
              <li className="flex items-center gap-3"><span className="text-2xl drop-shadow-sm">📱</span> iPhone 17</li>
              <li className="flex items-center gap-3"><span className="text-2xl drop-shadow-sm">📺</span> Smart TV 55"</li>
              <li className="flex items-center gap-3"><span className="text-2xl drop-shadow-sm">🍽️</span> Micro-ondas</li>
              <li className="flex items-center gap-3"><span className="text-2xl drop-shadow-sm">🔊</span> Caixa de som</li>
              <li className="flex items-center gap-3"><span className="text-2xl drop-shadow-sm">❄️</span> Geladeira</li>
              <li className="flex items-center gap-3"><span className="text-2xl drop-shadow-sm">🔥</span> Fogão</li>
              <li className="flex items-center gap-3 col-span-1 sm:col-span-2 mt-2"><span className="text-2xl drop-shadow-sm">🎁</span> E muitos outros prêmios!</li>
            </ul>
          </div>
          
          <p className="text-center font-bold text-2xl text-[#00658d] mt-8">
            Não perca essa oportunidade. Garanta seu ticket e participe!
          </p>
        </div>

        <div className="mt-12 flex justify-center">
          <button
            onClick={() => navigate('/cadastro')}
            className="w-full sm:w-auto bg-gradient-to-r from-[#00658d] to-[#00a1e0] text-white px-10 py-5 rounded-full font-bold text-lg shadow-[0_8px_20px_rgba(0,101,141,0.4)] hover:shadow-[0_12px_25px_rgba(0,101,141,0.6)] hover:-translate-y-1 active:translate-y-0 transition-all duration-300 ring-4 ring-transparent hover:ring-[#00a1e0]/30"
          >
            Garantir minha vaga agora
          </button>
        </div>
      </div>
    </main>
  );
}
