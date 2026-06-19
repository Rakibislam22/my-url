import { BarChart3, Link2, LockKeyhole, QrCode, Zap } from "lucide-react";
import Link from "next/link";
import { ShortenerForm } from "./shortener-form";

const features = [
  {
    title: "Fast redirects",
    description:
      "Route visitors through short, memorable links with a clean destination experience.",
    icon: Zap,
  },
  {
    title: "Useful analytics",
    description:
      "See clicks, sources, devices, and campaign performance without digging through noise.",
    icon: BarChart3,
  },
  {
    title: "Secure sharing",
    description:
      "Keep branded links tidy with aliases, QR codes, and safer link management.",
    icon: LockKeyhole,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
        <Link href="/" className="flex items-center gap-3 font-semibold">
          <span className="grid size-10 place-items-center rounded-lg bg-indigo-500 text-white">
            <Link2 className="size-5" aria-hidden="true" />
          </span>
          <span className="text-lg">ShortIn</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-slate-300 sm:flex">
          <a className="transition hover:text-white" href="#features">
            Features
          </a>
        </nav>
      </header>

      <section className="mx-auto grid w-full max-w-6xl items-center gap-12 px-6 py-16 lg:grid-cols-[1fr_420px] lg:py-24">
        <div>
          <p className="mb-4 inline-flex rounded-full border border-indigo-400/30 bg-indigo-400/10 px-4 py-2 text-sm font-medium text-indigo-200">
            Premium URL shortener for modern teams
          </p>
          <h1 className="max-w-3xl text-5xl font-bold leading-tight tracking-normal text-white sm:text-6xl">
            Shorten links and make every click easier to track.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Create clean short URLs, branded campaign links, and QR-ready shares
            from one simple dashboard.
          </p>

          <ShortenerForm />
        </div>

        <aside className="rounded-2xl border border-white/10 bg-white/10 p-6 shadow-2xl shadow-indigo-950/40">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-400">Your short link</p>
              <p className="mt-1 text-xl font-semibold">short.in/launch</p>
            </div>
            <span className="grid size-12 place-items-center rounded-lg bg-emerald-400/15 text-emerald-300">
              <QrCode className="size-6" aria-hidden="true" />
            </span>
          </div>

          <div className="space-y-3 rounded-xl bg-slate-950 p-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-400">Total clicks</span>
              <span className="font-semibold text-white">24,891</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-slate-800">
              <div className="h-full w-4/5 rounded-full bg-indigo-400" />
            </div>
            <div className="grid grid-cols-3 gap-3 pt-3 text-center">
              <div className="rounded-lg bg-white/5 p-3">
                <p className="text-lg font-semibold">8.2k</p>
                <p className="text-xs text-slate-500">Social</p>
              </div>
              <div className="rounded-lg bg-white/5 p-3">
                <p className="text-lg font-semibold">6.4k</p>
                <p className="text-xs text-slate-500">Email</p>
              </div>
              <div className="rounded-lg bg-white/5 p-3">
                <p className="text-lg font-semibold">3.1k</p>
                <p className="text-xs text-slate-500">QR</p>
              </div>
            </div>
          </div>
        </aside>
      </section>

      <section id="features" className="mx-auto w-full max-w-6xl px-6 pb-20">
        <div className="grid gap-4 md:grid-cols-3">
          {features.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="rounded-xl border border-white/10 bg-white/[0.06] p-6"
            >
              <Icon
                className="mb-5 size-8 text-indigo-300"
                aria-hidden="true"
              />
              <h2 className="text-xl font-semibold">{title}</h2>
              <p className="mt-3 leading-7 text-slate-400">{description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
