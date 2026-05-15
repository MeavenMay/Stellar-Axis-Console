# 🪐 Stellar Axis Console

### The Premium Management Dashboard for the Axis Ecosystem.

**🔗 Live Demo → [stellar-axis-console.vercel.app](https://stellar-axis-console.vercel.app)**

[![Stellar](https://img.shields.io/badge/Stellar-Soroban-black?logo=stellar&logoColor=white)](https://stellar.org)
[![Framework](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-61dafb?logo=react&logoColor=black)](https://react.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/License-Apache_2.0-blue)](./LICENSE)

**Axis Console** is the official developer dashboard for the [Stellar Axis](https://github.com/MeavenMay/stellar-axis-core) ecosystem. It provides a high-fidelity interface for developers to manage their paymaster balances, monitor smart account activity, configure relaying policies, and inspect transaction intents — all from a single premium dark-mode UI.

---

## 🗺 Pages

| Route | Description |
|---|---|
| `/` | Marketing landing page — hero, features, architecture overview, contributor tiers |
| `/dashboard` | Developer console — live stats, paymaster status, intent activity table |

---

## 🚀 Features

### Paymaster Management
Deposit and monitor XLM/USDC balances used for fee sponsorship. Set per-account spending caps, receive low-balance alerts, and get a complete audit trail of every sponsored operation in one place.

### Smart Account Analytics
Track the full lifecycle of every smart account deployed through the `axis-factory` contract. Visualize adoption over time, drill into individual account history, and identify inactive accounts.

### Intent Monitoring
Deep-dive into specific transaction XDRs and execution status. Replay failed intents, inspect raw operation payloads, trace the complete path from user signature through relayer submission to on-chain settlement, and export data for external analysis.

### Relayer Health Dashboard
Real-time uptime, throughput, and latency metrics for your relayer service. See fee-queue depth, sponsorship success/failure rates, and per-error breakdowns — so you know the moment something goes wrong before your users do.

### Developer Overview
A single-glance snapshot of your integration's health: total XLM sponsored, active smart account count, and relayer operational status with week-over-week trend indicators.

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router, Turbopack) |
| UI Library | React 19 |
| Styling | Tailwind CSS v4 |
| Icons | Lucide React |
| Blockchain SDK | @stellar/stellar-sdk v15 |
| Utilities | clsx, tailwind-merge |
| Deployment | Vercel |

---

## 🏁 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) v18 or later
- npm v9 or later

### 1. Clone the repo
```bash
git clone https://github.com/Stellar-Axis/Stellar-Axis-Console.git
cd Stellar-Axis-Console
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the landing page, and [http://localhost:3000/dashboard](http://localhost:3000/dashboard) for the developer console.

---

## 🚢 Deployment

The console is designed to be deployed to [Vercel](https://vercel.com) with zero configuration.

### Deploy with Vercel CLI
```bash
npm i -g vercel
vercel
```

### Deploy via GitHub
1. Push to `main` on GitHub.
2. Import the repository in the [Vercel dashboard](https://vercel.com/new).
3. Vercel auto-detects Next.js — click **Deploy**.

The live deployment is at **[stellar-axis-console.vercel.app](https://stellar-axis-console.vercel.app)**.

---

## 📁 Project Structure

```
src/
└── app/
    ├── layout.tsx          # Root layout (fonts, dark mode, metadata)
    ├── globals.css         # Tailwind v4 base styles
    ├── page.tsx            # Landing page (/)
    └── dashboard/
        └── page.tsx        # Developer console (/dashboard)
```

---

## 🤝 Contributing

We love contributors! Check out our [Contribution Guide](./CONTRIBUTING.md) and look for issues labeled `tier-1` to get started.

**Contributor tiers:**
- **Stargazer** — 1st merged PR. Recognition in our README.
- **Builder** — 3+ meaningful PRs. Access to our private Builders channel.
- **Architect** — Authored a major feature or module.
- **Axis Guardian** — Vetted maintainer with write access to specific modules.

---

## 🔗 Ecosystem

| Repo | Description |
|---|---|
| [Stellar-Axis-Console](https://github.com/Stellar-Axis/Stellar-Axis-Console) | This repo — the developer dashboard |
| [stellar-axis-core](https://github.com/MeavenMay/stellar-axis-core) | Smart contracts, SDK, and relayer service |

---

## 📄 License

This project is released under the [Apache 2.0 License](./LICENSE).
