import React from 'react';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import {
  Activity,
  CreditCard,
  Key,
  LayoutDashboard,
  Settings,
  Zap,
  ArrowUpRight,
  ShieldCheck
} from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-[#1C1C1E] border-r border-white/5 flex flex-col">
        <div className="p-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-500/20">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="font-outfit font-bold text-xl tracking-tight text-white">NEXUS</span>
          </div>
        </div>

        <nav className="flex-1 px-4 py-4 space-y-2">
          <NavItem icon={<LayoutDashboard size={20} />} label="Dashboard" active />
          <NavItem icon={<CreditCard size={20} />} label="Paymasters" />
          <NavItem icon={<Key size={20} />} label="Smart Accounts" />
          <NavItem icon={<Activity size={20} />} label="Activity" />
        </nav>

        <div className="p-4 mt-auto">
          <NavItem icon={<Settings size={20} />} label="Settings" />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto bg-[#0B0B0E] p-8">
        <ErrorBoundary>
          <header className="flex justify-between items-center mb-12">
            <div>
              <h1 className="text-3xl font-outfit font-bold text-white mb-2">Developer Overview</h1>
              <p className="text-zinc-400">Welcome back, Axis Guardian.</p>
            </div>
            <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-2.5 rounded-xl font-medium transition-all shadow-lg shadow-indigo-500/20 flex items-center gap-2">
              New Project <ArrowUpRight size={18} />
            </button>
          </header>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <StatCard
              title="Total Sponsored"
              value="14,285 XLM"
              trend="+12% this week"
              icon={<Zap className="text-indigo-400" />}
              bgIcon={<Zap className="text-indigo-400" size={48} />}
            />
            <StatCard
              title="Active Smart Accounts"
              value="1,024"
              trend="+84 new today"
              icon={<ShieldCheck className="text-teal-400" />}
              bgIcon={<ShieldCheck className="text-teal-400" size={48} />}
            />
            <StatCard
              title="Relayer Health"
              value="99.9%"
              trend="Operational"
              icon={<Activity className="text-emerald-400" />}
              bgIcon={<Activity className="text-emerald-400" size={48} />}
            />
          </div>

          {/* Recent Intents Table */}
          <section className="bg-[#1C1C1E] rounded-3xl border border-white/5 overflow-hidden">
            <div className="p-6 border-b border-white/5 flex justify-between items-center">
              <h2 className="font-outfit font-bold text-xl text-white">Recent Intents</h2>
              <button className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors font-medium">View All</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-zinc-500 text-sm uppercase tracking-wider">
                    <th className="px-6 py-4 font-medium">Account</th>
                    <th className="px-6 py-4 font-medium">Action</th>
                    <th className="px-6 py-4 font-medium">Status</th>
                    <th className="px-6 py-4 font-medium">Fee</th>
                    <th className="px-6 py-4 font-medium text-right">Time</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <TableRow account="G...4k2" action="Swap USDC/XLM" status="Success" fee="0.01 XLM" time="2m ago" />
                  <TableRow account="G...9m1" action="Stake NEXUS" status="Success" fee="0.05 XLM" time="15m ago" />
                  <TableRow account="G...8v2" action="Mint NFT" status="Processing" fee="0.10 XLM" time="Just now" />
                </tbody>
              </table>
            </div>
          </section>
        </ErrorBoundary>
      </main>
    </div>
  );
}

function NavItem({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) {
  return (
    <div className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all ${
      active ? 'bg-indigo-600/10 text-indigo-400' : 'text-zinc-400 hover:bg-white/5 hover:text-white'
    }`}>
      {icon}
      <span className="font-medium">{label}</span>
    </div>
  );
}

function StatCard({ title, value, trend, icon, bgIcon }: { title: string, value: string, trend: string, icon: React.ReactNode, bgIcon: React.ReactNode }) {
  return (
    <div className="bg-[#1C1C1E] p-6 rounded-3xl border border-white/5 relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
        {bgIcon}
      </div>
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center">
          {icon}
        </div>
        <span className="text-zinc-400 font-medium text-sm">{title}</span>
      </div>
      <div className="text-3xl font-outfit font-bold text-white mb-1">{value}</div>
      <div className="text-sm text-zinc-500">{trend}</div>
    </div>
  );
}

function TableRow({ account, action, status, fee, time }: { account: string, action: string, status: string, fee: string, time: string }) {
  return (
    <tr className="hover:bg-white/[0.02] transition-colors group">
      <td className="px-6 py-4 font-mono text-zinc-300">{account}</td>
      <td className="px-6 py-4 font-medium text-white">{action}</td>
      <td className="px-6 py-4">
        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
          status === 'Success' ? 'bg-emerald-500/10 text-emerald-400' :
          status === 'Processing' ? 'bg-indigo-500/10 text-indigo-400 animate-pulse' :
          'bg-red-500/10 text-red-400'
        }`}>
          {status}
        </span>
      </td>
      <td className="px-6 py-4 text-zinc-400">{fee}</td>
      <td className="px-6 py-4 text-right text-zinc-500 text-sm">{time}</td>
    </tr>
  );
}
