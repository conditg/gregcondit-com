import type { Metadata } from 'next';
import PostCard from '@/components/PostCard';
import { getAllPosts, formatDate } from '@/lib/posts';

export const metadata: Metadata = {
  title: 'Short Essays',
  description: 'Short essays from Greg Condit',
};

export default function WritingPage() {
  const posts = getAllPosts();

  return (
    <div className="max-w-content mx-auto px-page-x py-section">
      {/* Page Header */}
      <header className="mb-12">
        <h1 className="text-h1 font-bold mb-2 text-content-text">Short Essays</h1>
        <p className="text-content-muted italic">0% AI generated</p>
      </header>

      {/* Post List */}
      {posts.length > 0 ? (
        <div className="divide-y divide-content-border">
          {posts.map((post) => (
            <PostCard
              key={post.slug}
              slug={post.slug}
              title={post.title}
              date={formatDate(post.date)}
              author={post.author}
              excerpt={post.excerpt}
            />
          ))}
        </div>
      ) : (
        <p className="text-content-muted">No posts yet. Check back soon!</p>
      )}
    </div>
  );
}

