import React from 'react';
import Link from 'next/link';
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  Code2,
  CreditCard,
  Layers,
  Radio,
  ShieldCheck,
  Star,
  Zap,
} from 'lucide-react';

function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0B0B0E] text-[#E5E5EA] overflow-x-hidden">
      {/* Background effects */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[72px_72px] pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(99,102,241,0.18),transparent)] pointer-events-none" />

      <div className="relative z-10">
        {/* ── Navigation ── */}
        <nav className="flex items-center justify-between px-6 py-5 max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-500/30">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="font-outfit font-bold text-xl tracking-tight text-white">Stellar Axis</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#architecture" className="hover:text-white transition-colors">Architecture</a>
            <a href="#contribute" className="hover:text-white transition-colors">Contribute</a>
            <a
              href="https://github.com/MeavenMay/stellar-axis-core"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <GithubIcon size={16} /> GitHub
            </a>
          </div>

          <Link
            href="/dashboard"
            className="bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2.5 rounded-xl font-medium text-sm transition-all shadow-lg shadow-indigo-500/20 flex items-center gap-2"
          >
            Launch Console <ArrowUpRight size={16} />
          </Link>
        </nav>

        {/* ── Hero ── */}
        <section className="max-w-7xl mx-auto px-6 pt-20 pb-28 text-center">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold px-4 py-2 rounded-full mb-8 tracking-wide uppercase">
            <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-pulse" />
            Built on Soroban · Stellar Mainnet
          </div>

          <h1 className="font-outfit font-bold text-5xl md:text-7xl text-white leading-[1.08] tracking-tight mb-6 max-w-4xl mx-auto">
            Account Abstraction
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-indigo-400 via-violet-400 to-teal-400">
              for the Stellar Network
            </span>
          </h1>

          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Stellar Axis brings gasless transactions, smart accounts, and intent orchestration
            to Stellar. Ship consumer-grade dApps without ever asking your users to hold XLM.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <Link
              href="/dashboard"
              className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-2xl font-semibold text-base transition-all shadow-xl shadow-indigo-500/25 flex items-center justify-center gap-2 group"
            >
              Open the Console
              <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <a
              href="https://github.com/MeavenMay/stellar-axis-core"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-2xl font-semibold text-base transition-all flex items-center justify-center gap-2"
            >
              <GithubIcon size={18} /> View on GitHub
            </a>
          </div>

          {/* Hero stats */}
          <div className="grid grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden max-w-xl mx-auto">
            {[
              { value: '99.9%', label: 'Relayer Uptime' },
              { value: '< 5s', label: 'Intent Finality' },
              { value: 'Apache 2.0', label: 'License' },
            ].map(({ value, label }) => (
              <div key={label} className="bg-[#0B0B0E] px-6 py-4 text-center">
                <div className="font-outfit font-bold text-xl text-white">{value}</div>
                <div className="text-xs text-zinc-500 mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Dashboard Preview ── */}
        <section className="max-w-6xl mx-auto px-6 pb-28">
          <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50">
            {/* Glow behind the preview */}
            <div className="absolute -inset-px bg-linear-to-b from-indigo-500/10 to-transparent rounded-3xl pointer-events-none" />

            {/* Fake browser chrome */}
            <div className="bg-[#1C1C1E] border-b border-white/5 px-5 py-3 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/70" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/70" />
              <div className="flex-1 mx-4 bg-white/5 rounded-lg px-4 py-1 text-center text-xs text-zinc-500 font-mono">
                console.stellaraxis.io/dashboard
              </div>
            </div>

            {/* Mini dashboard preview */}
            <div className="bg-[#0B0B0E] p-6 flex gap-4">
              {/* Sidebar */}
              <div className="hidden sm:flex flex-col gap-2 w-40 shrink-0">
                {[
                  { label: 'Dashboard', active: true },
                  { label: 'Paymasters', active: false },
                  { label: 'Smart Accounts', active: false },
                  { label: 'Activity', active: false },
                ].map(({ label, active }) => (
                  <div
                    key={label}
                    className={`px-3 py-2 rounded-lg text-xs font-medium ${
                      active ? 'bg-indigo-600/10 text-indigo-400' : 'text-zinc-500'
                    }`}
                  >
                    {label}
                  </div>
                ))}
              </div>

              {/* Content */}
              <div className="flex-1 space-y-4">
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { title: 'Sponsored', value: '14,285 XLM', color: 'text-indigo-400' },
                    { title: 'Smart Accounts', value: '1,024', color: 'text-teal-400' },
                    { title: 'Relayer', value: '99.9%', color: 'text-emerald-400' },
                  ].map(({ title, value, color }) => (
                    <div key={title} className="bg-[#1C1C1E] rounded-xl p-3 border border-white/5">
                      <div className="text-zinc-500 text-[10px] mb-1">{title}</div>
                      <div className={`font-outfit font-bold text-sm ${color}`}>{value}</div>
                    </div>
                  ))}
                </div>
                <div className="bg-[#1C1C1E] rounded-xl border border-white/5 overflow-hidden">
                  <div className="px-4 py-2.5 border-b border-white/5 text-xs font-semibold text-zinc-300">Recent Intents</div>
                  {[
                    { account: 'G...4k2', action: 'Swap USDC/XLM', status: 'Success' },
                    { account: 'G...8v2', action: 'Mint NFT', status: 'Processing' },
                  ].map(({ account, action, status }) => (
                    <div key={account} className="px-4 py-2 flex items-center justify-between text-xs">
                      <span className="font-mono text-zinc-400">{account}</span>
                      <span className="text-zinc-300">{action}</span>
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                        status === 'Success' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-indigo-500/10 text-indigo-400'
                      }`}>{status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Features ── */}
        <section id="features" className="max-w-7xl mx-auto px-6 py-24">
          <div className="text-center mb-16">
            <div className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">Features</div>
            <h2 className="font-outfit font-bold text-4xl md:text-5xl text-white mb-4">
              Everything you need to build on Stellar
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              From gasless onboarding to deep transaction analytics, the Axis Console gives
              developers full visibility and control over their Axis integration.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <FeatureCard
              icon={<CreditCard className="text-indigo-400" size={24} />}
              iconBg="bg-indigo-500/10"
              title="Paymaster Management"
              description="Deposit and monitor XLM/USDC balances used for fee sponsorship. Set spending caps, receive low-balance alerts, and audit every sponsored transaction in one place."
              tags={['Fee Sponsorship', 'Multi-asset']}
            />
            <FeatureCard
              icon={<ShieldCheck className="text-teal-400" size={24} />}
              iconBg="bg-teal-500/10"
              title="Smart Account Analytics"
              description="Track the growth and lifecycle of every smart account deployed through the axis-factory. Visualize adoption curves and drill down into per-account activity."
              tags={['Account Abstraction', 'Soroban']}
            />
            <FeatureCard
              icon={<Activity className="text-emerald-400" size={24} />}
              iconBg="bg-emerald-500/10"
              title="Intent Monitoring"
              description="Deep-dive into specific transaction XDRs and execution status. Replay failed intents, inspect raw payloads, and trace the full lifecycle from user signature to on-chain settlement."
              tags={['XDR Inspector', 'Replay']}
            />
            <FeatureCard
              icon={<Radio className="text-violet-400" size={24} />}
              iconBg="bg-violet-500/10"
              title="Relayer Health Dashboard"
              description="Real-time uptime, throughput, and latency metrics for your relayer service. Instant visibility into fee queue depth, sponsorship success rates, and error breakdowns."
              tags={['Real-time', 'Observability']}
            />
          </div>
        </section>

        {/* ── Architecture ── */}
        <section id="architecture" className="max-w-7xl mx-auto px-6 py-24">
          <div className="text-center mb-16">
            <div className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">Architecture</div>
            <h2 className="font-outfit font-bold text-4xl md:text-5xl text-white mb-4">
              Three layers. One seamless stack.
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              Stellar Axis is built from the ground up as a modular protocol. Each component can be
              used independently or together as a full-stack account abstraction solution.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <ArchCard
              step="01"
              icon={<Layers className="text-indigo-400" size={28} />}
              title="Soroban Contracts"
              description="axis-account implements Soroban's native account abstraction via __check_auth, supporting Ed25519 and future WebAuthn (Passkeys). axis-factory enables counterfactual deployment."
              tech="Rust · Soroban CLI · WASM"
              accent="indigo"
            />
            <ArchCard
              step="02"
              icon={<Code2 className="text-teal-400" size={28} />}
              title="TypeScript SDK"
              description="A developer-first library to integrate Axis into your application in minutes. Handles intent construction, signing, and submission with full TypeScript types and a clean API."
              tech="TypeScript · @stellar/stellar-sdk"
              accent="teal"
            />
            <ArchCard
              step="03"
              icon={<Zap className="text-violet-400" size={28} />}
              title="Relayer Service"
              description="A high-performance Node.js service that wraps user intents into fee-sponsored transactions. Configurable sponsorship policies let you define per-account or per-action spend limits."
              tech="Node.js · REST API · Queue"
              accent="violet"
            />
          </div>

          {/* Code snippet */}
          <div className="mt-12 bg-[#1C1C1E] rounded-3xl border border-white/5 overflow-hidden">
            <div className="flex items-center gap-3 px-6 py-4 border-b border-white/5">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/50" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/50" />
              </div>
              <span className="text-xs text-zinc-500 font-mono">integrate-axis.ts</span>
            </div>
            <div className="p-6 font-mono text-sm leading-7 overflow-x-auto">
              <p><span className="text-zinc-500">{'// Install: npm install @stellar-axis/sdk'}</span></p>
              <p><span className="text-indigo-400">import</span><span className="text-white"> {'{ AxisClient }'} </span><span className="text-indigo-400">from</span><span className="text-emerald-400">{" '@stellar-axis/sdk'"}</span><span className="text-white">;</span></p>
              <p>&nbsp;</p>
              <p><span className="text-indigo-400">const</span><span className="text-white"> client </span><span className="text-zinc-400">=</span><span className="text-indigo-400"> new</span><span className="text-teal-400"> AxisClient</span><span className="text-white">{'({'}</span></p>
              <p><span className="text-white">{'  '}</span><span className="text-zinc-300">network</span><span className="text-zinc-400">:</span><span className="text-emerald-400"> {'"mainnet"'}</span><span className="text-white">,</span></p>
              <p><span className="text-white">{'  '}</span><span className="text-zinc-300">paymasterId</span><span className="text-zinc-400">:</span><span className="text-emerald-400"> {'"your-paymaster-id"'}</span><span className="text-white">,</span></p>
              <p><span className="text-white">{'})'}</span><span className="text-white">;</span></p>
              <p>&nbsp;</p>
              <p><span className="text-zinc-500">{'// Gasless transaction — user pays nothing'}</span></p>
              <p><span className="text-indigo-400">await</span><span className="text-white"> client.</span><span className="text-teal-400">sendIntent</span><span className="text-white">{'({'}</span></p>
              <p><span className="text-white">{'  '}</span><span className="text-zinc-300">account</span><span className="text-zinc-400">:</span><span className="text-white"> userSmartAccount,</span></p>
              <p><span className="text-white">{'  '}</span><span className="text-zinc-300">operation</span><span className="text-zinc-400">:</span><span className="text-white"> swapUsdcToXlm,</span></p>
              <p><span className="text-white">{'}'}</span><span className="text-white">);</span></p>
            </div>
          </div>
        </section>

        {/* ── Contributor Tiers ── */}
        <section id="contribute" className="max-w-7xl mx-auto px-6 py-24">
          <div className="text-center mb-16">
            <div className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">Open Source</div>
            <h2 className="font-outfit font-bold text-4xl md:text-5xl text-white mb-4">
              Join the Axis ecosystem
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              We welcome contributors of all experience levels. Progress through our contributor
              tiers and earn recognition in the Stellar Axis community.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <TierCard
              emoji="⭐"
              tier="Stargazer"
              requirement="1st merged PR"
              description="Perfect for first-timers. Tackle docs, minor UI improvements, or test coverage."
              label="Tier 1"
              accent="zinc"
            />
            <TierCard
              emoji="🔨"
              tier="Builder"
              requirement="3+ meaningful PRs"
              description="TypeScript/Next.js or Rust knowledge. Access to our private Builders channel."
              label="Tier 2"
              accent="indigo"
            />
            <TierCard
              emoji="🏛"
              tier="Architect"
              requirement="Major feature author"
              description="Designed or implemented a core module. Soroban, ZK proofs, or SDK work."
              label="Tier 3"
              accent="teal"
            />
            <TierCard
              emoji="🪐"
              tier="Axis Guardian"
              requirement="Vetted maintainer"
              description="Write access to specific modules. Co-shapes the protocol roadmap."
              label="Tier 4"
              accent="violet"
            />
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://github.com/MeavenMay/stellar-axis-core"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-7 py-3.5 rounded-2xl font-semibold transition-all flex items-center gap-2"
            >
              <GithubIcon size={18} /> Browse Issues on GitHub
            </a>
            <a
              href="https://discord.gg/stellaraxis"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-300 font-semibold transition-colors flex items-center gap-1.5"
            >
              Join our Discord <ArrowRight size={16} />
            </a>
          </div>
        </section>

        {/* ── Final CTA ── */}
        <section className="max-w-7xl mx-auto px-6 py-24">
          <div className="relative bg-linear-to-br from-indigo-600/20 via-[#1C1C1E] to-violet-600/10 rounded-3xl border border-indigo-500/20 p-12 md:p-16 text-center overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_100%,rgba(99,102,241,0.15),transparent)] pointer-events-none" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 mb-6">
                <Star className="text-indigo-400" size={20} />
                <span className="text-indigo-400 font-semibold text-sm">Open Source · Apache 2.0</span>
              </div>
              <h2 className="font-outfit font-bold text-4xl md:text-6xl text-white mb-5 leading-tight">
                Start building today.
              </h2>
              <p className="text-zinc-400 text-lg max-w-xl mx-auto mb-10">
                Spin up the console, connect your paymaster, and ship gasless
                transactions on Stellar in under an hour.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/dashboard"
                  className="bg-indigo-600 hover:bg-indigo-500 text-white px-9 py-4 rounded-2xl font-semibold text-lg transition-all shadow-xl shadow-indigo-500/30 flex items-center gap-2 group"
                >
                  Open the Console
                  <ArrowRight size={20} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <a
                  href="https://github.com/MeavenMay/stellar-axis-core"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-9 py-4 rounded-2xl font-semibold text-lg transition-all flex items-center gap-2"
                >
                  <GithubIcon size={20} /> View Source
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Footer ── */}
        <footer className="max-w-7xl mx-auto px-6 py-10 border-t border-white/5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 bg-indigo-600 rounded-lg flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="font-outfit font-bold text-white">Stellar Axis</span>
            </div>

            <div className="flex items-center gap-6 text-sm text-zinc-500">
              <a href="https://github.com/MeavenMay/stellar-axis-core" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
              <a href="https://discord.gg/stellaraxis" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Discord</a>
              <span>Apache 2.0 License</span>
            </div>

            <div className="text-xs text-zinc-600">
              © {new Date().getFullYear()} Stellar Axis. Built on Soroban.
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

/* ── Sub-components ── */

function FeatureCard({
  icon, iconBg, title, description, tags,
}: {
  icon: React.ReactNode;
  iconBg: string;
  title: string;
  description: string;
  tags: string[];
}) {
  return (
    <div className="bg-[#1C1C1E] border border-white/5 rounded-3xl p-8 group hover:border-white/10 transition-all">
      <div className={`w-12 h-12 ${iconBg} rounded-2xl flex items-center justify-center mb-5`}>
        {icon}
      </div>
      <h3 className="font-outfit font-bold text-xl text-white mb-3">{title}</h3>
      <p className="text-zinc-400 leading-relaxed mb-5">{description}</p>
      <div className="flex gap-2 flex-wrap">
        {tags.map((tag) => (
          <span key={tag} className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 text-zinc-400 border border-white/5">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

function ArchCard({
  step, icon, title, description, tech, accent,
}: {
  step: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  tech: string;
  accent: 'indigo' | 'teal' | 'violet';
}) {
  const accentMap = {
    indigo: 'border-indigo-500/20 hover:border-indigo-500/40',
    teal: 'border-teal-500/20 hover:border-teal-500/40',
    violet: 'border-violet-500/20 hover:border-violet-500/40',
  };
  const stepMap = {
    indigo: 'text-indigo-600',
    teal: 'text-teal-600',
    violet: 'text-violet-600',
  };

  return (
    <div className={`bg-[#1C1C1E] border rounded-3xl p-8 transition-all ${accentMap[accent]}`}>
      <div className={`font-outfit font-bold text-6xl mb-4 ${stepMap[accent]} opacity-30 leading-none`}>{step}</div>
      <div className="mb-4">{icon}</div>
      <h3 className="font-outfit font-bold text-xl text-white mb-3">{title}</h3>
      <p className="text-zinc-400 text-sm leading-relaxed mb-5">{description}</p>
      <div className="text-xs font-mono text-zinc-600 bg-white/3 px-3 py-2 rounded-lg inline-block">
        {tech}
      </div>
    </div>
  );
}

function TierCard({
  emoji, tier, requirement, description, label, accent,
}: {
  emoji: string;
  tier: string;
  requirement: string;
  description: string;
  label: string;
  accent: 'zinc' | 'indigo' | 'teal' | 'violet';
}) {
  const borderMap = {
    zinc: 'border-white/5',
    indigo: 'border-indigo-500/20',
    teal: 'border-teal-500/20',
    violet: 'border-violet-500/20',
  };
  const badgeMap = {
    zinc: 'bg-white/5 text-zinc-400',
    indigo: 'bg-indigo-500/10 text-indigo-400',
    teal: 'bg-teal-500/10 text-teal-400',
    violet: 'bg-violet-500/10 text-violet-400',
  };

  return (
    <div className={`bg-[#1C1C1E] border rounded-3xl p-6 flex flex-col gap-4 ${borderMap[accent]}`}>
      <div className="text-3xl">{emoji}</div>
      <div>
        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${badgeMap[accent]}`}>{label}</span>
      </div>
      <div>
        <h3 className="font-outfit font-bold text-lg text-white mb-1">{tier}</h3>
        <p className="text-indigo-400 text-xs font-semibold mb-2">{requirement}</p>
        <p className="text-zinc-400 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
