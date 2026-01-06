import Image from 'next/image';
import { MDXComponents as MDXComponentsType } from 'mdx/types';

// Custom components for MDX rendering
export const MDXComponents: MDXComponentsType = {
  // Headings
  h1: ({ children }) => (
    <h1 className="text-h1 font-bold mt-12 mb-6 first:mt-0 text-content-text">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-h2 font-bold mt-10 mb-4 text-content-text">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-xl font-bold mt-8 mb-3 text-content-text">{children}</h3>
  ),
  h4: ({ children }) => (
    <h4 className="text-lg font-bold mt-6 mb-2 text-content-text">{children}</h4>
  ),
  h5: ({ children }) => (
    <h5 className="text-base font-bold mt-4 mb-2 text-content-text">{children}</h5>
  ),
  // H6 is styled as a callout/definition box
  h6: ({ children }) => (
    <div className="border border-content-border p-5 my-8 rounded">
      <p className="font-bold text-base leading-relaxed text-content-text">{children}</p>
    </div>
  ),

  // Paragraphs
  p: ({ children }) => <p className="mb-6 leading-body text-content-text">{children}</p>,

  // Links
  a: ({ href, children }) => {
    const isExternal = href?.startsWith('http');
    return (
      <a
        href={href}
        className="underline underline-offset-2 hover:opacity-70 transition-opacity text-content-text"
        {...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
      >
        {children}
      </a>
    );
  },

  // Lists
  ul: ({ children }) => (
    <ul className="list-disc pl-6 my-6 space-y-3 text-content-text">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal pl-6 my-6 space-y-3 text-content-text">{children}</ol>
  ),
  li: ({ children }) => <li className="leading-relaxed">{children}</li>,

  // Blockquote
  blockquote: ({ children }) => (
    <blockquote className="border-l-[3px] border-content-border pl-5 my-8 italic text-content-muted">
      {children}
    </blockquote>
  ),

  // Code
  code: ({ children }) => (
    <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono text-content-text">
      {children}
    </code>
  ),
  pre: ({ children }) => (
    <pre className="bg-gray-100 p-4 rounded-lg my-6 overflow-x-auto text-sm">
      {children}
    </pre>
  ),

  // Horizontal rule
  hr: () => <hr className="border-t border-content-border my-12" />,

  // Strong and emphasis
  strong: ({ children }) => <strong className="font-bold">{children}</strong>,
  em: ({ children }) => <em className="italic">{children}</em>,

  // Images
  img: ({ src, alt }) => {
    if (!src) return null;
    return (
      <figure className="my-8">
        <Image
          src={src}
          alt={alt || ''}
          width={720}
          height={480}
          className="w-full h-auto rounded"
        />
        {alt && (
          <figcaption className="text-small text-content-muted mt-2 text-center">
            {alt}
          </figcaption>
        )}
      </figure>
    );
  },
};

export default MDXComponents;
