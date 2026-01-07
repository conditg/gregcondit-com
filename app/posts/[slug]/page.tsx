import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getPostBySlug, getPostSlugs, formatDate } from '@/lib/posts';
import MDXComponents from '@/components/MDXComponents';

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }
  
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
    },
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  
  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-content mx-auto px-page-x py-section">
      {/* Post Header */}
      <header className="mb-12">
        <h1 className="text-h1 font-bold mb-4 text-content-text">{post.title}</h1>
        <p className="text-content-muted text-small">
          {formatDate(post.date)} <span className="mx-2">|</span> {post.author}
        </p>
      </header>

      {/* Post Content */}
      <div className="prose">
        <MDXRemote source={post.content} components={MDXComponents} />
      </div>

      {/* Back Link */}
      <div className="mt-16 pt-8 border-t border-content-border">
        <Link
          href="/writing"
          className="text-content-text hover:opacity-70 transition-opacity inline-flex items-center gap-2"
        >
          <span aria-hidden="true">←</span> View all posts
        </Link>
      </div>
    </article>
  );
}
