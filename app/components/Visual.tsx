import Image from "next/image";
import Illustration, { artIds, type ArtId } from "./Illustration";
import { hasPhoto } from "@/lib/photos";

// Photo at public/images/<id>.jpg when present, otherwise the line illustration.
export default function Visual({
  id,
  alt,
  className = "",
  priority = false,
  sizes = "(min-width: 1024px) 50vw, 100vw",
}: {
  id: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <div className={`relative aspect-[8/5] overflow-hidden bg-navy ${className}`}>
      {hasPhoto(id) ? (
        <Image
          src={`/images/${id}.jpg`}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover"
        />
      ) : artIds.includes(id as ArtId) ? (
        <Illustration id={id as ArtId} />
      ) : null}
    </div>
  );
}
