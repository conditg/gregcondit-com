'use client';

import { useState, useCallback } from 'react';

// Email parts are split to prevent scraper detection
const USER = 'conditg';
const DOMAIN = 'gmail';
const TLD = 'com';

export default function ObfuscatedEmail() {
  const [revealed, setRevealed] = useState(false);
  const [copied, setCopied] = useState(false);

  const getEmail = useCallback(() => {
    return `${USER}@${DOMAIN}.${TLD}`;
  }, []);

  const handleReveal = useCallback(() => {
    setRevealed(true);
  }, []);

  const handleCopy = useCallback(async () => {
    const email = getEmail();
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = email;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [getEmail]);

  if (!revealed) {
    return (
      <button
        onClick={handleReveal}
        className="inline-flex items-center gap-2 text-content-text hover:opacity-70 transition-opacity text-left"
        aria-label="Reveal email address"
      >
        <span className="font-mono">{USER} [at] {DOMAIN}</span>
        <span className="text-content-muted text-sm">(click to reveal)</span>
      </button>
    );
  }

  const email = getEmail();

  return (
    <span className="inline-flex items-center gap-3">
      <a
        href={`mailto:${email}`}
        className="font-mono text-content-text hover:opacity-70 transition-opacity"
      >
        {email}
      </a>
      <button
        onClick={handleCopy}
        className="text-content-muted hover:text-content-text transition-colors p-1"
        aria-label={copied ? 'Copied!' : 'Copy email address'}
        title={copied ? 'Copied!' : 'Copy to clipboard'}
      >
        {copied ? (
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M5 13l4 4L19 7"
            />
          </svg>
        ) : (
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
        )}
      </button>
    </span>
  );
}
