import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export interface PostFrontmatter {
  title: string;
  date: string;
  author: string;
  excerpt: string;
  order?: number;
}

export interface Post extends PostFrontmatter {
  slug: string;
  content: string;
}

export interface PostMeta extends PostFrontmatter {
  slug: string;
}

// Get all post slugs for static generation
export function getPostSlugs(): string[] {
  try {
    const files = fs.readdirSync(postsDirectory);
    return files
      .filter((file) => file.endsWith('.mdx'))
      .map((file) => file.replace(/\.mdx$/, ''));
  } catch {
    return [];
  }
}

// Get a single post by slug
export function getPostBySlug(slug: string): Post | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || 'Untitled',
      date: data.date || '',
      author: data.author || 'Anonymous',
      excerpt: data.excerpt || '',
      order: data.order,
      content,
    };
  } catch {
    return null;
  }
}

// Get all posts sorted by date
export function getAllPosts(): PostMeta[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => {
      const post = getPostBySlug(slug);
      if (!post) return null;
      return {
        slug: post.slug,
        title: post.title,
        date: post.date,
        author: post.author,
        excerpt: post.excerpt,
        order: post.order,
      };
    })
    .filter((post): post is NonNullable<typeof post> => post !== null) as PostMeta[];

  // Sort by order field (ascending), falling back to date descending for posts without order
  return posts.sort((a, b) => {
    // Posts with order come first, sorted by order ascending
    if (a.order !== undefined && b.order !== undefined) {
      return a.order - b.order;
    }
    // Posts with order come before posts without
    if (a.order !== undefined) return -1;
    if (b.order !== undefined) return 1;
    // Fall back to date descending for posts without order
    if (!a.date || !b.date) return 0;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

// Format date for display
export function formatDate(dateString: string): string {
  if (!dateString) return '';
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

