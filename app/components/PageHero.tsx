import Image from "next/image";
import ContourField from "./ContourField";
import { hasPhoto } from "@/lib/photos";

export default function PageHero({
  title,
  lead,
  image,
  children,
}: {
  title: string;
  lead: string;
  /** id of a photo in public/images; falls back to the contour field */
  image?: string;
  children?: React.ReactNode;
}) {
  const photo = image && hasPhoto(image);
  return (
    <section className="relative overflow-hidden border-b border-line pb-20 pt-40 md:pb-28 md:pt-52">
      {photo ? (
        <div aria-hidden className="absolute inset-0">
          <Image
            src={`/images/${image}.jpg`}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-abyss/65" />
          <div className="absolute inset-0 bg-gradient-to-t from-abyss via-abyss/30 to-abyss/60" />
        </div>
      ) : (
        <ContourField />
      )}
      <div className="relative mx-auto w-full max-w-[1400px] px-5 md:px-10">
        <h1 className="display max-w-5xl text-[clamp(2.5rem,6.5vw,6rem)]">{title}</h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-bone/80 md:text-xl">{lead}</p>
        {children}
      </div>
    </section>
  );
}
