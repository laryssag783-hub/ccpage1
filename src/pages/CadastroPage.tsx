import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CadastroPage() {
  const navigate = useNavigate();
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [nascimento, setNascimento] = useState('');
  const [email, setEmail] = useState('');
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState('');

  const handleCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 11) value = value.slice(0, 11);
    
    if (value.length > 9) {
        value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    } else if (value.length > 6) {
        value = value.replace(/(\d{3})(\d{3})(\d{1,3})/, "$1.$2.$3");
    } else if (value.length > 3) {
        value = value.replace(/(\d{3})(\d{1,3})/, "$1.$2");
    }
    setCpf(value);
  };

  const handleCepChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 8) value = value.slice(0, 8);
    if (value.length > 5) {
      value = value.replace(/(\d{5})(\d{1,3})/, "$1-$2");
    }
    setCep(value);
  };

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/checkout', { state: { nome, cpf, nascimento, email, cep, endereco } });
  };

  return (
    <main className="min-h-screen py-24 px-4 md:px-8 flex items-center justify-center">
      <div className="w-full max-w-[480px]">
        {/* Decorative Element */}
        <div className="mb-base flex justify-center">
          <div className="w-12 h-1 bg-primary-container rounded-full opacity-60"></div>
        </div>
        {/* Registration Card */}
        <div className="bg-surface-container-lowest rounded-2xl p-6 md:p-10 shadow-[0px_8px_30px_rgba(0,0,0,0.04)] border border-outline-variant/20">
          <header className="mb-8 text-center">
            <h1 className="text-headline-md font-headline-md text-on-surface mb-2">Cadastre-se na Promoção</h1>
            <p className="text-body-md font-body-md text-secondary">Preencha seus dados para começar a ganhar pontos e prêmios.</p>
          </header>
          <form className="space-y-5" onSubmit={handleContinue}>
            {/* Field: Nome */}
            <div className="flex flex-col gap-1.5">
              <label className="text-label-md font-label-md text-on-surface-variant" htmlFor="nome">Nome Completo</label>
              <input value={nome} onChange={(e) => setNome(e.target.value)} className="w-full border-0 border-b-2 border-outline-variant/50 bg-surface-container-low p-3 focus:border-primary focus:ring-0 outline-none transition-all text-body-md font-body-md" id="nome" placeholder="Digite seu nome completo" type="text" required />
            </div>
            {/* Field: CPF */}
            <div className="flex flex-col gap-1.5">
              <label className="text-label-md font-label-md text-on-surface-variant" htmlFor="cpf">CPF</label>
              <input 
                className="w-full border-0 border-b-2 border-outline-variant/50 bg-surface-container-low p-3 focus:border-primary focus:ring-0 outline-none transition-all text-body-md font-body-md" 
                id="cpf" 
                placeholder="000.000.000-00" 
                type="text"
                value={cpf}
                onChange={handleCpfChange}
                required
              />
            </div>
            {/* Field: Data Nascimento */}
            <div className="flex flex-col gap-1.5">
              <label className="text-label-md font-label-md text-on-surface-variant" htmlFor="nascimento">Data de Nascimento</label>
              <input value={nascimento} onChange={(e) => setNascimento(e.target.value)} className="w-full border-0 border-b-2 border-outline-variant/50 bg-surface-container-low p-3 focus:border-primary focus:ring-0 outline-none transition-all text-body-md font-body-md" id="nascimento" type="date" required />
            </div>
            {/* Field: Email */}
            <div className="flex flex-col gap-1.5">
              <label className="text-label-md font-label-md text-on-surface-variant" htmlFor="email">E-mail</label>
              <input value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border-0 border-b-2 border-outline-variant/50 bg-surface-container-low p-3 focus:border-primary focus:ring-0 outline-none transition-all text-body-md font-body-md" id="email" placeholder="seu@email.com.br" type="email" required />
            </div>
            {/* Field: CEP */}
            <div className="flex flex-col gap-1.5">
              <label className="text-label-md font-label-md text-on-surface-variant" htmlFor="cep">CEP</label>
              <input value={cep} onChange={handleCepChange} className="w-full border-0 border-b-2 border-outline-variant/50 bg-surface-container-low p-3 focus:border-primary focus:ring-0 outline-none transition-all text-body-md font-body-md" id="cep" placeholder="00000-000" type="text" required />
            </div>
            {/* Field: Endereço */}
            <div className="flex flex-col gap-1.5">
              <label className="text-label-md font-label-md text-on-surface-variant" htmlFor="endereco">Endereço (Rua, Número, Bairro)</label>
              <input value={endereco} onChange={(e) => setEndereco(e.target.value)} className="w-full border-0 border-b-2 border-outline-variant/50 bg-surface-container-low p-3 focus:border-primary focus:ring-0 outline-none transition-all text-body-md font-body-md" id="endereco" placeholder="Ex: Rua das Flores, 123" type="text" required />
            </div>
            {/* Checkbox Consent */}
            <div className="flex items-start gap-3 pt-2">
              <input className="mt-1 rounded border-outline-variant text-primary focus:ring-primary w-4 h-4" id="terms" type="checkbox" required />
              <label className="text-caption font-caption text-secondary leading-relaxed" htmlFor="terms">
                  Li e aceito os <a className="text-primary font-semibold hover:underline" href="#">Termos de Uso</a> e a <a className="text-primary font-semibold hover:underline" href="#">Política de Privacidade</a> da Cielo.
              </label>
            </div>
            {/* Primary Action */}
            <button type="submit" className="w-full bg-gradient-to-r from-[#00658d] to-[#00a1e0] text-white py-4 rounded-full font-bold text-lg shadow-[0_8px_20px_rgba(0,101,141,0.4)] hover:shadow-[0_12px_25px_rgba(0,101,141,0.6)] hover:-translate-y-1 active:translate-y-0 transition-all duration-300 ring-4 ring-transparent hover:ring-[#00a1e0]/30 mt-4">
              Continuar
            </button>
          </form>
        </div>
        <p className="text-center mt-8 text-body-md font-body-md text-secondary">
          Já tem uma conta? <a className="text-primary font-bold hover:underline" href="#">Faça login</a>
        </p>
      </div>
    </main>
  );
}
