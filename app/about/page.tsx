import type { Metadata } from 'next';
import Link from 'next/link';
import Sidebar from '@/components/Sidebar';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn more about Greg Condit - AI strategy advisor',
};

export default function AboutPage() {
  return (
    <div className="max-w-content mx-auto px-page-x py-section">
      <div className="flex flex-col-reverse md:flex-row gap-12">
        {/* Main Content */}
        <div className="md:w-3/4">
          <h1 className="text-h1 font-bold mb-8 text-content-text">About</h1>
          
          <div className="prose space-y-6 text-content-text">
            {/* Professional Positioning */}
            <p>
              I&apos;ve spent over a decade building products, leading teams, and watching 
              companies repeatedly misunderstand what technology can and can&apos;t do.
            </p>
            
            <p>
              Now I focus on the hardest part of AI adoption: knowing when human judgment 
              is the product, not the obstacle. I help executives cut through the hype, 
              make grounded decisions, and connect with the right people to execute.
            </p>

            <p>
              My background spans data science, machine learning, and product strategy 
              across startups and large enterprises. I&apos;ve seen what works, what doesn&apos;t, 
              and (more importantly) why.
            </p>

            {/* Personal */}
            <hr className="my-8 border-content-border" />

            <p>
              Outside work, I live in beautiful North Carolina. I spend a lot 
              of time outside with my wife and girls, gardening, hiking, or 
              trail running through the forest. In general, my philosophy tends 
              towards traditional family values and local community living.
            </p>
            
            <p>
              Sometimes, this collision of hi-tech and neo-luddite living 
              results in interesting ideas, and I try to record them in my <Link href="/writing" className="underline underline-offset-2">essays</Link> for my kids to read later.
            </p>
          </div>
          
          {/* CTA Button */}
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-block bg-content-text text-content-bg px-6 py-3 font-bold rounded hover:opacity-90 transition-opacity"
            >
              Get in touch
            </Link>
          </div>
        </div>

        {/* Sidebar */}
        <Sidebar
          imageSrc="/images/pfp.png"
          imageAlt="Greg Condit"
        />
      </div>
    </div>
  );
}
