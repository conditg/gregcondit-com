import Image from 'next/image';

interface SidebarProps {
  imageSrc: string;
  imageAlt: string;
  name?: string;
  caption?: string;
}

export default function Sidebar({
  imageSrc,
  imageAlt,
  name,
  caption,
}: SidebarProps) {
  return (
    <aside className="w-full md:w-1/4 md:pl-8">
      <div className="sticky top-8">
        {/* Profile Image */}
        <div className="relative aspect-square w-full max-w-[200px] mx-auto md:mx-0 rounded-lg overflow-hidden">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 280px, 300px"
          />
        </div>

        {/* Name */}
        {name && <h3 className="text-xl font-bold mt-4 mb-2">{name}</h3>}

        {/* Caption */}
        {caption && (
          <p className="text-text-secondary text-small italic">{caption}</p>
        )}
      </div>
    </aside>
  );
}
