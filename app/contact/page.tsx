import type { Metadata } from 'next';
import Sidebar from '@/components/Sidebar';
import ObfuscatedEmail from '@/components/ObfuscatedEmail';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Greg Condit',
};

export default function ContactPage() {
  return (
    <div className="max-w-content mx-auto px-page-x py-section">
      <div className="flex flex-col-reverse md:flex-row gap-12">
        {/* Main Content */}
        <div className="md:w-3/4">
          <h1 className="text-h1 font-semibold mb-8 text-content-text tracking-tight">Get in touch</h1>
          
          <div className="space-y-6 text-lg leading-relaxed text-content-text">
            {/* Email */}
            <div className="flex items-start gap-4 p-6 border border-content-border hover:border-content-muted transition-colors">
              <svg
                className="w-7 h-7 flex-shrink-0 mt-0.5 text-content-text"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <div>
                <h2 className="text-xl font-semibold mb-1 text-content-text">Email</h2>
                <p className="text-content-muted mb-3">
                  For pricing and inquiries.
                </p>
                <ObfuscatedEmail />
              </div>
            </div>

            {/* LinkedIn */}
            <div className="flex items-start gap-4 p-6 border border-content-border hover:border-content-muted transition-colors">
              <svg
                className="w-7 h-7 flex-shrink-0 mt-0.5 text-content-text"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <div>
                <h2 className="text-xl font-semibold mb-1 text-content-text">LinkedIn</h2>
                <p className="text-content-muted mb-3">
                  Follow for routine posts about AI with good taste.
                </p>
                <a
                  href="https://www.linkedin.com/in/gregcondit/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-content-text hover:opacity-70 transition-opacity"
                >
                  Follow on LinkedIn <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
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
