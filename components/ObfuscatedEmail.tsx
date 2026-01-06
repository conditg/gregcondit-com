'use client';

import { useState, useCallback } from 'react';

// Email parts are split to prevent scraper detection
const USER = 'conditg';
const DOMAIN = 'gmail';
const TLD = 'com';

export default function ObfuscatedEmail() {
  const [revealed, setRevealed] = useState(false);

  const handleClick = useCallback(() => {
    if (!revealed) {
      setRevealed(true);
    } else {
      // Construct email on click to avoid having it in the HTML
      const email = `${USER}@${DOMAIN}.${TLD}`;
      window.location.href = `mailto:${email}`;
    }
  }, [revealed]);

  // Display obfuscated version until clicked
  const displayText = revealed
    ? `${USER}@${DOMAIN}.${TLD}`
    : `${USER} [at] ${DOMAIN} [dot] ${TLD}`;

  return (
    <button
      onClick={handleClick}
      className="inline-flex items-center gap-2 text-content-text hover:opacity-70 transition-opacity text-left"
      aria-label={revealed ? 'Send email' : 'Reveal email address'}
    >
      <span className="font-mono">{displayText}</span>
      {revealed ? (
        <span aria-hidden="true">→</span>
      ) : (
        <span className="text-content-muted text-sm">(click to reveal)</span>
      )}
    </button>
  );
}
