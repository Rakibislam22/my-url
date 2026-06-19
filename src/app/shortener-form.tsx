"use client";

import { FormEvent, useState } from "react";
import { ArrowRight } from "lucide-react";

function normalizeUrl(value: string) {
  const trimmed = value.trim();
  const withProtocol = /^https?:\/\//i.test(trimmed)
    ? trimmed
    : `https://${trimmed}`;

  return new URL(withProtocol).href;
}

function createShortLink(url: string) {
  let hash = 0;

  for (let index = 0; index < url.length; index += 1) {
    hash = (hash * 31 + url.charCodeAt(index)) >>> 0;
  }

  return `https://short.in/${hash.toString(36).padStart(6, "0").slice(0, 6)}`;
}

export function ShortenerForm() {
  const [url, setUrl] = useState("");
  const [shortLink, setShortLink] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      const normalizedUrl = normalizeUrl(url);

      setShortLink(createShortLink(normalizedUrl));
      setError("");
    } catch {
      setError("Enter a valid URL to shorten.");
    }
  }

  return (
    <div className="mt-8 max-w-2xl">
      <form
        className="flex flex-col gap-3 rounded-xl border border-white/10 bg-white/10 p-3 shadow-2xl shadow-indigo-950/40 sm:flex-row"
        onSubmit={handleSubmit}
      >
        <label className="sr-only" htmlFor="url">
          Long URL
        </label>
        <div className="flex-1">
          <input
            id="url"
            type="url"
            value={url}
            onChange={(event) => setUrl(event.target.value)}
            placeholder="Paste your long URL"
            required
            className="min-h-12 w-full rounded-lg border border-white/10 bg-slate-950 px-4 text-base text-white outline-none transition placeholder:text-slate-500 focus:border-indigo-300"
          />
          {error ? (
            <p className="mt-2 text-sm font-medium text-red-300">{error}</p>
          ) : null}
        </div>
        <button
          type="submit"
          className="inline-flex min-h-12 items-center justify-center rounded-lg bg-indigo-500 px-5 font-semibold text-white transition hover:bg-indigo-400"
        >
          Shorten
          <ArrowRight className="ml-2 size-5" aria-hidden="true" />
        </button>
      </form>

      {shortLink ? (
        <div className="mt-4 rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
          <p className="text-sm font-medium text-emerald-200">
            Short link generated
          </p>
          <p className="mt-1 break-all text-lg font-semibold text-white">
            {shortLink}
          </p>
        </div>
      ) : null}
    </div>
  );
}
