import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How I Work',
  description: 'AI strategy advisory and partner matching for leaders making real decisions.',
};

export default function HowIWorkPage() {
  return (
    <div className="max-w-content mx-auto px-page-x py-section">
      {/* Header */}
      <header className="mb-16">
        <h1 className="text-h1 font-semibold mb-8 text-content-text leading-tight tracking-tight">
          How I Work
        </h1>
        <div className="text-xl leading-relaxed bg-header-bg text-header-logo px-6 py-5 -mx-6 text-center">
          <p>AI implementation can be outsourced.</p>
          <p>Your Judgment about &apos;what to build&apos; can&apos;t.</p>
        </div>
      </header>

      {/* Intro */}
      <div className="mb-16 space-y-7">
        <p className="text-lg leading-relaxed text-content-text">
          I work with leaders at the moment before the build, which is when the real decisions get made. What&apos;s worth automating? More importantly, what needs to stay human?
        </p>
        <p className="text-lg leading-relaxed text-content-text">
          These questions get answered in strategic conversations with your team, and domain experts who&apos;ve seen enough to know what good looks like.
        </p>
      </div>

      {/* Services */}
      <div className="grid gap-6 mb-16">
        {/* Strategy Sessions */}
        <div className="border border-content-border p-8">
          <h2 className="text-xl font-semibold mb-4 text-content-text tracking-tight">Strategy Sessions</h2>
          <p className="text-content-text leading-relaxed">
            For executives making AI decisions with real stakes. We work through your specific situation with clear thinking about what you&apos;re actually facing.
          </p>
        </div>

        {/* Partner Matching */}
        <div className="border border-content-border p-8">
          <h2 className="text-xl font-semibold mb-4 text-content-text tracking-tight">Partner Matching</h2>
          <p className="text-content-text leading-relaxed">
            I&apos;ve built relationships with implementation teams I trust. When there&apos;s a fit, I make the introduction and help you start the engagement right and aligned on what success actually means.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div>
        <Link
          href="/contact"
          className="inline-block bg-header-bg text-header-logo px-8 py-4 font-semibold rounded-sm hover:opacity-90 transition-opacity text-lg tracking-tight"
        >
          Let&apos;s talk →
        </Link>
      </div>
    </div>
  );
}
