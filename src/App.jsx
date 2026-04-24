import React, { useState } from 'react';

// --- KOMPONENTA DASHBOARDU AUTORA ---
const AuthorDashboard = ({ onLogout }) => {
  const [selectedIssue, setSelectedIssue] = useState('');
  
  // Ukázková data pro témata (v reálu přijdou z backendu od TM1)
  const issues = [
    { id: 1, title: 'Umělá inteligence ve vzdělávání 2026', capacity: '12/15', status: 'Otevřeno' },
    { id: 2, title: 'Kybernetická bezpečnost v průmyslu', capacity: '15/15', status: 'Plno' },
    { id: 3, title: 'Udržitelný rozvoj a technologie', capacity: '2/10', status: 'Otevřeno' },
  ];

  return (
    <div className="animate-in fade-in duration-500">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* LEVÝ SLOUPEC: Nový příspěvek */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-zinc-900/60 border border-zinc-800 p-6 rounded-2xl backdrop-blur-xl">
            <h3 className="text-xl font-bold text-emerald-400 mb-4">Nový příspěvek</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">Vybrat téma</label>
                <select 
                  value={selectedIssue}
                  onChange={(e) => setSelectedIssue(e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-sm focus:ring-2 focus:ring-emerald-500/50 outline-none"
                >
                  <option value="">-- Vyberte tematické číslo --</option>
                  {issues.map(issue => (
                    <option key={issue.id} value={issue.id} disabled={issue.status === 'Plno'}>
                      {issue.title} ({issue.capacity})
                    </option>
                  ))}
                </select>
              </div>

              {/* DRAG & DROP ZÓNA */}
              <div className="border-2 border-dashed border-zinc-800 rounded-2xl p-8 text-center hover:border-emerald-500/50 transition-colors cursor-pointer group">
                <div className="w-12 h-12 bg-zinc-950 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                </div>
                <p className="text-sm font-medium text-zinc-300">Nahrát příspěvek</p>
                <p className="text-xs text-zinc-500 mt-1">PDF nebo DOCX (max. 20MB)</p>
              </div>

              <button className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-emerald-900/20">
                Odeslat k recenzi
              </button>
            </div>
          </div>
        </div>

        {/* PRAVÝ SLOUPEC: Moje příspěvky */}
        <div className="lg:col-span-2">
          <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl backdrop-blur-xl overflow-hidden">
            <div className="p-6 border-b border-zinc-800">
              <h3 className="text-xl font-bold text-zinc-100">Moje odeslané práce</h3>
            </div>
            <table className="w-full text-left text-sm">
              <thead className="bg-zinc-950/50 text-zinc-500 uppercase text-[10px] font-bold tracking-widest">
                <tr>
                  <th className="px-6 py-4">Název příspěvku</th>
                  <th className="px-6 py-4">Téma</th>
                  <th className="px-6 py-4">Stav</th>
                  <th className="px-6 py-4 text-right">Akce</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800">
                <tr className="hover:bg-zinc-800/30 transition-colors">
                  <td className="px-6 py-4 font-medium text-zinc-200">Využití LLM v praxi</td>
                  <td className="px-6 py-4 text-zinc-400">AI 2026</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-md text-[10px] font-bold">V RECENZI</span>
                  </td>
                  <td className="px-6 py-4 text-right text-emerald-400 hover:underline cursor-pointer font-bold">Detail</td>
                </tr>
                <tr className="hover:bg-zinc-800/30 transition-colors">
                  <td className="px-6 py-4 font-medium text-zinc-200">Bezpečnost IoT sítí</td>
                  <td className="px-6 py-4 text-zinc-400">Kyberbezpečnost</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-md text-[10px] font-bold">PŘIJATO</span>
                  </td>
                  <td className="px-6 py-4 text-right text-emerald-400 hover:underline cursor-pointer font-bold">Detail</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};

// --- HLAVNÍ KOMPONENTA APLIKACE ---
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState('Autor');
  const roles = ['Autor', 'Redaktor', 'Recenzent', 'Šéfredaktor', 'Administrátor'];

  return (
    <div className="min-h-screen flex flex-col bg-zinc-950 text-zinc-200 font-sans">
      
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex flex-col">
            <h1 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500 tracking-tight">
              Journal of Advanced Research
            </h1>
            <p className="text-[10px] text-zinc-500 font-semibold uppercase tracking-widest mt-1">
              Školní projekt • VŠPJ 2026
            </p>
          </div>
          
          {isLoggedIn && (
            <div className="flex items-center gap-4">
              <div className="text-right hidden sm:block">
                <p className="text-xs font-bold text-zinc-100">{role}</p>
                <p className="text-[10px] text-emerald-500">Aktivní relace</p>
              </div>
              <button 
                onClick={() => setIsLoggedIn(false)}
                className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg text-xs font-bold transition-colors"
              >
                Odhlásit
              </button>
            </div>
          )}
        </div>
      </header>

      <main className="flex-grow max-w-7xl mx-auto w-full p-6">
        {!isLoggedIn ? (
          // PŘIHLAŠOVACÍ OBRAZOVKA (Vylepšený styl)
          <div className="h-full flex items-center justify-center py-20">
            <div className="w-full max-w-md bg-zinc-900/60 border border-zinc-800 p-10 rounded-3xl backdrop-blur-xl">
              <h2 className="text-2xl font-bold text-center mb-8">Vstup do systému</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-zinc-400 mb-2">Vyberte roli</label>
                  <select 
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3.5 outline-none focus:ring-2 focus:ring-emerald-500/50"
                  >
                    {roles.map(r => <option key={r} value={r}>{r}</option>)}
                  </select>
                </div>
                <button 
                  onClick={() => setIsLoggedIn(true)}
                  className="w-full bg-emerald-600 hover:bg-emerald-500 py-4 rounded-xl font-bold transition-all active:scale-95"
                >
                  Vstoupit jako {role}
                </button>
              </div>
            </div>
          </div>
        ) : (
          // DYNAMICKÝ OBSAH DLE ROLE (Nyní jen Autor)
          <>
            {role === 'Autor' ? <AuthorDashboard /> : (
              <div className="text-center py-20 bg-zinc-900/40 rounded-3xl border border-dashed border-zinc-800">
                <h2 className="text-2xl font-bold text-zinc-500 italic">Dashboard pro roli "{role}" je v přípravě (Sprint 3)</h2>
              </div>
            )}
          </>
        )}
      </main>

      <footer className="py-6 text-center text-zinc-600 text-xs border-t border-zinc-800/50">
        © 2026 Tým Projektu | VŠPJ Jihlava
      </footer>
    </div>
  );
}

export default App;