import Image from "next/image";

// Logo mark plus wordmark. The mark is 404x475; height drives the size.
export default function Brand({ size = "md" }: { size?: "md" | "lg" }) {
  const lg = size === "lg";
  return (
    <span className="inline-flex items-center gap-2.5">
      <Image
        src="/logo.png"
        alt=""
        width={404}
        height={475}
        priority={!lg}
        className={lg ? "h-11 w-auto" : "h-8 w-auto"}
      />
      <span
        className={`${lg ? "text-2xl" : "text-lg"} font-semibold tracking-tight`}
      >
        Klinflex<span className="text-flare"> Oil</span>
      </span>
    </span>
  );
}
