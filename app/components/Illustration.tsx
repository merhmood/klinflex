// Original line illustrations, one per service. Shared language: navy field,
// steel linework, a single flare-orange accent, and seabed contours behind.
const STEEL = "#8ea0b4";
const FLARE = "#e8590c";
const LINE = "#1b2a40";

function Backdrop({ seed = 0 }: { seed?: number }) {
  const rows = Array.from({ length: 9 }, (_, i) => {
    const y = 60 + i * 52;
    const a = 14 + ((i + seed) % 3) * 6;
    return `M0 ${y} C 160 ${y - a}, 300 ${y + a}, 440 ${y} S 700 ${y - a}, 800 ${y + a / 2}`;
  });
  return (
    <>
      <rect width="800" height="500" fill="#0a1424" />
      {rows.map((d, i) => (
        <path key={i} d={d} stroke={LINE} strokeWidth="1.2" fill="none" />
      ))}
    </>
  );
}

function Waves({ y }: { y: number }) {
  return (
    <g stroke={STEEL} strokeWidth="1.5" fill="none" strokeLinecap="round">
      <path d={`M0 ${y} q 25 -9 50 0 t 50 0 t 50 0 t 50 0 t 50 0 t 50 0 t 50 0 t 50 0 t 50 0 t 50 0 t 50 0 t 50 0 t 50 0 t 50 0 t 50 0 t 50 0`} />
      <path opacity=".45" d={`M0 ${y + 18} q 25 -9 50 0 t 50 0 t 50 0 t 50 0 t 50 0 t 50 0 t 50 0 t 50 0 t 50 0 t 50 0 t 50 0 t 50 0 t 50 0 t 50 0 t 50 0 t 50 0`} />
      <path opacity=".2" d={`M0 ${y + 38} q 25 -9 50 0 t 50 0 t 50 0 t 50 0 t 50 0 t 50 0 t 50 0 t 50 0 t 50 0 t 50 0 t 50 0 t 50 0 t 50 0 t 50 0 t 50 0 t 50 0`} />
    </g>
  );
}

function Marine() {
  return (
    <>
      <Backdrop seed={0} />
      <g stroke={STEEL} strokeWidth="2.5" fill="none" strokeLinejoin="round" strokeLinecap="round">
        {/* hull */}
        <path d="M130 300 H650 L600 352 H215 Z" />
        <path d="M150 322 H628" stroke={FLARE} strokeWidth="3" />
        {/* bridge */}
        <path d="M170 300 V232 H300 V300" />
        <path d="M170 258 H300" />
        <path d="M190 245 h20 M225 245 h20 M260 245 h20" strokeWidth="5" />
        <path d="M235 232 V196 M215 214 H255" />
        {/* open aft deck with cargo */}
        <rect x="360" y="262" width="70" height="38" />
        <rect x="440" y="276" width="60" height="24" />
        <rect x="510" y="256" width="80" height="44" />
        {/* crane */}
        <path d="M600 300 V210 L520 150" />
        <path d="M520 150 V230" strokeDasharray="3 6" />
      </g>
      <Waves y={356} />
    </>
  );
}

function Rov() {
  return (
    <>
      <Backdrop seed={1} />
      {/* surface vessel */}
      <g stroke={STEEL} strokeWidth="2.2" fill="none" strokeLinejoin="round">
        <path d="M90 110 H250 L232 134 H112 Z" />
        <path d="M120 110 V86 H165 V110" />
      </g>
      <path d="M30 136 q 25 -8 50 0 t 50 0 t 50 0 t 50 0 t 50 0 t 50 0" stroke={STEEL} strokeWidth="1.5" fill="none" />
      {/* tether */}
      <path d="M220 134 C 330 190, 250 300, 430 330" stroke={FLARE} strokeWidth="2" fill="none" strokeDasharray="2 6" />
      {/* seabed */}
      <path d="M0 410 C 150 380, 260 430, 400 405 S 650 380, 800 420 V500 H0 Z" fill="#06101d" stroke={STEEL} strokeWidth="1.5" />
      {/* pipeline */}
      <rect x="40" y="404" width="720" height="16" rx="8" fill="none" stroke={STEEL} strokeWidth="2" />
      <path d="M200 404 v16 M400 404 v16 M600 404 v16" stroke={STEEL} strokeWidth="2" />
      {/* ROV */}
      <g stroke={STEEL} strokeWidth="2.5" fill="#0a1424" strokeLinejoin="round">
        <path d="M410 336 L560 330" stroke="none" />
        <rect x="430" y="318" width="130" height="50" rx="10" />
        <rect x="448" y="304" width="94" height="16" rx="5" />
        <circle cx="448" cy="372" r="11" />
        <circle cx="542" cy="372" r="11" />
        <path d="M560 340 L600 322 M560 352 L604 360" />
        <circle cx="440" cy="343" r="6" fill={FLARE} stroke="none" />
      </g>
      <path d="M440 343 L330 300 L330 390 Z" fill={FLARE} opacity=".12" />
    </>
  );
}

