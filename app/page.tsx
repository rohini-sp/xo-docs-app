import Link from 'next/link';
import Image from 'next/image';
import { Cpu, Rocket, Plug2, Network, Zap, Github, Bot, Settings, LayoutTemplate, LifeBuoy } from 'lucide-react';
import type { ComponentType } from 'react';

const products: { title: string; desc: string; href: string; icon: ComponentType<{ size?: number; className?: string }> }[] = [
  {
    title: 'XO Vibe',
    desc: 'AI-native app builder. Describe it, build it.',
    href: '/docs/xo-vibe',
    icon: Cpu,
  },
  {
    title: 'XO Launchpad',
    desc: 'One-click deploy. Local to live in minutes.',
    href: '/docs/xo-launchpad',
    icon: Rocket,
  },
  {
    title: 'XO MCP Server',
    desc: 'Connect Cursor, Claude, Devin, and more.',
    href: '/docs/xo-mcp-server',
    icon: Plug2,
  },
  {
    title: 'XO Swarm',
    desc: 'Multi-agent AI with shared memory.',
    href: '/docs/xo-swarm',
    icon: Network,
  },
];

const quickLinks: { title: string; href: string; icon: ComponentType<{ size?: number; className?: string }> }[] = [
  { title: 'Quickstart', href: '/docs/xo-vibe/quickstart', icon: Zap },
  { title: 'Deploy from GitHub', href: '/docs/xo-launchpad/no-code-deployment/deploying-from-github-repository', icon: Github },
  { title: 'OpenClaw Setup', href: '/docs/xo-swarm/openclaw', icon: Bot },
  { title: 'MCP Setup', href: '/docs/xo-mcp-server/setup', icon: Settings },
  { title: 'Templates', href: '/docs/xo-launchpad/templates', icon: LayoutTemplate },
  { title: 'Support', href: '/docs/xo-support-hub', icon: LifeBuoy },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#09090b] flex flex-col items-center px-4 pt-10 pb-16">
      {/* Hero */}
      <Image src="/xologo.png" alt="XO" width={320} height={128} className="h-20 w-auto mb-4" />
      <h1 className="text-2xl font-bold text-white tracking-tight mb-1.5">
        Documentation
      </h1>
      <p className="text-[#a1a1aa] text-sm max-w-sm text-center leading-relaxed mb-5">
        Everything you need to build, deploy, and scale with XO.
      </p>
      <div className="flex gap-3 mb-10">
        <Link
          href="/docs"
          className="bg-[#83d63a] text-[#09090b] font-semibold px-5 py-2 rounded-lg text-sm hover:bg-[#96e04f] transition-colors"
        >
          Get Started
        </Link>
        <Link
          href="https://xo.builders"
          target="_blank"
          className="border border-[#27272a] text-[#fafafa] font-semibold px-5 py-2 rounded-lg text-sm hover:bg-[#18181b] transition-colors"
        >
          xo.builders
        </Link>
      </div>

      {/* Products */}
      <div className="w-full max-w-3xl mb-8">
        <h2 className="text-xs font-medium uppercase tracking-widest text-[#a1a1aa] mb-3 px-1">
          Explore by product
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {products.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              className="group border border-[#27272a] rounded-xl p-4 bg-[#111113] hover:bg-[#18181b] hover:border-[#3f3f46] transition-all"
            >
              <div className="mb-2 p-1.5 rounded-lg border border-[#27272a] bg-[#18181b] w-fit">
                <p.icon size={16} className="text-[#83d63a]" />
              </div>
              <div className="font-semibold text-sm text-white mb-0.5 group-hover:text-[#83d63a] transition-colors">
                {p.title}
              </div>
              <div className="text-xs text-[#a1a1aa] leading-relaxed">
                {p.desc}
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Quick links */}
      <div className="w-full max-w-3xl">
        <h2 className="text-xs font-medium uppercase tracking-widest text-[#a1a1aa] mb-3 px-1">
          Popular guides
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
          {quickLinks.map((q) => (
            <Link
              key={q.href}
              href={q.href}
              className="group flex items-center gap-2.5 border border-[#27272a] rounded-xl px-4 py-3 hover:bg-[#111113] hover:border-[#3f3f46] transition-all"
            >
              <q.icon size={14} className="text-[#a1a1aa] group-hover:text-[#83d63a] transition-colors shrink-0" />
              <div className="font-medium text-sm text-white group-hover:text-[#83d63a] transition-colors">
                {q.title}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
