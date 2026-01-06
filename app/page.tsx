import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="max-w-content mx-auto px-page-x py-section">
      {/* Value Proposition */}
      <header className="mb-16">
        <h1 className="text-h1 font-semibold mb-8 text-content-text leading-tight tracking-tight">
          AI is powerful. Power without <strong className="font-bold">judgment</strong> is expensive chaos.
        </h1>
        <p className="text-xl leading-relaxed bg-header-bg text-header-logo px-6 py-5 -mx-6">
          I help companies bring a human sense of <strong className="font-semibold">taste</strong> back to the center of their AI strategy. Then, I connect them with people who build it right.
        </p>
      </header>

      {/* Positioning Statement */}
      <div className="mb-16 space-y-7">
        <p className="text-lg leading-relaxed text-content-text">
          Corporate AI Strategy has a problem. The people directing it have been trained to optimize spreadsheets, not to notice what matters.
        </p>
        <p className="text-lg leading-relaxed text-content-text">
          They don&apos;t have <strong className="font-semibold">good taste</strong>. A sense of taste is rooted in the accumulated wisdom of a life: relationships, failures, convictions, and the beautiful complexity of a human brain that senses things intuitively before it can explain them. It&apos;s what tells you <em>this feels wrong</em> (before the data catches up).
        </p>
        <p className="text-lg leading-relaxed text-content-text">
          AI can&apos;t have that. Increasingly, neither do the companies deploying it, because they&apos;ve promoted people who&apos;ve never been asked to trust anything but metrics.
        </p>
        <p className="text-lg leading-relaxed text-content-text">
          I work with leaders who sense that <strong className="font-semibold">something&apos;s missing</strong>. Who want AI that actually serves humans, not just impresses stakeholders.
        </p>
      </div>

      {/* Service Bullets */}
      <div className="mb-16 py-10 border-t border-b border-content-border">
        <p className="text-sm uppercase tracking-wide text-content-muted mb-6">What I offer</p>
        <ul className="space-y-4 text-lg text-content-text">
          <li>
            <Link href="/how-i-work" className="group flex items-center gap-3 hover:opacity-65 transition-opacity">
              <span className="text-content-muted group-hover:translate-x-1 transition-transform">→</span>
              <span>Strategy Sessions for executives making AI decisions</span>
            </Link>
          </li>
          <li>
            <Link href="/how-i-work" className="group flex items-center gap-3 hover:opacity-65 transition-opacity">
              <span className="text-content-muted group-hover:translate-x-1 transition-transform">→</span>
              <span>Partner Matching to the best implementation teams</span>
            </Link>
          </li>
        </ul>
      </div>

      {/* CTA */}
      <div>
        <Link
          href="/contact"
          className="inline-block bg-content-text text-content-bg px-8 py-4 font-semibold rounded-sm hover:opacity-90 transition-opacity text-lg tracking-tight"
        >
          Let&apos;s talk
        </Link>
      </div>
    </div>
  );
}
