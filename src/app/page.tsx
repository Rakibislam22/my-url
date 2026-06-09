"use client";

import {
  Badge,
  Button,
  Card,
  Input,
  ProgressBar,
  Tooltip,
} from "@heroui/react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@heroui/navbar";
import { Snippet } from "@heroui/snippet";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Code2,
  Copy,
  Globe,
  Link2,
  MessageCircle,
  QrCode,
  Scissors,
  ShieldCheck,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
  accent: string;
};

type Stat = {
  value: string;
  label: string;
};

const navItems = ["Features", "Pricing", "API Docs"];

const features: Feature[] = [
  {
    title: "Lightning Fast Redirection",
    description:
      "Route every click through edge-ready infrastructure designed for low latency and high intent traffic.",
    icon: Zap,
    accent: "text-amber-300",
  },
  {
    title: "Advanced Analytics",
    description:
      "Track campaign performance, source quality, geography, devices, and peak click windows in real time.",
    icon: BarChart3,
    accent: "text-cyan-300",
  },
  {
    title: "Custom Branding & Aliases",
    description:
      "Launch memorable short links with branded domains, campaign aliases, and clean link governance.",
    icon: Globe,
    accent: "text-emerald-300",
  },
];

const stats: Stat[] = [
  { value: "10M+", label: "Links Shortened" },
  { value: "50M+", label: "Clicks Tracked" },
  { value: "99.9%", label: "Uptime" },
];

const footerGroups = [
  {
    title: "Product",
    links: ["Features", "Analytics", "QR Codes", "Branded Links"],
  },
  {
    title: "Company",
    links: ["About", "Customers", "Security", "Careers"],
  },
  {
    title: "Resources",
    links: ["API Docs", "Guides", "Status", "Support"],
  },
];