function Epci() {
  return (
    <>
      <Backdrop seed={2} />
      <g stroke={STEEL} strokeWidth="2.5" fill="none" strokeLinejoin="round" strokeLinecap="round">
        {/* flare boom */}
        <path d="M600 200 L690 120" />
        <path d="M690 120 q 6 -22 -4 -34 q 18 12 14 34 z" fill={FLARE} stroke="none" />
        {/* deck */}
        <rect x="230" y="190" width="400" height="26" />
        <rect x="260" y="140" width="120" height="50" />
        <rect x="400" y="160" width="80" height="30" />
        <path d="M300 140 V96 M280 112 H322" />
        <path d="M520 190 V120 L470 100" />
        {/* jacket legs */}
        <path d="M262 216 L232 360 M598 216 L628 360 M330 216 L318 360 M530 216 L542 360" />
        <path d="M250 270 H610 M240 320 H620" />
        <path d="M262 216 L542 270 M598 216 L318 270 M250 270 L542 320 M610 270 L318 320" opacity=".55" strokeWidth="1.6" />
      </g>
      <Waves y={346} />
    </>
  );
}

function Manpower() {
  const person = (cx: number, hat: string, h = 0) => (
    <g key={cx} stroke={STEEL} strokeWidth="2.5" fill="#0a1424" strokeLinejoin="round">
      <path d={`M${cx - 26} ${210 + h} a 26 24 0 0 1 52 0 z`} fill={hat} stroke={hat === "none" ? STEEL : hat} />
      <path d={`M${cx - 32} ${212 + h} h64`} />
      <circle cx={cx} cy={236 + h} r="20" />
      <path d={`M${cx - 52} ${380 + h} V ${300 + h} a 30 30 0 0 1 30 -30 h44 a 30 30 0 0 1 30 30 V${380 + h}`} />
      <path d={`M${cx - 20} ${278 + h} V${380 + h} M${cx + 20} ${278 + h} V${380 + h}`} stroke={FLARE} strokeWidth="3" />
    </g>
  );
  return (
    <>
      <Backdrop seed={0} />
      <path d="M0 380 H800" stroke={STEEL} strokeWidth="1.5" />
      {person(250, "#0a1424", 10)}
      {person(400, FLARE)}
      {person(550, "#0a1424", 10)}
      <path d="M120 120 L160 60 M680 120 L640 60 M120 60 H160 M640 60 H680" stroke={LINE} strokeWidth="2" />
    </>
  );
}

function Tenders() {
  return (
    <>
      <Backdrop seed={1} />
      <g stroke={STEEL} strokeWidth="2.5" fill="#0a1424" strokeLinejoin="round" strokeLinecap="round">
        <rect x="290" y="96" width="250" height="320" rx="6" transform="rotate(7 415 256)" />
        <rect x="262" y="86" width="250" height="320" rx="6" transform="rotate(-4 387 246)" />
        <rect x="300" y="70" width="250" height="330" rx="6" />
        <g fill="none">
          <path d="M335 120 H470" strokeWidth="5" />
          <path d="M335 160 H510 M335 188 H510 M335 216 H490 M335 244 H510 M335 272 H460" opacity=".6" />
          <rect x="335" y="300" width="80" height="50" />
        </g>
        <circle cx="500" cy="340" r="38" fill="#0a1424" stroke={FLARE} strokeWidth="3" />
        <path d="M482 340 l14 14 l24 -28" stroke={FLARE} strokeWidth="5" fill="none" />
      </g>
    </>
  );
}

function Compliance() {
  return (
    <>
      <Backdrop seed={2} />
      <g stroke={STEEL} strokeWidth="2.5" fill="#0a1424" strokeLinejoin="round" strokeLinecap="round">
        <path d="M400 70 L540 120 V240 C540 320 480 370 400 410 C320 370 260 320 260 240 V120 Z" />
        <path d="M400 100 L510 140 V240 C510 300 465 340 400 374 C335 340 290 300 290 240 V140 Z" opacity=".4" fill="none" />
        <path d="M345 236 l40 40 l78 -88" stroke={FLARE} strokeWidth="9" fill="none" />
        {/* certificate cards */}
        <g fill="#0a1424">
          <rect x="90" y="150" width="120" height="80" rx="6" />
          <rect x="590" y="130" width="120" height="80" rx="6" />
          <rect x="110" y="290" width="120" height="80" rx="6" />
          <rect x="570" y="280" width="120" height="80" rx="6" />
        </g>
        <g opacity=".6" fill="none">
          <path d="M108 176 h60 M108 196 h84 M108 212 h40" />
          <path d="M608 156 h60 M608 176 h84 M608 192 h40" />
          <path d="M128 316 h60 M128 336 h84 M128 352 h40" />
          <path d="M588 306 h60 M588 326 h84 M588 342 h40" />
        </g>
      </g>
    </>
  );
}

const art = {
  marine: Marine,
  rov: Rov,
  epci: Epci,
  manpower: Manpower,
  tenders: Tenders,
  compliance: Compliance,
} as const;

export type ArtId = keyof typeof art;
export const artIds = Object.keys(art) as ArtId[];

export default function Illustration({ id }: { id: ArtId }) {
  const Art = art[id];
  return (
    <svg
      viewBox="0 0 800 500"
      preserveAspectRatio="xMidYMid slice"
      className="h-full w-full"
      role="img"
      aria-label={`Illustration: ${id}`}
    >
      <Art />
    </svg>
  );
}
