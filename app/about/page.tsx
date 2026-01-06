import type { Metadata } from 'next';
import Link from 'next/link';
import Sidebar from '@/components/Sidebar';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn more about Greg Condit',
};

export default function AboutPage() {
  return (
    <div className="max-w-content mx-auto px-page-x py-section">
      <div className="flex flex-col-reverse md:flex-row gap-12">
        {/* Main Content */}
        <div className="md:w-3/5">
          <h1 className="text-h1 font-bold mb-8 text-content-text">About me</h1>
          
          <div className="prose space-y-6 text-content-text">
            <p>
              Hi! My life is an unconventional collision of two worlds that 
              don&apos;t often overlap.
            </p>
            
            <p>
              I currently work as a consultant implementing cutting edge data 
              science, AI, and machine learning solutions for the world&apos;s 
              top companies and startups.
            </p>
            
            <p>
              Outside work, I live in beautiful North Carolina. I spend a lot 
              of time outside with my wife and girls, gardening, hiking, or 
              trail running through the forest. In general, my philosophy tends 
              towards traditional family values and local community living.
            </p>
            
            <p>
              Sometimes, this collision of hi-tech and neo-luddite living 
              results in interesting ideas, and I try to record them here.
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
