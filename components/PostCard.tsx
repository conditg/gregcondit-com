import Link from 'next/link';

interface PostCardProps {
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  subtitle?: string;
}

export default function PostCard({
  slug,
  title,
  date,
  author,
  excerpt,
  subtitle,
}: PostCardProps) {
  return (
    <article className="py-10 first:pt-0 border-b border-content-border last:border-b-0">
      {/* Title */}
      <h2 className="text-h2 font-bold mb-3">
        <Link
          href={`/posts/${slug}`}
          className="text-content-text hover:opacity-70 transition-opacity"
        >
          {title}
        </Link>
      </h2>

      {/* Meta */}
      <p className="text-content-muted text-small mb-4">
        {date} <span className="mx-2">|</span> {author}
      </p>

      {/* Subtitle or Excerpt */}
      <p className="text-content-muted italic mb-4 leading-relaxed">
        {subtitle || excerpt}
      </p>

      {/* Continue reading link */}
      <Link
        href={`/posts/${slug}`}
        className="text-content-text hover:opacity-70 transition-opacity inline-flex items-center gap-1"
      >
        Continue reading <span aria-hidden="true">→</span>
      </Link>
    </article>
  );
}