const socialLinks: { label: string; icon: LucideIcon }[] = [
  { label: "Community", icon: MessageCircle },
  { label: "Developers", icon: Code2 },
  { label: "Customers", icon: Users },
];

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#030712] text-slate-50">
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:72px_72px] opacity-30" />
      <Navbar
        isBordered
        maxWidth="xl"
        classNames={{
          base: "fixed top-0 z-50 border-white/10 bg-[#030712]/80 backdrop-blur-xl",
          wrapper: "px-4 sm:px-6",
          item: "text-sm font-medium text-slate-300 transition-colors hover:text-white",
          menu: "border-t border-white/10 bg-[#030712]/95 pt-6 backdrop-blur-xl",
          menuItem: "text-slate-200",
        }}
      >
        <NavbarContent justify="start">
          <NavbarMenuToggle
            aria-label="Open navigation menu"
            className="text-slate-200 sm:hidden"
          />
          <NavbarBrand>
            <a
              href="#top"
              className="flex items-center gap-3 text-white transition-opacity hover:opacity-90"
            >
              <span className="flex size-10 items-center justify-center rounded-lg border border-indigo-400/30 bg-indigo-500/15 text-indigo-200 shadow-[0_0_30px_rgba(99,102,241,0.28)]">
                <Scissors className="size-5" aria-hidden="true" />
              </span>
              <span className="text-lg font-semibold tracking-normal">
                ShortIn
              </span>
            </a>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden gap-8 sm:flex" justify="center">
          {navItems.map((item) => (
            <NavbarItem key={item}>
              <a href={`#${item.toLowerCase().replace(" ", "-")}`}>{item}</a>
            </NavbarItem>
          ))}
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem className="hidden sm:flex">
            <Button
              variant="ghost"
              className="border-white/10 text-slate-200 transition-colors hover:border-white/25 hover:bg-white/5"
            >
              Login
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Button className="bg-indigo-500 text-white shadow-lg shadow-indigo-500/25 transition-transform hover:-translate-y-0.5 hover:bg-indigo-400">
              Get Started
            </Button>
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu>
          {navItems.map((item) => (
            <NavbarMenuItem key={item}>
              <a
                className="block py-2 text-base font-medium transition-colors hover:text-indigo-200"
                href={`#${item.toLowerCase().replace(" ", "-")}`}
              >
                {item}
              </a>
            </NavbarMenuItem>
          ))}
          <NavbarMenuItem>
            <a className="block py-2 text-base font-medium" href="#login">
              Login
            </a>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>

      <main id="top" className="relative">
        <section className="mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center justify-center px-4 pb-16 pt-28 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <Badge
              variant="soft"
              color="accent"
              className="mb-6 border border-indigo-300/20 bg-indigo-400/10 px-4 py-2 text-indigo-100"
            >
              <Sparkles className="mr-2 size-4" aria-hidden="true" />
              Premium link infrastructure for growth teams
            </Badge>
            <h1 className="text-balance text-5xl font-semibold leading-tight tracking-normal text-white sm:text-6xl lg:text-7xl">
              Shorten The Links, Expand Your Reach.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-7 text-slate-300 sm:text-lg">
              Fast, secure, and analytical URL shortening built for branded
              campaigns, reliable redirects, and decisions backed by real click
              intelligence.
            </p>
          </div>

          <Card className="mt-10 w-full max-w-4xl border border-white/10 bg-white/[0.06] shadow-2xl shadow-indigo-950/30 backdrop-blur-xl">
            <Card.Content className="p-4 sm:p-6 lg:p-8">
              <div className="grid gap-4 lg:grid-cols-[1fr_220px_auto]">
                <label className="sr-only" htmlFor="long-url">
                  Long URL
                </label>
                <Input
                  id="long-url"
                  type="url"
                  value="https://example.com/launch/enterprise-link-management"
                  readOnly
                  fullWidth
                  className="h-14 rounded-lg border border-white/10 bg-slate-950/70 px-4 text-base text-white outline-none transition-colors placeholder:text-slate-500 focus:border-indigo-300"
                  aria-label="Long URL"
                />
                <label className="sr-only" htmlFor="alias">
                  Custom alias
                </label>
                <Input
                  id="alias"
                  value="brand-launch"
                  readOnly
                  fullWidth
                  className="h-14 rounded-lg border border-white/10 bg-slate-950/70 px-4 text-base text-white outline-none transition-colors placeholder:text-slate-500 focus:border-indigo-300"
                  aria-label="Custom alias"
                />
                <Button className="h-14 min-w-40 bg-indigo-500 px-6 text-base font-semibold text-white shadow-lg shadow-indigo-500/25 transition-transform hover:-translate-y-0.5 hover:bg-indigo-400">
                  Shorten URL
                  <ArrowRight className="ml-2 size-5" aria-hidden="true" />
                </Button>
              </div>

              <div className="mt-5 rounded-lg border border-emerald-400/20 bg-emerald-400/10 p-4">
                <div className="mb-3 flex flex-wrap items-center gap-2 text-sm font-medium text-emerald-200">
                  <CheckCircle2 className="size-4" aria-hidden="true" />
                  Success. Your link is ready to share.
                </div>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Snippet
                    codeString="https://shortin.co/xyz123"
                    hideSymbol
                    classNames={{
                      base: "min-h-12 flex-1 border border-white/10 bg-slate-950/80 text-slate-100",
                      pre: "text-sm sm:text-base",
                      copyButton: "text-indigo-100",
                    }}
                    copyIcon={<Copy className="size-4" aria-hidden="true" />}
                  >
                    https://shortin.co/xyz123
                  </Snippet>
                  <Tooltip delay={300}>
                    <Button className="h-12 border border-white/10 bg-white/5 text-slate-100 transition-colors hover:border-emerald-300/40 hover:bg-emerald-400/10">
                      <QrCode className="mr-2 size-5" aria-hidden="true" />
                      QR Code
                    </Button>
                    <Tooltip.Content className="border border-white/10 bg-slate-950 text-slate-100">
                      Generate campaign QR
                    </Tooltip.Content>
                  </Tooltip>
                </div>
              </div>
            </Card.Content>
          </Card>
        </section>

        <section
          id="features"
          className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
        >
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-300">
                Features
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-normal text-white sm:text-4xl">
                Links that work harder after every click.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-slate-400">
              ShortIn combines durable redirect performance with the campaign
              intelligence teams need to measure, optimize, and scale.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Card
                key={feature.title}
                className="group border border-white/10 bg-white/[0.05] backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-indigo-300/35 hover:bg-white/[0.08]"
              >
                <Card.Content className="flex min-h-72 flex-col justify-between p-6">
                  <div>
                    <div
                      className={`mb-5 flex size-12 items-center justify-center rounded-lg border border-white/10 bg-slate-950/70 ${feature.accent}`}
                    >
                      <feature.icon className="size-6" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      {feature.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-slate-400">
                      {feature.description}
                    </p>
                  </div>

                  {index === 1 ? (
                    <div className="mt-6 space-y-4 rounded-lg border border-white/10 bg-slate-950/55 p-4">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-300">Campaign lift</span>
                        <span className="font-semibold text-emerald-300">
                          +38%
                        </span>
                      </div>
                      <ProgressBar
                        aria-label="Campaign lift"
                        value={78}
                        className="h-2 overflow-hidden rounded-full bg-slate-800"
                      >
                        <ProgressBar.Track className="h-2 rounded-full bg-slate-800">
                          <ProgressBar.Fill className="h-full rounded-full bg-cyan-300" />
                        </ProgressBar.Track>
                      </ProgressBar>
                      <div className="grid grid-cols-5 items-end gap-2 pt-2">
                        {[34, 62, 45, 80, 68].map((height) => (
                          <span
                            key={height}
                            className="rounded-t bg-indigo-400/70"
                            style={{ height }}
                          />
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="mt-6 flex items-center gap-2 text-sm font-medium text-indigo-200">
                      <ShieldCheck className="size-4" aria-hidden="true" />
                      Enterprise-ready controls
                    </div>
                  )}
                </Card.Content>
              </Card>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid overflow-hidden rounded-lg border border-white/10 bg-white/[0.05] backdrop-blur md:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="border-b border-white/10 p-8 text-center last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0"
              >
                <p className="text-4xl font-semibold tracking-normal text-white">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm uppercase tracking-[0.16em] text-slate-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="pricing"
          className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
        >
          <div className="rounded-lg border border-indigo-300/20 bg-indigo-400/10 p-6 backdrop-blur sm:p-8">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-200">
                  Pricing
                </p>
                <h2 className="mt-3 text-3xl font-semibold text-white">
                  Start free, scale into branded domains and team analytics.
                </h2>
              </div>
              <Button className="h-12 bg-white px-6 font-semibold text-slate-950 transition-transform hover:-translate-y-0.5">
                View Plans
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer
        id="api-docs"
        className="relative border-t border-white/10 bg-slate-950/60"
      >
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-4 lg:px-8">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-lg border border-indigo-400/30 bg-indigo-500/15 text-indigo-200">
                <Link2 className="size-5" aria-hidden="true" />
              </span>
              <span className="text-lg font-semibold text-white">ShortIn</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-6 text-slate-400">
              Secure short links, branded campaigns, and analytics your growth
              team can trust.
            </p>
            <div className="mt-5 flex gap-3">
              {socialLinks.map(({ label, icon: Icon }) => (
                <Button
                  key={label}
                  isIconOnly
                  aria-label={label}
                  className="size-10 border border-white/10 bg-white/5 text-slate-300 transition-colors hover:border-indigo-300/35 hover:text-white"
                >
                  <Icon className="size-4" aria-hidden="true" />
                </Button>
              ))}
            </div>
          </div>

          {footerGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-200">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#top"
                      className="text-sm text-slate-400 transition-colors hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-white/10 px-4 py-5 text-center text-sm text-slate-500">
          Copyright 2026 ShortIn. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
