import { useNavigate } from 'react-router-dom';

export default function PromocaoPage() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen flex flex-col items-center bg-[#f8f9fa] overflow-hidden">
      {/* Hero Section: Editorial Minimalist Fintech */}
      <section className="w-full min-h-[85vh] px-4 sm:px-8 md:px-16 flex items-center justify-center relative bg-gradient-to-b from-white to-[#f0f4f8]">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

        <div className="max-w-[1400px] w-full flex flex-col lg:flex-row items-center lg:justify-start gap-8 lg:gap-16 z-10 pt-10">

          {/* Left Column: Text & CTA */}
          <div className="flex flex-col items-start space-y-8 max-w-xl shrink-0 z-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm tracking-wide">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              Acesso Exclusivo
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.2] lg:leading-[1.1] font-bold text-[#0f172a] tracking-tight">
              A revolução do seu negócio começa <span className="text-primary">agora.</span>
            </h1>

            <p className="text-lg lg:text-[1.25rem] leading-relaxed text-[#475569] font-medium">
              O Show de Prêmios Cielo recompensa quem movimenta a economia. Concorra a prêmios gigantes e eleve seu patamar.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <button
                onClick={() => navigate('/cadastro')}
                className="w-full sm:w-auto bg-gradient-to-r from-[#00658d] to-[#00a1e0] text-white px-10 py-5 rounded-full font-bold text-lg shadow-[0_8px_20px_rgba(0,101,141,0.4)] hover:shadow-[0_12px_25px_rgba(0,101,141,0.6)] hover:-translate-y-1 active:translate-y-0 transition-all duration-300 ring-4 ring-transparent hover:ring-[#00a1e0]/30"
              >
                Garantir minha vaga
              </button>
              <button
                onClick={() => navigate('/como-funciona')}
                className="w-full sm:w-auto bg-slate-50 text-[#64748b] px-8 py-5 rounded-full font-bold text-lg border border-transparent hover:border-slate-200 hover:bg-slate-200/70 hover:text-[#334155] active:bg-slate-300 transition-all duration-300 flex items-center justify-center gap-2 shadow-sm hover:shadow"
              >
                Entenda como funciona
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </button>
            </div>

            {/* Floating metric cards */}
            <div className="mt-8 flex flex-col sm:flex-row flex-wrap items-center gap-4 w-full">
              {/* Card 1: Prêmios */}
              <div className="bg-white/90 backdrop-blur-xl p-5 rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-slate-100 w-full sm:w-auto flex-1 flex items-center gap-4 transition-transform hover:-translate-y-1 duration-300">
                <div className="w-12 h-12 rounded-full bg-[#f1f5f9] flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined">workspace_premium</span>
                </div>
                <div className="whitespace-nowrap">
                  <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Prêmios Ativos</p>
                  <p className="text-xl font-bold text-slate-900">+ R$ 5 Milhões</p>
                </div>
              </div>

              {/* Card 2: Ganhadores */}
              <div className="bg-white/90 backdrop-blur-xl p-5 rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-slate-100 w-full sm:w-auto flex-1 flex items-center gap-4 transition-transform hover:-translate-y-1 duration-300">
                <div className="w-12 h-12 rounded-full bg-[#f1f5f9] flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined">groups</span>
                </div>
                <div className="whitespace-nowrap">
                  <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Já Contemplados</p>
                  <p className="text-xl font-bold text-slate-900">+ 100.000</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: High-End Hero Image */}
          <div className="relative w-full flex justify-center lg:justify-start items-center">
            {/* Você pode alterar o w-[850px] abaixo para o tamanho exato que desejar! (ex: w-[800px], w-[650px]) */}
            {/* Também adicionei um lg:-ml-8 para puxar a imagem ainda mais para a esquerda. Se quiser mais perto, aumente para -ml-16, -ml-24, etc */}
            <div className="relative w-[100%] lg:w-[850px] max-w-none transform transition-transform hover:scale-[1.02] duration-700 lg:-ml-8">
              <img
                src="/hero-image.png"
                alt="Show de Prêmios Cielo"
                className="w-full h-auto object-contain object-center drop-shadow-[0_25px_35px_rgba(0,0,0,0.25)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Info Section: Structural whitespace and minimal icons */}
      <section className="w-full py-32 px-8 md:px-16 bg-white flex justify-center border-t border-slate-100">
        <div className="max-w-[1400px] w-full grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="flex flex-col items-start group">
            <div className="w-16 h-16 rounded-2xl bg-[#f8fafc] flex items-center justify-center text-primary mb-6 transition-colors group-hover:bg-primary group-hover:text-white duration-300">
              <span className="material-symbols-outlined text-3xl">storefront</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Potência Cielo</h3>
            <p className="text-lg text-slate-500 leading-relaxed">
              Junte-se à rede que mais entende do varejo nacional. Mais do que maquininhas, entregamos inteligência.
            </p>
          </div>

          <div className="flex flex-col items-start group">
            <div className="w-16 h-16 rounded-2xl bg-[#f8fafc] flex items-center justify-center text-primary mb-6 transition-colors group-hover:bg-primary group-hover:text-white duration-300">
              <span className="material-symbols-outlined text-3xl">payments</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Venda e Lucre</h3>
            <p className="text-lg text-slate-500 leading-relaxed">
              Transforme cada transação em pontos. A matemática é simples: quanto mais você vende, mais você acumula.
            </p>
          </div>

          <div className="flex flex-col items-start group">
            <div className="w-16 h-16 rounded-2xl bg-[#f8fafc] flex items-center justify-center text-primary mb-6 transition-colors group-hover:bg-primary group-hover:text-white duration-300">
              <span className="material-symbols-outlined text-3xl">card_giftcard</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Recompensas Reais</h3>
            <p className="text-lg text-slate-500 leading-relaxed">
              Resgate prêmios gigantes. Viagens, eletrônicos de luxo e experiências desenhadas para o seu momento.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section: Social Proof & Persuasive Copy */}
      <section className="w-full py-24 px-8 md:px-16 bg-[#f8f9fa] flex justify-center border-t border-slate-100 overflow-hidden">
        <div className="max-w-[1400px] w-full flex flex-col items-center">
          <div className="text-center max-w-2xl mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-4 tracking-tight">
              Quem movimenta com Cielo, <span className="text-[#00658d]">muda de vida.</span>
            </h2>
            <p className="text-lg text-slate-500 font-medium">
              Histórias reais de empreendedores que transformaram a realidade dos seus negócios após serem contemplados no Show de Prêmios.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
            {/* Review 1 */}
            <div className="bg-white p-8 rounded-[2rem] shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] border border-slate-50 flex flex-col transition-transform hover:-translate-y-2 duration-300">
              <div className="flex text-amber-400 mb-6 text-xl">
                ★★★★★
              </div>
              <p className="text-slate-600 italic mb-8 flex-grow leading-relaxed">
                "Eu achava que essas promoções não eram reais até receber a ligação. O prêmio que ganhei pagou as reformas da minha loja. É parceria de verdade que fala, né? Recomendo a todos."
              </p>
              <div className="flex items-center gap-4 mt-auto pt-6 border-t border-slate-100">
                <img src="/persona1.png" alt="Maria Fernanda" className="w-14 h-14 rounded-full object-cover border-2 border-[#00658d]/20" />
                <div>
                  <h4 className="font-bold text-slate-900 leading-tight">Maria Fernanda</h4>
                  <p className="text-[13px] font-medium text-slate-500">Belo Horizonte, MG</p>
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-white p-8 rounded-[2rem] shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] border border-slate-50 flex flex-col transition-transform hover:-translate-y-2 duration-300">
              <div className="flex text-amber-400 mb-6 text-xl">
                ★★★★★
              </div>
              <p className="text-slate-600 italic mb-8 flex-grow leading-relaxed">
                "A Cielo sempre foi parceira no meu restaurante, mas ganhar o prêmio de R$ 50 mil foi o empurrão que eu precisava. Renovei a cozinha toda e o movimento só aumenta! É mudar de patamar."
              </p>
              <div className="flex items-center gap-4 mt-auto pt-6 border-t border-slate-100">
                <img src="/persona2.png" alt="João Carlos" className="w-14 h-14 rounded-full object-cover border-2 border-[#00658d]/20" />
                <div>
                  <h4 className="font-bold text-slate-900 leading-tight">João Carlos</h4>
                  <p className="text-[13px] font-medium text-slate-500">São Paulo, SP</p>
                </div>
              </div>
            </div>

            {/* Review 3 */}
            <div className="bg-white p-8 rounded-[2rem] shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] border border-slate-50 flex flex-col transition-transform hover:-translate-y-2 duration-300">
              <div className="flex text-amber-400 mb-6 text-xl">
                ★★★★★
              </div>
              <p className="text-slate-600 italic mb-8 flex-grow leading-relaxed">
                "Movimentar minha máquina Cielo já era rotina, mas ser sorteado e levar um carro 0km para fazer as entregas da minha padaria foi algo que simplesmente revolucionou o faturamento."
              </p>
              <div className="flex items-center gap-4 mt-auto pt-6 border-t border-slate-100">
                <img src="/persona3.png" alt="Carlos Eduardo" className="w-14 h-14 rounded-full object-cover border-2 border-[#00658d]/20" />
                <div>
                  <h4 className="font-bold text-slate-900 leading-tight">Carlos Eduardo</h4>
                  <p className="text-[13px] font-medium text-slate-500">Curitiba, PR</p>
                </div>
              </div>
            </div>

            {/* Review 4 */}
            <div className="bg-white p-8 rounded-[2rem] shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] border border-slate-50 flex flex-col transition-transform hover:-translate-y-2 duration-300">
              <div className="flex text-amber-400 mb-6 text-xl">
                ★★★★★
              </div>
              <p className="text-slate-600 italic mb-8 flex-grow leading-relaxed">
                "Quando vi os prêmios na minha conta, eu chorei. Foi o capital perfeito para abrir a segunda unidade do meu salão de beleza. Agradeço todos os dias por ter acreditado e participado."
              </p>
              <div className="flex items-center gap-4 mt-auto pt-6 border-t border-slate-100">
                <img src="/persona4.png" alt="Ana Beatriz" className="w-14 h-14 rounded-full object-cover border-2 border-[#00658d]/20" />
                <div>
                  <h4 className="font-bold text-slate-900 leading-tight">Ana Beatriz</h4>
                  <p className="text-[13px] font-medium text-slate-500">Salvador, BA</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
